import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';

test('renders without crashing', () => {
  shallow(<App />);
});

test('renders learn react link', () => {
  const wrapper = shallow(<App />);
  let linkElement = <h4>Employee Registration Form</h4>
  expect(wrapper.contains(linkElement)).toEqual(true);
});
