import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './App.css';

const Welcome = () => {
    return (
        <div className='welcome'>
            <p style={
                {
                    marginTop: 10 + 'em',
                    marginBottom: 10 + 'em',
                    textAlign: 'justify'
                }
            }>
                Welcome to the study of multi-layer
                authentication on digital devices. We will be guiding
                you throughout the study and provide explanation when needed.
                There is some explanation embedded in the interface for
                further assistance you can ask anytime.
                To begin the study please press the button below.
            </p>
            <p className="para" style={{textAlign: "center", color: "red"}}>***Please do not refresh/close 
            the browser until the study completed screen is shown. Thank you!***</p>
            <div className="text-center">
                <Link to='/trailer'>
                <Button color="primary" style={
                    {
                        marginTop: 2 + 'em',
                        marginBottom: 10 + 'em',
                    }
                }>
                    Start
                </Button>
                </Link>
                
            </div>
            
        </div>
    );
}

export default Welcome;