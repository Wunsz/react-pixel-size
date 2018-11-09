import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DiagonalPixelSize from './DiagonalPixelSize';

configure({adapter: new Adapter()});

describe('<DiagonalPixelSize />', () => {
    it('returns pixel size of 1000 when diagonal is set in millimeters', () => {
        const handleSizeChange = jest.fn();
        screen.width = 3;
        screen.height = 4;

        const component = mount(<DiagonalPixelSize onPixelSizeChange={handleSizeChange} millimeters={true} />);
        component.find('input[name="diagonal"]').simulate('change', {target: {value: 5}});

        expect(handleSizeChange).toHaveBeenCalledWith(1000);
    });

    it('returns pixel size of 25400.0508001016 when diagonal is set in inches', () => {
        const handleSizeChange = jest.fn();
        screen.width = 3;
        screen.height = 4;

        const component = mount(<DiagonalPixelSize onPixelSizeChange={handleSizeChange} millimeters={false} />);
        component.find('input[name="diagonal"]').simulate('change', {target: {value: 5}});

        expect(handleSizeChange).toHaveBeenCalledWith(25400.0508001016);
    });

    it('returns pixel size of 1000 when diagonal is set in millimeters and width and height are explicit', () => {
        const handleSizeChange = jest.fn();

        const component = mount(<DiagonalPixelSize
            screenWidth={3} screenHeight={4} onPixelSizeChange={handleSizeChange} millimeters={true}
        />);
        component.find('input[name="diagonal"]').simulate('change', {target: {value: 5}});

        expect(handleSizeChange).toHaveBeenCalledWith(1000);
    });

    it('returns pixel size of 25400.0508001016 when diagonal is set in inches and width and height are explicit', () => {
        const handleSizeChange = jest.fn();

        const component = mount(<DiagonalPixelSize
            screenWidth={3} screenHeight={4} onPixelSizeChange={handleSizeChange} millimeters={false}
        />);
        component.find('input[name="diagonal"]').simulate('change', {target: {value: 5}});

        expect(handleSizeChange).toHaveBeenCalledWith(25400.0508001016);
    });

    it('returns pixel size of 1000 when diagonal is set in millimeters with custom element', () => {
        const handleSizeChange = jest.fn();
        screen.width = 3;
        screen.height = 4;

        const component = mount(<DiagonalPixelSize
            onPixelSizeChange={handleSizeChange}
            millimeters={true}
            inputComponent={<input name="customElement" />}
        />);
        component.find('input[name="customElement"]').simulate('change', {target: {value: 5}});

        expect(handleSizeChange).toHaveBeenCalledWith(1000);
    });
});
