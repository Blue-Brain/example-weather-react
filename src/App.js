import React from 'react';
import './App.css';
import Info from './components/Info'
import Form from './components/Form'
import Weather from './components/Weather'

const API_KEY = "bf68996d2a372114b8d51e7154fb28df";

class App extends React.Component {

  gettingWeather = async (e) => {   // e->от слова event.
    e.preventDefault();             // данная строка говорит о том что мы должны уничтожить обыкновенное поведение страницы (перезагрузку). 
    const city = e.target.elements.city.value;
    const api_url = await fetch (
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`)
    const data = await api_url.json();
    console.log(data);
  }

  render () {
      return (
        <div>
          <Info />
          <Form weatherMethod={this.gettingWeather} />
          <Weather />
        </div>
      );
    }
  }
export default App;
