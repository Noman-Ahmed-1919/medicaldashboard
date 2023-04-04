import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Switch, Router } from "react-router-dom";
import history from "./components/history.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Router history={history}>
          <Switch>
            <Home />
          </Switch>
        </Router>
      </BrowserRouter>
    </div>
  );
}

export default App;
