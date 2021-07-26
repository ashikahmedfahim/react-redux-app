import { Provider } from "react-redux";
import store from "../src/redux/store";
import CakeContainer from "./components/CakeContainer";
import HookCakeContainer from "./components/HookCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <HookCakeContainer />
      <CakeContainer />
    </Provider>
  );
}

export default App;
