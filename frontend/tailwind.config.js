/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000",
                secondary: "#8BC34A",
                accent: "#FBC02D",
            },
            fontFamily: {
                secondary: "'Rajdhani', sans-serif"
            }
        },
    },
    plugins: [require("daisyui")],
}