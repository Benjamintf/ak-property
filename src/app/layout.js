import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// src/app/layout.js ውስጥ
export const metadata = {
  title: 'AK Property',
  description: "በአዲስ አበባ ምርጥ ቤቶችን በጥራት እና በታማኝነት እናቀርባለን።",
  icons: {
    icon: '/favicon.png', // ፋይሉ app ፎልደር ውስጥ ከሆነ
  },
}

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
