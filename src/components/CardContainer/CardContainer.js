import React, { Component } from 'react';
import Card from '../Card/Card';

class CardContainer extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div>
        This is the card CardContainer
        <Card />
      </div>
    )
  }
}

export default CardContainer