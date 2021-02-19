//Function Components and Props

import React from 'react';
import ReactDOM from 'react-dom';

export function NewFriend(props){
  return(
    <div>
    <img src={props.src}/> //NOTE:-Here, this.props.propertyName is not used.
                           //      only props.propertyName is used in function Components
    </div>

  );
    
}

ReactDOM.render(
  <NewFriend src="https://content.codecademy.com/courses/React/react_photo-squid.jpg" />,
  document.getElementById('app')
);

//Properties of Function Components:-

//1.Function components are React components defined as JavaScript functions
//2.Function components must return JSX
//3.Function components may accept a props parameter. Expect it to be a JavaScript object/


