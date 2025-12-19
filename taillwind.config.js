/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'neon-glow': `
          0 0 20px rgba(144, 0, 255, 0.6),
          0 0 40px rgba(0, 255, 255, 0.3),
          0 0 60px rgba(255, 0, 255, 0.2)
        `,
      },
      animation: {
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
      },
      keyframes: {
        glowPulse: {
          '0%, 100%': {
            boxShadow: `
              0 0 20px rgba(144, 0, 255, 0.6),
              0 0 40px rgba(0, 255, 255, 0.3),
              0 0 60px rgba(255, 0, 255, 0.2)
            `,
          },
          '50%': {
            boxShadow: `
              0 0 30px rgba(144, 0, 255, 0.8),
              0 0 60px rgba(0, 255, 255, 0.4),
              0 0 80px rgba(255, 0, 255, 0.3)
            `,
          },
        },
      },
    },
  },
  plugins: [],
}
