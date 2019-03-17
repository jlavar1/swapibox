import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('Button', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Button />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should have the proper default state', () => {
    expect(wrapper.state()).toEqual({});
  });
})