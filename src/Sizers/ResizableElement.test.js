import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ResizableElement from './ResizableElement';

configure({adapter: new Adapter()});

describe('<ResizableElement />', () => {
    it('throws error if calculate pixel size is not implemented', () => {
        class TmpClass extends ResizableElement {}
        const extendedObject = new TmpClass();

        expect(() => {
            extendedObject.calculateNewPixelSize(10);
        }).toThrowError('You have to implement the method `calculateNewPixelSize`!');

        expect(() => {
            extendedObject.calculateNewPixelSize();
        }).toThrowError('You have to implement the method `calculateNewPixelSize`!');
    });

    it('calls `calculateNewPixelSize` with null if string is given to `handlePixelSizeChange`', () => {
        class TmpClass extends ResizableElement {
            props = {
                onPixelSizeChange: () => {},
            }
        }
        const extendedObject = new TmpClass();
        extendedObject.calculateNewPixelSize = jest.fn();

        extendedObject.handlePixelSizeChange('invalid');

        expect(extendedObject.calculateNewPixelSize).toHaveBeenCalledWith(null);
    });


    it('calls `calculateNewPixelSize` with null if nothing is given to `handlePixelSizeChange`', () => {
        class TmpClass extends ResizableElement {
            props = {
                onPixelSizeChange: () => {},
            }
        }
        const extendedObject = new TmpClass();
        extendedObject.calculateNewPixelSize = jest.fn();

        extendedObject.handlePixelSizeChange();

        expect(extendedObject.calculateNewPixelSize).toHaveBeenCalledWith(null);
    });
});
