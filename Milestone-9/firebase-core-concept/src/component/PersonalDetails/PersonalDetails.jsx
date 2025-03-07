import React, { useContext } from 'react';
import { authContext } from '../Main/Main';

const PersonalDetails = () => {
    const authContextValue = useContext(authContext)
    console.log('this is etails', authContextValue)
    return (
        <div>
            <h1>PersonalDetails here</h1>
        </div>
    );
};

export default PersonalDetails;