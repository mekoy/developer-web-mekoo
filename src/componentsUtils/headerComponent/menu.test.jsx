import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {
    test('Rendering the simple componenet ', () => {
       const wrapper = shallow( 
            <Menu />
        );
        // function autres 
        expect(wrapper).toMatchSnapshot();
    });
    
});