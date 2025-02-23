import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import localFont from 'next/font/local'

const inter = Inter({ subsets: ["latin"] });
const switzer = localFont({ src: '../fonts/Switzer-Regular.woff2' })

export const metadata: Metadata = {
  title: "Avnish Jha / Developer",
  description: "Personal website and blog of Avnish Jha - Full Stack Developer. Read about web development, programming, and tech insights.",
  keywords: "Avnish Jha, Web Developer, Full Stack Developer, Programming Blog, Tech Blog",
  authors: [{ name: "Avnish Jha" }],
  openGraph: {
    title: "Avnish Jha / Developer",
    description: "Personal website and blog of Avnish Jha - Full Stack Developer",
    type: "website",
    locale: "en_US",
    siteName: "Avnish Jha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Jha / Developer",
    description: "Personal website and blog of Avnish Jha - Full Stack Developer",
    creator: "@YourTwitterHandle", // Replace with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={switzer.className}>
        <header className="flex justify-center w-full sticky top-0 z-50 backdrop-blur-sm shadow-sm pt-5 pb-5 text-xl font-bold text-white" 
          style={{
            background: 'linear-gradient(to bottom, rgba(18, 18, 18, 1),rgba(18, 18, 18,1),rgba(18, 18, 18, 1),rgba(18, 18, 18, 0.8),rgba(18, 18, 18, 0))'
          }}>
          <Navigation />
        </header>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
