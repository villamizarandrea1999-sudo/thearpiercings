/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "secondary": "#3a6847",
        "on-error": "#ffffff",
        "error": "#ba1a1a",
        "primary-fixed": "#ffd9de",
        "on-error-container": "#93000a",
        "background": "#e9ffec",
        "surface-container-high": "#d5efd9",
        "on-secondary-fixed-variant": "#225031",
        "surface-container-highest": "#d0e9d4",
        "on-primary-fixed": "#3f0015",
        "secondary-fixed-dim": "#a1d2aa",
        "on-background": "#0b2013",
        "surface-dim": "#c7e0cc",
        "surface-container": "#dbf4df",
        "primary": "#9c3e54",
        "primary-fixed-dim": "#ffb2be",
        "on-secondary-container": "#406e4d",
        "error-container": "#ffdad6",
        "inverse-surface": "#203527",
        "tertiary-fixed-dim": "#f0c03f",
        "tertiary": "#775a00",
        "surface-bright": "#e9ffec",
        "primary-container": "#e87a90",
        "surface-container-lowest": "#ffffff",
        "on-surface": "#0b2013",
        "on-secondary": "#ffffff",
        "secondary-fixed": "#bcefc5",
        "tertiary-container": "#c1960e",
        "on-tertiary-fixed": "#251a00",
        "on-secondary-fixed": "#00210d",
        "on-surface-variant": "#554245",
        "outline": "#877274",
        "on-primary-container": "#64132b",
        "surface-variant": "#d0e9d4",
        "secondary-container": "#bcefc5",
        "on-tertiary-container": "#423100",
        "on-tertiary": "#ffffff",
        "on-primary": "#ffffff",
        "on-primary-fixed-variant": "#7e273d",
        "outline-variant": "#dac0c3",
        "surface": "#e9ffec",
        "on-tertiary-fixed-variant": "#5a4400",
        "inverse-on-surface": "#def7e2",
        "tertiary-fixed": "#ffdf97",
        "inverse-primary": "#ffb2be",
        "surface-tint": "#9c3e54",
        "surface-container-low": "#e1fae5",
        "scrapbook-blue": "#84a9c0",
        "scrapbook-red": "#b04b4b",
        "scrapbook-cream": "#f5f2e9"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        "inner-padding": "24px",
        "section-gap": "80px",
        gutter: "16px",
        "margin-mobile": "20px",
        "margin-desktop": "60px"
      },
      fontFamily: {
        "body-lg": ["Karla"],
        "label-caps": ["Space Mono"],
        "headline-lg-mobile": ["Bricolage Grotesque"],
        "display-lg": ["Bricolage Grotesque"],
        "headline-md": ["Bricolage Grotesque"],
        "body-md": ["Karla"],
        "headline-lg": ["Bricolage Grotesque"]
      },
      fontSize: {
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "700" }],
        "headline-lg-mobile": ["36px", { lineHeight: "40px", fontWeight: "700" }],
        "display-lg": ["72px", { lineHeight: "76px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-md": ["32px", { lineHeight: "38px", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "24px", fontWeight: "400" }],
        "headline-lg": ["48px", { lineHeight: "52px", letterSpacing: "-0.02em", fontWeight: "700" }]
      }
    }
  },
  plugins: []
}
