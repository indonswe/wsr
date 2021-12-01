import React from 'react';
import ReactDOM from 'react-dom';
import DemoRouter from './components/DemoRouter';
import "bootstrap/dist/css/bootstrap.css";
import store from './reduxComponents/store'
import { Provider } from 'react-redux'

ReactDOM.render( 
<Provider store={store}>
<DemoRouter/>
</Provider>,
document.getElementById('root'));


