
function Footer() {
    return ( 
      <div className="container mt-5  styles={{backgroundColor:	rgba(120, 110, 110, 1)}}">
        <div className="row">
            <div className="col">
                <img src = '/media/logo.svg' style={{width:'50%'}}></img>
                <p className='mt-3'>© 2010 - 2025, Zerodha Broking Ltd.</p>
                 <p className='mt-3'>All rights reserved.</p>
                  <img src = 'https://zerodha.com/static/images/x-twitter.svg' style={{width:'10%'}}></img>
                  <img src = 'data:image/jpeg;base64,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' style={{width:'30%'}}></img>
           <img src = 'data:image/png;base64,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' style={{width:'20%'}}></img>
            </div>
             <div className="col mt-3" style={{textAlign:"left"}}>
                <h3>Account</h3>
                <a href=""  className ="text-muted">Open demat account</a>
                <br/>
                <a href=""   className ="text-muted">Minor demat account</a>
                     <br/>
                <a href=""    className ="text-muted">NRI demat account</a>
                     <br/>
                <a href=""    className ="text-muted">commodity</a>
                     <br/>
                <a href=""    className ="text-muted">Dematerialisation</a>
                      <br/>
                <a href=""    className ="text-muted">Fund transfer</a>

             </div>
              <div className="col mt-3" style={{textAlign:"left"}}>

                  <h3 >Support</h3>
                <a href= ''className ='mt-4  text-muted'>Contact us</a>
                <br/>
                <a href=''    className ="text-muted">Support portal</a>
                <br/>
                <a href= ''    className ="text-muted">How to file a complaint?</a>
                <br/>
                <a href= ''    className ="text-muted">Status of your complaints</a>
                <br/>
                <a href= ''   className ="text-muted"  >Bulletin</a>
                <br/>
                <a href=' '    className ="text-muted">Circular</a>
                <br/>
                <a href= ''   className ="text-muted">Z-Connect blog</a>
                <br/>
                <a href= ''   className ="text-muted">Downloads</a>

              </div>
        <div className="col"  style={{textAlign:"left"}}>
        <h3>Company</h3>
        <a href='' className ='mt-4'>About us</a>
        <br/>
        <a href=""   className ="text-muted">Philosopy</a>
        <br/>
        <a href=""   className ="text-muted"  >Press & media</a>
        <br/>
        <a href=""   className ="text-muted" >Careers</a>
        <br/>
        <a href=""    className ="text-muted">Zerodha Cares (CSR)</a>
        <br/>
        <a href=""    className ="text-muted">Philosopy</a>

        
        </div>
            

               </div>
<div className="mt-5 text-small text-muted">
<p style={{textAlign:'left'}}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF </p>

<p  style={{textAlign:'left'}}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances </p>

<p  style={{textAlign:'left'}}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month. </p>


<p style={{textAlign:'left'}}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here. </p>



</div>



        </div>
      
     );
}

export default Footer;

