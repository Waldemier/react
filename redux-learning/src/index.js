import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {CreateStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer'

const store = createStore(rootReducer)

const app = (
    <Provide>
        <App />
    </Provide>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();