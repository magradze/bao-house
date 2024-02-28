import type {Config} from "tailwindcss";
import {nextui} from "@nextui-org/react";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#eb4851",
          '50': '#fef2f3',
          '100': '#fde3e4',
          '200': '#fdcbce',
          '300': '#faa7ab',
          '400': '#f5747b',
          '500': '#eb4851',
          '600': '#d82d36',
          '700': '#b52028',
          '800': '#961e24',
          '900': '#7d1f24',
          '950': '#440b0e',
        },
        secondary:  {
          DEFAULT: "#656b61",
          '50': '#f6f7f6',
          '100': '#e4e5e2',
          '200': '#c7cac5',
          '300': '#a3a8a0',
          '400': '#7f867b',
          '500': '#656b61',
          '600': '#4f554c',
          '700': '#42463f',
          '800': '#363a35',
          '900': '#262825',
          '950': '#191b18',
        },
        default: {
          DEFAULT: "#999999",
          '50': '#f7f7f7',
          '100': '#ededed',
          '200': '#dfdfdf',
          '300': '#d3d3d3',
          '400': '#adadad',
          '500': '#999999',
          '600': '#888888',
          '700': '#7b7b7b',
          '800': '#676767',
          '900': '#545454',
          '950': '#363636',
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {},
    }),
  ],
};
export default config;
