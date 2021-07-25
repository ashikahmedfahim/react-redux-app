import { Provider } from "react-redux";
import store from "../src/redux/store";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  );
}

export default App;
