import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/components/App';

describe('App component', () => {
  it('renders the App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
