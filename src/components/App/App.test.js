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

  it('should call fetchCrawl() when App mounts', () => { 
    wrapper.instance().fetchCrawl = jest.fn();

    wrapper.instance().componentDidMount();

    expect(wrapper.instance().fetchCrawl).toBeCalled();
  });

})