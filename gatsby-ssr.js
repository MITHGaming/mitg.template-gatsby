/* eslint-disable react/no-danger */
import * as React from 'react';
import { getCssText } from './src/stitches.config';
import ThemeLayoutProvider from './src/hooks/useThemeLayoutProvider';
import LayoutWrapper from './src/layout';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{ __html: getCssText() }}
    />,
  ]);
};

export const wrapRootElement = ({ element }) => (
  <ThemeLayoutProvider>{element}</ThemeLayoutProvider>
);

export const wrapPageElement = ({ element }) => (
  <LayoutWrapper>{element}</LayoutWrapper>
);
