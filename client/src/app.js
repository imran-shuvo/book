import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/login";
import SignUp from "./components/signup";
import Home from "./components/home";
import Profile from "./components/profile";
import AddBook from './components/AddBook';
import BookCRUD from "./components/book"
import BookDetails from "./components/BookDetails";
import UpdateProfile from "./components/updateProfile";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user   
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            BookSelf
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
              
            </li>
            <li className="nav-item">
              
              <Link to={"/book"} className="nav-link">
                Book List
              </Link>
            </li>
        

            {currentUser && (
              <li className="nav-item">
                <Link to={"/book/add"} className="nav-link">
                     Add Book
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/user/profile"} className="nav-link">
                  {currentUser.name}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/user/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/user/login"} className="nav-link">
                  Login
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/user/signup"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/book/details/:id" component={BookDetails} />
            <Route exact path="/book" component={BookCRUD} />
            <Route exact path="/book/add" component={AddBook} />
            <Route exact path="/user/signup" component={SignUp} />
            <Route exact path="/user/profile" component={Profile} />
            <Route exact path="/user/update" component={UpdateProfile} />
            
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
