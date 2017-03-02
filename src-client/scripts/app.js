import React from 'react';
import reactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/App'


console.log(store)

reactDOM.render(
   <Provider store={store}>
      <App/>
   </Provider>,
   document.querySelector("#app-container")

)
