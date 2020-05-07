import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import 'sweetalert2/src/sweetalert2.scss'
import "bootstrap/dist/css/bootstrap.min.css";

import * as serviceWorker from "./serviceWorker";
import App from "./App";
import history from "./helper/History";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
