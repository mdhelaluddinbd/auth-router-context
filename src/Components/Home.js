import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user}=useContext(AuthContext);
    return (
        <div>
            <h1 className='text-2xl mt-5 font-bold'>Welcome to our web site {user?.displayName}</h1>
        </div>
    );
};

export default Home;