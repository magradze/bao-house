"use client"
import {useTheme} from "next-themes";
import {useEffect, useState} from "react";
import {Switch, useSwitch, VisuallyHidden, SwitchProps} from "@nextui-org/react";
import {MoonIcon, SunIcon} from "@nextui-org/shared-icons";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const {theme, setTheme} = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <Switch
            defaultSelected={theme !== 'dark'}
            size="sm"
            color="primary"
            startContent={<SunIcon/>}
            endContent={<MoonIcon/>}
            onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        />
    )
}