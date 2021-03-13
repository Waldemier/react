import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FilteredList from './App'

const stateHeroes = {
  heroes: [
    {name: 'Invoker', side: 'dark'},
    {name: 'SF', side: 'dark'},
    {name: 'Kunka', side: 'dark'},
    {name: 'Anti-mage', side: 'light'},
    {name: 'Kotl', side: 'light'}
  ]
}

ReactDOM.render(
  <React.StrictMode>
    <FilteredList list={stateHeroes.heroes} side='dark' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
