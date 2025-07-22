import React from 'react'

function Hero() {
    return (  
         
      <div className="container">
        <div className="row">
            <div className="col-md-6" style={{marginTop:"100px"}}>
                <h1  style={{marginLeft:"500px"}}>Charges</h1>
                <h4 className='text-muted' style={{marginLeft:"300px",width:"100%"}}>List of all Charges and taxes
                </h4>

            </div>
        </div>
        <div className="row">
            <div className="col-4">
              
                <img src="/media/zero.svg"></img>
                <div>
                    <h4>Free equity Delivery</h4>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage. </p>
                </div>

            </div>

{/* imag */}

 <div className="col-4">
              
                <img src="/media/tw.svg"></img>
                <div>
                    <h4>Intraday and F&O trades</h4>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.  </p>
                </div>






            </div>





            <div className="col-4">
              
                <img src="/media/zero.svg"></img>
                <div>
                    <h4>Free direct MF</h4>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.   </p>
                </div>
</div>






        </div>
      </div>
    );
}

export default Hero;