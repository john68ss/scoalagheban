/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        neo: {
          bg: '#0F1419',           // Darker professional background
          panel: 'rgba(255,255,255,.04)',
          line: 'rgba(255,255,255,.10)',
          glow: '#FF6B35',         // Safety orange (primary)
          cyan: '#1E88E5',         // Trust blue
          lime: '#43A047',         // Success green
        },
        // Driving school themed colors
        drive: {
          orange: '#FF6B35',       // Main accent - safety, energy
          blue: '#1E88E5',         // Trust, professionalism
          green: '#43A047',        // Success, progress
          yellow: '#FFB300',       // Attention, learning
          red: '#E53935',          // Stop, important
          dark: '#1A1F2E',         // Dark background
        },
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,107,53,.22), 0 0 40px rgba(255,107,53,.25)',
        glowStrong: '0 0 0 1px rgba(255,107,53,.30), 0 0 70px rgba(255,107,53,.35)',
      },
      backgroundImage: {
        grid: 'linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)',
        aurora:
          'radial-gradient(900px 600px at 25% 10%, rgba(255,107,53,.25), transparent 55%), radial-gradient(800px 500px at 75% 0%, rgba(30,136,229,.25), transparent 52%), radial-gradient(700px 450px at 60% 40%, rgba(67,160,71,.14), transparent 55%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 10s ease infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
