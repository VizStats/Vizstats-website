import type { Metadata } from "next";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vizstats.example"),
  title: {
    default: "VizStats | Decision Rooms for Live Data",
    template: "%s | VizStats",
  },
  description:
    "VizStats designs Tesla-sharp data visualization experiences for operators, executives, and growth teams.",
  openGraph: {
    title: "VizStats | Decision Rooms for Live Data",
    description:
      "Premium data visualization systems that turn telemetry into confident action.",
    siteName: "VizStats",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VizStats | Decision Rooms for Live Data",
    description:
      "Premium data visualization systems that turn telemetry into confident action.",
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
        sora.variable,
        ibmPlexMono.variable,
        "font-sans"
      )}
    >
      <body className="min-h-full">
        <SiteHeader />
        <div className="relative flex min-h-screen flex-col pt-28 md:pt-24">
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
