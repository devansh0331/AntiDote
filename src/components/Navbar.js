import React from 'react'
import {Link , useNavigate} from 'react-router-dom'
// import {Icon} from 'react-icons-kit'
// import {shoppingCart} from 'react-icons-kit/feather/shoppingCart'
// import logo from '../Images/logo.png'
import {auth} from '../Config/Config'
import './Navbar.css'
import Logo from "../img/AntiDoteLogo.png"


export const Navbar = ({user}) => {
    
    const Navigate = useNavigate()
    const handleLogOut = () => {
        auth.signOut().then(() => {

            setTimeout(() => {
               Navigate('/login') 
            }, 2000);
        })
    }
 
    return (
      
            <div className='navbar nav-main'>
             <div className='leftside'>
                <div className='logo mylogo'>
                    {/* <span> <strong>AntiDote</strong> </span> */}
                    <span><a href="/"> <img src={Logo}  alt=""/> </a></span>
                    <span> <strong>AntiDote</strong></span>
                </div>
            </div>

           

            <div className='rightside'>
            {!user && <>
            
                <div><Link className='navlink nav-link nav-link-signup' to="signup">SIGN UP</Link></div>
                    <div><Link className='navlink nav-link nav-link-login' to="login">LOGIN</Link></div>

            </>}

            {user&&<>
                    <div><Link className='navlink nav-link' to="/">Welcome! {user}</Link></div>
                    <div className='cart-menu-btn'>
                        <Link className='navlink nav-link' to="/cart">
                            {/* <Icon icon={shoppingCart} size={20}/> */}
                        </Link>
                        {/* <span className='cart-indicator'>{totalQty}</span> */}
                    </div>
                    <div className='btn btn-danger btn-md'
               onClick={handleLogOut}>LOGOUT</div>
                </>}                     
           
                </div>
        </div>
    )
}