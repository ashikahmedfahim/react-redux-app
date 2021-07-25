import React from "react";
import {connect} from "react-redux";
import "./CakeContainer.css";
import { BuyCake } from "../redux/cake/cakeActions";

const CakeContainer = (props) => {
  

  return (
    <div className="main">
      <h2>Number of Cakes - {props.numberOfCakes}</h2>
      <button onClick={props.BuyCake}>Buy Cake</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    BuyCake: () => dispatch(BuyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
