import React from 'react';

const TopCorner = () => {
  return (
    <div>
      <div className="flex mt-[20px]">
        <img 
          className="ml-[10px]"
          src="/world.png" 
          alt="Fear & Greed Index" 
          style={{ width: '30px', height: '30px' }} // Adjust the size as needed
        />
        <div>
          <h2 className="text-white ml-[80px] mt-[5px]"><strong>Chiyapasal Guff</strong></h2>
        </div>
        <div className="ml-[80px] mt-[4px] text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="26" 
            height="26" 
            fill="currentColor" 
            className="bi bi-plus-circle" 
            viewBox="0 0 16 16"
          >
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>
        </div>
      </div>

      {/* New Section Below */}
      <div className="flex items-center mt-[20px] ml-[5px]">
        <button className="bg-white text-black font-semibold rounded-full mr-2 h-[30px] w-[32px]"><span className='text-xs'>All</span></button>
        <button className="bg-gray-700 text-gray-400 font-semibold rounded-full h-[30px] w-[72px] mr-2"><span className='text-xs'>Following</span></button>
        <button className="bg-gray-700 text-gray-400 font-semibold rounded-full h-[30px] w-[77px] mr-2"><span className='text-xs'>My Stocks</span></button>
        <button className="bg-gray-700 text-gray-400 font-semibold rounded-full h-[30px] w-[69px]  mr-2"><span className='text-xs'>Portfolio</span></button>
        <div className="ml-auto mr-3">
          {/* <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="22" 
            height="22" 
            fill="currentColor"
            className="text-gray-400" 
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.415l-3.85-3.85a1.007 1.007 0 0 0-.115-.098zm-5.207-.23a5.5 5.5 0 1 1 0-7.778 5.5 5.5 0 0 1 0 7.778z"/>
          </svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" fill="currentColor" className="text-gray-400" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
        </div>
      </div>
    </div>
  );
}

export default TopCorner;
