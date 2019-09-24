import React from 'react';
import {Provider} from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import {render} from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import App from './App';
import store from './store'

render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
