"use client"
import React, {ReactNode} from 'react';
import {NextUIProvider, cn} from "@nextui-org/react";
import {ClerkProvider} from "@clerk/nextjs";
import {frFR} from "@clerk/localizations";

type Props = {
    children: ReactNode;
};

const Providers = ({children}: Props) => {
    return (
        <ClerkProvider localization={frFR}>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </ClerkProvider>
    );
};

export default Providers;
