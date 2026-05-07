import type { Metadata } from "next";
import Script from "next/script";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const SITE_URL = "https://nonprofit-team-skills-website.vercel.app";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "8 free Claude Skills for non-profit teams",
  description:
    "Eight AI teammates for non-profit organizations — one per role, plus a Vibe Coder that ships your website. Free, open source, MIT licensed.",
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  keywords: [
    "Claude Skills",
    "non-profit",
    "nonprofit",
    "charity",
    "fundraising AI",
    "AI teammates",
    "MSG2AI",
    "free Claude skills",
    "grant writing",
    "impact measurement",
  ],
  authors: [{ name: "MSG2AI", url: "https://msg2ai.xyz" }],
  creator: "MSG2AI",
  publisher: "MSG2AI",
  openGraph: {
    title: "8 Claude Skills for your non-profit team",
    description:
      "The whole back office your non-profit can't afford to hire — one AI teammate per role, free.",
    type: "website",
    url: SITE_URL,
    siteName: "Nonprofit Team Skills",
  },
  twitter: {
    card: "summary_large_image",
    title: "8 Claude Skills for your non-profit team",
    description:
      "The whole back office your non-profit can't afford to hire — free.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
