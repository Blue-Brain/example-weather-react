import React from 'react'

class Weather extends React.Component {
    render () {
        return(
            <div>
                { this.props.city && //так задается условие: если this.props.city == true, 
                // то через знак логического "и" (&&) мы прописываем что хотим вывести
                    <div>
                        <p>Местоположение: {this.props.city}, {this.props.country} </p>
                        <p>Температура: {this.props.temp}</p>
                        <p>Давление: {this.props.pressure}</p>
                        <p>Заход солнца: {this.props.sunset}</p>
                    </div>
                }
            </div>
        );
    }
}

export default Weather;