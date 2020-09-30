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
<<<<<<< HEAD
=======


// it('App has div with rating name', () => {
//   const component = mount(<App />);
//   expect(component.find('.rating')).toHaveClassName('rating');
// });
//
>>>>>>> 49d1588f842814e5334b5797290a2777ce7ef8ca
