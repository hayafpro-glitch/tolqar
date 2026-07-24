import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tolqar.com"),
  title: {
    default: "تولقار — نبني المستقبل رقميًا",
    template: "%s — تولقار",
  },
  description:
    "تولقار شركة تقنية تبني منتجات وأنظمة ومنصات رقمية مصممة للنمو والتوسع.",
  openGraph: {
    type: "website",
    url: "https://tolqar.com/",
    title: "تولقار — نبني المستقبل رقميًا",
    description:
      "تولقار شركة تقنية تبني منتجات وأنظمة ومنصات رقمية مصممة للنمو والتوسع.",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-bg text-text font-body antialiased">
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
