import React,{Component} from "react";
import  "./car.css";
import alexa1 from "./alexa (1).jpg"
import alexa2 from "./alexa (2).jpg"
import alexa3 from "./alexa (3).jpg"
import alexa4 from "./alexa (4).jpg"
import alexa5 from "./alexa (5).jpg"
import alexa6 from "./alexa (6).jpg"
import alexa7 from "./alexa (7).jpg"
import alexa8 from "./alexa (8).jpg"



class Carousel extends Component{
    state = {
        current  :0,
    }

arr = [alexa1,alexa2,alexa3,alexa4,alexa5,alexa6,alexa7,alexa8,alexa2,alexa3,alexa4,alexa5,alexa6,alexa7,alexa8];

    classs="";
    
    previousHandler = () => {

        this.classs = `active-slide-right-${this.state.current}`;

        this.setState({current : this.state.current -1 })
    }
    
    nextHandler = () => {
        this.classs = `active-slide-left-${this.state.current}`;
        this.setState({current : this.state.current +1})
    }
    render(){
        const images = this.arr.map((el,i) => {
            let clas="";
            if(i-1===this.state.current) clas="left-1";
            if(i-2===this.state.current) clas="left-2";
            if(i+1===this.state.current) clas="right-1";
            if(i+2===this.state.current) clas="right-2";
            
            return <img src={el} className={`img ${clas}`}  id={`img-${i}`}
                      
                       key={el}/>
        })
       
        const style ={
            transform  : `translateX(-${(100/this.arr.length)*this.state.current}%)`,
        }
        
        const dots = this.arr.map((el,i) => {           
            return <div  className="dots" id={`dot-${i}`}/>
        })
        
        

        return (
            
           
            <div className="container">
                
                <button onClick={this.nextHandler} className="forward">&gt;</button>
                <button onClick={this.previousHandler} className="backward">&lt;</button>
                
                <div className={`car active-slide-${this.state.current}`}  >
                    <div style={{  "transform"  : `translateX(-${(100/this.arr.length)*this.state.current}%)`}} className="slider">
                        {images}
                    </div>
                    
                </div>
                
                <div className={`dotContainer active-dot-${this.state.current}`}>
                    {dots}
                </div>
                
            </div>            
                    
                
                
                )
    }
    
}

export default Carousel;
