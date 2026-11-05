import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { test } from 'node:test';
import vm from 'node:vm';
import ts from 'typescript';

const require = createRequire(import.meta.url);
const valid = { name: 'Test Person', company: 'Test Company', email: 'test@example.com',
  phone: '+2348012345678', serviceInterest: 'CCTV & Surveillance', message: 'Install office cameras please.',
  marketingConsent: true, context: 'contact', turnstileToken: 'test-token' };

// Execute the actual component, schema, queue, API handler and integrations.
// Only React scheduling/browser primitives and external HTTP are substituted.
// This harness does not replace a real-browser hydration/Turnstile smoke test.
function harness({ fetch = async () => Response.json({ ok: true }), available = true,
  consent = 'accepted', env = {} } = {}) {
  const events = [], timers = new Map(), delays = [];
  let now = 0, id = 0, active, cursor = 0;
  const browser = { localStorage: { getItem: () => consent } };
  if (available) browser.gtag = (...args) => events.push(args);
  const jsx = (type, props, key) => ({ type, props: key === undefined ? props : { ...props, key } });
  const react = {
    useCallback(callback, dependencies) {
      const index = cursor++, previous = active.refs[index];
      if (previous && dependencies.every((value, i) => Object.is(value, previous.dependencies[i]))) return previous.callback;
      active.refs[index] = { callback, dependencies };
      return callback;
    },
    useState(initial) {
      const state = active.states, index = cursor++;
      if (!(index in state)) state[index] = initial;
      const setter = active.setters[index] ??= value => { state[index] = typeof value === 'function' ? value(state[index]) : value; };
      return [state[index], setter];
    },
    useRef(initial) { return active.refs[cursor++] ??= { current: initial }; },
    useTransition() {
      const instance = active;
      return [instance.isPending, callback => {
        instance.isPending = true;
        instance.pending = Promise.resolve(callback()).finally(() => { instance.isPending = false; });
      }];
    },
  };
  const cache = {};
  function load(path) {
    if (cache[path]) return cache[path];
    const code = ts.transpileModule(readFileSync(new URL(`../${path}`, import.meta.url), 'utf8'), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX },
    }).outputText;
    const compiled = { exports: {} };
    vm.runInNewContext(code, {
      module: compiled, exports: compiled.exports,
      require(name) {
        if (name === 'react') return react;
        if (name === 'react/jsx-runtime') return { jsx, jsxs: jsx };
        if (name === 'lucide-react') return { CalendarDays: 'icon' };
        if (name === 'next/image') return { default: 'image' };
        if (name.endsWith('/turnstile-field')) return { TurnstileField: 'turnstile' };
        if (name === '@/components/forms/lead-form') return load('components/forms/lead-form.tsx');
        if (name.startsWith('@/components/')) return new Proxy({}, { get: (_, key) => String(key) });
        if (name === '@/lib/seo') return { buildMetadata: value => value };
        if (name === '@/lib/content') return { getSiteSettings: async () => ({}) };
        if (name === '@/lib/utils') return { cn: () => '', getBrowserCookie: () => undefined,
          absoluteUrl: path => `https://auxanosolutions.net${path}`, createWhatsappLink: () => 'https://example.com' };
        if (name.startsWith('@/')) return load(`${name.slice(2)}.ts`);
        return require(name);
      },
      window: browser, document: { cookie: '' }, performance: { now: () => now },
      setTimeout(callback, delay) { delays.push(delay); timers.set(++id, { callback, at: now + delay }); return id; },
      clearTimeout: key => timers.delete(key),
      fetch, process: { env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: 'G-TEST', ...env } },
      URL, URLSearchParams, AbortSignal,
      FormData: class { constructor(data) { return data; } },
    }, { filename: path });
    return cache[path] = compiled.exports;
  }
  function find(node, type) {
    if (!node || typeof node !== 'object') return;
    if (node.type === type) return node;
    return [node.props?.children].flat(Infinity).map(child => find(child, type)).find(Boolean);
  }
  function instance(context = 'contact', props = {}) {
    const state = { states: [], setters: [], refs: [], isPending: false };
    let mounted = true;
    function render() {
      assert.ok(mounted);
      active = state; cursor = 0;
      return load('components/forms/lead-form.tsx').LeadForm({ ...props, context });
    }
    function handler() { return find(render(), 'form').props.onSubmit; }
    function submit(overrides = {}, onSubmit = handler()) {
      const values = { ...valid, marketingConsent: 'on', ...overrides };
      onSubmit({ preventDefault() {}, currentTarget: { get: key => values[key] ?? null } });
      return state.pending;
    }
    return { submit, capture: () => { const callback = handler(); return data => submit(data, callback); },
      token: value => find(render(), 'turnstile').props.onVerify(value),
      verification: () => find(render(), 'turnstile').props,
      selectedService: () => find(render(), 'select').props.defaultValue,
      unmount() { mounted = false; }, pending: () => state.isPending,
      result: () => find(render(), 'div').props.children.at(-1) };
  }
  function advance(ms) {
    const target = now + ms;
    while (timers.size) {
      const [key, timer] = [...timers].sort((a, b) => a[1].at - b[1].at)[0];
      if (timer.at > target) break;
      now = timer.at; timers.delete(key); timer.callback();
      assert.ok(timers.size <= 1, 'one module-level processor');
    }
    now = target;
  }
  return { instance, events, browser, timers, delays, advance,
    async page(name, query = {}) {
      const tree = await load(`app/${name}/page.tsx`).default({ searchParams: Promise.resolve(query) });
      return find(tree, load('components/forms/lead-form.tsx').LeadForm);
    },
    consent(value) { consent = value; },
    track: (name = 'contact', service = valid.serviceInterest) => load('lib/lead-analytics.ts').trackLead(name, service),
    api: body => load('app/api/lead/route.ts').POST(new Request('https://auxanosolutions.net/api/lead', {
      method: 'POST', body: JSON.stringify(body), headers: { 'Content-Type': 'application/json' },
    })),
  };
}

for (const context of ['contact', 'consultation']) {
  test(`${context}: pending response, duplicate click guard, successful event and separate submission`, async () => {
    let resolve, requests = 0;
    const h = harness({ fetch: () => { requests++; return new Promise(r => { resolve = r; }); } });
    const form = h.instance(context), submit = form.capture();
    const first = submit(); submit(); form.submit();
    assert.equal(requests, 1); assert.equal(h.events.length, 0); assert.ok(form.pending());
    resolve(Response.json({ ok: true })); await first;
    assert.equal(form.pending(), false);
    assert.deepEqual(JSON.parse(JSON.stringify(h.events)), [['event', 'generate_lead', { form_name: context, service_type: 'cctv' }]]);
    assert.equal(form.result().props.role, 'status');
    const next = form.submit(); resolve(Response.json({ ok: true })); await next;
    assert.equal(h.events.length, 2);
  });
}

test('late gtag, multiple instances and remount share one bounded processor', async () => {
  const h = harness({ available: false });
  const first = h.instance(); await first.submit(); first.unmount();
  await h.instance('consultation').submit();
  assert.equal(h.timers.size, 1);
  h.advance(10_000); assert.equal(h.events.length, 0);
  h.browser.gtag = (...args) => h.events.push(args);
  h.advance(4_000); assert.equal(h.events.length, 2); assert.equal(h.timers.size, 0);
  h.advance(30_000); assert.equal(h.events.length, 2);
});

test('permanently missing gtag expires all entries within 30 seconds with capped backoff', () => {
  const h = harness({ available: false }); h.track(); h.advance(30_000);
  assert.equal(h.timers.size, 0); assert.equal(h.events.length, 0);
  assert.deepEqual(h.delays.slice(0, 5), [250, 500, 1000, 2000, 4000]);
  assert.ok(h.delays.every(delay => delay <= 4000));
  h.browser.gtag = (...args) => h.events.push(args); h.advance(30_000);
  assert.equal(h.events.length, 0);
  h.track(); assert.equal(h.events.length, 1);
});

test('queue limits to 50 entries, drops overflow, and clears after dispatch', () => {
  const h = harness({ available: false });
  for (let i = 0; i < 60; i++) h.track();
  assert.equal(h.timers.size, 1);
  h.browser.gtag = (...args) => h.events.push(args); h.advance(250);
  assert.equal(h.events.length, 50); assert.equal(h.timers.size, 0);
});

for (const accepted of [false, true]) {
  test(`gtag throws ${accepted ? 'after' : 'before'} apparent acceptance: never blindly retry`, async () => {
    const h = harness(); let attempts = 0;
    h.browser.gtag = (...args) => { attempts++; if (accepted) h.events.push(args); throw Error('analytics'); };
    const form = h.instance(); await form.submit(); h.advance(60_000);
    assert.equal(attempts, 1); assert.equal(h.events.length, Number(accepted));
    assert.equal(form.result().props.role, 'status'); assert.equal(h.timers.size, 0);
  });
}

test('consent absent/declined or GA unconfigured prevents tracking; withdrawal clears queued events', () => {
  for (const consent of [null, 'declined']) { const h = harness({ consent }); h.track(); assert.equal(h.events.length, 0); }
  const absent = harness({ env: { NEXT_PUBLIC_GA_MEASUREMENT_ID: '' } }); absent.track(); assert.equal(absent.events.length, 0);
  const h = harness({ available: false }); h.track(); h.consent('declined'); h.advance(250);
  assert.equal(h.timers.size, 0); h.browser.gtag = (...args) => h.events.push(args); h.advance(30_000);
  assert.equal(h.events.length, 0);
});

test('only fixed service categories are sent, never free text or personal fields', () => {
  const h = harness(); h.track('contact', 'Test Person test@example.com');
  assert.deepEqual(JSON.parse(JSON.stringify(h.events[0][2])), { form_name: 'contact', service_type: 'other' });
});

for (const [name, fetch] of [
  ['API rejection', async () => Response.json({ error: 'Delivery failed' }, { status: 503 })],
  ['unconfirmed response', async () => Response.json({})],
  ['invalid JSON', async () => new Response('invalid')],
  ['network failure', async () => { throw Error('offline'); }],
]) test(`${name} never tracks`, async () => {
  const h = harness({ fetch }), form = h.instance(); await form.submit();
  assert.equal(h.events.length, 0); assert.equal(form.result().props.role, 'alert');
});

test('client validation and missing/expired Turnstile tokens never call API or analytics', async () => {
  let requests = 0;
  const h = harness({ env: { NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test' }, fetch: async () => { requests++; return Response.json({ ok: true }); } });
  const form = h.instance(); await form.submit();
  form.token('valid'); await form.submit({ email: 'invalid' }); await form.submit({ marketingConsent: '' });
  await form.submit({ message: 'short' }); form.token(''); await form.submit();
  assert.equal(requests, 0); assert.equal(h.events.length, 0);
});

test('Turnstile callbacks remain stable across form state changes', async () => {
  const h = harness(), form = h.instance(), before = form.verification();
  form.token('valid'); await form.submit();
  const after = form.verification();
  assert.equal(after.onVerify, before.onVerify); assert.equal(after.onError, before.onError);
  assert.equal(after.resetKey, before.resetKey + 1);
  after.onError(); assert.equal(form.result().props.role, 'alert');
});

const providerEnv = { TURNSTILE_SECRET_KEY: 'test', HUBSPOT_PORTAL_ID: 'test', HUBSPOT_FORM_ID: 'test', RESEND_API_KEY: 'test', LEAD_FALLBACK_EMAIL: 'sink@example.com' };
test('actual API rejects missing token, invalid/expired verification and verification network errors', async () => {
  for (const mode of ['missing', 'invalid', 'network']) {
    let calls = 0;
    const h = harness({ env: providerEnv, fetch: async url => {
      calls++; assert.match(url, /siteverify/); if (mode === 'network') throw Error('offline');
      return Response.json({ success: false, 'error-codes': ['timeout-or-duplicate'] });
    } });
    const response = await h.api({ ...valid, turnstileToken: mode === 'missing' ? '' : 'expired' });
    assert.equal(response.status, mode === 'network' ? 503 : 400);
    assert.equal(calls, mode === 'missing' ? 0 : 1);
  }
});

for (const context of ['contact', 'consultation']) test(`actual API ${context} delivers confirmed HubSpot success with canonical page URI`, async () => {
  const h = harness({ env: providerEnv, fetch: async (url, options) => {
    assert.ok(options.signal);
    if (url.includes('siteverify')) return Response.json({ success: true });
    assert.match(url, /hsforms/);
    const body = JSON.parse(options.body);
    assert.equal(body.context.pageUri, `https://auxanosolutions.net/${context === 'contact' ? 'contact' : 'book-consultation'}`);
    return Response.json({});
  } });
  const response = await h.api({ ...valid, context }); assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
});

test('actual API falls back after HubSpot errors, sends plain text, and reports delivery failure truthfully', async () => {
  for (const delivered of [false, true]) {
    const h = harness({ env: providerEnv, fetch: async (url, options) => {
      if (url.includes('siteverify')) return Response.json({ success: true });
      if (url.includes('hsforms')) throw Error('provider unavailable');
      assert.match(url, /resend/); const body = JSON.parse(options.body);
      assert.equal(body.html, undefined); assert.match(body.text, /<b>test<\/b>/); assert.ok(options.signal);
      return Response.json({}, { status: delivered ? 200 : 503 });
    } });
    assert.equal((await h.api({ ...valid, message: '<b>test</b> project' })).status, delivered ? 200 : 503);
  }
});

test('actual API rejects invalid payload before contacting any provider', async () => {
  const h = harness({ fetch: async () => { throw Error('must not fetch'); } });
  assert.equal((await h.api({ ...valid, email: 'bad' })).status, 400);
});

test('form wired to actual API only tracks after provider confirmation, never bot/delivery failures', async () => {
  for (const outcome of ['success', 'bot', 'delivery']) {
    let h;
    h = harness({ env: { ...providerEnv, NEXT_PUBLIC_TURNSTILE_SITE_KEY: 'test' }, fetch: async (url, options) => {
      if (url === '/api/lead') return h.api(JSON.parse(options.body));
      if (url.includes('siteverify')) return Response.json({ success: outcome !== 'bot' });
      return Response.json({}, { status: outcome === 'success' ? 200 : 503 });
    } });
    const form = h.instance(); form.token('test'); await form.submit();
    assert.equal(h.events.length, outcome === 'success' ? 1 : 0);
    assert.equal(form.result().props.role, outcome === 'success' ? 'status' : 'alert');
  }
});

test('actual route pages fix attribution independently of arbitrary query parameters', async () => {
  const h = harness();
  const contact = await h.page('contact', { enquiryContext: 'consultation' });
  assert.equal(contact.props.context, 'contact');
  const queries = [{}, { enquiryContext: 'contact' }, { service: 'invalid' },
    { service: ['surveillance-system-cctv', 'invalid'] }, { service: ['surveillance-system-cctv', 'surveillance-system-cctv'] }];
  for (const query of queries) {
    const node = await h.page('book-consultation', query);
    assert.equal(node.props.context, 'consultation'); assert.equal(node.props.initialService, undefined);
    assert.equal(h.instance(node.props.context, node.props).selectedService(), 'Managed IT Support');
  }
  const cctv = await h.page('book-consultation', { service: 'surveillance-system-cctv' });
  assert.equal(cctv.props.initialService, 'CCTV & Surveillance'); assert.equal(cctv.props.context, 'consultation');
  assert.equal(h.instance(cctv.props.context, cctv.props).selectedService(), 'CCTV & Surveillance');
  assert.notEqual(cctv.props.key, (await h.page('book-consultation')).props.key);
});
