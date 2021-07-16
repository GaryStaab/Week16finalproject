import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Navigation from './components/navigation';
import Home from './components/home';
import Users from './components/users';
import InventoryTransfer from './components/inventorytransfer';
import Receiving from './components/receiving';
import Shipping from "./components/shipping";
import Physical from "./components/physical";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/users'>
              <Users />
            </Route>
            <Route path='/inventoryTransfer'>
              <InventoryTransfer />
            </Route>
            <Route path='/receiving'>
              <Receiving />
            </Route>
            <Route path='/shipping'>
              <Shipping />
            </Route>
            <Route path='/physical'>
              <Physical />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
