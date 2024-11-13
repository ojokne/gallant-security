import localFont from "next/font/local";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata = {
  title: {
    default: "Gallant Security",
    template: "%s | Gallant Security",
  },
  description:
    "Professional security services providing peace of mind through excellence in protection, surveillance, and risk management.",
  keywords: [
    "security services",
    "security guards",
    "surveillance",
    "protection services",
    "security company",
  ],
  authors: [{ name: "Gallant Security" }],
  creator: "Gallant Security",
  metadataBase: new URL("https://gallant-security.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gallantsecurity.com",
    title: "Gallant Security",
    description: "Professional security services providing peace of mind",
    siteName: "Gallant Security",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="relative">
      <body
        className={`${geistSans.variable} min-h-screen flex flex-col relative`}
      >
        <NextTopLoader color="#7b3026" zIndex={9999} />
        <Header />
        <main className="flex-grow relative">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
