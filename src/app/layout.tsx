import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://skcleaningsolutions.com.au"),
  title: {
    default: "SK Cleaning Solutions | Premium Commercial & Residential Cleaning Sydney",
    template: "%s | SK Cleaning Solutions",
  },
  description: "Sydney's trusted commercial, office, and residential cleaning service. Serving all Sydney suburbs with bespoke premium cleaning solutions.",
  keywords: [
    "Commercial Cleaning Sydney",
    "Office Cleaning Sydney",
    "Professional Cleaners Sydney",
    "End of Lease Cleaning Sydney",
    "Premium Cleaning Solutions",
    "Commercial Cleaning Services",
    "Office Cleaners Sydney",
  ],
  authors: [{ name: "SK Cleaning Solutions" }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SK Cleaning Solutions | Premium Commercial & Residential Cleaning Sydney",
    description: "Sydney's trusted commercial, office, and residential cleaning service. Serving all Sydney suburbs with bespoke premium cleaning solutions.",
    url: "https://skcleaningsolutions.com.au",
    siteName: "SK Cleaning Solutions",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SK Cleaning Solutions | Premium Commercial & Residential Cleaning Sydney",
    description: "Sydney's trusted commercial, office, and residential cleaning service. Serving all Sydney suburbs with bespoke premium cleaning solutions.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08213E",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-body-text selection:bg-secondary/20 selection:text-primary">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2.5 focus:bg-secondary focus:text-primary focus:font-bold focus:rounded-full focus:shadow-premium focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
