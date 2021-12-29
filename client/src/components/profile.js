import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../services/auth.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;

    return (
      <div className="container">
        {(this.state.userReady) ?
        <div>
        <header className="jumbotron">
          <h3>
            <strong>{currentUser.name.toUpperCase()}</strong> Profile
          </h3>
        </header>
        <p>
          <strong>Id:</strong>{" "}
          {currentUser._id}
        </p>
        <p>
          <strong>Name:</strong>{" "}
          {currentUser.name.toUpperCase()}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          {currentUser.email}
        </p>
        <p>
          <strong>Sex:</strong>{" "}
          {currentUser.sex}
        </p>
        <p>
          <strong>Age:</strong>{" "}
          {currentUser.age}
        </p>

        
          {/* <button onClick={()=>{
               this.props.history.push("/user/update");
                  window.location.reload();


          }} className="btn btn-primary btn-block" >
             <span>Update</span>
          </button> */}
         
        
        
      </div>: null}
      </div>
    );
  }
}
