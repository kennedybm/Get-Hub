import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/details/:userName" component={Details} />
      </Switch>
    </Router>
  );
};
export default Routes;
