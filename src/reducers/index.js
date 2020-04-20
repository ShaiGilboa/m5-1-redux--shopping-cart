const initialState = {};

export default function cartReducer(state = initialState, action) {
  const newState = JSON.parse(JSON.stringify(state));
  switch(action.type) {
    case 'ADD_ITEM':
      
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: state[action.item.id] ? Number(state[action.item.id].quantity) + 1 : 1,
        }
      }
    case 'REMOVE_ITEM':
      delete newState[action.itemId];
      return {
        ...newState,
      }
    case 'UPDATE_QUANTITY':    
      const newItem = newState[action.data.itemId];
      newItem.quantity = action.data.newQuantity;
      return{
        ...newState,
        [action.data.itemId]: newItem,
      }
    case 'CLEAR_CART':
      return {};
    default:
      return state;
  };
};

export const getStoreItemArray = state => Object.values(state);