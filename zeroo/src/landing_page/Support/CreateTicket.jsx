import React from 'react'

function CreateTicket() {
    return ( 
        <div className="container">
            <div className="row">
                <h1 className='fs-2 text-center  text-muted'>
                    To create a ticket, select a relevent topic
                </h1>
                </div>




                <div className="row" style={{display:"flex",  marginTop:"50px"}}>
                <div className='col-4 p-5' style={{textAlign:"left",display:"inline-block"}}>
                    <h4 className=' text-left'  style={{marginLeft:"-30px"}}>
    <i class="ri-add-circle-line"></i> Account opening
      
                    </h4>
                  
                    <a href=""   >Resident individual</a>
                    <br/>
                     <a href="" style={{textAlign:"left"}}>Minor</a>
                     <br/>
                      <a href="">Resident individual</a>
                      <br/>
                      <a href = " ">Non Resident indian (NRI)</a>
                      <br/>
                      <a href = " ">Company, Patnership, HUF and LLP</a>
                      <br/>
                      <a href =" ">Glossary</a>
                      
                </div>
            








 
                <div className='col-4 p-5' style={{textAlign:"left",display:"inline-block"}}>
                    <h4 className=' text-left'   style={{marginLeft:"-30px"}}>
 <i class="ri-user-line"></i> Your Zerodha Account
      
                    </h4>
                  
                    <a href=""   >Your Profile</a>
                    <br/>
                     <a href="" style={{textAlign:"left"}}>Account modification</a>
                     <br/>
                      <a href="">Client Master Report (CMR) and Depository Participant (DP)</a>
                      <br/>
                      <a href = " ">Nomination</a>
                      <br/>
                      <a href = " ">Transfer and conversion of securities</a>
                      <br/>
                      
                      
</div>

                <div className='col-4 p-5' style={{textAlign:"left",display:"inline-block"}}>
                    <h4 className=' text-left'>
 <i class="ri-user-line"></i> Kite
      
                    </h4>
                    <div className="kd" style={{marginLeft:"30px"}}>
                    <a href=""   >IPO</a>
                    <br/>
                     <a href="" style={{textAlign:"left"}}>Trading FAQs</a>
                     <br/>
                      <a href="">Margin Trading Facility (MTF) and Margins</a>
                      <br/>
                      <a href = " ">Charts and orders</a>
                      <br/>
                      <a href = " ">Alerts and Nudges</a>
                      <br/>
                      
                      </div>
</div>




</div>


















            
        </div>
     );
}

export default CreateTicket;