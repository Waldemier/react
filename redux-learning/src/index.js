import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './redux/rootReducer'
import reduxThunk from 'redux-thunk'; //Використовується для того, щоб ми могли оголошувати асинхронні action`и (Диспатчити певний метод асинхронно)
import compose from 'compose' // npm package for redux devtools

//devtoolse configurations (for browser)
const composeEnhancers = 
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;


const loggerMiddleware = state => next => action => {
    console.info(state.getState());
    return next(action); 
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(loggerMiddleware, reduxThunk)))

const app = (
    //  store contains reducer, middleware, and dispatch
    <Provider store={store}> 
        <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
