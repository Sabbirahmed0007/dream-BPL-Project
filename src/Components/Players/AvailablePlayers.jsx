import React from 'react';
import { use } from 'react';
import Player from './Player';

const AvailablePlayers = ({ playersPromise }) => {
    

    


    const players = use(playersPromise);
    console.log(players);

    const handleChoosePlayer = (id) => {

        console.log("Player's Id",id);
        
        
    }




    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8'>
            {
                players.map(player => <Player player={player} handleChoosePlayer={handleChoosePlayer} key={player.id}></Player>)
            }
        </div>
    );
};

export default AvailablePlayers;