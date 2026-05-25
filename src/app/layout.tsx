import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Vizstats | Important data. Impossible to ignore.",
    template: "%s | Vizstats",
  },
  description:
    "Vizstats is a data experience agency turning complex, important data into immersive experiences public audiences can understand, explore, and act on.",
  openGraph: {
    title: "Vizstats | Important data. Impossible to ignore.",
    description:
      "Fully customized, high-performance data experiences built for the people your data was always meant to reach.",
    siteName: "Vizstats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizstats | Important data. Impossible to ignore.",
    description:
      "Fully customized, high-performance data experiences built for the people your data was always meant to reach.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full scroll-smooth antialiased",
        manrope.variable,
        ibmPlexMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full bg-background text-foreground">
        <SiteHeader />
        <div className="relative flex min-h-screen flex-col pt-20">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
