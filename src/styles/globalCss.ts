import { globalCss } from '@stitches/react';
import './resets/_modern-normalize.css';
import './resets/reset.css';

export const globalStyles = globalCss({
  /* '@font-face': [
    {
      fontFamily: `Poppins`,
      fontWeight: `300`,
      src: `local(""), url("../fonts/Poppins-Light.ttf") format("truetype")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `400`,
      src: `local(""), url("../fonts/Poppins-Regular.ttf") format("truetype")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `500`,
      src: `local(""), url("../fonts/Poppins-Medium.ttf") format("truetype")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `600`,
      src: `local(""), url("../fonts/Poppins-SemiBold.ttf") format("truetype")`,
    },
    {
      fontFamily: `Poppins`,
      fontWeight: `700`,
      src: `local(""), url("../fonts/Poppins-Bold.ttf") format("truetype")`,
    },
  ], */
  '*': {
    fontFamily: `Poppins`,
    fontSize: `16px`,
    fontWeight: `400`,
  },
});
