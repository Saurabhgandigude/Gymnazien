import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Text from './Text';
import './navstyle.css';

function Navbar() {
  return (
    <div className='container' >
      <div className='row' style={{width:'500rem'}}>
        <div className='col-lg-6' style={{ padding: '2rem' }}>
          Logo
        </div>
        <div className='col-lg-6 text-end' style={{paddingLeft:'15rem'}}>
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#A">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">FAQ</a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Contact Us</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p>This is the Contact Us content.</p>
          <form>
          <input type='text' placeholder='Enter your Name'/><br/><br/>
        <input type='number' placeholder='Enter your 10-digit number'/><br/><br/>
        <input type='email' placeholder='Enter your Email'/><br/><br/>
        <input type='password' placeholder='Create Password'/><br/><br/>
        <input type='password' placeholder='Confirm Password'/><br/><br/>
        <button type="button" class="btn btn-dark">Submit</button><br/><br/>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
