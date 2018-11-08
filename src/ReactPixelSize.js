import React from 'react';
import PropTypes from 'prop-types';
import ResizableCreditCard from './Resizables/ResizableCreditCard/ResizableCreditCard';
import ResizableRuler from './Resizables/ResizableRuler/ResizableRuler';

const propTypes = {
    variant: PropTypes.oneOf(['card', 'diagonal', 'ruler']),
    minDiff: PropTypes.number,
    onResultChange: PropTypes.func.isRequired,
};

const defaultProps = {
    variant: 'diagonal',
    minDiff: 1,
};

class ReactPixelSize extends React.Component {
    /**
     * Create a resizable measurement element (or null if wrong property was given)
     *
     * @returns {ResizableCreditCard | ResizableRuler | null}
     */
    getResizable = () => {
        const props = {
            extractRef: this.extractRef,
            onPixelSizeChange: this.props.onResultChange,
        };

        if (this.props.variant === 'card') {
            return <ResizableCreditCard {...props} />;
        } else if (this.props.variant === 'ruler') {
            return <ResizableRuler {...props} />;
        } else {
            return null;
        }
    };

    /**
     * Renders the element.
     *
     * @returns {ReactPixelSize}
     */
    render() {
        const resizable = this.getResizable();

        return (
            <div>
                {resizable}
            </div>
        );
    }
}

ReactPixelSize.propTypes = propTypes;
ReactPixelSize.defaultProps = defaultProps;

export default ReactPixelSize;
