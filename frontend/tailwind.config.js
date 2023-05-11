/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: "#000",
                secondary: "#3FA74A",
                accent: "#f72411",
            },
            fontFamily: {
                secondary: "'Rajdhani', sans-serif"
            }
        },
    },
    plugins: [require("daisyui")],
}