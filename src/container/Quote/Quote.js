import React from 'react';
import classes from './Quote.css'
const quote =(props)=>(
    <div>
        <div id="text" className={classes.quotetext}> {props.quote}</div>
        
        <div id="author" className={classes.quoteauthor}>{props.author}</div>
    </div>

)
 export default quote;   
