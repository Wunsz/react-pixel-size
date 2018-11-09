import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import ResizableElement from '../ResizableElement';
import CreditCard from '../../Measurables/CreditCard/CreditCard';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    minDiff: PropTypes.number,
    buttonsProps: PropTypes.object,
    growButtonProps: PropTypes.object,
    shrinkButtonProps: PropTypes.object,
};

const defaultProps = {
    onPixelSizeChange: () => {},
    minDiff: 1,
};

class CardPixelSize extends ResizableElement {
    calculateNewPixelSize = (width = null) => {
        return 85.72500 / (width === null ? this.resizable.state.width : width);
    };

    componentDidMount() {
        this.handlePixelSizeChange(337.5);
    }

    render() {
        const {growButtonProps, shrinkButtonProps, buttonsProps, minDiff, onPixelSizeChange, ...other} = this.props;

        return (
            <div {...other}>
                <Resizable
                    defaultSize={{
                        width: 337.5,
                        height: 212.5,
                    }}
                    lockAspectRatio
                    onResize={this.handlePixelSizeChange}
                    ref={this.extractRef}
                >
                    <CreditCard style={{width: '100%', height: '100%'}} />
                </Resizable>
                <div {...buttonsProps}>
                    <button name="grow" onClick={this.handleGrow} {...growButtonProps}>+</button>
                    <button name="shrink" onClick={this.handleShrink} {...shrinkButtonProps}>-</button>
                </div>
            </div>
        );
    }
}

CardPixelSize.propTypes = propTypes;
CardPixelSize.defaultProps = defaultProps;

export default CardPixelSize;
