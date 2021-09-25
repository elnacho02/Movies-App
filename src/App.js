
import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <header className={styles.header}>
        <Link to="/"><h1 className={styles.title}>NETFLEX</h1></Link>
        
      </header>
      <main>
      <Switch>
          <Route path="/movie/:movieId"><MovieDetails /></Route>
          <Route  exact path="/"><LandingPage /></Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
