import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    screenWidth: PropTypes.number,
    screenHeight: PropTypes.number,
    millimeters: PropTypes.bool,
    inputComponentProps: PropTypes.object,
    inputComponent: PropTypes.element,
};

const defaultProps = {
    onPixelSizeChange: () => {},
    screenWidth: null,
    screenHeight: null,
    millimeters: false,
};

class DiagonalPixelSize extends React.Component {
    handleChange = (event) => {
        const {screenWidth, screenHeight, millimeters} = this.props;

        const width = screenWidth == null ? screen.width : screenWidth;
        const height = screenHeight == null ? screen.height : screenHeight;

        const diagonalInMm = 1000 * event.target.value / (millimeters ? 1 : 0.039370);
        const diagonalInPx = Math.sqrt(width * width + height * height);

        this.props.onPixelSizeChange(diagonalInMm / diagonalInPx);
    };

    getInputComponent = (inputComponent, inputComponentProps) => {
        if (inputComponent) {
            const props = {...inputComponent.props, ...inputComponentProps, onChange: this.handleChange};

            return React.cloneElement(inputComponent, props);
        } else {
            return <input
                name="diagonal"
                type="number"
                min="0"
                step="0.01"
                defaultValue="1"
                onChange={this.handleChange}
                {...inputComponentProps}
            />;
        }
    };

    render() {
        const {
            inputComponent,
            inputComponentProps,
            screenWidth,
            screenHeight,
            millimeters,
            onPixelSizeChange,
            ...other
        } = this.props;

        const input = this.getInputComponent(inputComponent, inputComponentProps);

        return (
            <div {...other}>
                {input}
            </div>
        );
    }
}

DiagonalPixelSize.propTypes = propTypes;
DiagonalPixelSize.defaultProps = defaultProps;

export default DiagonalPixelSize;
