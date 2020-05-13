import React from 'react';
import './App.css';

const Finish = () => {
    return (
        <div className='welcome'>

            <p style={
                {
                    marginTop: 10 + 'em',
                    marginBottom: 10 + 'em',
                    textAlign: 'center'
                }
            }>
                Thank you! All your responses have been
                successfully saved.
            </p>
        </div>
    );
}

export default Finish;