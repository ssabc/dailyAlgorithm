
import { HashRouter,Route,Switch} from "react-router-dom";
import './App.css';
import Home from './pages/Home/index';
import Header from './layout/Header/index';
// import Footer from './layout/Footer/index';

function App() {
  return (
    <HashRouter>
      <div className="app-wrap">
        <Header></Header>
        <div className="main-wrap">
          <Switch>
            <Route path="/">
              <Route path="/" component={Home}></Route>
              {/* <Route path="/algorithm1" exact component={Algorithm1}></Route>
              <Route path="/algorithm2" exact component={Algorithm2}></Route>
              <Route path="/algorithm3" exact component={Algorithm3}></Route> */}
            </Route>
          </Switch>
        </div>
        {/* <Footer></Footer> */}
      </div>
    </HashRouter>
  );
}

export default App;
