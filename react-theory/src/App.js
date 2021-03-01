import React, { Component } from 'react';
import './App.css';

 class App extends Component {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <h1>React application</h1>
//       </header>
//     </div>
//   )
  render() { 
    return React.createElement('div', { className: 'App' }, 
            React.createElement('h1', {}, 'React application')
      ) 
  }
} 

export default App;
