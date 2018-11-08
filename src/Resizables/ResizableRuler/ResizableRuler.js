import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import {ResizableElement, propTypes as parentPropTypes, defaultProps as parentDefaultProps} from '../ResizableElement';
import Ruler from '../../Measurables/Ruler/Ruler';

const propTypes = {
    ...parentPropTypes,
    rulerLength: PropTypes.number,
};

const defaultProps = {
    ...parentDefaultProps,
    rulerLength: 3,
};

class ResizableRuler extends ResizableElement {
    calculateNewPixelSize = (width = null) => {
        return this.props.rulerLength * 10 / (width === null ? this.resizable.state.width : width);
    };

    componentDidMount() {
        this.handlePixelSizeChange(50 * this.props.rulerLength);
    }

    render() {
        const {rulerLength} = this.props;

        return (
            <React.Fragment>
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
                <button name="grow" onClick={this.handleGrow}>+</button>
                <button name="shrink" onClick={this.handleShrink}>-</button>
            </React.Fragment>
        );
    }
}

ResizableRuler.propTypes = propTypes;
ResizableRuler.defaultProps = defaultProps;

export default ResizableRuler;
