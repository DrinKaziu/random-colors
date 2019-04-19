import React, { Component } from 'react';
import Box from './Box';
import './ColorBoxes.css';

class ColorBoxes extends Component {
  
  static defaultProps = {
    numBoxes: 18
  }

  render() {
    let boxes = []
    for (let i = 0; i < this.props.numBoxes; i++) {
      boxes.push(<Box />)
    }
    return (
      <div className="ColorBoxes">
        {boxes}
      </div>
    )
  }
}

export default ColorBoxes;
