const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const ts = require('typescript');

const source = fs.readFileSync(path.join(__dirname, '../lib/blog-excerpt.ts'), 'utf8');
const output = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS },
}).outputText;
const mod = { exports: {} };
new Function('exports', 'require', 'module', output)(mod.exports, require, mod);
const { resolveBlogExcerpt } = mod.exports;

assert.equal(resolveBlogExcerpt({ title: 'Title', excerpt: ' Written excerpt ', body: ['Body'] }), 'Written excerpt');
assert.equal(resolveBlogExcerpt({
  title: 'Title', excerpt: null,
  body: [null, { _type: 'block', style: 'h2', children: [{ text: 'Heading' }] },
    { _type: 'block', style: 'normal', children: [{ text: 'Opening ' }, { text: 'paragraph.' }] }],
}), 'Opening paragraph.');
assert.equal(resolveBlogExcerpt({ title: 'Title', excerpt: ' ', body: [{ _type: 'blogParagraph', text: 'Legacy paragraph' }] }), 'Legacy paragraph');
assert.equal(resolveBlogExcerpt({ title: 'Title', body: null }), 'Title');
assert.equal(resolveBlogExcerpt({ title: 'Title', body: ['Plain text'] }), 'Plain text');
console.log('PASS blog excerpt regression checks');
