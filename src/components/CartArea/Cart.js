import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';

import { getStoreItemArray } from '../../reducers';
import { clearCart} from '../../actions';

import CartItem from './CartItem';
import Button from '../Button';

const Cart = () => {
  const storeItems = useSelector(getStoreItemArray);  
  const dispatch = useDispatch();
  const [amountOfItems, setAmountOfItems] = React.useState(storeItems.length)
  
  React.useEffect(()=>{
    setAmountOfItems(storeItems.length)
  },[storeItems])
  const total = storeItems.reduce((sum, item)=>sum + (item.quantity*item.price),0)
  
  return (
    <Wrapper>
      <Top>
        <Header>
          <h2>Your Cart</h2>
          <Info>
            <p>{amountOfItems} items selected</p>
            <Button theme={'secondary'} onClick={()=>dispatch(clearCart())}>
              clear cart
            </Button>
          </Info>
        </Header>
        <ItemsSelected>
          {storeItems.map((item, index)=><CartItem key={index} {...item}/>)}
        </ItemsSelected>
      </Top>
      <Total>
        <h2>Total: ${total/100}</h2>
        <Button style={{maxWidth: '100px'}}>Purchase</Button>
      </Total>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  display: grid;
  /* flex-direction: column; */
  height: 100vh;
  color: white;
  grid-template-rows: 1fr;
  grid-template-areas:
  'items-selected'
  'items-selected'
  'items-selected'
  'items-selected'
  'items-selected'
  'items-selected'
  'items-selected'
  'items-selected'
  'footer';
`;

const Top = styled.div`
  grid-area: items-selected;
  overflow-y: auto;
`;

const Header = styled.header`
  grid-area: header;
  h2{

  }
`;

const ItemsSelected = styled.div`
  /* grid-area: items-selected; */
  margin-right: 18px;
`;

const Total = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  grid-area: footer;
  position: sticky;
  bottom: 0;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  p{
    width: fit-content;
  }
`;