import Link from "next/link";
import { footerServices, navigation } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white/80">
      <div className="site-container grid gap-10 py-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-xl space-y-4">
          <p className="text-lg font-semibold tracking-[-0.04em] text-slate-900">
            Vizstats
          </p>
          <p className="max-w-lg text-sm leading-7 text-slate-600">
            Vizstats is a data experience agency. We turn complex, important
            data into immersive experiences that public audiences can
            understand, explore, and act on.
          </p>
          <a
            href="mailto:hello@vizstats.co"
            className="accent-link inline-flex text-sm"
          >
            hello@vizstats.co
          </a>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-900">Navigation</p>
          <nav className="grid gap-3 text-sm text-slate-600">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold text-slate-900">What we build</p>
          <nav className="grid gap-3 text-sm text-slate-600">
            {footerServices.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-slate-950"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="pt-4 text-xs uppercase tracking-[0.18em] text-slate-400">
            Vizstats © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
