import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import "./globals.css";

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
        <Navbar />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
