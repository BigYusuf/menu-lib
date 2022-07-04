import React from 'react';
import renderer from 'react-test-renderer';
import {SocialMedia2} from './index';


it('renders correctly', () => {
  const tree = renderer.create(<SocialMedia2 />).toJSON();
  expect(tree).toMatchSnapshot();
});