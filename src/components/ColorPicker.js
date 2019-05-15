import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ColorPicker extends PureComponent {
  static propTypes = {
    colors: PropTypes.array.isRequired,
    method: PropTypes.func
  }

  render() {
    return (
      this.props.colors.map(color =>
        <button
          key={ color }
          onClick={ () => this.props.method(color) }
        >
          { color }
        </button>
      )
    );
  }
}
