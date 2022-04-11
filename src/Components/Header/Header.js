import React from 'react';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import useFirebase from '../hooks/useFirebase';
import './Header.css'
const Header = () => {
    const {user,handleSignOut} = useFirebase()
    return (
        <div className='header-container'>
            <nav>
               <Link to='/home'>Home</Link>
               <span>{user?.displayName && user.displayName}</span>
               {
                   user?.uid ? <Button onClick={handleSignOut}>Sign Out</Button>:<Link to='/login'>Login</Link>
               }
               <Link to='/register'>Register Now</Link>

            </nav>
           
        </div>
    );
};

export default Header;