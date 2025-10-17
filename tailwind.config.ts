module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'editorial': ['Editorial New', 'serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Editorial New', 'system-ui', 'sans-serif'],
      },
        colors: {
          'palette': {
            'cream': '#F8F8F0',
            'soft-blue': '#87CEEB',
            'warm-brown': '#8B4513',
            'dark-brown': '#654321',
            'soft-gray': '#A0A0A0',
            'light-brick-red': '#CD853F',
          },
        'primary': 'rgb(var(--primary-rgb))',
        'secondary': 'rgb(var(--secondary-rgb))',
        'accent': 'rgb(var(--accent-rgb))',
        'neutral': 'rgb(var(--neutral-rgb))',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
