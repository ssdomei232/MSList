import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Minecraft Severs List",
  description: "Minecraft Severs List",
  keywords: ['一键开服脚本,Minecraft一键开服脚本,一键开服,Minecraft 服务端列表,Minecraft 服务端,Minecraft,Minecraft Severs List,Minecraft Severs,Linuxcat,linuxcat,linux'],
  authors: [{ name: 'mei' }],
  creator: 'mei',
  publisher: 'mei',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
