import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import GoogleLogin from 'react-google-login';



class App extends Component {
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profile);

  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Find a Buff</h2>
          <p> <GoogleLogin
          clientId="64530244518-l7tmed14mo16bn3dtn2vqt020bhp5nv4.apps.googleusercontent.com"
          buttonText = "Find my Buff"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}
          /></p>
        </div>
        <br></br>
        <p className="App-intro">
          To get started, login with google.
        </p>
      </div>
    );
  }
}

export default App;
