//Example of a real time clock

//Phase 1 - Mounting 
//It includes - Constructor()-->render()-->React updates DOM & Refs-->componentDidMount()

import React from 'react';
import ReactDOM from 'react-dom';

class Clock extends React.Component {
  constructor(props) {    //1.Constructor()
    super(props);
    this.state = { date: new Date() };
  }
  render() {       //2.render()
    return <div>{this.state.date.toLocaleTimeString()}</div>;
  }

  componentDidMount() {      //3.componentDidMount()
    const oneSecond = 1000;
    setInterval(() => {
      this.setState({ date: new Date() });
    }, oneSecond);
}
}

ReactDOM.render(<Clock />, document.getElementById('app'));