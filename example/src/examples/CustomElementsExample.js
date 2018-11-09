import React, {Component} from 'react';

import {CardPixelSize, DiagonalPixelSize, RulerPixelSize} from 'react-pixel-size';

export default class CustomElementsExample extends Component {
    state = {
        pixelSize: 0,
    };

    handlePixelSizeChange = (value) => {
        this.setState({pixelSize: value});
    };

    render() {
        return (
            <div>
                <h1>Custom elements</h1>
                <p>Current pixel size is: {this.state.pixelSize}</p>
                <div>
                    <div className="example">
                        <CardPixelSize onPixelSizeChange={this.handlePixelSizeChange} />
                    </div>
                    <div className="example">
                        <RulerPixelSize onPixelSizeChange={this.handlePixelSizeChange} />
                    </div>
                    <div className="example">
                        <DiagonalPixelSize onPixelSizeChange={this.handlePixelSizeChange} />
                    </div>
                </div>
            </div>
        );
    }
}
