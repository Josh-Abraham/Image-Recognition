import React, { Component } from 'react';
import './App.css';
import './mainView.scss';

/* global document navigator */

class App extends Component {
  constructor(props) {
    super(props);
    this.cameraOpened = this.cameraOpened.bind(this);
  }

  cameraOpened() {
    const video = document.getElementById('videoElement');
    if (navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
          video.srcObject = stream;
        })
        .catch(function (err0r) {
          console.log("Something went wrong!");
        });
    }
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.cameraOpened}> Load Camera </button>
        <div className="container">
          <video id='videoElement' autoPlay={true} className='videoElement'>
          
          </video>
        </div>
      </div>
    );
  }
}

export default App;
