import React from 'react'

function Stats() {
    return ( 

        <div className="container">
            <div className="row">
                <div className="col-5 text-start">
                    <h1 className='fs-1'>Trust with confidence</h1>
                    <h3  className ='mt-5 text-start'>Customer-first always</h3>
                    <p className ='text=muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>


                    <h3 className ='mt-5 text-start'>No spam or gimmicks</h3>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>


                      <h3 className ='mt-5 text-start' >The Zerodha universe</h3>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                       <h3 className ='mt-5 text-start'>Do better with money</h3>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

                    
                </div>
                <div className="col-7">
                    <img src='/media/ecosystem.png' style={{width:"95%"}}></img>
                    <div>
                         <a href = '' className ='mx-7'>Explore our products <i class="ri-arrow-right-long-fill"></i></a>
                      
                         <a href = ''>Try kite demo <i class="ri-arrow-right-long-fill"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;