module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brandgreen-700": "var(--brandgreen-700)",
        "neutral-colors-100": "var(--neutral-colors-100)",
        "neutral-colors-800": "var(--neutral-colors-800)",
        "neutral-colors100": "var(--neutral-colors100)",
        "neutral-colors300": "var(--neutral-colors300)",
        "neutral-colors600": "var(--neutral-colors600)",
        "primary-paletteblue": "var(--primary-paletteblue)",
        "secondary-colorsblue-300": "var(--secondary-colorsblue-300)",
        "system-dark": "var(--system-dark)",
        white: "var(--white)",
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
      },
      fontFamily: {
        "bold-header": "var(--bold-header-font-family)",
        "display-1-uppercase-semi-bold":
          "var(--display-1-uppercase-semi-bold-font-family)",
        "display-2-regular": "var(--display-2-regular-font-family)",
        "display-2-semi-bold": "var(--display-2-semi-bold-font-family)",
        "display-3-semi-bold": "var(--display-3-semi-bold-font-family)",
        "display-4-semi-bold": "var(--display-4-semi-bold-font-family)",
        "display-5-semi-bold": "var(--display-5-semi-bold-font-family)",
        "display-6-semi-bold": "var(--display-6-semi-bold-font-family)",
        "display-7-semi-bold": "var(--display-7-semi-bold-font-family)",
        "display-9-extra-bold": "var(--display-9-extra-bold-font-family)",
        "paragraph-default-regular":
          "var(--paragraph-default-regular-font-family)",
        "paragraph-medium-regular":
          "var(--paragraph-medium-regular-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      boxShadow: {
        "neutral-shadow-02": "var(--neutral-shadow-02)",
        "style-guide-icons-sidebar": "var(--style-guide-icons-sidebar)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
