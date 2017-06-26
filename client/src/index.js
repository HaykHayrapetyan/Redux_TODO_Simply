import React from 'react';
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'; 
import App from './App'
const root = document.getElementById('root');



function RendertoRoot(Component){
    ReactDOM.render(
    <AppContainer>   
        <Component />
    </AppContainer>,
    root);
}

RendertoRoot(App);

if (module.hot){
    module.hot.accept('./App.js', () => {
        const NextRoot = require('./App').default;
        RendertoRoot(NextRoot);
    })
}

