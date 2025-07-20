import React from 'react'

function Team() {
    return ( 
        <div className="container">
            <div className="row p-5 mt-5 mb-5">
                <h1 className = 'text-center mt-5 border-top'>People</h1>
             </div>
        <div className="row">
                <div className="col-6 "  >
                    <img src="https://zerodha.com/static/images/nithin-kamath.jpg" style={{borderRadius:'50%'}} ></img>
             
            </div>
            <div className="col-5">
                <p  style={{textAlign:'justify'}}> Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. </p>
                <br/>
                <p style={{textAlign:'justify'}}>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC). </p>
                <br/>
                <p>Playing basketball is his zen.</p>
                </div>
            </div>
        </div>
     );
}

export default Team;