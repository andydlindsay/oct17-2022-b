import React from 'react';
// import {Component} from 'react';

class ClassBased extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: 'alice',
      counter: 0,
      newThing: null,
    };

    // this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler = () => {
    // this.state.counter += 1;

    this.setState({ counter: this.state.counter + 1, newThing: 'dont do this' });
  }

  render() {
    // console.log(this.props);

    return (
      <div>
        <h2>Our new component</h2>
        <h2>{ this.props.message }</h2>
        <h2>Username: { this.state.username }</h2>

        <div>
          <h2>Count: {this.state.counter}</h2>
          {/* <button onClick={() => this.clickHandler()}>Increment!</button> */}
          <button onClick={this.clickHandler}>Increment!</button>
        </div>
      </div>
    );
  }
}

export default ClassBased;
