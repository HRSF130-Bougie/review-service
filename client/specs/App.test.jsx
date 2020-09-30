import React from 'react';
import { mount, shallow } from 'enzyme';
import { render } from 'enzyme';
import App from '../src/components/App.jsx';

describe('<App/>', () => {
  it('App has div', () => {
    const component = render(<App />);
    expect(component.find('div')).toBeDefined();
    
  });
});


// it('App has div with rating name', () => {
//   const component = mount(<App />);
//   expect(component.find('.rating')).toHaveClassName('rating');
// });
//