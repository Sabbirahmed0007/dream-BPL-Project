import React from 'react';
import PurchasedPlayer from './PurchasedPlayer';

const SelectedPlayers = ({ selectedPlayers, removePlayer , setToggle}) => {

    console.log(selectedPlayers);
    

    return (
       
            
        <div className='my-4 w-4/5 rounded-lg lg:w-3/5 space-y-5'>
            {
                selectedPlayers.map(player => <PurchasedPlayer removePlayer={removePlayer} player={player} key={player.id}></PurchasedPlayer>)
            }
            
            <div className='lg:text-left'>
                <button onClick={()=> setToggle(true)} className='btn btn-warning'>Add More Player</button>
            </div>
            </div>
       
    );
};

export default SelectedPlayers;