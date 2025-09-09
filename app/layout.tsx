import "./globals.css";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import { PostHogProvider } from "../posthog/provider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} font-sans min-h-screen antialiased text-[#3f3d56]`}
      >
        <PostHogProvider>{children}</PostHogProvider>
      </body>
    </html>
  );
}
