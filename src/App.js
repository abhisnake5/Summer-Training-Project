import './App.css';
import About from './Components/About';
import Lyrics from './Components/Lyrics';
import Movies from './Components/Movies';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
    <Router>
      <Navbar></Navbar>
<Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
          <Route exact path="/lyrics">
            <Lyrics />
          </Route>
        </Switch>
        </Router>
    </>
  );
}

export default App;
