// views/Home.js or wherever your Home component is located
import React from 'react';
import dataIcon from '../../assets/images/data-icon.png';


const Home = () => {
    return (
        <div>
            <h2 style={{
                textAlign: 'center',
                fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', // A professional font
                fontSize: '24px', // Adjust the font size as needed
                fontWeight: '600', // Medium boldness
                color: '#333', // A standar 
                margin: '20px 0', // Add some space around the heading
                letterSpacing: '0.5px', // Optional: Adjust letter spacing for readability
            }}>
            <img src={dataIcon} alt="logo" width="100" height="100" aria-hidden="true" decoding="async" />
            ASCENDING Inc. Analytics Dashboard</h2>

        </div>
    );
};

export default Home;
