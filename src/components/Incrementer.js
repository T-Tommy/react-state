import React, { PureComponent } from 'react';

export default class Incremeter extends PureComponent {
  state = {
    number: 1
  };

  handleClick = () => {
    this.setState(state => ({ number: state.number + 1 }));
  };

  render() {
    return (
      <>
        <div>Increment count: { this.state.number }</div>
        <button onClick={ this.handleClick }>
          Increment
        </button>
      </>
    );
  }
}
