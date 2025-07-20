import React from 'react';
import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light"  style={{backgroundColor:"red"}}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/"><img src ='public/media/logo.svg'  style={{width:"25%" ,display:"flex"}}></img></Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul
            className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style={{ maxHeight: '100px' }}
          >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" to="/signup">
                signup 
              </Link>
            </li>


{/* //about */}
  <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" to="/About">
                About
              </Link>
            </li>


          {/* Product */}

              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" to="/product">
               Product
              </Link>
            </li>


            {/* //Pricing */}
              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" to="/pricing">
             Pricing
              </Link>
            </li>

            {/* //support */}

              <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="#" to="/support">
               support 
              </Link>
            </li>

           
</ul>
         
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
