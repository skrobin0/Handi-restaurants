import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Component/Context/AuthProvider";
import Home from "./Component/Home-pages/Home/Home";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Pages/Dashboard Section/Dashboard/Dashboard";
import Foods from "./Component/Pages/Foods Details/Foods/Foods";
import SingleFoodDetails from "./Component/Pages/Foods Details/Single Food Details/SingleFoodDetails";


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
            <Route path="/shop">
             <Foods></Foods>
            </Route>
            <Route path="/dashboard">
             <Dashboard></Dashboard>
            </Route>
            <Route path="/singleFood/:id">
             <SingleFoodDetails></SingleFoodDetails>
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
