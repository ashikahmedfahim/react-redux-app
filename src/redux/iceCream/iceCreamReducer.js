import { Buy_IceCream } from "./iceCreamTypes";

const initialState = {
  numberOfIceCream: 10,
};

const IceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_IceCream:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };
    default:
      return state;
  }
};

export default IceCreamReducer;
