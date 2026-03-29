import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://funversarial.com"),
  title: {
    default: "Elroi Luria | Funversarial",
    template: "%s | Funversarial",
  },
  description:
    "Solutions Architect and Technical Leader securing the frontier of applied AI—enterprise frameworks for ML supply chain security and prompt injection mitigation.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://funversarial.com",
    siteName: "Funversarial",
    title: "Elroi Luria | Securing the Frontier of Applied AI",
    description:
      "Solutions Architect and Technical Leader with 20+ years delivering security technologies for global financial and insurance sectors.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elroi Luria | Funversarial",
    description:
      "Solutions Architect and Technical Leader securing the frontier of applied AI.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050814",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${playfairDisplay.variable} ${inter.variable} noir-shell min-h-dvh-screen bg-background font-mono text-foreground`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:inline-block focus:rounded-md focus:border focus:border-accent/60 focus:bg-surface-elevated focus:px-4 focus:py-3 focus:text-foreground focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
