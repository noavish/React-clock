import React, { Component } from 'react';
import ElevationBorder from './ElevationBorder.js';

class Clock extends Component {
    constructor(props){
      super(props);
      this._on30MinutesPassedCallBack = [];    
      this.state = {date: new Date(), startDate: new Date()};
    }

    on30MinutesPassed(callback){
        this._on30MinutesPassedCallBack.push(callback);
      }
    
      raise30MinutesPassed = () =>{
        this._on30MinutesPassedCallBack.forEach((callbackFunc) =>{
          if (callbackFunc) {
            callbackFunc(this.state);
          }
        });
      }
  
    componentDidMount() {
        this.timerID = setInterval( () => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }
    
    tick() {
      this.setState({date: new Date()});

      //timer option 1
      if ((new Date() - this.state.startDate)/1000/60 >= 1){
          this.raise30MinutesPassed();
          this.setState({startDate: new Date()});
      }
    } 
  
   
  
    // getCohort() {
      // var date = this.state.date;
      // if (date.getMonth() >= 0 && date.getFullYear() >= 2018 ) {
      //   this.setState({cohort: 7}); // only if adding the cohort to the state and changing it there
      //   return 7;
      // }
    // }
  
              /* <h1> Hello Cohort {date.getMonth() >= 0 && date.getFullYear() >= 2018 && 7 || 6}</h1> */
            /* <h1> Hello Cohort {date.getMonth() >= 0 && date.getFullYear() >= 2018 ? 7 : 6}</h1> */
  
  
   

  
    render(){
      var date = this.state.date;
      console.log(date.getMonth());
      if (date.getMonth() >= 0 && date.getFullYear() >= 2018) {
        return(
          <div>
            <h1> Hello Cohort 7</h1>
            <ElevationBorder>
              <h2> It's now {this.state.date.toLocaleTimeString()}.</h2>  
            </ElevationBorder>
          </div>
        );
      } else {
        return null;
      }
    }
  }

  export default Clock;