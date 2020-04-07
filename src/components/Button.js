import React from 'react';
import styled from 'styled-components';

const Button = ({ theme, onClick, children }) => {

  return (
  <>
    <StyledButton 
      onClick={onClick}
      theme={theme}
      >
      {children}
    </StyledButton>
  </>
  );
}
const StyledButton = styled.button`
  position: relative;
  display: block;
  width: 100%;
  border-radius: 12px;
  background: #ff406e;
  color: white;
  border: none;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  ${props=>props.theme==='secondary' && 
  (`background: black;
    width: 60px;
    font-size: 0.7rem;
    margin: 0;
    padding: 0;
    height: 30px;
    border: 2px solid grey;
  `)};
`;

// const Button = styled.button`
//   position: relative;
//   display: block;
//   width: 100%;
//   border-radius: 12px;
//   background: #ff406e;
//   color: white;
//   border: none;
//   padding: 8px;
//   font-size: 16px;
//   font-weight: 600;
//   cursor: pointer;
//   /* background: ${props=>props.theme==='secondary' && 'black'}; */
// `;

export default Button;
