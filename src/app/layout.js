import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Talakadu | Talakadu Jaladhama | About Talakadu | Talakad Mysore",
  description: "Talakadu, an ancient town distant from Mysore situated in Karnataka having many temple fascinating Hindu pilgrims. Situated at the left bank of river Kaveri",
   icons: {
    icon: [
      { url: '/Talakadu-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/Talakadu-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/Talakadu-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
