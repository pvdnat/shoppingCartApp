import React from "react";
import * as ReactDOM from "react-dom/client";

import { Provider } from "react-redux"

import store from "./state/store";
import Application from "./application/app";

//creating root of the react application where we can load the react app
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store} >
        <Application />
    </Provider>
)
