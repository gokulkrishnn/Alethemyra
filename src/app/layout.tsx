import type { Metadata } from "next";
import { Cormorant_Garamond, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

// Cormorant Garamond - elegant semi-serif font
const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// Libre Baskerville - humanist serif font
const libreBaskerville = Libre_Baskerville({
  variable: "--font-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alethmyra - Truth Built Into Structure",
  description: "Alethmyra builds technology on a foundation of integrity, structure, and purpose.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full w-full">
      <body
        className={`${cormorantGaramond.variable} ${libreBaskerville.variable} antialiased min-h-screen w-full bg-white text-[#222] overflow-x-hidden`}
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <ClerkProvider>
          {/* Main Content */}
          <main className="min-h-[80vh] w-full flex flex-col items-stretch">
            <div className="w-full max-w-full mx-auto px-2 sm:px-4 md:px-6">
              {children}
            </div>
          </main>
        </ClerkProvider>
      </body>
    </html>
  );
}