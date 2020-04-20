import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { removeItem, updateQuantity } from '../../actions';

const CartItem = ({id, title, quantity}) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = React.useState(quantity);
  React.useEffect(()=>{    
    setAmount(quantity)
  },[quantity])

  const filterInput = (event) => {
    if(event.target.value>=0) dispatch(updateQuantity(id,event.target.value))
  }

  return (
    <Wrapper>
      <Top>
        <h2>{title}</h2>
        <StyledButton
          onClick={()=>dispatch(removeItem(id))}
        >X</StyledButton>
      </Top>
      <Bottom>
        <h3>Quantity:</h3>
        <StyledInput
        value={amount}
        onChange={(event)=>{filterInput(event);}}
        />
      </Bottom>
    </Wrapper>
  );
};

export default CartItem;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: dashed 1px #836d85;
  margin: 5px 0;
`;

const Top = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  color: white;
  h2{
    width: fit-content;
    margin: 10px;
  }
`;

const StyledButton = styled.div`
  background: transparent;
  width: fit-content;
  margin: 2px;
  :hover {
    cursor: pointer;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction:row;
  background: #301732;
  color:grey;
  h3 {
    margin: 10px;
  }
`;

const StyledInput = styled.input`
  margin: auto 0;
  padding: 0;
  color: white;
  width: 1.2rem;
  height: 1.2rem;
  text-align:center;
  justify-content:end;
  border: none;
  background: transparent;
  border-bottom: solid 3px white;
`;