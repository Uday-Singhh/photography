import React from 'react';  //contain babel which convert our modern js code in browser understandable js code
import ReactDom from 'react-dom'; //we can use dom of js like document.getelementbyid
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
ReactDom.render(
    <>
        {
            /* <h1>facing problem still</h1> */
             <BrowserRouter>
            <App/>
        </BrowserRouter> }
    </>
    ,document.getElementById("root")
);


