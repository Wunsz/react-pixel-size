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

    it('has silver chip by default', () => {
        const card = shallow(<CreditCard withStar={false} />);
        const gradient = card.find('#chipGradient');

        expect(gradient.find('stop[offset="0"]').prop('style')).toEqual({stopColor: '#d6d6d6', stopOpacity: 1});
        expect(gradient.find('stop[offset="0.5"]').prop('style')).toEqual({stopColor: '#9d9d9d', stopOpacity: 1});
        expect(gradient.find('stop[offset="1"]').prop('style')).toEqual({stopColor: '#d6d6d6', stopOpacity: 1});
    });

    it('has gold chip if selected', () => {
        const card = shallow(<CreditCard withStar={false} chipVariant="gold" />);
        const gradient = card.find('#chipGradient');

        expect(gradient.find('stop[offset="0"]').prop('style')).toEqual({stopColor: '#d0af5b', stopOpacity: 1});
        expect(gradient.find('stop[offset="0.5"]').prop('style')).toEqual({stopColor: '#b2890b', stopOpacity: 1});
        expect(gradient.find('stop[offset="1"]').prop('style')).toEqual({stopColor: '#d0af5b', stopOpacity: 1});
    });

    it('has silver letters by default', () => {
        const card = shallow(<CreditCard withStar={false} />);
        const gradient = card.find('#numbersGradient');

        expect(gradient.find('stop[offset="0"]').prop('style')).toEqual({stopColor: '#d6d6d6', stopOpacity: 1});
        expect(gradient.find('stop[offset="1"]').prop('style')).toEqual({stopColor: '#9d9d9d', stopOpacity: 1});
    });

    it('has gold letters if selected', () => {
        const card = shallow(<CreditCard withStar={false} lettersVariant="gold" />);
        const gradient = card.find('#numbersGradient');

        expect(gradient.find('stop[offset="0"]').prop('style')).toEqual({stopColor: '#d0af5b', stopOpacity: 1});
        expect(gradient.find('stop[offset="1"]').prop('style')).toEqual({stopColor: '#b2890b', stopOpacity: 1});
    });

});
