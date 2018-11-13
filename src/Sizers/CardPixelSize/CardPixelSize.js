import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import ResizableElement from '../ResizableElement';
import CreditCard from '../../Measurables/CreditCard/CreditCard';

const propTypes = {
    onPixelSizeChange: PropTypes.func,
    minDiff: PropTypes.number,
    buttonsProps: PropTypes.object,
    growComponentProps: PropTypes.object,
    shrinkComponentProps: PropTypes.object,
    growComponent: PropTypes.element,
    shrinkComponent: PropTypes.element,
    cardDisplaySettings: PropTypes.shape({
        bgGradientStart: PropTypes.string,
        bgGradientEnd: PropTypes.string,
        chipVariant: PropTypes.oneOf(['silver', 'gold']),
        lettersVariant: PropTypes.oneOf(['silver', 'gold']),
        withStar: PropTypes.bool,
    }),
};

const defaultProps = {
    onPixelSizeChange: () => {},
    minDiff: 1,
};

class CardPixelSize extends ResizableElement {
    calculateNewPixelSize = (width = null) => {
        return 85725.00 / (width === null ? this.resizable.state.width : width);
    };

    componentDidMount() {
        this.handlePixelSizeChange(337.5);
    }

    render() {
        const {
            growComponentProps,
            shrinkComponentProps,
            buttonsProps,
            growComponent,
            shrinkComponent,
            cardDisplaySettings,
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
                        width: 337.5,
                        height: 212.5,
                    }}
                    lockAspectRatio
                    onResize={this.handlePixelSizeChange}
                    ref={this.extractRef}
                >
                    <CreditCard style={{width: '100%', height: '100%'}} {...cardDisplaySettings} />
                </Resizable>
                <div {...buttonsProps}>
                    {grow}
                    {shrink}
                </div>
            </div>
        );
    }
}

CardPixelSize.propTypes = propTypes;
CardPixelSize.defaultProps = defaultProps;

export default CardPixelSize;
