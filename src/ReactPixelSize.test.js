import React from 'react';
import {configure, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import ReactPixelSize from './ReactPixelSize';
import ResizableCreditCard from './Resizables/ResizableCreditCard/ResizableCreditCard';
import ResizableRuler from './Resizables/ResizableRuler/ResizableRuler';

configure({adapter: new Adapter()});

describe('<ReactPixelSize />', () => {
    it('creates <ResizableCreditCard /> element when variant is "credit"', () => {
        const onResultChange = jest.fn();
        const component = mount(<ReactPixelSize onResultChange={onResultChange} variant={'card'} />);

        expect(component.find(ResizableCreditCard)).toHaveLength(1);
    });

    it('creates <ResizableRuler /> element when variant is "ruler"', () => {
        const onResultChange = jest.fn();
        const component = mount(<ReactPixelSize onResultChange={onResultChange} variant={'ruler'} />);

        expect(component.find(ResizableRuler)).toHaveLength(1);
    });

    it('creates no element when variant is neither of "ruler", "card", "diagonal"', () => {
        const onResultChange = jest.fn();
        const component = mount(<ReactPixelSize onResultChange={onResultChange} variant={'invalid'} />);

        expect(component.find(ResizableRuler)).toHaveLength(0);
        expect(component.find(ResizableCreditCard)).toHaveLength(0);
    });
});
