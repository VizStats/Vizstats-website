import Link from "next/link";
import { navigation } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="site-container flex flex-col gap-8 py-10 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl space-y-3">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-white/45">
            VizStats
          </p>
          <p className="text-xl font-semibold text-white">
            Enterprise-grade data visualization with showroom discipline.
          </p>
          <p className="max-w-lg text-sm leading-7 text-white/62">
            We design premium command centers, executive storyboards, and
            client-facing intelligence surfaces that move as fast as the teams
            behind them.
          </p>
        </div>

        <div className="space-y-4 text-sm text-white/58">
          <nav className="flex flex-wrap gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="text-xs uppercase tracking-[0.24em] text-white/34">
            Built in Next.js 16. Designed for live telemetry, board clarity,
            and product-grade motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
