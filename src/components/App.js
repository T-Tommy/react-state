import React, { PureComponent } from 'react';
import RandomColor from './RandomColor';
import Button from './Button';
import styles from './App.css';

export default class App extends PureComponent {
  state = {
    blocks: 1
  }
  addBlock = () => this.setState(state => ({ blocks: state.blocks + 1 }))
  render() {
    return (
      <>
        <Button method={ this.addBlock } />
        <section className={ styles.app }>
          {
            [...Array(this.state.blocks)].map((_, i) =>
              <RandomColor key={ i } />
            )
          }
        </section>
      </>
    );
  }
}
