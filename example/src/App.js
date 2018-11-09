import React, {Component} from 'react';

import StyledExample from './examples/StyledExample';
import RawExample from './examples/RawExample';
import CustomElementsExample from './examples/CustomElementsExample';

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <RawExample />
                <StyledExample />
                <CustomElementsExample />
            </React.Fragment>
        );
    }
}
