import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Romantic Love Palette
        blushPink: '#FFB6C1',
        roseGold: '#E8A0BF',
        deepRose: '#C54B6C',
        champagne: '#F7E7CE',
        softLavender: '#DCD6F7',
        burgundy: '#800020',
        creamWhite: '#FFF8F0',
        // Aliases for compatibility
        cream: '#FFF8F0',
        peach: '#FFB6C1',
        coral: '#C54B6C',
        butter: '#F7E7CE',
        mint: '#DCD6F7',
        lavender: '#DCD6F7',
        blush: '#E8A0BF',
        rust: '#C54B6C',
        clay: '#E8A0BF',
        slate: '#800020',
        taupe: '#D4A5A5',
        denim: '#9B7E9B',
        olive: '#C9A0DC',
      },
      fontFamily: {
        handwriting: ['Caveat', 'cursive'],
        display: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'twinkle': 'twinkle 2s ease-in-out infinite',
        'wiggle': 'wiggle 3s ease-in-out infinite',
        'glitter': 'glitter 1.5s ease-in-out infinite',
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(3deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.5', transform: 'scale(0.8)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        glitter: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.5)' },
          '50%': { opacity: '1', transform: 'scale(1)' },
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
