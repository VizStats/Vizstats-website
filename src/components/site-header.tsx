"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3">
      <div className="site-container pointer-events-auto">
        <div className="flex flex-col gap-3 rounded-[2rem] border border-white/10 bg-[#06111b]/82 px-4 py-4 shadow-[0_24px_80px_rgba(0,0,0,0.38)] backdrop-blur-xl md:flex-row md:items-center md:justify-between md:px-5 md:py-3">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex size-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.05]">
              <span className="size-2 rounded-full bg-[#59d8ff]" />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.65rem] uppercase tracking-[0.34em] text-white/55">
                VizStats
              </span>
              <span className="block text-sm font-semibold text-white md:text-base">
                Decision rooms for live data.
              </span>
            </span>
          </Link>

          <nav className="overflow-x-auto">
            <ul className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.04] p-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-full px-3 py-2 text-[0.68rem] font-medium uppercase tracking-[0.26em] transition md:px-4",
                        isActive
                          ? "bg-white text-slate-950"
                          : "text-white/72 hover:bg-white/[0.08] hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
