import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  background-color: #121113;
  top: 0;
  padding: 20px 0;

  h1 {
    margin: 0;
    color: #F7F7F2;
  }
`;

const Header = props => {
  return (
    <HeaderContainer>
      <h1>Friend List</h1>
    </HeaderContainer>
  );
};

export default Header;
