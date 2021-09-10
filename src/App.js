import React, { Component } from "react";
import "./App.css";
import "./components/hero/hero.css";
import "./components/internetchart/internetChart.css";
import "./components/healthchart/healthChart.css";
import "./components/traveltime/travelTime.css";
import Home from "./Pages/HomePage";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// import NotFoundPage from "./Pages/404page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Home />
          {/* <Navigation /> */}
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
              <Switch>
                {/* <Route path="/" component={} exact />
                <Route path="/about" component={} exact />
                
                <Route component={} />
                <Redirect to="/" /> */}
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          {/* <Footer /> */}
        </div>
      </Router>
    );
  }
}

export default App;
