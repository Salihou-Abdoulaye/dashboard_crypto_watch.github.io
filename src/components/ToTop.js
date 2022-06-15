import React from 'react';

const ToTop = () => {
    return (
        // cet evenement onclick permet de renvoyer la page au debut
        <div className='top' onClick={()=>window.scrollTo(0, 0) }>
            <img src="./assets/arrow-icon.svg" alt="arrow" />   
        </div>

        
    );
};

export default ToTop;