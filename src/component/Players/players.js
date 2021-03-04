import React, { useEffect, useState } from 'react';
import './players.css';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayerDetails from "../playerDetails/details";
import Cart from '../Cart/cart'
import PlayerInfo from '../../MOCK_DATA.json';

const Players = () => {
    // data set on body
    const [player, setplayer] = useState([]);
    // const [add, setAdd] = useState([]);

    useEffect(()=>{
        setplayer(PlayerInfo);
        // console.log(player);
    },[]);

    // player added by onclick
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (details) =>{
        const newCartAdd = [...cart, details];
        setCart(newCartAdd);
    }

    return (
        <div className='container'>
           <div className="row mt-2 ">
            <div className="col-md-8">
                    {
                    player.map( playerInfo => <PlayerDetails
                            handleAddPlayer={handleAddPlayer}
                            player={playerInfo}>
                        </PlayerDetails>)
                    }
                </div>
                <div className="col-md-4">
                    <Cart cart={cart}></Cart>
                </div>
           </div>
        </div>
    );
};

export default Players;