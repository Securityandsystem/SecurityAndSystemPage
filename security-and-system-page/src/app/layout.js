import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/Components/navbar/NavBar";
import Footer from "@/Components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Security And System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
