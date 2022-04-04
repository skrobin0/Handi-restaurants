import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home-pages/Home/Home";

function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
           
          </Switch>
        </Router>
    </div>
  );
}

export default App;
