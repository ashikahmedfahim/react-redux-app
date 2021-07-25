import { Buy_Cake } from "./cakeTypes";

const initialState = {
  numberOfCakes: 10,
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        ...state,
        numberOfCakes: state.numberOfCakes - 1,
      };
    default:
      return state;
  }
};

export default CakeReducer;
