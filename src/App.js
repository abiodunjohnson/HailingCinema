import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchMovie from './component/SearchMovie'
// import Romance from './component/Romance';
import {HailingCinema} from "./component/HailingCinema";
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import './App.css';
import './Style.css';

   const Error =()=>{
    return (
      <div>
         <h1>Error: The path doesn't exist</h1>
         
         
      </div>
    )
  }


class App extends Component {
  render () {
  return (

<BrowserRouter>
       <div className="App">
      <Switch>
       <Route path="/" component={HailingCinema} exact />
      <Route path="/search" component={SearchMovie} />
      <Route component={Error} />
      
      </Switch>
      
       </div>

       
       </BrowserRouter>
    
   
  );
  
}
}
   






export default App;
