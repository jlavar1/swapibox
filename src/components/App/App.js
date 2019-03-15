import React, { Component } from 'react';
import Header from '../Header/Header';
import Button from '../Button/Button';
import CardContainer from '../CardContainer/CardContainer';


class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Button />
      <CardContainer />
      </div>
    );
  }
}

export default App;
