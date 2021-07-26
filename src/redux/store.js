import {createStore,applyMiddleware, combineReducers} from "redux";
import cakeReducer from "./cake/cakeReducer";
import IceCreamReducer from './iceCream/iceCreamReducer'
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';


const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: IceCreamReducer,
})

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));

export default store;
