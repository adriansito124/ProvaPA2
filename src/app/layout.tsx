import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Menu } from "@/components/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Menu op1="Fetch" op2="Axios" op3="Server"/>
        {children}
      </body>
    </html>
  );
}