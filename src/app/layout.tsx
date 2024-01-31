import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import Navbar from "@/components/partial/Navbar";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bao House - Goûtez aux vraies traditions chinoises",
    description: "Goûtez aux vraies traditions chinoises",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Providers>
            <Navbar/>
            {children}
        </Providers>
        </body>
        </html>
    );
}
