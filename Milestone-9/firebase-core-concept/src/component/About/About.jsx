import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
                <h1>This is about.. </h1>            
                <Link to='/'>
                <button className='btn btn-outline'> Go Home</button></Link>
        </div>
    );
};

export default About;