import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend:{
      colors: {
        hotpink: '#fff9ee',
        green: '#5dae1d',
        orange: '#e79310',
        blue: '#181e4b',
        litepurple: '#5e6282',
        litegrey: '#686d77',
        litedark: '#212832',
       }
    },
  },
  plugins: [],
}
export default config
