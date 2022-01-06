import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Mainnet, DAppProvider, Config } from '@usedapp/core'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import '@coreui/coreui/dist/css/coreui.min.css'

// import { DAppProvider } from "@usedapp/core";


ReactDOM.render(


  <React.StrictMode>

    {/* <Provider store={}> */}
    <BrowserRouter>
      <DAppProvider config={{}}>
        <App />
      </DAppProvider>
    </BrowserRouter>

    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
