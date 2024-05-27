/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.tsx'],
    theme: {
        extend: {
            aspectRatio: {
                tempChart: '400 / 282',
                lightCircles: '3 / 1',
            },
        },
    },
    plugins: [],
}
