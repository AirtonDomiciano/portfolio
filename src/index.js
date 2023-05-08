import React from "react";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ReactDOM from "react-dom";
ReactDOM.render(<App />, document.getElementById("root"));

// TODO Mudar para a versão nova que não interfira no formato de clique das rotas 
// import { createRoot } from 'react-dom/client'
// createRoot(document.getElementById('root')).render(<App />)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
