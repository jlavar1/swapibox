import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {}
  }

  displayCorrectCategory = (e) => {
    e.preventDefault();
    this.props.fetchCategory(e.target.name)
  }
  
  render() {
    return (
      <div className='button-container'>
        <button onClick={this.displayCorrectCategory} className='category-button' name='people'>People</button>
        <button onClick={this.displayCorrectCategory} className='category-button' name='planets'>Planets</button>
        <button onClick={this.displayCorrectCategory} className='category-button' name='vehicles'>Vehicles</button>
      </div>
    )
  }
}

export default Button