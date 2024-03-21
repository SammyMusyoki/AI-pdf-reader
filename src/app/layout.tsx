import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/libs/utils";
import Navbar from "@/components/Navbar";
import Providers from "@/components/Providers";

import 'react-loading-skeleton/dist/skeleton.css'

const inter = Inter({ subsets: ["latin"] });


const APP_NAME = "Loki - AI PDF Reader";
const APP_DEFAULT_TITLE = "Loki";
const APP_TITLE_TEMPLATE = "%s - Ai powered app";
const APP_DESCRIPTION = "Best Ai powered app for reading and chatting with your pdf files!";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
        <body className={cn(
          'min-h-screen font-sans antialiased grainy', inter.className)}>
            <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
