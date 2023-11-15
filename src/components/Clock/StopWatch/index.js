import React, { Component } from 'react';
// import './style.css';
import styles from './StopWatch.module.css';

class StopWatch extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date(0, 0, 0, 0, 0, 0) };
    this.idInterval = null;
  }
  start = () => {
    if (this.idInterval === null) {
      this.idInterval = setInterval(() => {
        const { time } = this.state;
        const newTime = new Date(time.getTime() + 1000);
        this.setState({ time: newTime })
      }, 1000);
    }
  }
  stop = () => {
    clearInterval(this.idInterval);
    this.idInterval = null;
  }
  reset = () => {
    this.stop();
    this.setState({ time: new Date(0, 0, 0, 0, 0, 0) });
  }
  componentWillUnmount = () => {
    this.stop();
  }
  render() {
    return (
      <div>
        <h1>{this.state.time.toLocaleTimeString('en-GB')}</h1>
        {/* <button className='btn' onClick={this.start}>START</button> */}
        <button className={styles.btn} onClick={this.start}>START</button>
        <button onClick={this.reset}>RESET</button>
        <button onClick={this.stop}>STOP</button>
      </div>
    );
  }
}

export default StopWatch;
