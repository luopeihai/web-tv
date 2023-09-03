import { Provider } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { store } from "./store";
import Header from "./components/header"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import './App.scss';


function App() {
  return (
    <Provider store={store} >
      <div className="app">
        <Router basename={process.env.PUBLIC_TEST}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/shows/:id" component={Detail} />
          </Switch>
        </Router>

      </div>
    </Provider>

  );
}

export default App;
