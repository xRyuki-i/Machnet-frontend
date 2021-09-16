import './App.css';
import Profile from './Profile';
import Home from './Home';
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Router>
    </>
  );
}

export default App;
