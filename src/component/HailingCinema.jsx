import React from "react";
import Navbar2 from './Navbar2';
import {LatestRelease} from "./LatestRelease";
// import {Categories} from './Categories';
import {ChoosePlan} from './ChoosePlan';
import {Footer} from './Footer';



export const HailingCinema = () =>{
    return(
        <div>
        
        <Navbar2 />
        
        <LatestRelease/>
        {/* <Categories/>    */}
        <ChoosePlan/> 
        <Footer />    
        </div>
    )
}

// export default HailingCinema;