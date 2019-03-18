import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';

describe('Card', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Card />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})