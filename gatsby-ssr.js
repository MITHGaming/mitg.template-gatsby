/* eslint-disable react/no-danger */
import * as React from 'react';
import fs from 'fs';
import { getCssText } from './src/stitches.config';
import ThemeLayoutProvider from './src/hooks/useThemeLayoutProvider';
import LayoutWrapper from './src/layout';
import { globalStyles } from './src/styles/globalCss';

const getAllFonts = () => {
  const dir = fs.readdirSync('./static/fonts');
  return dir.filter((file) => file.endsWith('.woff2'));
};

export const onRenderBody = async ({ setHeadComponents }) => {
  setHeadComponents([
    getAllFonts().map((font) => (
      <link
        key={font}
        rel="preload"
        as="font"
        type="font/woff2"
        crossOrigin="anonymous"
        href={`/fonts/${font}`}
      />
    )),
  ]);
  globalStyles();

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
