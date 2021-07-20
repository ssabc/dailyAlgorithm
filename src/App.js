
import { HashRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home/index';

import Algorithm1 from './components/Algorithm1/index';

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/">
          <Route path="/" exact component={Home}></Route>
          <Route path="/algorithm1" exact component={Algorithm1}></Route>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
