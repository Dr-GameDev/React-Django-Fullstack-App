/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image': "url('/src/assets/Polygon Luminary.svg')",
        'banner-image': "url('/src/assets/Banner.svg')",
        'animated-shape': "url('/src/assets/AnimatedShape.svg')",
        'animated-waves': "url('/src/assets/AnimatedWaves.svg')",
        'waves': "url('/src/assets/waves.svg')",
      },
      colors: {
        "primary": "#0e2a47",
        "secondary": "#132e65",
        "accent": "#3adef8",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}