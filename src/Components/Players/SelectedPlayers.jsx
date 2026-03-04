import React from 'react';
import PurchasedPlayer from './PurchasedPlayer';

const SelectedPlayers = ({ selectedPlayers }) => {

    console.log(selectedPlayers);
    

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-8'>
            {
                selectedPlayers.map(player=> <PurchasedPlayer player={player} key={player.id}></PurchasedPlayer>)
            }
            
        </div>
    );
};

export default SelectedPlayers;