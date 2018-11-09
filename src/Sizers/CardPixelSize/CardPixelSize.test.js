import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardPixelSize from './CardPixelSize';

configure({adapter: new Adapter()});

describe('<CardPixelSize />', () => {
    it('returns change event on init with initial size of 254', () => {
        const handleSizeChange = jest.fn();
        mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);

        expect(handleSizeChange).toHaveBeenCalledWith(254);
    });

    it('grows by one pixel resulting in 253.2496307237814 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="grow"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(253.2496307237814);
    });

    it('shrinks by one pixel resulting in 254.7548291233284 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="shrink"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(254.7548291233284);
    });

    it('grows by one pixel resulting in 253.2496307237814 pixel size with custom grow element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} growComponent={<button name="goBig">Shrink</button>}/>);
        card.find('button[name="goBig"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(253.2496307237814);
    });

    it('shrinks by one pixel resulting in 254.7548291233284 pixel size with custom shrink element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} shrinkComponent={<button name="goSmall">Shrink</button>}/>);
        card.find('button[name="goSmall"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(254.7548291233284);
    });
});
