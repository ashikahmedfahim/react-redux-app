import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BuyCake } from "../redux/cake/cakeActions";

const HookCakeContainer = () => {
  const numberOfCakes = useSelector(state => state.numberOfCakes)
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Cake - {numberOfCakes} </h2>
      <button onClick={()=> dispatch(BuyCake())}>Buy Cake</button>
    </div>
  );
};

export default HookCakeContainer;
