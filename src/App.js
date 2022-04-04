import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Component/Context/AuthProvider";
import Home from "./Component/Home-pages/Home/Home";

function App() {
  return (
    <div>
      <AuthProvider>
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
      </AuthProvider>
    </div>
  );
}

export default App;
