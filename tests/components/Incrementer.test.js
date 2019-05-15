import React from 'react';
import { shallow } from 'enzyme';
import Incrementer from '../../src/components/Incrementer';

describe('Incrementer component', () => {
  it('renders an Incrementer', () => {
    const wrapper = shallow(<Incrementer />);
    expect(wrapper).toMatchSnapshot();
  });

  it('increments on click', () => {
    const wrapper = shallow(<Incrementer />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('number')).toEqual(1);
  });
});
