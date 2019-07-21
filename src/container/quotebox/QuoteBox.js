import React ,{Component}from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTwitter,faTumblr} from '@fortawesome/free-brands-svg-icons'
import Quote from '../Quote/Quote';
import classes from './Quotebox.css';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Buttons from '../../components/Button/Button';
class QuoteBox extends Component{
    constructor(props){
        super(props)
        this.state={
            quote:"",
            data:{},
            count:0
        }
       this.clickHandler=this.clickHandler.bind(this) 
    }
   componentDidMount(){
       axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
       .then(response=>{
           this.setState({
               data:response.data,
           })
       })

   }
   clickHandler(){
       const randomIndex=Math.floor(Math.random()*10)
       this.setState({
           quote:this.state.data.quotes[randomIndex],
           count:this.state.count +1
       })

   }
   shareOnTwitter=(quote,author)=>{
    window.open('https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+encodeURIComponent('"'+ quote +'"' + author), 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');

   }
   shareOnTumblr=(quote,author)=>{
       window.open('https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button')
   }
        render(){
            const element=<FontAwesomeIcon icon={faTwitter}/>
            const element1=<FontAwesomeIcon icon={faTumblr}/>

            const quote=this.state.quote.quote;
            const author=this.state.quote.author;
            return(
                <div id="quote-box" className={classes.Quotebox} >
                 <Quote
                 quote={this.state.quote.quote}
                 author={this.state.quote.author}/>
                 <Buttons id="new-quote" btnType="Quotes" clicked={this.clickHandler}>{this.state.count===0 ?'New Quote':'Next Quote'}</Buttons>
                  <Button  className={classes.Twitter}onClick={()=>this.shareOnTwitter(quote,author)} variant="primary" size="md">Twitter {element}
                    </Button>
                    <Button  className={classes.Tumblr}onClick={()=>this.shareOnTumblr(quote,author)} variant="primary" size="md">Tumblr {element1}
                    </Button>
                </div>

            )
            

        }
    }
   
export default QuoteBox;