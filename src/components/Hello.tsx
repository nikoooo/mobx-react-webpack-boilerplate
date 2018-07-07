import { action, observable } from "mobx";
import { observer } from "mobx-react";
import * as React from "react";
import "./Hello.scss";

export interface IHelloProps { exampleProp1: string; exampleProp2: string; }

// 'HelloProps' describes the shape of props.
export const HelloStateless = (props: IHelloProps) => (
    <React.Fragment>
        <h1>
            This is a stateless component. A simpel component without special logic.
        </h1>
        <p>
            Here is a property: {props.exampleProp1} and another: {props.exampleProp2}!
            Example styling with <span className="sass-test">SASS</span>
        </p>
    </React.Fragment>
);

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
@observer
export class HelloStatefull extends React.Component<IHelloProps, {}> {

    @observable private tick = 10;

   /**
    * There are more functions in reacts life cycle.
    */
    public componentDidMount() {
        console.log("Component DID mount");
        const interval = setInterval(
            action(() => {
                this.tick--;

                if (!this.tick) {
                    clearInterval(interval);
                }
            }),
            1000,
        );
    }

    public render() {
        const { exampleProp1, exampleProp2 } = this.props;

        return (
            <React.Fragment>
                <h1>
                    This is a statefull component. A component with logic and state.
                </h1>
                <h3>MobX is a state manager and here our state handles a countdown.  ------->  {this.tick}</h3>
                <p>
                    Here is a property: {exampleProp1} and another: {exampleProp2}!
                    Example styling with <span className="sass-test">SASS</span>
                </p>
            </React.Fragment>
        );
    }
}
