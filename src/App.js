
import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import {Route, Switch, useLocation} from "react-router-dom"
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import MovieDetail from "./pages/MovieDetail";
import {AnimatePresence} from "framer-motion";
import ScrollTop from "./components/ScrollTop";


function App() {
    const location = useLocation()
  return (
    <div className="App">
        <GlobalStyle/>
        <ScrollTop/>
        <Nav/>
        <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
            <Route exact path="/" ><AboutUs/></Route>
            <Route  path="/contact"><ContactUs/></Route>
            <Route exact  path="/work" ><OurWork/></Route>
            <Route  path="/work/:id" ><MovieDetail/></Route>
        </Switch>
        </AnimatePresence>
    </div>
  );
}

export default App;
