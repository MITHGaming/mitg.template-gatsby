import { globalCss } from '@stitches/react';
import './resets/_modern-normalize.css';
import './resets/reset.css';

export const globalStyles = globalCss({
  '@font-face': [
    {
      fontFamily: `Poppins`,
      fontWeight: `300`,
      src: `local(""), url("/fonts/Poppins-Light.woff2") format("woff2")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `400`,
      src: `local(""), url("../fonts/Poppins-Regular.woff2") format("woff2")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `500`,
      src: `local(""), url("/fonts/Poppins-Medium.woff2") format("woff2")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `600`,
      src: `local(""), url("/fonts/Poppins-SemiBold.woff2") format("woff2")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `700`,
      src: `local(""), url("/fonts/Poppins-Bold.woff2") format("woff2")`,
    },
  ],
  '*': {
    fontFamily: `Poppins`,
    fontSize: `16px`,
    fontWeight: `400`,
    fontDisplay: `swap`,
  },
});
