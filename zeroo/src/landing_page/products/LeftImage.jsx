import React from 'react'

function LeftImage() {
    return (
      <div className="container" style={{marginTop:"120px"}}>
        <div className="row">
          <div className="col-6">
         <img src ='https://zerodha.com/static/images/products-kite.png'></img>

          </div>

          <div className="col-6" >
            <h2 style={{textAlign:"justify"}}>Kite</h2>
            <p className='text-muted'style={{textAlign:"justify"}}>Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices. </p>
            <a href ="=" style={{display:"flex",textAlign:"justify"}}>Try demo</a>
            <br/>
            < a href=""  style={{display:"flex",textAlign:"justify"}}>Learn More</a> 
            <br/>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <img src="/public/media/appstoreBadge.svg" alt="Image 1" />
      <img src="/public/media/googlePlayBadge.svg" alt="Image 2" />
    </div>
          </div>
        </div>
      </div>
      );
}

export default LeftImage;