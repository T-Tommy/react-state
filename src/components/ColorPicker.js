import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired
  };

  state = {
    color: 'blue'
  };

  handleClick = (color) => {
    return () => {
      this.setState({ color });
    };
  };

  render() {
    const divStyle = {
      background: this.state.color,
      height: '100px',
      width: '100px'
    };

    // somehow separate button component and splotch/div component
    return (
      <>
        <section>
          {
            this.props.colors
              .map(color =>
                <button key={ color } onClick={ this.handleClick(color.toLowerCase()) }>
                  { color }
                </button>
              )
          }
        </section>
        <div style={ divStyle }></div>
      </>
    );
  }
}
