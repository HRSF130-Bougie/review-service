import React from 'react';
import { render } from 'enzyme';
import App from '../src/components/App.jsx';

describe('<App/>', () => {
  it('App has div', () => {
    const component = render(<App />);
    expect(component.find('div')).toBeDefined();
  });
});
