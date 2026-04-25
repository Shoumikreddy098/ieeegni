/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
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
  },
  extend: {
  keyframes: {
    fadeIn: {
      '0%': { opacity: '0' },
      '100%': { opacity: '1' },
    },
    fadeInUp: {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
    slideIn: {
      '0%': { opacity: '0', transform: 'translateX(-50px)' },
      '100%': { opacity: '1', transform: 'translateX(0)' },
    },
  },
  animation: {
    fadeIn: 'fadeIn 1s ease-out',
    fadeInUp: 'fadeInUp 1s ease-out',
    slideIn: 'slideIn 1s ease-out',
  },
},
extend: {
  animation: {
    'glow': 'glow 2s ease-in-out infinite',
  },
  keyframes: {
    glow: {
      '0%, 100%': { textShadow: '0 0 10px #a855f7, 0 0 20px #9333ea' },
      '50%': { textShadow: '0 0 20px #a855f7, 0 0 30px #9333ea' },
    },
  },
},
extend: {
  keyframes: {
    fadeInDown: {
      '0%': { opacity: 0, transform: 'translateY(-10px)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
  animation: {
    fadeInDown: 'fadeInDown 0.8s ease-out',
  },
},
extend: {
  animation: {
    'slide-down': 'slideDown 0.4s ease-out',
  },
  keyframes: {
    slideDown: {
      '0%': { opacity: 0, transform: 'translateY(-20%)' },
      '100%': { opacity: 1, transform: 'translateY(0)' },
    },
  },
},
theme: {
  extend: {
    animation: {
      slideDown: 'slideDown 0.3s ease-out forwards',
    },
    keyframes: {
      slideDown: {
        '0%': { opacity: 0, transform: 'translateY(-10%)' },
        '100%': { opacity: 1, transform: 'translateY(0)' },
      },
    },
  },
},

extend: {
  animation: {
    slideDown: "slideDown 0.4s ease-out forwards",
    fadeInUp: "fadeInUp 0.5s ease forwards",
  },
  keyframes: {
    slideDown: {
      "0%": { opacity: 0, transform: "translateY(-10%)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    fadeInUp: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
},
extend: {
  animation: {
    slideDown: "slideDown 0.4s ease-out forwards",
    fadeInUp: "fadeInUp 0.4s ease forwards",
  },
  keyframes: {
    slideDown: {
      "0%": { opacity: 0, transform: "translateY(-10%)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
    fadeInUp: {
      "0%": { opacity: 0, transform: "translateY(20px)" },
      "100%": { opacity: 1, transform: "translateY(0)" },
    },
  },
},





}