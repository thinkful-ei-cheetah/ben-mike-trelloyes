import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {STORE} from './src/store.js';

ReactDOM.render(<App{...STORE} />, document.getElementById('root'));

