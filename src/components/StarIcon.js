import React, { useEffect, useState } from 'react';

const StarIcon = ({coinId}) => {
    console.log(coinId);
    const [like, setLike] = useState(false);

    useEffect(() => {
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",")
            if (favList.includes(coinId)) {
                setLike(true)
            }
        }
    }, [coinId]);

    const idChecker = (id) => {
        let favList = null
        if (window.localStorage.coinList) {
            let favList = window.localStorage.coinList.split(",")
        }

        if (favList) {
            if (favList.includes(id)) {
            
            }else{
                window.localStorage.coinList = coinId
                setLike(true)
            }
        }
    }

    return (
        <img 
            onClick={()=>idChecker(coinId)}
            src= { 
                like ? 
                    "./assets/star-full.svg" 
                    : 
                    "./assets/star-empty.svg"
            }               
            alt="icon-star" 


        />
        
    );
};

export default StarIcon;