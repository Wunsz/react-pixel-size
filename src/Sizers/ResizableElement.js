import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    minDiff: PropTypes.number,
};

/**
 * @abstract
 */
class ResizableElement extends React.Component {
    resizable = null;

    /**
     * Enlarges the measurement object by given amount of pixels
     */
    handleGrow = () => {
        const newWidth = this.resizable.state.width + this.props.minDiff;

        this.resizable.updateSize({
            width: newWidth,
        });

        this.handlePixelSizeChange(newWidth);
    };

    /**
     * Shrinks the measurement object by given amount of pixels
     */
    handleShrink = () => {
        const newWidth = this.resizable.state.width - this.props.minDiff;

        this.resizable.updateSize({
            width: newWidth,
        });

        this.handlePixelSizeChange(newWidth);
    };

    /**
     * Extracts reference to the re-resizable element
     *
     * @param {HTMLDivElement} component
     */
    extractRef = (component) => {
        this.resizable = component;
    };

    /**
     * @param {number|*} width - new width to be assumed (if non numeric is given, null will be passed further)
     * Propagate new pixel size
     */
    handlePixelSizeChange = (width = null) => {
        width = typeof width === 'number' ? width : null;

        this.props.onPixelSizeChange(this.calculateNewPixelSize(width));
    };

    /**
     * Calculates new pixel size
     *
     * @abstract
     * @param {number|null} width - width to be assumed (if null retrieved from re-resizable element)
     * @returns {number}
     */
    calculateNewPixelSize = (width = null) => {};
}

ResizableElement.propTypes = propTypes;

export default ResizableElement;
