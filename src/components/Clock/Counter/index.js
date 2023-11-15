import React, { Component } from 'react';
import './style.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    console.log('constructor');
  }
  componentDidMount() {
    console.log('componentDidMount');
    this.start();
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
    this.stop();
  }
  start = () => {
    this.idInterval = setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }
  stop = () => {
    clearInterval(this.idInterval);
  }

  render() {
    console.log('render');
    const styles = { backgroundColor: 'blue', color: 'red' };
    return (
      <article style={styles}>
        <h2>COUNTER:{this.state.count}</h2>
        <h3>THEME: {this.props.theme}</h3>
        <button className='color size' onClick={this.stop}>STOP</button>
      </article>
    );
  }
}

export default Counter;
