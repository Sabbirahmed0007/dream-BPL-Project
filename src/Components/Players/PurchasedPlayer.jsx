import React from 'react';
import cardAvatar from '../../assets/card-avatar.png'
import countryIcon from '../../assets/Group.png'

const PurchasedPlayer = ({ player }) => {
    const { name, img, country, playingRole, rating, category, battingStyle, bowlingStyle, price} = player;

    return (
        <div>
            <div className="card bg-white text-black    mx-5  shadow-sm">
                <figure>
                    <img
                        className='w-full h-[400px] object-cover'
                        src={img}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-xl font-bold uppercase"><span><img src={cardAvatar} alt="" /></span>{name}</h2>
                    <div className='flex items-center justify-between border-b-2 border-gray-200 pb-3 my-2'>
                        <div className='flex items-center gap-2 font-bold'>


                            <img src={countryIcon} alt="" />

                            {country}
                        </div>
                        <div>
                            <div className="badge badge-lg py-4">{playingRole}</div>
                        </div>
                    </div>
                    <div className='my-2 flex items-center justify-between'>
                        <span className='font-semibold'>Rating: <span>{rating}</span></span>
                        <span className='badge badge-accent text-white badge-lg'>{category}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className=' font-bold'>{battingStyle}</div>
                        <div className='font-bold'>{bowlingStyle}</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            Price: $<span className='font-bold'>{price}</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
    );
};

export default PurchasedPlayer;