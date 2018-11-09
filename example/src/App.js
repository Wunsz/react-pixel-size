import React, {Component} from 'react';

import {CardPixelSize, DiagonalPixelSize, RulerPixelSize} from 'react-pixel-size';

export default class App extends Component {
    render() {
        return (
            <div>
                <CardPixelSize onPixelSizeChange={(c) => console.log(c)} />
                <RulerPixelSize onPixelSizeChange={(c) => console.log(c)} />
                <DiagonalPixelSize onPixelSizeChange={(c) => console.log(c)} />
            </div>
        );
    }
}
