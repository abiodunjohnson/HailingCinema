import React, {Component} from 'react';

 export class ChoosePlan extends Component {
    render () {
        return (
           <section className="section section-plan">
   <div className="container-fluid padding">
       <div className="row welcome text-center">
           <div className="col-12">
               <h1 className="plan-heading">Choose Plan </h1>

           </div>
       </div>
       <div className="row">
           <div className="col-sm-4">
               <div className="plan">
                   <div className="inside-heading">Standard</div>
                   <p className="plan-paragraph">Try any plan risk-free for 30 days and Downgrade or upgrade at any time.
                   </p>
               </div>
               <div className="plan-list">
                   <ul className="u-list">
                       {/* <li className="list">Watch on your laptop, TV, phone and tablet</li> */}
                       <li className="list">Unlimited movies and TV shows</li>
                       <li className="list">First month free</li>
                       <li className="list">Cancel anytime</li>
                   </ul>
                   <strong>
                       <div className="price">#3,000</div>
                   </strong>
                   {/* <div className="btn-click">
                       <a href="http" className="btn1">Select Plan</a>
                   </div> */}
               </div>

           </div>

           <div className="col-sm-4">
               <div className="plan">
                   <div className="inside-heading">Pro</div>
                   <p className="plan-paragraph">Try any plan risk-free for 30 days and Downgrade or upgrade at any time.
                   </p>
               </div>
               <div className="plan-list">
                   <ul className="u-list">
                       <li className="list">HD available</li>
                       {/* <li className="list">Watch on your laptop, TV, phone and tablet</li> */}
                       <li className="list">Unlimited movies and TV shows</li>
                       <li className="list">First month free</li>
                       <li className="list">Cancel anytime</li>
                   </ul>
                   <strong>
                       <div className="price">#5,000</div>
                   </strong>
                   {/* <div className="btn-click">
                       <a href="htt" className="btn1">Select Plan</a>
                   </div> */}
               </div>

           </div>

           <div className="col-sm-4">
               <div className="plan">
                   <div className="inside-heading">Premium</div>
                   <p className="plan-paragraph">Try any plan risk-free for 30 days and Downgrade or upgrade at any time.
                   </p>
               </div>
               <div className="plan-list">
                   <ul className="u-list">
                       <li className="list">Ultra HD available</li>
                       <li className="list">HD available</li>
                       <li className="list">Watch on your laptop, TV, phone and tablet</li>
                       {/* <li className="list">Unlimited movies and TV shows</li> */}
                       <li className="list">First month free</li>
                       <li className="list">Cancel anytime</li>
                   </ul>
                   <strong>
                       <div className="price">#7,500</div>
                   </strong>
                   {/* <div className="btn-click">
                       <a href="http" className="btn1">Select Plan</a>
                   </div> */}
               </div>

           </div>
       </div>
   </div>
</section>

        )
    }
}