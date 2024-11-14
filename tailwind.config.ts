import type { Config } from "tailwindcss";

export default {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    contrast: "hsl(var(--primary-contrast))",
                },
                background: "hsl(var(--background))",
                text: {
                    DEFAULT: "hsl(var(--text))",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
