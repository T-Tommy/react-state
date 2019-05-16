import React, { PureComponent } from 'react';

export default class RandomColor extends PureComponent {
  state = {
    color: { r: 0, g: 0, b: 0 },
    trigger: new Date(),
    interval: Math.random() * 1000,
    rotation: 0,
    xpos: 0,
    ypos: 0,
    scale: 1,
    xskew: 0,
    yskew: 0,
    radius: 0
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
        interval: Math.random() * 1000,
        rotation: (Math.random() * 720) - 360,
        xpos: (Math.random() * 100) - 50,
        ypos: (Math.random() * 100) - 50,
        scale: Math.random() * 2,
        xskew: (Math.random() * 90) - 45,
        yskew: (Math.random() * 90) - 45
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
      height: '10vh',
      width: '10vh',
      transition: `
        background ${this.state.interval / 1000}s linear, 
        transform ${this.state.interval / 100}s ease
      `,
      transform: `
        rotate(${this.state.rotation}deg) 
        translate(${this.state.xpos}vh, ${this.state.ypos}vh) 
        rotateX(${this.state.rotation}deg) 
        rotateY(${this.state.rotation}deg) 
        rotateZ(${this.state.rotation}deg) 
        scale(${this.state.scale})
        skewX(${this.state.xskew}deg)
        skewY(${this.state.yskew}deg)
      `
    };
    return <div style={ styles }></div>;
  }
}
