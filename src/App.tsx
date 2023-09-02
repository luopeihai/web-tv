import { Provider } from "react-redux";
import { store } from "./store";
import Header from "./components/header"
import Home from "./pages/Home"

import './App.scss';

function App() {
  return (
    <Provider store={store} >
      <div className="app">
        <Header />
        <Home />
      </div>
    </Provider>

  );
}

export default App;
