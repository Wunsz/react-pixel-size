import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import ResizableElement from '../ResizableElement';
import Ruler from '../../Measurables/Ruler/Ruler';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    minDiff: PropTypes.number,
    rulerLength: PropTypes.number,
    growComponentProps: PropTypes.object,
    shrinkComponentProps: PropTypes.object,
    growComponent: PropTypes.element,
    shrinkComponent: PropTypes.element,
};

const defaultProps = {
    onPixelSizeChange: () => {},
    minDiff: 1,
    rulerLength: 3,
};

class RulerPixelSize extends ResizableElement {
    calculateNewPixelSize = (width = null) => {
        return this.props.rulerLength * 10 / (width === null ? this.resizable.state.width : width);
    };

    componentDidMount() {
        this.handlePixelSizeChange(50 * this.props.rulerLength);
    }

    render() {
        const {
            growComponentProps,
            shrinkComponentProps,
            buttonsProps,
            growComponent,
            shrinkComponent,
            rulerLength,
            minDiff,
            onPixelSizeChange,
            ...other
        } = this.props;

        const grow = this.getButtonComponent(growComponent, growComponentProps, this.handleGrow, 'grow');
        const shrink = this.getButtonComponent(shrinkComponent, shrinkComponentProps, this.handleShrink, 'shrink');

        return (
            <div {...other}>
                <Resizable
                    defaultSize={{
                        width: 50 * rulerLength,
                        height: '100%',
                    }}
                    onResize={this.handlePixelSizeChange}
                    ref={this.extractRef}
                >
                    <Ruler style={{width: '100%'}} length={rulerLength} />
                </Resizable>
                <div {...buttonsProps}>
                    {grow}
                    {shrink}
                </div>
            </div>
        );
    }
}

RulerPixelSize.propTypes = propTypes;
RulerPixelSize.defaultProps = defaultProps;

export default RulerPixelSize;
