import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RulerPixelSize from './RulerPixelSize';

configure({adapter: new Adapter()});

describe('<RulerPixelSize />', () => {
    it('returns change event on init with initial size of 200', () => {
        const handleSizeChange = jest.fn();
        mount(<RulerPixelSize rulerLength={1} onPixelSizeChange={handleSizeChange} />);

        expect(handleSizeChange).toHaveBeenCalledWith(200);
    });

    it('grows by one pixel resulting in 196.07843137254902 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<RulerPixelSize rulerLength={1} onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="grow"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(196.07843137254902);
    });

    it('shrinks by one pixel resulting in 204.08163265306123 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<RulerPixelSize rulerLength={1} onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="shrink"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(204.08163265306123);
    });

    it('grows by one pixel resulting in 196.07843137254902 pixel size with custom grow element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<RulerPixelSize
            rulerLength={1}
            onPixelSizeChange={handleSizeChange}
            growComponent={<button name="goBig">Shrink</button>}
        />);

        card.find('button[name="goBig"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(196.07843137254902);
    });

    it('shrinks by one pixel resulting in 204.08163265306123 pixel size with custom shrink element', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<RulerPixelSize
            rulerLength={1}
            onPixelSizeChange={handleSizeChange}
            shrinkComponent={<button name="goSmall">Shrink</button>}
        />);
        card.find('button[name="goSmall"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(204.08163265306123);
    });

    it('it returns 10000 if ruler is 1 px wide (taken from resizable element)', () => {
        const ruler = new class Ruler extends RulerPixelSize {
            props = {
                rulerLength: 1,
            };
            resizable = {
                state: {
                    width: 1,
                },
            };
        }();

        expect(ruler.calculateNewPixelSize()).toEqual(10000);
    });


    it('it returns 10000 if ruler is 1 px wide', () => {
        const ruler = new class Ruler extends RulerPixelSize {
            props = {
                rulerLength: 1,
            }
        }();

        expect(ruler.calculateNewPixelSize(1)).toEqual(10000);
    });
});
