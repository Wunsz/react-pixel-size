import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResizableRuler from './ResizableRuler';

configure({adapter: new Adapter()});

describe('<ResizableRuler />', () => {
    it('returns change event on init with initial size of 0.2', () => {
        const handleSizeChange = jest.fn();
        mount(<ResizableRuler rulerLength={1} onPixelSizeChange={handleSizeChange} />);

        expect(handleSizeChange).toHaveBeenCalledWith(0.2);
    });

    it('grows by one pixel resulting in 0.19607843137254902 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<ResizableRuler rulerLength={1} onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="grow"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.19607843137254902);
    });

    it('shrinks by one pixel resulting in 0.20408163265306123 pixel size', () => {
        const handleSizeChange = jest.fn();
        const card = mount(<ResizableRuler rulerLength={1} onPixelSizeChange={handleSizeChange} />);
        card.find('button[name="shrink"]').simulate('click');

        expect(handleSizeChange).toHaveBeenCalledWith(0.20408163265306123);
    });
});
