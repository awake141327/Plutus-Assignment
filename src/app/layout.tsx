import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "@/lib/storeProvider";

// Importing Fonts
import { Mulish, Poppins, Rubik } from "next/font/google";

export const metadata: Metadata = {
  title: "NextJS BoilerPlate",
  description: "Plutus NextJS BoilerPlate for new NextJS projects",
};

// Defining Fonts
const mulish = Mulish({ subsets: ["latin"], variable: "--font-mulish" });
const rubik = Rubik({ subsets: ["latin"], variable: "--font-rubik" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${mulish.variable} ${poppins.variable} ${rubik.variable}`}
        >
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
