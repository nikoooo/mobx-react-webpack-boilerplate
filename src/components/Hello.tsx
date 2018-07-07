import * as React from "react";

import './Hello.scss';

export interface HelloProps { compiler: string; framework: string; }

export const HelloStateless = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!<span className="sass-test">SASS</span></h1>;

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class HelloStatefull extends React.Component<HelloProps, {}> {
    render() {
        return <h1>Hello from {this.props.compiler} and {this.props.framework}! <span className="sass-test">SASS</span></h1>;
    }
}