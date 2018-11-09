import React, {Component} from 'react';

import StyledExample from './examples/StyledExample';
import RawExample from './examples/RawExample';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <RawExample />
                <StyledExample />
            </React.Fragment>
        );
    }
}
