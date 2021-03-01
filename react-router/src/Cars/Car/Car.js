import React from 'react'
import './Car.scss'
import {withRouter} from 'react-router-dom'

const Car = props => {
  return (
    <div className={'Car'} onClick={() => props.history.push('/cars/' + props.name.toLowerCase())}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
    </div>
  )
}

export default withRouter(Car) //Додаються всі поля, які властиві роуту (Це робиться для дочірніх компонентів батьківського компоненту, який рендериться роутом (для певних цілей))