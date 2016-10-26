/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import { App } from './App';

const setup = () => {
  const props = {
    app: {
      hi: 'Hello'
    }
  };
  const renderer = TestUtils.createRenderer();
  renderer.render(<App {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props,
    output,
    renderer
  };
};

describe('App component', () => {
  it('should render component', () => {
    const {output: {props}} = setup();
    const content = props.children;
    expect(content).toEqual('Hello');
  });
});
