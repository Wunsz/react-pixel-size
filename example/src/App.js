import React, {Component} from 'react';

import ReactPixelSize from 'react-pixel-size';

export default class App extends Component {
    render() {
        return (
            <div>
                <ReactPixelSize onResultChange={(c) => console.log(c)} variant={'card'} />
                <ReactPixelSize onResultChange={(c) => console.log(c)} variant={'ruler'} />
            </div>
        );
    }
}
