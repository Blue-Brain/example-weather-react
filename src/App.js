import React from 'react';
//import './App.css';
import Info from './components/Info'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "bf68996d2a372114b8d51e7154fb28df";

// Данный компонент не может быть оптизизирован до упрощенного вида компонента, так как имеет состояние.

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather = async (e) => {  
     // e -> от слова event.
    e.preventDefault();             
    // строка выше говорит о том что мы должны уничтожить обыкновенное поведение страницы (перезагрузку). 
    const city = e.target.elements.city.value;

    if (city) {
      const api_url = await fetch (
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
      const data = await api_url.json();
      
      var sunset = data.sys.sunset;
      var date = new Date ();
      date.setTime(sunset*1000); 
        // данные вычисляются в милисекундах, а от API приходят в секундах. 
        // Конвертируем в секунды домножив на 1000
      var options = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
      }

      var sunset_date = date.toLocaleString('en-GB', options);

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      }); 
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Введите город"
      })
    }

  }

  render () {
      return (
        <div className="wrapper">
          <div class="main">
            <div class="container">
              <div class="row">
                <div class="col-sm-5 info">
                  <Info />
                </div>
                <div class="col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather} />
                  <Weather 
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    pressure={this.state.pressure}
                    sunset={this.state.sunset}
                    error={this.state.error}
                  />
                </div>
              </div>
            </div>  
          </div>  
        </div>
      );
    }
  } 
export default App;
