import { Provider } from "react-redux";
import store from "../src/redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";
import HookIceCreamContainer from "./components/HookIceCreamContainer";

function App() {
  return (
    <Provider store={store}>
      <HookCakeContainer />
      <HookIceCreamContainer/>
      <CakeContainer />
    </Provider>
  );
}

export default App;
