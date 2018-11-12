import React from 'react';
import PropTypes from 'prop-types';

import cardPaths from './cardPaths';

const propTypes = {
    bgGradientStart: PropTypes.string,
    bgGradientEnd: PropTypes.string,
    chipVariant: PropTypes.oneOf(['silver', 'gold']),
    lettersVariant: PropTypes.oneOf(['silver', 'gold']),
    withStar: PropTypes.bool,
};

const defaultProps = {
    bgGradientStart: '#1a845a',
    bgGradientEnd: '#58e0ab',
    chipVariant: 'silver',
    lettersVariant: 'silver',
    withStar: true,
};

const svgStyles = {
    chipStrokeStyle: {
        fill: 'none',
        stroke: '#000000',
        strokeWidth: 0.36,
        strokeLinecap: 'butt',
        strokeLinejoin: 'miter',
        strokeMiterlimit: 4,
        strokeOpacity: 1,
    },
    embossStyle: {
        fill: 'url(#numbersGradient)',
        fillOpacity: 1,
        stroke: '#252525',
        strokeWidth: 0.075,
    },
    backgroundStyle: {
        fill: 'url(#backgroundGradient)',
        stroke: '#000000',
        strokeWidth: '0.5',
    },
    starStyle: {
        fill: 'url(#starGradient)',
        fillOpacity: 1,
        fillRule: 'evenodd',
        stroke: 'none',
    },
};

class CreditCard extends React.Component {
    render() {
        const { chipVariant, lettersVariant, other } = this.props;
        const { chipStrokeStyle, embossStyle, backgroundStyle, starStyle } = svgStyles;

        const chip = chipVariant === 'gold' ? ['#d0af5b', '#b2890b'] : ['#d6d6d6', '#9d9d9d'];
        const letters = lettersVariant === 'gold' ? ['#d0af5b', '#b2890b'] : ['#d6d6d6', '#9d9d9d'];

        const path = (d, index) => <path key={index} d={d} />;
        const gradientProps = ([x1, y1, x2, y2, id]) => (
            { x1, y1, x2, y2, id, gradientUnits: 'userSpaceOnUse' }
        );

        const star = <path
            d={cardPaths.star}
            transform="matrix(1.2950859,0,0,1.2027212,-21.609396,-50.831723)"
            style={starStyle}
            id="star"
        />;

        return (
            <svg version="1.1" viewBox="0 0 85.72500 53.97500" {...other}>
                <defs>
                    <linearGradient {...gradientProps([0, 300, 85, 240, 'backgroundGradient'])}>
                        <stop offset="0" style={{stopColor: this.props.bgGradientStart, stopOpacity: 1}} />
                        <stop offset="1" style={{stopColor: this.props.bgGradientEnd, stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient {...gradientProps([30, 270, 40, 235, 'numbersGradient'])}>
                        <stop offset="0" style={{stopColor: letters[0], stopOpacity: 1}} />
                        <stop offset="1" style={{stopColor: letters[1], stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient {...gradientProps([30, 260, 40, 270, 'chipGradient'])}>
                        <stop offset="0" style={{stopColor: chip[0], stopOpacity: 1}} />
                        <stop offset="0.5" style={{stopColor: chip[1], stopOpacity: 1}} />
                        <stop offset="1" style={{stopColor: chip[0], stopOpacity: 1}} />
                    </linearGradient>
                    <linearGradient {...gradientProps([70, 260, 85, 250, 'starGradient'])}>
                        <stop offset="0" style={{stopColor: letters[0], stopOpacity: 1}} />
                        <stop offset="1" style={{stopColor: letters[1], stopOpacity: 0}} />
                    </linearGradient>
                </defs>
                <g transform="translate(0,-243.02499)">
                    <rect
                        ry="4.5"
                        y="243.17361"
                        x="0.14814988"
                        height="53.47500"
                        width="85.22500"
                        style={backgroundStyle}
                    />
                    <g style={embossStyle} aria-label="1234 5678 1234 5678">{cardPaths.number.map(path)}</g>
                    <g style={embossStyle} aria-label="Jonathan Doe">{cardPaths.name.map(path)}</g>

                    <g transform="translate(9.3927084,25.4)">
                        <g style={embossStyle} aria-label="VALID">{cardPaths.valid.map(path)}</g>
                        <g style={embossStyle} aria-label="THRU">{cardPaths.thru.map(path)}</g>
                        <g style={embossStyle} aria-label="12/99">{cardPaths.date.map(path)}</g>
                    </g>

                    <g transform="matrix(0.69346115,0,0,0.69346115,-5.303983,76.631011)">
                        <rect style={{...chipStrokeStyle, fill: 'url(#chipGradient)', fillOpacity: 1}} {...cardPaths.chip.outer} />
                        <rect style={{...chipStrokeStyle, fill: 'url(#chipGradient)', fillOpacity: 1}} {...cardPaths.chip.inner} />
                        {cardPaths.chip.strokes.map((path, index) => <path key={index} d={path} style={chipStrokeStyle} />)}
                    </g>
                    {this.props.withStar ? star : null}
                </g>
            </svg>
        );
    }
}

CreditCard.defaultProps = defaultProps;
CreditCard.propTypes = propTypes;

export default CreditCard;
