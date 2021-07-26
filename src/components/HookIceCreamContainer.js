import React from "react";
import { BuyIceCream } from "../redux/iceCream/iceCreamActions";
import { useSelector, useDispatch } from "react-redux";

const HookIceCreamContainer = () => {
  const numberOfIceCream = useSelector((state) => state.iceCream.numberOfIceCream);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of IceCreams - {numberOfIceCream}</h2>
      <button onClick={()=>dispatch(BuyIceCream())}>Buy IceCream</button>
    </div>
  );
};

export default HookIceCreamContainer;
