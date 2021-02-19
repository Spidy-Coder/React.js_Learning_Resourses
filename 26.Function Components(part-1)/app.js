//Stateless Functional Components

import React from 'react';
import ReactDOM from 'react-dom';

//In React, we can also define components as JavaScript functions 
// we call them function components to differentiate them from class components.

/*export class Friend extends React.Component {
    render() {
      return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
    }
  };*/

  //This was class component initialization,but
  //we can also use function component initialization
  //as shown below:-

export const Friend = ()=>{
   return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

ReactDOM.render(
	<Friend />,
	document.getElementById('app')
);