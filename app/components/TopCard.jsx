import React from 'react';

const TopCard = () => {
  const stocks = [
    { name: 'First Micro Finan...', ticker: 'FMDBL', price: '930.00', change: '-14.00', percentage: '-1.48%', color: 'red' },
    { name: 'Best Finance', ticker: 'BFC', price: '644.00', change: '+31.00', percentage: '+5.06%', color: 'green' },
    { name: 'Singati Hydro En...', ticker: 'SHEL', price: '250.00', change: '+14.50', percentage: '+6.16%', color: 'green' },
    { name: 'Kutheli Bukhari S...', ticker: 'KBSH', price: '1,863.40', change: '+169.40', percentage: '+10.00%', color: 'green' },
    { name: 'Narayani Dev...', ticker: 'NABBC', price: '629.00', change: '+21.00', percentage: '+3.45%', color: 'green' },
  ];

  return (
    <div className='p-5'>
      <div className='bg-white border rounded-lg shadow-sm'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-1 flex items-center justify-center bg-blue-500 text-white rounded-l-lg'>
            <p className='text-lg font-semibold'>Trending..</p>
          </div>
          <div className='col-span-4 grid grid-cols-5 gap-4 p-5'>
            {stocks.map((stock, index) => (
              <div key={index} className='flex flex-col items-center justify-center'>
                <div className='text-center'>
                <h2 className='text-sm font-semibold text-gray-400'>{stock.name}</h2>
                </div>
                <div className='flex justify-center items-center'>
                  <h3 className='text-l font-bold text-blue-500'>{stock.ticker}</h3>
                  <p className='text-l font-semibold ml-4'>{stock.price}</p>
                </div>
                <div className='text-center'>
                  <p className={`text-xs ${stock.color === 'green' ? 'text-green-500' : 'text-red-500'} font-bold flex items-center justify-center`}>
                    {stock.change}
                    <span className='ml-4'>{stock.percentage}</span>
                    <b><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" className="ml-1 bi bi-arrow-down-right" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M14 13.5a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1 0-1h4.793L2.146 2.854a.5.5 0 1 1 .708-.708L13 12.293V7.5a.5.5 0 0 1 1 0z"/>
                    </svg></b>
                  </p>
                </div>

              </div>
            
            ))}
          </div>
          <div className='col-span-1 flex flex-col items-center justify-center'>
            <button className='bg-yellow-100 text-gray-800 py-3 px-6 rounded-lg'>
              <strong>View Stock Live</strong>
              <br />
              <div className='flex items-center mt-1'>
                <div className='w-2 h-2 bg-green-500 rounded-full mr-2'></div>
                <span className='text-green-500'>Market Open</span>
              </div>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TopCard;
