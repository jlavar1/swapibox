import React from 'react';
import Header from './Header';
import { shallow } from 'enzyme';

describe('Header', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Header />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({});
  });
})