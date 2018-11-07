import React from 'react';
import Resizable from 're-resizable';
import PropTypes from 'prop-types';

import CreditCard from '../../Measurables/CreditCard/CreditCard';

const propTypes = {
    handleResize: PropTypes.func,
    extractRef: PropTypes.func,
};

const defaultProps = {
    handleResize: () => {},
    extractRef: () => {},
};

const ResizableCreditCard = (props) => (
    <Resizable
        defaultSize={{
            width: 337.5,
            height: 212.5,
        }}
        lockAspectRatio
        onResize={props.handleResize}
        ref={props.extractRef}
    >
        <CreditCard style={{width: '100%', height: '100%'}} />
    </Resizable>
);

ResizableCreditCard.propTypes = propTypes;
ResizableCreditCard.defaultProps = defaultProps;

export default ResizableCreditCard;
