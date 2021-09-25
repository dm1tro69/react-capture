
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import {Route, Switch} from "react-router-dom"
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";


function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <Nav/>
        <Switch>
            <Route exact path="/" ><AboutUs/></Route>
            <Route  path="/contact"><ContactUs/></Route>
            <Route  path="/work" ><OurWork/></Route>
        </Switch>

    </div>
  );
}

export default App;
