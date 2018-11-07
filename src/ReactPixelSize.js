import React from 'react';
import PropTypes from 'prop-types';
import ResizableCreditCard from './Resizables/ResizableCreditCard/ResizableCreditCard';
import ResizableRuler from './Resizables/ResizableRuler/ResizableRuler';

const propTypes = {
    variant: PropTypes.oneOf(['card', 'diagonal', 'ruler']),
    onResultChange: PropTypes.func.isRequired,
};

const defaultProps = {
    variant: 'diagonal',
};

class ReactPixelSize extends React.Component {
    resizable = null;

    state = {
        pixelSize: 85.72500 / 337.5,
    };

    /**
     *
     * @param event
     * @param direction
     * @param {HTMLDivElement} refToElement
     * @param delta
     */
    handleResize = (event, direction, refToElement, delta) => {
        const pixelSize = 85.72500 / refToElement.getBoundingClientRect().width;

        this.setState({
            pixelSize: pixelSize,
        });

        this.props.onResultChange(pixelSize);
    };

    handleGrow = () => {
        this.resizable.updateSize({
            width: this.resizable.state.width + 1,
            height: this.resizable.state.height + 1,
        });
    };

    handleShrink = () => {
        this.resizable.updateSize({
            width: this.resizable.state.width - 1,
            height: this.resizable.state.height - 1,
        });
    };

    extractRef = (component) => {
        this.resizable = component;
    };

    getResizable = () => {
        const props = {
            extractRef: this.extractRef,
            handleResize: this.handleResize,
        };

        if (this.props.variant === 'card') {
            return <ResizableCreditCard {...props} />;
        } else if (this.props.variant === 'ruler') {
            return <ResizableRuler {...props} />;
        } else {
            return null;
        }
    };

    render() {
        const resizable = this.getResizable();

        return (
            <div>
                {resizable}
                <button onClick={this.handleGrow}>+</button>
                <button onClick={this.handleShrink}>-</button>
                <p>Pixel size: {this.state.pixelSize} </p>
            </div>
        );
    }
}

ReactPixelSize.propTypes = propTypes;
ReactPixelSize.defaultProps = defaultProps;

export default ReactPixelSize;
