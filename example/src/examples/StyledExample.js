import React, {Component} from 'react';

import {CardPixelSize, DiagonalPixelSize, RulerPixelSize} from 'react-pixel-size';
import coordinate from '../assets/coordinate.png';

export default class StyledExample extends Component {
    state = {
        pixelSize: 0,
    };

    handlePixelSizeChange = (value) => {
        this.setState({pixelSize: value});
    };

    render() {
        const style = {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
        };

        const buttonContainerStyle = {
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
        };

        const growButtonProps = {
            background: '#92dbf0',
            width: '70px',
            margin: '5px',
            textAlign: 'center',
        };

        const shrinkButtonStyle = {
            background: '#f08684',
            width: '70px',
            margin: '5px',
            textAlign: 'center',
        };

        const inputElementStyle = {
            backgroundColor: 'white',
            backgroundImage: 'url(' + coordinate + ')',
            backgroundPosition: '10px 5px',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '45px',
            height: '40px',
            backgroundSize: '30px',
            fontSize: '20px',
            border: '1px solid #5f5f5f',
            borderRadius: '20px',
        };

        return (
            <div>
                <h1>Styled elements</h1>
                <p>Current pixel size is: {this.state.pixelSize}</p>
                <div>
                    <div className="example" style={{display: 'flex'}}>
                        <CardPixelSize
                            style={style}
                            buttonsProps={{style: buttonContainerStyle}}
                            growButtonProps={{style: growButtonProps}}
                            shrinkButtonProps={{style: shrinkButtonStyle}}
                            onPixelSizeChange={this.handlePixelSizeChange}
                        />
                    </div>
                    <div className="example" style={{display: 'flex'}}>
                        <RulerPixelSize
                            style={style}
                            buttonsProps={{style: buttonContainerStyle}}
                            growButtonProps={{style: growButtonProps}}
                            shrinkButtonProps={{style: shrinkButtonStyle}}
                            onPixelSizeChange={this.handlePixelSizeChange}
                        />
                    </div>
                    <div className="example" style={{display: 'flex'}}>
                        <DiagonalPixelSize
                            style={style}
                            inputElementProps={{style: inputElementStyle}}
                            onPixelSizeChange={this.handlePixelSizeChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
