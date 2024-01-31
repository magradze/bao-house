import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    darkMode: "class",
    plugins: [nextui({
        themes: {
            "light": {
                extend: "light",
                colors: {
                    background: "#f8d7a4",
                    foreground: "#EC4C45",
                    primary: {
                        100: "#FEE7DA",
                        200: "#FDCAB5",
                        300: "#F9A58F",
                        400: "#F38272",
                        500: "#EC4C45",
                        600: "#CA3238",
                        700: "#A92233",
                        800: "#88162E",
                        900: "#710D2A",
                        DEFAULT: "#EC4C45",
                        foreground: "#ffffff",
                    },
                    focus: "#CA3238",

                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
            "dark": {
                extend: "dark",
                colors: {
                    background: "#121212",
                    foreground: "#ffffff",
                    primary: {
                        100: "#C8F7E1",
                        200: "#95EFCE",
                        300: "#5AD0AF",
                        400: "#2FA28C",
                        500: "#06645B",
                        600: "#045655",
                        700: "#034248",
                        800: "#01303A",
                        900: "#012330",
                        DEFAULT: "#06645B",
                        foreground: "#ffffff",
                    },
                    focus: "#045655",
                },
                layout: {
                    disabledOpacity: "0.3",
                    radius: {
                        small: "4px",
                        medium: "6px",
                        large: "8px",
                    },
                    borderWidth: {
                        small: "1px",
                        medium: "2px",
                        large: "3px",
                    },
                },
            },
        },
    }),],
};
export default config;
