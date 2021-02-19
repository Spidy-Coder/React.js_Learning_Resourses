//defaultProps

//Take a look at the Button component class.

//Notice that on line 8, Button expects to receive a prop named text.
// The received text will be displayed inside of a <button></button> element.

//What if nobody passes any text to Button?

//If nobody passes any text to Button,
// then Button‘s display will be blank. It would be better
// if Button could display a default message instead.

//You can make this happen by giving your component class a 
//property named defaultProps:

class Example extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}
 
Example.defaultProps;

class Button extends React.Component {
    render() {
      return (
        <button>
          {this.props.text}
        </button>
      );
    }
  }
  
  // defaultProps goes here:
  Button.defaultProps = {text:"I am a button"};
  
  ReactDOM.render(
    <Button text=""/>, 
    document.getElementById('app')
  );