import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: ''
    }
  }

  componentDidMount () {
    this.setState({
      color: this.generateRandColor()
    })
  }

  generateRandColor = () => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  clickHandler = () => {
    this.setState(prevState => {
      return {
        color: this.generateRandColor()
      }
    });
  }

  render () {
    return (
      <div className="Box" onClick={this.clickHandler} style={{backgroundColor: this.state.color}}></div>
    )
  }
}

export default Box;
