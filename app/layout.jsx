import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono"
});

export const metadata = {
  title: {
    default: "João Mercier | Fullstack Developer",
    template: "%s | João Mercier"
  },
  description: "Fullstack Developer specializing in Next.js, React, AWS, and Node.js. Building scalable web applications with modern technologies.",
  keywords: ["Fullstack Developer", "Software Engineer", "Next.js", "React", "AWS", "Node.js", "Web Development"],
  authors: [{ name: "João Mercier" }],
  openGraph: {
    title: "João Mercier | Fullstack Developer",
    description: "Fullstack Developer specializing in Next.js, React, AWS, and Node.js. Building scalable web applications with modern technologies.",
    url: "https://mercier.dev",
    siteName: "João Mercier Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "João Mercier | Fullstack Developer",
    description: "Fullstack Developer specializing in Next.js, React, AWS, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.className}>
        <Header />
        <StairTransition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}
