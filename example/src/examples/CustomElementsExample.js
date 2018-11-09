import React, {Component} from 'react';

import {CardPixelSize, DiagonalPixelSize, RulerPixelSize} from 'react-pixel-size';
import {Button, TextField, InputAdornment} from '@material-ui/core';
import coordinate from '../assets/coordinate.png';

export default class CustomElementsExample extends Component {
    state = {
        pixelSize: 0,
    };

    handlePixelSizeChange = (value) => {
        this.setState({pixelSize: value});
    };

    render() {
        const textField = (
            <TextField
                label="Diagonal"
                type="number"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <img alt="icon" width="30" src={coordinate} />
                        </InputAdornment>
                    ),
                }}
            />
        );

        return (
            <div>
                <h1>Custom elements</h1>
                <p>Current pixel size is: {this.state.pixelSize}</p>
                <div>
                    <div className="example">
                        <CardPixelSize
                            onPixelSizeChange={this.handlePixelSizeChange}
                            growComponent={<Button color="primary">Grow</Button>}
                            shrinkComponent={<Button color="secondary">Shrink</Button>}
                        />
                    </div>
                    <div className="example">
                        <RulerPixelSize
                            onPixelSizeChange={this.handlePixelSizeChange}
                            growComponent={<Button color="primary">Grow</Button>}
                            shrinkComponent={<Button color="secondary">Shrink</Button>}
                        />
                    </div>
                    <div className="example">
                        <DiagonalPixelSize
                            onPixelSizeChange={this.handlePixelSizeChange}
                            inputComponent={textField}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
