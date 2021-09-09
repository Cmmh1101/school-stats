import React, { Component } from "react";
import HomePage from "./Pages/HomePage";
import "./App.css";
import "./components/navbar.css";
import "./components/hero.css";
import "./components/header.css";
import "./components/articlesList.css";
import "./Pages/articlePage.css";
import "./components/footer.css";
import "./components/shareButtons.css";
import "./Pages/contactPage.css";
import "./Pages/newArticlePage.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import AboutPage from "./Pages/AboutPage";
import ArticlePage from "./Pages/ArticlePage";
import Navigation from "./components/NavBar";
import ArticlesListPage from "./Pages/ArticlesListPage";
import Contact from "./Pages/ContactPage";
import NewArticlePage from "./Pages/NewArticlePage";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import Footer from "./components/Footer";
import NotFoundPage from "./Pages/404page";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <TransitionGroup>
            <CSSTransition classNames="page" timeout={300}>
              <Switch>
                <Route path="/" component={HomePage} exact />
                <Route path="/about" component={AboutPage} exact />
                <Route path="/article/:name" component={ArticlePage} exact />
                <Route
                  path="/articles-list"
                  component={ArticlesListPage}
                  exact
                />
                <Route path="/contact" component={Contact} exact />
                <Route
                  path="/newarticlepage"
                  component={NewArticlePage}
                  exact
                />
                <Route path="/registerpage" component={RegisterPage} exact />
                <Route path="/loginpage" component={LoginPage} exact />
                <Route component={NotFoundPage} />
                <Redirect to="/" />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
