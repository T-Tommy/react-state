import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App component', () => {
  it('renders the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('adds a block', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().addBlock();
    expect(wrapper.state('blocks')).toEqual(2);
  });
});
