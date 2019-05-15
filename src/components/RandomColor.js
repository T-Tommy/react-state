import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: { r: 0, g: 0, b: 0 },
    trigger: new Date(),
    interval: Math.random() * 1000,
  }

  randomColor = () => ({
    r: Math.floor(Math.random() * 256),
    g: Math.floor(Math.random() * 256),
    b: Math.floor(Math.random() * 256)
  });

  componentDidMount() {
    this.intervalId = setInterval(() =>
      this.setState({
        color: this.randomColor(),
        trigger: new Date(),
        interval: Math.random() * 1000
      }), this.state.interval
    );
  }

  componentWillUnmount() {
    this.intervalId && clearInterval(this.intervalId);
  }

  updateColor = color => this.setState({ color })
  render() {
    const { color: { r, g, b } } = this.state;
    const styles = {
      display: 'inline-block',
      'box-sizing': 'border-box',
      background: `rgb(${r}, ${g}, ${b})`,
      height: '20vh',
      width: '20vh',
      transition: `background ${this.state.interval / 1000}s linear`,
    };
    return <div style={ styles }></div>;
  }
}
