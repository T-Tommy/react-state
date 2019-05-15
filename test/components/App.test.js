import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App component', () => {
  it('renders an App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders an App', () => {
    const wrapper = shallow(<App />);

    wrapper.instance().updateColor('Purple');
    expect(wrapper.state('color')).toEqual('Purple');
  });
});
