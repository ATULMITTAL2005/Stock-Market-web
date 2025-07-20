import React from 'react'
function Hero() {
    return (
    <div className="container">

        <div className="row" style={{ marginLeft:"-233px",height:"100px",Width:"100%",backgroundColor:"rgb(95, 131, 249)" ,marginRight:"-160px"}}>
            <div className="col">
            <h4 style={{marginLeft:"-510px",padding:"30px",color:"white" ,display:"inline-block"}}>Support Portal</h4>
            </div>
            <div className="col-4">
                <a href =""    style={{display:"flex",color:"white",marginTop:"50px",marginLeft:"50px"}}>track Tickets</a>
            </div>
             
        
        </div>
        <div className="col-6  p-5 " style={{marginLeft:"300px"}}>
            <h2>Search for an answer or browse help topics to create a ticket</h2>
            <input type="search"  placeholder="Eg.how do i activate F&Q "style={{width:"100%",height:"40px",padding:"30px",}}></input>
        </div>
    </div>
      );
}

export default Hero;