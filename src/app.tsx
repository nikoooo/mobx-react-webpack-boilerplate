import * as React from "react";
import * as ReactDOM from "react-dom";
import { HelloStatefull, HelloStateless } from "./components/Hello";

ReactDOM.render(
    <React.Fragment>
        <HelloStateless exampleProp1="imAProp" exampleProp2="imAlsoProp" />
        <HelloStatefull exampleProp1="imAProp" exampleProp2="imAlsoProp" />
    </React.Fragment>,
    document.getElementById("app-root"),
);

if (module.hot) {
    module.hot.accept("./app.tsx", () => {
        ReactDOM.render(
            <React.Fragment>
                <HelloStateless exampleProp1="imAProp" exampleProp2="imAlsoProp" />
                <HelloStatefull exampleProp1="imAProp" exampleProp2="imAlsoProp" />
            </React.Fragment>,
            document.getElementById("app-root"),
        );
    });
}
