import React from 'react'
function RightImage() {
    return (
        <div className="container">
          <div className="row">
          <div className="col-6" style={{marginTop:"150px"}}>
            <h1 style={{display:"flex"}}>Console</h1>
            <p style={{display:'flex', width:"70%", marginTop:"50px",textAlign:"justify"}}>The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations. </p>
            <a href =""  style={{textAlign:"justify"}}>Learn More</a>
          </div>
          <div className="col-6">
            <img src ="/media/console.png"></img>
          </div>

          </div>


          
          

        </div>
      );
}

export default RightImage;