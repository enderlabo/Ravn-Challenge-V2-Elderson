import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Dashboard from "./pages/Dashboard";

  
  export default function AppRoutes() {
      return (
        <Router>
            <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/:personID" component={Dashboard} />
            
            <Redirect to="/" />
          </Switch>
        </Router>
      );
  }
  