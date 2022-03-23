import React from 'react';
import * as S from './styles';

const Layout: React.FC = ({ children }) => (
  <S.LayoutWrapper id="layout">Template Kamity{children}</S.LayoutWrapper>
);

export default Layout;
