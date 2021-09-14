import React, { Component } from "react";
import "./App.css";
import "./components/navigation/navigation.css";
import "./components/hero/hero.css";
import "./components/statsOptions/statsOptions.css";
import "./components/internetchart/internetChart.css";
import "./components/healthchart/healthChart.css";
import "./components/traveltime/travelTime.css";
import "./components/loading/loading.css";
import Home from "./Pages/HomePage";
import StatsList from "./components/statsOptions/StatsList";
import Navigation from "./components/navigation/Navigation.js";
import HealthChart from "./components/healthchart/HealthChart";
import InternetChart from "./components/internetchart/InternetChart";
import TravelTimeChart from "./components/traveltime/TravelTime";
import AllHealthChart from "./components/healthchart/AllHealthChart";
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
          <Navigation />
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
              <Switch>
                <Route path="/" component={Home} exact />

                <Route path="/statslist" component={StatsList} exact />
                <Route path="/internetchart" component={InternetChart} exact />
                <Route path="/healthchart" component={HealthChart} exact />
                <Route
                  path="/allhealthchart"
                  component={AllHealthChart}
                  exact
                />
                <Route
                  path="/traveltimechart"
                  component={TravelTimeChart}
                  exact
                />
                {/* <Route component={} /> */}
                <Redirect to="/" />
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
