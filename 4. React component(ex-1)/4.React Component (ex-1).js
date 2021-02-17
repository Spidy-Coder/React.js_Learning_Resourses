import React from 'react';  //importing React object from 'react' library
import ReactDOM from 'react-dom'; //same in this case

class MyComponentClass extends React.Component {  //React.Component is component class needed to be return as a subclass in your main class
  render() {
    return <h1>Hello world</h1>;
  }
}

// NOTE:- Your main class name for example:- MyComponentClass -> should be
//        return in "UpperCamelCase"

ReactDOM.render(    //JSX render method from ReactDOM object
	<MyComponentClass />, 
	document.getElementById('app')   
);

//A render method must contain a return statement.
//Usually, this return statement returns a JSX expression