import React from 'react';

function  Awards() {
    return (
     <div className = "container p-5 mb-5">
        <div className="row">
            <div className="col-6">
                <img src = '/media/largestBroker.svg'></img>
            </div>
            <div className="col-6">
                <h1>Largest stock broker in india</h1>
                <p>2+ million Zerodha clients contribute to over 15% of all volumes in india daily</p>

                <div className="row">
                    <div className="col-6 p-4">
                          <ul>
                    <li><p>Futures and options</p></li>
                    <li><p>Comodity derivatives</p></li>
                    <li> <p>currency derivatives </p></li>
                </ul>
                    </div>
                       <div className="col-6 p-4">
                          <ul>
                    <li><p>stocks & IPOs</p></li>
                    <li><p>Direct mutual funds</p></li>
                    <li><p>Bonds and government security </p></li>
                </ul>
                    </div>
                    <img src='/media/pressLogos.png'></img>
                </div>

              
            </div>
        </div>
     </div>
     );
}

export default  Awards;