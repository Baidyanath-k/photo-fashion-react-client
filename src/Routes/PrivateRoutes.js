import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';
import { Audio } from 'react-loader-spinner'
;


const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation()
    
    if(loading){
        // return <Spinner animation="border" variant="primary" />
       return <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='/Login' state={{from:location}} replace></Navigate>
};

export default PrivateRoutes;




