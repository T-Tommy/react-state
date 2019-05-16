import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class Button extends PureComponent {
  static propTypes = {
    method: PropTypes.func.isRequired
  }

  render() {
    return (
      <button onClick={ this.props.method }>Add Block!</button>
    );
  }
}
