import { createStitches } from '@stitches/react';
import type * as Stitches from '@stitches/react';

export type CSS = Stitches.CSS<typeof config>;
export const { styled, css, getCssText, config, createTheme } = createStitches({
  theme: {
    colors: {
      // Project Colors
      primary: `#165DBA`,
      textPrimary: `#FFFBFE`,
      textSecondary: `#4CB944`,
      textTertiary: `#F0C808`,
      bgPrimary: `#151718`,

      // Borders
      borderPrimary: `#165DBA`,
      borderSecondary: `#4CB944`,
      borderTertiary: `#F0C808`,

      // Status
      success: `#4CB944`,
      error: `#F82D17`,
      warning: `#F0C808`,

      // Utils
      white: `#FFF`,
      black: `#000`,
    },
    fontSizes: {
      xs: `0.75rem`,
      sm: `0.875rem`,
      md: `1rem`,
      lg: `1.125rem`,
      xl: `1.25rem`,
      xxl: `1.5`,
    },
    fontWeights: {
      light: `300`,
      regular: `400`,
      medium: `500`,
      semiBold: `600`,
      bold: `700`,
      extraBold: `800`,
    },
    fonts: {
      fontBase: `"Poppins", sans-serif`,
      fontSizeBase: `16px`,
    },
  },
});

export const lightTheme = createTheme(`light-theme`, {
  colors: {
    primary: `#F3E`,
    textPrimary: `#151718`,
    bgPrimary: `#FFFBFE`,
  },
});
