import React from 'react';
import Ruler from '../Ruler/Ruler';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<Ruler />', () => {
    it('has 3 elements by default', () => {
        const ruler = shallow(<Ruler />);

        expect(ruler.find('img')).toHaveLength(3);
    });
});
