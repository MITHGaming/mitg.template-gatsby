import React from 'react';
import { lightTheme as lightThemeClassName } from '@/stitches.config';
import useLocalStorage from './useLocalStorage';

const useThemeLayoutProvider = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [actualTheme, setTheme] = useLocalStorage(`lightTheme`, false);

  React.useLayoutEffect(() => {
    document.documentElement.classList.toggle(lightThemeClassName, actualTheme);
  }, [actualTheme]);

  return children;
};

export default useThemeLayoutProvider;
