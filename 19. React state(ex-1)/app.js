//Setting Initial State
//To make a component have state, give the component a state property. 
//This property should be declared inside of a constructor method, like this:

import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
    constructor(props) {
      super(props);
      this.state = { mood: 'decent' };
    }
   
    render() {
      return <div></div>;
    }
  }
   
  <Example />