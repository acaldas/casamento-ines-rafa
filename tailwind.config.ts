import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import Forms from "@tailwindcss/forms";
import Typography from "@tailwindcss/typography";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  future: {
    hoverOnlyWhenSupported: true,
    respectDefaultRingColorOpacity: true,
    disableColorOpacityUtilitiesByDefault: true,
    relativeContentPathsByDefault: true,
  },
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
    },
    extend: {
      transitionTimingFunction: {
        DEFAULT: defaultTheme.transitionTimingFunction.out,
      },
      colors: {
        green: "#4D503A",
        orange: "#D3633D",
        yellow: "#F8DDA0",
        background: "#FCF8EC",
        text: "#262E38",
        prose: "#374151",
      },
    },
    keyframes: {
      fade: {
        "0%": { opacity: "0" },
        "100%": { transform: "1" },
      },
    },
    animation: {
      fade: "fade 3s linear forwards",
    },
    backgroundImage: {
      line: "linear-gradient(180deg, #4D503A 0%, rgba(77, 80, 58, 0) 100%)",
    },
  },
  plugins: [Forms, Typography],
} satisfies Config;
