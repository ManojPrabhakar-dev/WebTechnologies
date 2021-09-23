import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems: [],shippingAddress: {} }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;

      const existItem = state.cartItems.find((x) => x.product === item.product);

      if (existItem) {
        console.log("exist item : " + existItem);
        return {
          ...state, //TODO
          cartItems: state.cartItems.map((x) =>
            x.product === item.product ? item : x  //in final used existItem.
          ),
        };
      } else {
        console.log("item : " + item);
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      };
    case CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload,
      }
    default:
      return state;
  }
};
