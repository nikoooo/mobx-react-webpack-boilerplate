import * as React from "react";
import * as ReactDOM from "react-dom";

import { HelloStateless } from "./components/Hello";

ReactDOM.render(
    <HelloStateless compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);