import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Darkmode from "@providers/Darkmode";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/services/providers/AuthProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@/services/auth/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);


  return (
    <AuthProvider>
    <html lang="en">
      <body className={inter.className}>
      <Darkmode attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <Navbar session={session} />
        {children}
        <Footer/>
      </Darkmode>
      </body>
    </html>
    </AuthProvider>
  );
}
