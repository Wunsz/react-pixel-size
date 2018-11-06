import React from 'react';
import CreditCard from './CreditCard';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('<CreditCard />', () => {
    it('has a star by default', () => {
        const card = shallow(<CreditCard />);

        expect(card.find('#star')).toHaveLength(1);
    });

    it('does not have a star if user chooses to', () => {
        const card = shallow(<CreditCard withStar={false} />);

        expect(card.find('#star')).toHaveLength(0);
    });
});
