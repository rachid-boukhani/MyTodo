import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import {render} from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))

registerServiceWorker();
