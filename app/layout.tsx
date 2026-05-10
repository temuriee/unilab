import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/features/common/components/composites/Header";
import Category from "@/features/categories/components/Category";
import { Lato } from "next/font/google";
import { Footer } from "@/features/common/components/primitives/Footer";
import { Toaster } from "react-hot-toast";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Luminae | Fashion ",
    template: "%s | Luminae",
  },
  description:
    "Shop the latest fashion, shoes, bags, electronics, and more at Luminae. Discover top brands like Zara, Mango, Calvin Klein with exclusive deals and flash sales.",
  keywords: [
    "fashion store",
    "online shopping",
    "women clothing",
    "men clothing",
    "shoes",
    "bags",
    "electronics",
    "flash sales",
    "Zara",
    "Mango",
    "Calvin Klein",
    "Luminae",
  ],
  authors: [{ name: "Luminae" }],
  creator: "Luminae",
  metadataBase: new URL("https://luminae.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://luminae.com",
    siteName: "Luminae",
    title: "Luminae | Fashion & Lifestyle Store",
    description:
      "Shop the latest fashion, shoes, bags, electronics, and more at Luminae. Exclusive deals and flash sales every day.",
    images: [
      {
        url: "/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Luminae Fashion Store",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luminae | Fashion & Lifestyle Store",
    description:
      "Shop the latest fashion, shoes, bags, electronics, and more at Luminae.",
    images: ["/favicon.ico"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body
        className={`${lato.className} min-w-full min-h-full flex flex-col justify-center mx-auto `}
      >
        <Providers />
        <div className="mx-auto  bg-white">
          <Header />
        </div>
        <Category />
        <div className="mx-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
