"use client";

import { useState } from "react";
import { List, X } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

type Heading = { text: string; id: string };

export function BlogTableOfContents({ headings }: { headings: Heading[] }) {
  const [open, setOpen] = useState(false);

  if (!headings.length) return null;

  return (
    <div className="sticky top-20 z-40 border-y border-[color:rgba(11,18,32,0.08)] bg-white/95 px-5 py-2 backdrop-blur lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            aria-label="Open article contents"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-[#355c9a] px-4 text-sm font-semibold text-white hover:bg-[#284a80] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#355c9a]"
          >
            <List className="h-5 w-5" aria-hidden="true" />
            Contents
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          showCloseButton={false}
          className="flex max-h-dvh w-[min(24rem,calc(100vw-2rem))] flex-col overflow-hidden p-0"
        >
          <SheetHeader className="flex-row items-center justify-between gap-4 border-b border-[color:rgba(11,18,32,0.08)] px-5 py-5">
            <SheetTitle>In this article</SheetTitle>
            <SheetClose asChild>
              <button type="button" aria-label="Close article contents" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-muted)] hover:bg-[var(--color-cloud)]">
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </SheetClose>
          </SheetHeader>
          <nav aria-label="Article contents" className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4">
            <ol className="space-y-1">
              {headings.map((heading, index) => (
                <li key={`${heading.id}-${index}`}>
                  <SheetClose asChild>
                    <a
                      href={`#${heading.id}`}
                      className="block rounded-md px-3 py-3 text-sm leading-6 text-[var(--color-ink)] hover:bg-[var(--color-cloud)] focus-visible:outline-2 focus-visible:outline-[#355c9a]"
                    >
                      {heading.text}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ol>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
