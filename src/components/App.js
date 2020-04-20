import React from 'react';
import styled from 'styled-components';

import Logo from './Logo';
import ItemGrid from './ItemGrid';
import GlobalStyles from './GlobalStyles';
import CartArea from './CartArea';

const App = () => {
  return (
    <Wrapper>
      <Body>
        <Header>
          <Logo />
        </Header>
        <ItemGridWrapper>
          <ItemGrid />
        </ItemGridWrapper>
      </Body>
      <CartWrapper>
        <CartArea />
      </CartWrapper>
      <GlobalStyles />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  position: relative;
  grid-template-areas:
    'body body  sidebar'
    'body body  sidebar'
    'body body  sidebar';
`;

const Body = styled.div`
  grid-area: body;
  display: grid;
  grid-template-areas:
    'header header'
    'main main'
    'main main'
    'main main';
  border-right: 3px dashed #ff406e;
  margin-right: 8px;
`;

const Header = styled.header`
  grid-area: header;
  padding: 32px 64px;
`;

const ItemGridWrapper = styled.main`
  grid-area: main;
  padding: 16px 64px;
`;

const CartWrapper = styled.div`
  grid-area: sidebar;
  background: #401f43;
  padding-left: 18px;
  height: 100vh;
  position: sticky;
  top: 0;
`;

export default App;
