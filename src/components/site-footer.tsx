import Link from "next/link";
import { footerServices, navigation } from "@/lib/site-content";

export function SiteFooter() {
  return (
    <footer className="bg-[#0d0b1e]">
      <div className="site-container grid gap-10 border-t border-white/8 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="max-w-xl space-y-5">
          <div className="flex items-center gap-3">
            <span className="flex size-9 items-center justify-center rounded-full border border-white/12 bg-white/8">
              <span className="size-2 rounded-full bg-[#9b84ff]" />
            </span>
            <p className="text-lg font-semibold tracking-[-0.04em] text-white">
              Vizstats
            </p>
          </div>
          <p className="max-w-sm text-sm leading-7 text-white/50">
            Vizstats is a data experience agency. We turn complex, important
            data into immersive experiences that public audiences can
            understand, explore, and act on.
          </p>
          <a
            href="mailto:hello@vizstats.co"
            className="inline-flex text-sm font-semibold text-[#9b84ff] transition hover:text-[#b8a5ff]"
          >
            hello@vizstats.co
          </a>
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold text-white/80">Navigation</p>
          <nav className="grid gap-3 text-sm text-white/45">
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
        </div>

        <div className="space-y-5">
          <p className="text-sm font-semibold text-white/80">What we build</p>
          <nav className="grid gap-3 text-sm text-white/45">
            {footerServices.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <p className="pt-4 text-xs uppercase tracking-[0.18em] text-white/20">
            Vizstats © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
}
