import React from 'react';
import ReactDOM from 'react-dom';
import DemoRouter from './components/DemoRouter';
import "bootstrap/dist/css/bootstrap.css";
import store from './reduxComponents/store'
import { Provider } from 'react-redux'

import 'primereact/resources/themes/lara-light-indigo/theme.css'    //theme
import 'primereact/resources/primereact.min.css'                    //core css
import 'primeicons/primeicons.css'

ReactDOM.render( 
<Provider store={store}>
<DemoRouter/>
</Provider>,
document.getElementById('root'));


