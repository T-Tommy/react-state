import React from 'react';
import { shallow } from 'enzyme';
import ColorPicker from '../../src/components/ColorPicker';

describe('ColorPicker component', () => {
  it('renders the ColorPicker', () => {
    const wrapper = shallow(<ColorPicker colors={ ['Red', 'Orange', 'Yellow'] } />);
    expect(wrapper).toMatchSnapshot();
  });

  it('changes color to red on button press', () => {
    const wrapper = shallow(<ColorPicker colors={ ['Red', 'Orange', 'Yellow'] } />);
    wrapper.find('button').at(0).simulate('click');
    expect(wrapper.state('color')).toEqual('red');
  });

  it('changes color to orange on button press', () => {
    const wrapper = shallow(<ColorPicker colors={ ['Red', 'Orange', 'Yellow'] } />);
    wrapper.find('button').at(1).simulate('click');
    expect(wrapper.state('color')).toEqual('orange');
  });

  it('changes color to yellow on button press', () => {
    const wrapper = shallow(<ColorPicker colors={ ['Red', 'Orange', 'Yellow'] } />);
    wrapper.find('button').at(2).simulate('click');
    expect(wrapper.state('color')).toEqual('yellow');
  });
});
