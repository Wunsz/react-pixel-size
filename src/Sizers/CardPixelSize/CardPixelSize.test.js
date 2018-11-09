import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CardPixelSize from './CardPixelSize';

configure({adapter: new Adapter()});

describe('<CardPixelSize />', () => {
    it('returns change event on init with initial size of 0.2', () => {
        const handleSizeChange = jest.fn();
        mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);

        expect(handleSizeChange).toHaveBeenCalledWith(0.254);
    });

    it('grows by one pixel resulting in 0.25324963072378137 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="grow"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.25324963072378137);
    });

    it('shrinks by one pixel resulting in 0.25475482912332836 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="shrink"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.25475482912332836);
    });

    it('grows by one pixel resulting in 0.25324963072378137 pixel size with custom grow element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} growComponent={<button name="goBig">Shrink</button>}/>);
        card.find('button[name="goBig"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.25324963072378137);
    });

    it('shrinks by one pixel resulting in 0.25475482912332836 pixel size with custom shrink element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<CardPixelSize onPixelSizeChange={handleSizeChange} shrinkComponent={<button name="goSmall">Shrink</button>}/>);
        card.find('button[name="goSmall"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.25475482912332836);
    });
});
