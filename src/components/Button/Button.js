import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className='button-container'>
        <button className='category-button'>People</button>
        <button className='category-button'>Planets</button>
        <button className='category-button'>Vehicles</button>
      </div>
    )
  }
}

export default Button