import React from 'react'

function Hero() {
    return (  
<div  className="container" >
    <div className ="row text-center">
       <img src = 'public/media/homeHero.png' classNmae = 'mb-5'></img>
       <h1 className = 'mt-5'>Invest in everything</h1>
       <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
       <button className ='p-2 btn  btn-info'style={{width:"30%",margin:"0 auto",color:"white",fontWeight:500}}>Sign up fo free</button>
    </div>
    
</div>
       
    );
}

export default Hero;