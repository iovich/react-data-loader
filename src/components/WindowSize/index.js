import React, { Component } from 'react';

class WindowSize extends Component {
  constructor(props) {
    super(props);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight
    }
  }
  handlerWindowSize = () => {
    console.log('А-я-яй!!!');
    this.setState({
      w: window.innerWidth,
      h: window.innerHeight
    })
  }
  componentDidMount() {
    window.addEventListener("resize", this.handlerWindowSize)
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handlerWindowSize);
  }
  render() {
    const { w, h } = this.state;
    return (
      <div>
        <h2>Window Size:</h2>
        <p>width:{w}</p>
        <p>height:{h}</p>
      </div>
    );
  }
}

export default WindowSize;
