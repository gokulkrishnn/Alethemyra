/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 16s linear infinite',
      
      colors: {
        'oxidised-bronze': '#665D1E',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Custom colors based on the requested palette
        aegean: {
          DEFAULT: "#1a3c5c", // deep aegean blue
          light: "#2a4c6c",
          dark: "#0a2239",
        },
        marble: {
          DEFAULT: "#f5f5f5", // marble white
        },
        bronze: {
          DEFAULT: "#b08d57", // oxidised bronze
          light: "#c09e68",
          dark: "#9a7c4a",
        },
        imperial: {
          DEFAULT: "#6e2639", // imperial purple
          light: "#7e2c40",
          dark: "#5e2030",
        },
        iron: {
          DEFAULT: "#4b4f56", // iron grey
          light: "#5a5e66",
          dark: "#3c4046",
        },
        gold: {
          DEFAULT: "#d4b878", // muted gold
          light: "#e0c88a",
          dark: "#c8a866",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
},
}