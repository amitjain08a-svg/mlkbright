/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Sophisticated, minimal color palette
      colors: {
        // Neutral foundation with warm/cool undertones
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Warm sand tones
        sand: {
          50: '#faf7f2',
          100: '#f5efe5',
          200: '#e8ddcf',
          300: '#dbcbb8',
          400: '#c9b59a',
          500: '#b79f7c',
          600: '#9f8664',
          700: '#7f6b4f',
          800: '#5f4f3c',
          900: '#403428',
          950: '#221b14',
        },
        // Cool slate tones
        slate: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Soft, muted primary (sage)
        primary: {
          50: '#f4f7f3',
          100: '#e6ede3',
          200: '#cddbc7',
          300: '#b4c9ab',
          400: '#9bb78f',
          500: '#82a573',
          600: '#68845c',
          700: '#4e6345',
          800: '#34422e',
          900: '#1a2117',
          950: '#0d110c',
        },
        // Warm accent (terracotta)
        accent: {
          50: '#fcf7f4',
          100: '#f9ede6',
          200: '#f3dbcd',
          300: '#edc9b4',
          400: '#e7b79b',
          500: '#e1a582',
          600: '#b48468',
          700: '#87634e',
          800: '#5a4234',
          900: '#2d211a',
          950: '#17110d',
        },
        // Soft backgrounds
        background: {
          light: '#ffffff',
          DEFAULT: '#faf7f2',
          dark: '#f5efe5',
          paper: '#ffffff',
        },
      },
      
      // Refined, elegant font families
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'Georgia', 'Cambria', 'serif'],
        mono: ['var(--font-jetbrains-mono)', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        display: ['var(--font-cal-sans)', 'var(--font-inter)', 'Helvetica Neue', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      
      // Subtle, meaningful animations
      animation: {
        // Gentle fades
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        'fade-in-down': 'fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1)',
        
        // Smooth reveals
        'slide-in': 'slideIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.23, 1, 0.32, 1)',
        
        // Elegant hover effects
        'float': 'float 4s ease-in-out infinite',
        'gentle-pulse': 'gentlePulse 3s ease-in-out infinite',
        
        // Loading states
        'shimmer': 'shimmer 2s infinite linear',
        'progress': 'progress 1.5s ease-in-out infinite',
        
        // Attention grabbers (subtle)
        'soft-bounce': 'softBounce 1s ease-in-out',
        'gentle-ring': 'gentleRing 2s ease-in-out infinite',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        
        fadeInDown: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        
        slideIn: {
          '0%': { 
            transform: 'translateX(-10px)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          },
        },
        
        scaleIn: {
          '0%': { 
            transform: 'scale(0.95)',
            opacity: '0'
          },
          '100%': { 
            transform: 'scale(1)',
            opacity: '1'
          },
        },
        
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px)'
          },
          '50%': { 
            transform: 'translateY(-5px)'
          },
        },
        
        gentlePulse: {
          '0%, 100%': { 
            opacity: '1'
          },
          '50%': { 
            opacity: '0.8'
          },
        },
        
        shimmer: {
          '0%': { 
            backgroundPosition: '-200% 0'
          },
          '100%': { 
            backgroundPosition: '200% 0'
          },
        },
        
        progress: {
          '0%': { 
            transform: 'scaleX(0)',
            transformOrigin: 'left'
          },
          '50%': { 
            transform: 'scaleX(1)',
            transformOrigin: 'left'
          },
          '51%': { 
            transform: 'scaleX(1)',
            transformOrigin: 'right'
          },
          '100%': { 
            transform: 'scaleX(0)',
            transformOrigin: 'right'
          },
        },
        
        softBounce: {
          '0%, 100%': { 
            transform: 'scale(1)'
          },
          '50%': { 
            transform: 'scale(1.05)'
          },
        },
        
        gentleRing: {
          '0%, 100%': { 
            transform: 'rotate(0deg)'
          },
          '10%': { 
            transform: 'rotate(2deg)'
          },
          '20%': { 
            transform: 'rotate(-2deg)'
          },
          '30%': { 
            transform: 'rotate(1deg)'
          },
          '40%': { 
            transform: 'rotate(-1deg)'
          },
          '50%': { 
            transform: 'rotate(0deg)'
          },
        },
      },
      
      // Refined blur effects
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        DEFAULT: '8px',
        md: '12px',
        lg: '16px',
        xl: '20px',
        '2xl': '24px',
      },
      
      // Harmonic spacing system (based on 8px grid)
      spacing: {
        '0': '0px',
        'px': '1px',
        '0.5': '0.125rem',   // 2px
        '1': '0.25rem',       // 4px
        '1.5': '0.375rem',    // 6px
        '2': '0.5rem',        // 8px
        '2.5': '0.625rem',    // 10px
        '3': '0.75rem',       // 12px
        '3.5': '0.875rem',    // 14px
        '4': '1rem',          // 16px
        '5': '1.25rem',       // 20px
        '6': '1.5rem',        // 24px
        '7': '1.75rem',       // 28px
        '8': '2rem',          // 32px
        '9': '2.25rem',       // 36px
        '10': '2.5rem',       // 40px
        '11': '2.75rem',      // 44px
        '12': '3rem',         // 48px
        '14': '3.5rem',       // 56px
        '16': '4rem',         // 64px
        '18': '4.5rem',       // 72px
        '20': '5rem',         // 80px
        '24': '6rem',         // 96px
        '28': '7rem',         // 112px
        '32': '8rem',         // 128px
        '36': '9rem',         // 144px
        '40': '10rem',        // 160px
        '44': '11rem',        // 176px
        '48': '12rem',        // 192px
        '52': '13rem',        // 208px
        '56': '14rem',        // 224px
        '60': '15rem',        // 240px
        '64': '16rem',        // 256px
        '72': '18rem',        // 288px
        '80': '20rem',        // 320px
        '96': '24rem',        // 384px
      },
      
      // Smooth transition curves
      transitionTimingFunction: {
        'elegant-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'elegant-out': 'cubic-bezier(0, 0, 0.58, 1)',
        'elegant-in-out': 'cubic-bezier(0.42, 0, 0.58, 1)',
        'soft-in': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'soft-out': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      
      // Refined border radius
      borderRadius: {
        'none': '0',
        'sm': '0.25rem',      // 4px
        'DEFAULT': '0.375rem', // 6px
        'md': '0.5rem',        // 8px
        'lg': '0.75rem',       // 12px
        'xl': '1rem',          // 16px
        '2xl': '1.5rem',       // 24px
        '3xl': '2rem',         // 32px
        'full': '9999px',
      },
      
      // Elegant box shadows
      boxShadow: {
        'sm': '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        'md': '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        'lg': '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        'xl': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
        'elegant': '0 20px 40px -10px rgba(0, 0, 0, 0.1)',
        'elevation-1': '0 2px 4px rgba(0, 0, 0, 0.02), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'elevation-2': '0 4px 8px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.04)',
        'elevation-3': '0 8px 16px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.05)',
        'elevation-4': '0 16px 24px rgba(0, 0, 0, 0.05), 0 8px 12px rgba(0, 0, 0, 0.06)',
      },
      
      // Subtle background effects
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-elegant': 'linear-gradient(135deg, #f5efe5 0%, #faf7f2 100%)',
        'gradient-soft': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 100%)',
        'noise-light': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E\")",
      },
      
      // Typography scale
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      
      // Font weights
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      
      // Letter spacing
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      
      // Line height
      lineHeight: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      
      // Z-index scale (simplified)
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        'auto': 'auto',
        'dropdown': '1000',
        'sticky': '1100',
        'modal': '2000',
        'popover': '3000',
        'tooltip': '4000',
        'toast': '5000',
      },
      
      // Opacity
      opacity: {
        '0': '0',
        '5': '0.05',
        '10': '0.1',
        '20': '0.2',
        '25': '0.25',
        '30': '0.3',
        '40': '0.4',
        '50': '0.5',
        '60': '0.6',
        '70': '0.7',
        '75': '0.75',
        '80': '0.8',
        '90': '0.9',
        '95': '0.95',
        '100': '1',
      },
    },
  },
  plugins: [],
}