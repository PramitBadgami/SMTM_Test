'use client';

import React from 'react';

const Card = () => {
  const profiles = [
    { name: 'Tanake dai', minutes: '33m', description: 'Something is up with this stock. Aja dherai nai badeko cha', button: 'Buy' },
    { name: 'Janaki dai', minutes: '12/12/2023', description: 'My thoughts on the activity of sana kishan .. hope u like it', button: 'Sell' },
  ];

  const handleClick = (description) => {
    console.log(description);``
  };

  return (
    <>
      {profiles.map((profile, index) => (
        <div key={index} className='mb-8'>
          <div className="flex mt-6 ml-3 text-white items-start">
            <img 
                className="rounded-full"
                src="/profile.jpg" 
                alt="Fear & Greed Index" 
                style={{ width: '30px', height: '30px' }}
            />
            <div className="flex flex-col ml-2">
              <p className="text-xs">{profile.name}</p>
              <strong><p className="text-gray-500 text-xs">{profile.minutes}</p></strong>
            </div>
            <button
              style={{ backgroundColor: '#BBD9FB' }}
              className="text-black font-semibold rounded-full h-[26px] w-[52px] ml-[190px]"
              onClick={() => handleClick(profile.description)}
            >
              <span className="text-xs">SKBBL</span>
            </button>
          </div>
          <p className='text-white text-m ml-[50px] mt-2'>{profile.description}</p>
          <div className='flex mt-5'>
            <button className="bg-white text-black font-semibold rounded-full h-[26px] w-[42px] ml-12">
              <span className='text-xs'>{profile.button}</span>
            </button>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="text-gray-400 mt-1 ml-[128px]" fill="currentColor" viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/>
            </svg>
            <p className="text-gray-400 text-xs mt-[6px] ml-1">10</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 mt-[2px] ml-4" viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
              <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105"/>
              <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5"/>
            </svg>
            <p className="text-gray-400 text-xs mt-[6px] ml-1">3</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="text-gray-400 mt-[3px] ml-4" viewBox="0 0 16 16" style={{cursor: 'pointer'}}>
              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"/>
            </svg>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
