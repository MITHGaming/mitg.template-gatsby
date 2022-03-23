import useLocalStorage from '@/hooks/useLocalStorage';
import { lightTheme } from '@/stitches.config';
import React from 'react';
import * as S from './styles';

export const ThemeSwitcher = () => {
  const [theme, setTheme] = useLocalStorage(`lightTheme`, false);

  React.useEffect(() => {
    document.documentElement.classList.toggle(lightTheme, theme);
  }, [theme]);

  const handleClick = () => setTheme(!theme);

  return <S.ThemeSwitcher onClick={handleClick}>Trocar</S.ThemeSwitcher>;
};

export default ThemeSwitcher;
