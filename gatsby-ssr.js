/* eslint-disable react/no-danger */
import * as React from 'react';
import { getCssText } from './src/stitches.config';
import ThemeLayoutProvider from './src/hooks/useThemeLayoutProvider';
import LayoutWrapper from './src/layout';

export const onRenderBody = async ({ setHeadComponents }) => {
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

export const onPreRenderHTML = ({
  getHeadComponents,
  replaceHeadComponents,
}) => {
  if (process.env.NODE_ENV !== 'production') {
    return;
  }

  const transformedHeadComponents = getHeadComponents().map((node) => {
    if (node.type === 'style') {
      const globalStyleHref = node.props['data-href'];

      if (globalStyleHref) {
        return (
          <link
            href={globalStyleHref}
            rel="stylesheet"
            type="text/css"
            media="screen"
          />
        );
      }

      return node;
    }

    return node;
  });

  replaceHeadComponents(transformedHeadComponents);
};
