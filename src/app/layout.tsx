import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Providers from "@/providers/Providers";
import Navbar from "@/components/partial/Navbar";
import {ReactNode} from "react";
import Background from "@/components/shared/Background";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Bao House - Goûtez aux vraies traditions chinoises",
    description: "Goûtez aux vraies traditions chinoises",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
        <Providers>
            <Background/>
            {children}
            <Navbar/>
        </Providers>
        </body>
        </html>
    );
}
