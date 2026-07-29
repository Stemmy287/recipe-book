module.exports = {
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background))',
        foreground: 'rgb(var(--foreground))',
        primary: {
          DEFAULT: 'rgb(var(--primary))',
          foreground: 'rgb(var(--primary-foreground))',
        },
        secondary: 'rgb(var(--secondary))',
        muted: {
          DEFAULT: 'rgb(var(--muted))',
          foreground: 'rgb(var(--muted-foreground))',
        },
        accent: 'rgb(var(--accent))',
        destructive: 'rgb(var(--destructive))',
        border: 'rgb(var(--border))',
        input: {
          DEFAULT: 'rgb(var(--input-background))',
          background: 'rgb(var(--input-background))',
        },
        switch: {
          DEFAULT: 'rgb(var(--switch-background))',
          background: 'rgb(var(--switch-background))',
        },
        ring: 'rgb(var(--ring))',
        sidebar: {
          DEFAULT: 'rgb(var(--sidebar-primary))',
          primary: 'rgb(var(--sidebar-primary))',
        },
      },
    },
  },
};
