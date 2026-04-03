import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/app/utils/ProgressBar";
import ProgressBar from "@/app/utils/ProgressBar";
import { ThemeProvider } from "./utils/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "P Jagdish Rao | Full Stack Developer",
  description:
    "Portfolio of P Jagdish Rao, a Full Stack Developer focused on React.js, Next.js, Node.js, MongoDB, MySQL, responsive UI, REST APIs, and scalable MERN applications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider>
          <ProgressBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
