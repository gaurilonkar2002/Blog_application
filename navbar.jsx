import { useContext } from 'react'
import React from 'react'
import { AuthContext } from '../context/authContext'
import Limg from "../imgs/blog.jpg"
import { Link } from 'react-router-dom'
 

export default function Navbar() {
  
  const {currentUser ,logout} = useContext(AuthContext)

  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
               <Link to="/">
                <img className='limg' src={Limg} /></Link>
            </div>
            <div className="links">
                <Link className='link'to="/?cat=art"><h6>ART</h6></Link>
                <Link className='link'to="/?cat=science"><h6>SCIENCE</h6></Link>
                <Link className='link'to="/?cat=technology"><h6>TECHNOLOGY</h6></Link>
                <Link className='link'to="/?cat=cinema"><h6>CINEMA</h6></Link>
                <Link className='link'to="/?cat=design"><h6>DESIGN</h6></Link>
                <Link className='link'to="/?cat=food"><h6>FOOD</h6></Link>
                <span className='username'>{currentUser?.username}</span>
                {currentUser ? (<span className='log' onClick={logout}>Logout</span>):(<Link className='log' to="/login">Login</Link>)}
                <span className='write'>
                    <Link className='link' to="/Write">Write</Link>
                </span>


                </div>
        </div>
      
    </div>
  );
};


