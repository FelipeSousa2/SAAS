import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Notification from "@/components/Notification";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";
import AuthProvider from "@/components/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Restaurante",
  description: "Melhor comida da cidade!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div>
            <Notification />
            <Navbar />
            {children}
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
