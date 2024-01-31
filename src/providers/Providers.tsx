"use client"
import React, {ReactNode} from 'react';
import {NextUIProvider} from "@nextui-org/react";
import {ClerkProvider} from '@clerk/nextjs'
import {ThemeProvider as NextThemesProvider} from "next-themes";
import {frFR} from "@clerk/localizations";
import {dark, neobrutalism} from '@clerk/themes';

type Props = {
    children: ReactNode
};

const Providers = ({children}: Props) => {
    return (
        <ClerkProvider
            localization={frFR}
            appearance={{
                baseTheme: neobrutalism,
            }}
        >
            <NextUIProvider>
                <NextThemesProvider attribute="class" defaultTheme="dark">
                    <main className="text-foreground bg-background">
                        {children}
                    </main>
                </NextThemesProvider>
            </NextUIProvider>
        </ClerkProvider>
    );
};

export default Providers;
