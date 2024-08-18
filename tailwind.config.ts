import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors : {
        'primary': '#FFFFFF',
        'primary1': '#363738',
        'secondary': '#F5F5F5', 
        'secondary1': '#FEFAF1',
        'BG': '#FFFFFF',
        'Text': '#FAFAFA',
        'Text1': '#7D8184',
        'Text2': '#000000',
        'Button': '#000000',
        'Secondary2': '#DB4444',
        'Button1': '#00FF66',
        'Button2': '#DB4444',
        'HoverButton1': '#E07575',
        'HoverButton2': '#A0BCE0'  
      }
    },
  },
  plugins: [],
};
export default config;
