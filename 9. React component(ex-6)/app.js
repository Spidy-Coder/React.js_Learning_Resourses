//Use this in a Component
//word this gets used in React a lot!

//You are especially likely to see this inside of the
// body of a component class declaration.

import React from 'react';
import ReactDOM from 'react-dom';

class MyName extends React.Component {
	// name property goes here:
  get name() {
  	return 'Rybu';
  }

  render() {
    return <h1>My name is {this.name}.</h1>;
  }
}

ReactDOM.render(<MyName />, document.getElementById('app'));