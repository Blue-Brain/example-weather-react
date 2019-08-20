import React from 'react'

const Weather = props => (
    <div>
        { props.city && //так задается условие: если this.props.city == true, 
        // то через знак логического "и" (&&) мы прописываем что хотим вывести
            <div>
                <p>Местоположение: {props.city}, {props.country} </p>
                <p>Температура: {props.temp}</p>
                <p>Давление: {props.pressure}</p>
                <p>Заход солнца: {props.sunset}</p>
            </div>
        } 
        <p>{props.error}</p>
    </div>
)

export default Weather;