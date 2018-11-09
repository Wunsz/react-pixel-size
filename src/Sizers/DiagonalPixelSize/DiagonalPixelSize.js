import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    screenWidth: PropTypes.number,
    screenHeight: PropTypes.number,
    millimeters: PropTypes.bool,
    inputElementProps: PropTypes.object,
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

        const diagonalInMm = event.target.value / (millimeters ? 1 : 0.039370);
        const diagonalInPx = Math.sqrt(width * width + height * height);

        this.props.onPixelSizeChange(diagonalInMm / diagonalInPx);
    };

    render() {
        const {inputElementProps} = this.props;
        return (
            <div>
                <input
                    name="diagonal" type="number" min="0" step="0.01" defaultValue="1"
                    onChange={this.handleChange} {...inputElementProps} />
            </div>
        );
    }
}

DiagonalPixelSize.propTypes = propTypes;
DiagonalPixelSize.defaultProps = defaultProps;

export default DiagonalPixelSize;
