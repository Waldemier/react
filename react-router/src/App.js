import React, {Component} from 'react'
import './App.scss'
import About from './About/About'
import {Route, NavLink, Switch, Redirect} from 'react-router-dom'
import Cars from './Cars/Cars'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {

  state = {
    isLogged: false
  }

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              {/* NavLink це аналогія тегу "a", тільки вона блокує стандартну поведінку браузеру та не дає сторінці перезагружатись (все відбувається в мить) */}
              <NavLink to="/" exact activeClassName="www-active">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={{color: 'blue'}}>About</NavLink>
            </li>
            <li>
              {/* search передає параметри в адресі, hash як певне посилання на сторінці (../..#..) */}
              <NavLink to={{ pathname: '/cars', search: '?a=1&b=2', hash:'some-hash' }}>Cars</NavLink>
            </li>
          </ul>
        </nav>

        <hr/>

        <div style={{textAlign: 'center'}}>
          <h1>Logged is {this.state.isLogged ? "TRUE": "FALSE"}</h1>
          <button onClick={() => this.setState({isLogged: !this.state.isLogged})}>LogIn</button>
        </div>
        
        {/* exact for this rout mean only "/" in path */}
        {/* Switch is alternative to exact - повертає перший співпавший роут з url адреси */}
        <Switch>
          <Route path="/" exact render= { () => <h1>Home</h1> }/> 
          { this.state.isLogged ? <Route path="/about" component={About} /> : null }
          <Route path="/cars/:name" component={CarDetail} />
          <Route path="/cars" component={Cars}/>
          {/* <Route render={() => <h1 style={{color: 'red', textAlign: 'center'}}>404 Not found</h1>}/> */}
          <Redirect to={"/"} />
        </Switch>

      </div>
    );
  }
}

export default App
