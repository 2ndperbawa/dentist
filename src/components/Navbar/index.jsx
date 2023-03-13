import React from 'react';
import logo from '../../logo.svg';
import {Link} from 'react-router-dom';
import './navbar-style.css';

export default function Navbar() {
  return (<div className='navbar-div'> 
            {/* top navbar */}
            <div className='top-navbar'>
                <div className='navbar-top-logo'><img src={logo}  alt="" /></div>
            </div>

            {/* user identity */}
            <div className='user-identity'>
                <div className='user-identity-div'>
                    <div className='user-photo-div'>
                      <div className='user-photo'>
                        <img src={logo} alt="" />
                      </div>
                      </div>
                    <div className='user-desc'>
                      <div className='user-name user-inner-desc'>User</div>
                      <div className='user-role user-inner-desc'>Admin</div>
                    </div>
                </div>
            </div>


            {/* general */}
            <div className='menu-wrap'>
                <div className='wrap-title'>GENERAL</div>
                <Link to="/">
                  <div className='nav-menu-button'>
                    <div className='nav-button-logo-div'>
                      <div className='nav-button-logo'>
                        <img src={logo} alt="" />
                      </div>
                    </div>
                    <div className='nav-button-text'>
                      <div>Home</div>
                    </div>
                  </div>
                </Link>
                <Link to="/table">
                  <div className='nav-menu-button'>
                    <div className='nav-button-logo-div'>
                      <div className='nav-button-logo'>
                        <img src={logo} alt="" />
                      </div>
                    </div>
                    <div className='nav-button-text'>
                      <div>Table</div>
                    </div>
                  </div>
                </Link>
                <Link to="/about">
                  <div className='nav-menu-button'>
                    <div className='nav-button-logo-div'>
                      <div className='nav-button-logo'>
                        <img src={logo} alt="" />
                      </div>
                    </div>
                    <div className='nav-button-text'>
                      <div>About</div>
                    </div>
                  </div>
                </Link>
            </div>

            

          </div>);
}
