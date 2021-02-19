//Call this.setState from Another Function

//The most common way to call this.setState()
//is to call a custom function that wraps a this.setState() call. 

import React from 'react';
import ReactDOM from 'react-dom';

const green = '#39D1B4';
const yellow = '#FFD712';

class Toggle extends React.Component {
  constructor(props){
    super(props);
    this.state = { color: green };
    this.changeColor = this.changeColor.bind(this);
  }
  
  changeColor() {
    const newColor = this.state.color == green ? yellow : green;
    this.setState({ color: newColor });
  }
  
  render() {
    return (
      <div style={{background: this.state.color}}> 
        <h1>
          Change my color
        </h1>
        <button onClick={this.changeColor}>
  				Change color
				</button>
      </div>
    );
  }
  //When you write a component class method that uses this,
  //then you need to bind that method inside of your constructor function!
}

ReactDOM.render(<Toggle />, document.getElementById('app'));

//Any time that you call this.setState(),
//this.setState() AUTOMATICALLY calls .render() as soon as the state has changed.