import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import * as api from '../../helper/fetchHelper';

describe('App', () => {
  let wrapper;
  let mockData;

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

  it('should call fetchHelper in fetchCrawl', async () => {
    const url = 'https://swapi.co/';
    mockData = {
      title: 'The Force',
      opening_crawl: 'A long time ago...',
      release_date: 'March 29, 1991'
    }


    
    api.fetchHelper = jest.fn(() => Promise.resolve(mockData))

    await wrapper.instance().fetchCrawl()

    expect(api.fetchHelper).toBeCalled()
  });
})