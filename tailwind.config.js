/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0E1116',
        paper: '#FAFAF8',
        surface: {
          light: '#FFFFFF',
          dark: '#161A21',
        },
        border: {
          light: '#E5E5E1',
          dark: '#252B34',
        },
        signal: '#00C896',
        amber: '#FFB454',
        muted: {
          light: '#6B7280',
          dark: '#8B93A1',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        base: ['16px', '1.6'],
      },
    },
  },
  plugins: [],
}
