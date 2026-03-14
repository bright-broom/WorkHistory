import type { Metadata, Viewport } from "next";
import { Noto_Sans_JP } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "職務経歴書 | 作田 敏希",
  description: "作田 敏希の職務経歴書 - Full-Stack Engineer / BizDev",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body className="min-h-screen bg-[var(--color-background)]">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
