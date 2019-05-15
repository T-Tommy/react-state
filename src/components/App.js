import React, { PureComponent } from 'react';
import ColorPicker from './ColorPicker';
import ColorDisplay from './ColorDisplay';

export default class App extends PureComponent {
  state = {
    color: 'black'
  }
  
  updateColor = color => this.setState({ color })

  render() {
    return (
      <>
        <ColorPicker
          colors={ ['Purple', 'Blue', 'Green', 'Yellow', 'Orange', 'Red'] }
          method={ this.updateColor }
        />
        <ColorDisplay color={ this.state.color }/>
    </>
    );
  }
}
