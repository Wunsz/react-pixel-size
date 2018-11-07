import React from 'react';
import PropTypes from 'prop-types';

import rulerSvg from './ruler.svg';
import rulerEndSvg from './ruler-end.svg';

const propTypes = {
    length: PropTypes.number,
};

const defaultProps = {
    length: 3,
};

class Ruler extends React.Component {
    render() {
        const {length} = this.props;

        return (
            <div style={{display: 'flex'}}>
                {Ruler.buildRuler(length)}
            </div>
        );
    }

    static buildRuler = (length) => {
        const rulerElements = [];

        for (let i = 0; i < length - 1; i++) {
            rulerElements.push(<img key={i} alt="" src={rulerSvg} />);
        }

        rulerElements.push(<img key={length - 1} alt="" src={rulerEndSvg} />);

        return rulerElements;
    };
}

Ruler.defaultProps = defaultProps;
Ruler.propTypes = propTypes;

export default Ruler;
