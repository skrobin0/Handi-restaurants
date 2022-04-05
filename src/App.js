import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Component/Context/AuthProvider";
import Home from "./Component/Home-pages/Home/Home";
import Login from "./Component/Login/Login";

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
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
