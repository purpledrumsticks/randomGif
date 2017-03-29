import React, { Component } from 'react';
import './App.css';
let $ = require('jquery');

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      pressMe: true
    }
    this.callGiphy = this.callGiphy.bind(this);
  }
  callGiphy (event) {
    event.preventDefault();
    $.getJSON('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC', (response) => {
      let data = response.data;
      let array = [];
      array.push(data);
      this.setState({
        data: array[0].fixed_width_small_url,
        pressMe: false
      });
    })
  }
  componentDidUpdate() {
    console.log(this.state.data);
  }
  render() {
    let gifStyle = {
      backgroundImage: "url(" + this.state.data + ")"
    }
    const header1 = <h1>Press the button</h1>
    const header2 = <h1>WOW</h1>
    return (
      <div className="App">
        <div style={gifStyle} className="gif">
          {
            this.state.pressMe ? header1 : header2
          }
        </div>
        <button onClick={this.callGiphy}>New Gif</button>
      </div>
    );
  }
}

export default App;
