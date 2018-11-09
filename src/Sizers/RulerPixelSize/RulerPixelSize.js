import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import ResizableElement from '../ResizableElement';
import Ruler from '../../Measurables/Ruler/Ruler';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    minDiff: PropTypes.number,
    rulerLength: PropTypes.number,
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
        const {growButtonProps, shrinkButtonProps, buttonsProps, rulerLength, minDiff, onPixelSizeChange, ...other} = this.props;

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
                    <button name="grow" onClick={this.handleGrow} {...growButtonProps}>+</button>
                    <button name="shrink" onClick={this.handleShrink} {...shrinkButtonProps}>-</button>
                </div>
            </div>
        );
    }
}

RulerPixelSize.propTypes = propTypes;
RulerPixelSize.defaultProps = defaultProps;

export default RulerPixelSize;
