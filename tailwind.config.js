module.exports = {
    purge: {
        content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"]
    },
    darkMode: false,
    theme: {
        extends: {
            fontFamily: {
                sans: ["Open Sans"]
            },
            gridTemplateColumns: {
                "1/5": "1fr 5fr"
            }
        },
    },
    variants: {
        extends: {},
    },
    plugin: [require('@tailwindcss/forms')]
}