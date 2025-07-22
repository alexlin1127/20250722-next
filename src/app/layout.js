import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";
import BootstrapProvider from "@/providers/BootstrapProvider";
import NextAuthProvider from "@/providers/NextAuthProvider";
import "./globals.scss";

export const viewport = {
  charset: "utf-8",
  width: "device-width",
  initialScale: 1,
  shrinkToFit: "no",
};

export const metadata = {
  title: "Clean Blog - Start Bootstrap Theme",
  description: "",
  author: "",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-tw">
      <body>
        <NextAuthProvider>
          <BootstrapProvider />
          <Navbar />
          {/* <Hero /> */}
          {/* Hero 放在 layout，要怎麼改變標題和背景圖片？ */}
          {children}
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
