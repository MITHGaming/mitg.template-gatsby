import React from 'react';
import { globalStyles } from './src/styles/globalCss';
import ThemeLayoutProvider from './src/hooks/useThemeLayoutProvider';
import LayoutWrapper from './src/layout';

export const wrapRootElement = ({ element }) => {
  globalStyles();
  return <ThemeLayoutProvider>{element}</ThemeLayoutProvider>;
};

export const wrapPageElement = ({ element }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);
