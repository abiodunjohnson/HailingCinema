import React , {Component} from 'react';
import axios from 'axios';
import Card from './Card';
// import Card2 from './Card2';
// import {Footer} from './Footer';
import Header from './Header';

// import Navbar2 from './Navbar2';





class SearchMovie extends Component {
    constructor (props) {
        super(props);
        // this.handleSearcharray = this.handleSearcharray.bind(this);
        this.state = {
            value : '',
            // apiD :[],
            apiData : []
            // apiData1 :["tt5977276", "tt6472976", "tt4126476"]
        }
    }

 
 

// this handles change
    onHandleChange =(e)=>{
        this.setState({
            value : e.target.value
        });
    };                              
// componentDidMount (){
//     this.handleSearcharray();
// }

//    handleSearcharray () {
//        this.state.apiData1.map((d) => {
//     return axios.get(`http://www.omdbapi.com/?apikey=4c044057&i=${d}`).then(({data})=>{
//         console.log(data.Plot)
//  this.setState({
//      apiD :data
//  })
//         // let output = data
//         // this.setState({
//         //     apiD:output
//         // })
//         console.log(this.state.apiD, typeof(this.state.apiD))
//     })
//        })
//    } 

    // this handle search
    handleSearch =()=> {
 axios.get(`http://www.omdbapi.com/?apikey=3e3b8fec&s=${this.state.value}`)
        .then(({data})=>{
           console.log(data);
           let search = data.Search;
           console.log(search, typeof(search));
           this.setState({
              apiData:search
           })
        })
       
    }


        


render (){
    const { apiData } = this.state;
    // const { apiD } = this.state;
    return(
        
      <div className="search-movie">
    
        <Header />  
      <div className='search'>
         <input type="text" className="search-input" onChange={this.onHandleChange} />

         </div>
       <div className="button">
       <input type="button"  value="Search Movies" onClick={this.handleSearch}/>
       </div>
       <div className='apistuffs'>
       {apiData.map(data=>(
              <div key={data.imdbID}>
              <Card title={data.Title} poster={data.Poster} year={data.Year} />
              </div>
          ))}
          </div>
     
         
    
     {/* <div className='apistuffs2'>
       
       {apiD.map(data=>(
              <div key={data.imdbID}>
              <Card2 actors={data.Actors} title={data.Title} poster={data.Poster} year={data.Year} plot={data.Plot} genre={data.Genre}  releasedDate={data.Released} />
              </div>
          ))}
          </div> */}
       
          {/* <Footer /> */}

      </div>
    )
}

}

export default SearchMovie


