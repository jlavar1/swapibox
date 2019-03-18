import React from 'react';
import Crawl from './Crawl';
import { shallow } from 'enzyme';

describe('Crawl', () => {
  let wrapper;
  
  beforeEach(() => {
    wrapper = shallow(
      <Crawl />
    );
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})