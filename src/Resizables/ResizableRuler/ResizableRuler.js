import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import Ruler from '../../Measurables/Ruler/Ruler';

const propTypes = {
    handleResize: PropTypes.func,
    extractRef: PropTypes.func,
    rulerLength: PropTypes.number,
};

const defaultProps = {
    handleResize: () => {},
    extractRef: () => {},
    rulerLength: 3,
};

const ResizableRuler = (props) => (
    <Resizable
        defaultSize={{
            width: 50 * props.rulerLength,
            height: '100%',
        }}
        onResize={props.handleResize}
        ref={props.extractRef}
    >
        <Ruler style={{width: '100%'}} length={props.rulerLength} />
    </Resizable>
);

ResizableRuler.propTypes = propTypes;
ResizableRuler.defaultProps = defaultProps;

export default ResizableRuler;
