import React, {Component} from 'react'
import Car from './Car/Car'

export default class Cars extends Component {
  state = {
    cars: [
      {name: 'Ford', year: 2018},
      {name: 'Audi', year: 2016},
      {name: 'Mazda', year: 2010}
    ]
  }

  goToHomeHandler = () => {
    //Властивість history передається від компонента Rout, який рендерить цей компонент Cars (оскільки ми його передаємо)
    this.props.history.push({
      pathname: '/'
    })
  }

  render() {
    return (
      <div style={{
        width: 400,
        margin: 'auto',
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <button onClick={this.goToHomeHandler}>Go to home</button>
        {this.state.cars.map((car, index) => {
          return (
            <Car
              key={index}
              name={car.name}
              year={car.year}
            />
          )
        })}
      </div>
    )
  }
}