/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: "#B58BF1",
                accent: "#7134C6",
                secondary: "#D6BFF6",
                text: "#DDD8E4",
            },
        },
    },
    plugins: [],
};
