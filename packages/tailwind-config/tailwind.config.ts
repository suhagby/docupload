import type { Config } from 'tailwindcss'

export default {
  content: [
    '../../apps/web/**/*.{ts,tsx}',
    '../../packages/ui/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
