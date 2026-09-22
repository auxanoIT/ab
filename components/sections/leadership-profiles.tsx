"use client";

import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowRight, PlusCircle, X } from "lucide-react";
import { leaders } from "@/data/leadership";

export function LeadershipProfiles() {
  return (
    <div className="mt-11 grid items-start gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
      {leaders.map((leader) => (
        <Dialog.Root key={leader.name}>
          <article>
            <div className="relative aspect-square overflow-hidden rounded-lg bg-white">
              <Image src={leader.image} alt={leader.name} fill className="object-cover object-top" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[var(--color-ink)]">{leader.name}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{leader.role}</p>
            {leader.office && <p className="mt-1 text-sm text-[var(--color-muted)]">{leader.office}</p>}
            <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
              <Dialog.Trigger className="inline-flex min-h-11 items-center gap-2 text-base font-semibold text-[#355c9a] hover:text-[#a43d14] focus-visible:outline-2 focus-visible:outline-offset-4" aria-label={`Read more about ${leader.name}`}>
                Read more <PlusCircle className="h-5 w-5" aria-hidden="true" />
              </Dialog.Trigger>
              {leader.contact && <a href={`mailto:${leader.contact}`} className="inline-flex min-h-11 items-center gap-2 text-sm text-[#355c9a]">Contact <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>}
            </div>
          </article>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[100] bg-black/40" />
            <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-[101] overflow-y-auto overscroll-contain bg-white text-[var(--color-ink)] focus:outline-none">
              <Dialog.Close aria-label="Close biography" className="fixed right-4 top-4 z-[102] flex h-12 w-12 items-center justify-center rounded-full bg-[#eef2f7] text-[#355c9a] hover:bg-[#dce6f5] focus-visible:outline-2 focus-visible:outline-offset-4 sm:right-7 sm:top-6">
                <X className="h-6 w-6" aria-hidden="true" />
              </Dialog.Close>
              <div className="mx-auto grid w-full max-w-7xl gap-7 px-5 pb-16 pt-24 sm:px-8 md:grid-cols-[240px_minmax(0,1fr)] md:gap-12 lg:grid-cols-[280px_minmax(0,1fr)] lg:pt-28">
                <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-lg bg-[#eef4ff]">
                  <Image src={leader.image} alt={leader.name} fill sizes="280px" className="object-cover object-top" />
                </div>
                <div className="min-w-0">
                  <Dialog.Title className="text-3xl font-semibold leading-tight sm:text-4xl">{leader.name}</Dialog.Title>
                  <p className="mt-3 text-base font-semibold leading-7 text-[#355c9a]">{leader.role}</p>
                  <div className="mt-7 space-y-6 text-base leading-8 text-[#344054] sm:text-lg sm:leading-9">
                    {leader.biography.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {leader.contact && <a className="mt-8 inline-flex min-h-11 items-center gap-2 break-all text-sm font-semibold text-[#355c9a]" href={`mailto:${leader.contact}`}>{leader.contact}<ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" /></a>}
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      ))}
    </div>
  );
}
