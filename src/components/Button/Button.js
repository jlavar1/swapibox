import React, { Component } from 'react';

class Button extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        <button>People</button>
        <button>Planets</button>
        <button>Vehicles</button>
      </div>
    )
  }
}

export default Button