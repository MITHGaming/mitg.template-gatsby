import './src/styles/fonts.css';
import './src/styles/resets/_modern-normalize.css';
import './src/styles/resets/reset.css';
import React from 'react';
import ThemeLayoutProvider from './src/hooks/useThemeLayoutProvider';
import LayoutWrapper from './src/layout';

export const wrapRootElement = ({ element }) => (
  <ThemeLayoutProvider>{element}</ThemeLayoutProvider>
);

export const wrapPageElement = ({ element }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);
