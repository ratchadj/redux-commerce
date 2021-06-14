import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Home, ProductDetail} from './containers'
import { Nav } from "./components";


function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        <Route exact path={'/'} component={Home}/>
        <Route exact path={'/product/:id'} component={ProductDetail}/>
          <Route>404 Not Found</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
