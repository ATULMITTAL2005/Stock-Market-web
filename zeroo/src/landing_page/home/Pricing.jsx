import React from 'react'

function Pricing() {
    return ( 

      <div className="container mt-5">
        <div className="row">
            <div className="col-4">
                <h1 className='fs-2'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in india. Flat fees and no hidden charges</p>
                <a href ='' style={{textDecoration :"none"}}>
                    See Pricing <i class="ri-arrow-right-long-fill"></i>

                </a>
            </div>
              <div className="col-2"></div>
                <div className="col-6">
                    <div className="row">
                        <div className="col border border-black">
                            <h1 classname='mb-3'>₹ 0</h1>
                            <p>Free Equity delivery and <br/>direct mutual funds</p>
                        </div>

                        <div className="col border border-black">
                            <h1>₹ 20</h1>
                            <p>Free Equity delivery and <br/> direct mutual funds</p>
                        </div>
                    </div>
                </div>
        </div>
      </div>
     );
}

export default Pricing;