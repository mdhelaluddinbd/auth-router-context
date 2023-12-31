import React, {  useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext)

    console.log(user)
    if(loading){
        return <p>Loading ...</p>
    }
    if(user && user.uid){
        return children;
    }
    return (<Navigate to={"/login"}></Navigate>);
};

export default PrivateRoute;