import {useContext} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../../Context/AuthProvider/AuthProvider';

const Headers = () => {
    const {logOut, user} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"><path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h8m-8 6h16"/></svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <Link>Home</Link>
                        </li>

                        <li>
                        <Link to="/Blogs">Blog</Link>
                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Photo-Fashion</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li>
                        <Link to='/'>Home</Link>
                    </li>

                    <li>
                        <Link to="/Blogs">Blog</Link>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                user?.uid? 
                    <> 

                        <>
                            <img src={user.photoURL} className="rounded-full w-12 mr-2" alt="" />
                        </>

                        <button className="btn" onClick={handleLogout}>
                            logOut
                        </button> 
                        
                    </>
                    :
                    <>

                        <button className="btn mr-4">
                            <Link to='/Login '>Log In</Link>
                        </button>
                        <button className="btn">
                            <Link to="/Signup ">Sign Up</Link>
                        </button>
                    </>
                }

            </div>
        </div>
    );
};

export default Headers;