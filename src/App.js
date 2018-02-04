import ReactDOM from 'react-dom';
import Clock from './Clock';
import React, { Component } from 'react';
import './index.css';

class App extends Component {
  componentDidMount(){
    this.clock.on30MinutesPassed(function(){
      alert('hello');
    }); 
  }

  render() {
    return (
      <div className="App"> 
        <Clock ref={clock=>this.clock=clock} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;