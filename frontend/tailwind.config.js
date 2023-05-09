/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000",
                secondary: "#F6E05E",
                accent: " #48BB78",
            },
        },
    },
    plugins: [require("daisyui")],
}