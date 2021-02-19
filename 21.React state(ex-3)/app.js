//Update state with this.setState

//this.setState() takes an object, 
//and merges that object with the component’s current state.
//If there are properties in the current state that aren’t part of that object, 
//then those properties remain how they were.

import React from 'react';

class Example extends React.Component {
  constructor(props) {
  	super(props);
    this.state = {
      mood:   'great',
      hungry: false
    };
  }

  render() {
    return <div></div>;
  }
}

<Example />