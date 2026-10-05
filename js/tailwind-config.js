tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          magenta: '#E31B6D',
          'magenta-dark': '#C2135A',
          cyan: '#00C2E8',
          'cyan-dark': '#0891B2',
          coffee: '#3D1E16',
          'coffee-dark': '#24100B',
          cream: '#FFF9F6',
          blush: '#FDF2F4',
          surface: '#FFFFFF'
        },
        whatsapp: '#25D366'
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif']
      },
      boxShadow: {
        'glow-magenta': '0 10px 25px -5px rgba(227, 27, 109, 0.35)',
        'glow-cyan': '0 10px 25px -5px rgba(0, 194, 232, 0.35)',
        'card-soft': '0 12px 35px -8px rgba(61, 30, 22, 0.08), 0 4px 12px -2px rgba(61, 30, 22, 0.04)',
        'action-btn': '0 8px 20px -4px rgba(61, 30, 22, 0.12)'
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' }
        }
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
        'float-slow': 'floatSlow 4s ease-in-out infinite'
      }
    }
  }
};