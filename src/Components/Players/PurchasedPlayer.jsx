import React from 'react';

import btnDelete from '../../assets/Delete.png'

const PurchasedPlayer = ({ player, removePlayer }) => {
    const { name, img, country, playingRole, battingStyle, bowlingStyle, id } = player;
    
    const handleDelete = (id) => {
        // console.log("delete btn", id);
        removePlayer(id);
        
        
    }

    return (
        <div className='flex items-center justify-between border border-gray-50 rounded-lg p-4 '>
            <div className='flex items-center justify-center gap-3'>
                <div className='w-24 rounded-lg'>
                    <img className='w-full h-24 object-cover rounded-md' src={img} alt="" />
                </div>
                <div className='text-left space-y-1'>
                    <h1 className='text-lg font-semibold'>{name} ({country.slice(0, 3)})</h1>
                    <h1 className='badge badge-info'>{ playingRole}</h1>
                    <p>{battingStyle}</p>
                    <p>{ bowlingStyle}</p>
                </div>
            </div>
            <div className='px-5 btn bg-transparent border-none shadow-none' onClick={()=>handleDelete(id)}>
                <img src={btnDelete} alt="" />
            </div>
        </div>
        
    );
};

export default PurchasedPlayer;