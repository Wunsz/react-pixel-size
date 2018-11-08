import React from 'react';
import Resizable from 're-resizable';

import {ResizableElement, propTypes, defaultProps} from '../ResizableElement';
import CreditCard from '../../Measurables/CreditCard/CreditCard';

class ResizableCreditCard extends ResizableElement {
    calculateNewPixelSize = (width = null) => {
        return 85.72500 / (width === null ? this.resizable.state.width : width);
    };

    componentDidMount() {
        this.handlePixelSizeChange(337.5);
    }

    render() {
        return (
            <React.Fragment>
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
                <button name="grow" onClick={this.handleGrow}>+</button>
                <button name="shrink" onClick={this.handleShrink}>-</button>
            </React.Fragment>
        );
    }
}

ResizableCreditCard.propTypes = propTypes;
ResizableCreditCard.defaultProps = defaultProps;

export default ResizableCreditCard;
