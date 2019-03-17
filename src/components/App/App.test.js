import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <App />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({
      movieCrawl: {},
      error: '',
      vehicles: [],
      planets: [],
      people: []
    });
  });
})