import React,{Component} from 'react';
import Button from './components/Button/Button'
import classes from './App.css'
import QuoteBox from './container/quotebox/QuoteBox';


import './App.css';

class App extends Component {
   
  render(){
    
    return (
      <div className={classes.App}>
        <QuoteBox />

      

      </div>
    );
  }
  
}

export default App;
