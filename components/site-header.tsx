"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8e7f5]/80 bg-[#fafafd]/92 backdrop-blur-md">
      <div className="site-container">
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" aria-label="Vizstats homepage">
            <span className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-primary/8">
              <span className="size-2 rounded-full bg-primary" />
            </span>
            <span className="text-lg font-semibold tracking-[-0.04em] text-slate-900">
              Vizstats
            </span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium text-slate-500 transition hover:text-slate-900",
                    isActive && "text-slate-900"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Button
              asChild
              className="rounded-full bg-primary px-5 text-white hover:bg-primary/90"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Tell us about your project
              </Link>
            </Button>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-[#e8e7f5] bg-white text-slate-900 md:hidden"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-[max-height,opacity] duration-300 md:hidden",
            isOpen ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div className="surface-card flex flex-col gap-2 p-4">
            <nav className="flex flex-col gap-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700 hover:bg-slate-50 hover:text-slate-950"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
            <Button
              asChild
              className="mt-3 rounded-full bg-primary text-white hover:bg-primary/90"
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Tell us about your project
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
