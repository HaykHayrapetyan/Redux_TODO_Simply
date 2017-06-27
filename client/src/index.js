import React from 'react';
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { AppContainer } from 'react-hot-loader'; 
import App from './component/App'
import store from './store'
import { getTodos, postTodos} from './actions/actions'

const root = document.getElementById('root');


function mapStateToProps(state){
    return {
        todos: state.todos,
        mode: state.mode,
        input: state.input,
        editId: state.editId
    }
}

const ConnectedComponent = connect(mapStateToProps)(App);

function RendertoRoot(Component){
    ReactDOM.render(
    <AppContainer>  
        <Provider store={store}> 
            <Component />
        </Provider>    
    </AppContainer>,
    root);
}

RendertoRoot(App);

if (module.hot){
    module.hot.accept('./component/App.js', () => {
        const NextRoot = require('./component/App').default;
        RendertoRoot(NextRoot);
    })
}

