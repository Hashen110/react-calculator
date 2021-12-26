import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from "./js/Calculator";

import './css/reset.css';

import './css/button.css'
import './css/grid.css'
import './css/input.css'
import './css/popup.css'

ReactDOM.render(
    <React.StrictMode>
        <div style={{width: 500}}>
            <Calculator/>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);
