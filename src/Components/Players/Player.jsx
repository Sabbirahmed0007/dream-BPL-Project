import React from 'react';
import cardAvatar from '../../assets/card-avatar.png'
import countryIcon from '../../assets/Group.png'

const Player = ({ player }) => {


    const { name, img, country, playingRole, rating, category, battingStyle, bowlingStyle , price} = player;





    return (
        <div>
            <div className="card bg-white text-black w-96   mx-auto shadow-sm">
                <figure>
                    <img
                        className='w-fit h-[400px]'
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
                        <span className='badge badge-accent text-white badge-lg'>{ category}</span>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-semibold'>{ battingStyle}</div>
                        <div className='text-lg font-semibold'>{ bowlingStyle }</div>
                    </div>
                    <div className='flex items-center justify-between'>
                        <div>
                            Price: $<span className='font-semibold'>{ price }</span>
                        </div>
                        <div>
                            <button  className='btn'>Choose Player</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Player;