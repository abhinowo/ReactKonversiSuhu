import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Tampilan from './Tampilan';
import Foto from './usestate/img';
import TemperatureInput from './calc/calc';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature : '',
      scale : 'c'
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  
  tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  
  BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;

    return (
      <Router>
      <div className="App">
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        {/* <BoilingVerdict
          celsius={parseFloat(celsius)} /> */}


        <Tampilan/>;
        <Foto/>;
        {/* <nav className="NavBar">
            <ul className="ul">
              <li className="li">
                <Link to="/">Konversi Suhu </Link>
              </li>
              </ul>
          </nav>
          <Switch>
            <Route path="/" exact component= {TemperatureInput} />
          </Switch>      */}
         
    </div>
    </Router>
    );
  }
}

export default App;
