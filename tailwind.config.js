/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shopify-green': '#95BF47',
        'klaviyo-teal': '#004B50',
        'refersion-coral': '#FF6B47',
        'quickbooks-green': '#2CA01C',
        'skio-purple': '#6366F1',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}