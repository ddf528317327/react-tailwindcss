module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx,css,scss}","./src/**/*.{js,jsx,ts,tsx,css,scss}"],
  theme: {
    extend: {},
  },
  plugins: [
    {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  ],
}
