"use client";

import React, { useState, useEffect } from 'react';
import Speedometer from 'react-speedometer';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Sales $',
          data: [18127, 22201, 19490, 17938, 24182, 17842, 22475],
          borderColor: 'rgb(34, 197, 94)', // Green border color
          backgroundColor: 'rgba(34, 197, 94, 0.2)', // Light green background color
          fill: true,
        },
      ],
    });
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Revenue',
        },
      },
      maintainAspectRatio: false,
      responsive: true,
    });
  }, []);

  return (
    <>
      <div className='flex justify-between'>
        {/* Line Chart */}
        <div className='w-4/6 md:col-span-2 relative lg:h-[70vh] h-[50vh] ml-5 mr-auto p-4 rounded-lg bg-white'>
          <Line data={chartData} options={chartOptions} />
        </div>

        {/* Side Informations */}
        <div className='w-[31%] relative lg:h-[70vh] h-[50vh] ml-1 mr-5 rounded-lg bg-gray-100 flex flex-col justify-between'>
          <div className='flex-1 mb-2 rounded-lg p-6 bg-white'>
            <strong>
              <div className='flex justify-between'>
                <span>Advancers / Decliners</span>
                <span className='ml-4 text-blue-400'>Indices &gt;</span>
              </div>
            </strong>
            <div className='flex mt-4 h-2 w-full'>
              <div className='bg-green-500' style={{ width: '65.48%' }}></div>
              <div className='bg-red-500' style={{ width: '34.52%' }}></div>
            </div>
            <div className='flex justify-between mt-1 text-sm'>
              <span style={{ width: '65.48%' }} className='text-start'>167</span>
              <span style={{ width: '34.52%' }} className='text-end'>88</span>
            </div>
            <div className='flex mt-4 text-sm'>
              <div className='flex flex-col items-center mr-5'>
                <span className='font-medium text-gray-500'>Turnover</span>
                <span className='mt-1 text-xl font-bold'>2.84 Ar</span>
              </div>
              <div className='flex flex-col items-center mx-5'>
                <span className='font-medium text-gray-500'>Transactions</span>
                <span className='mt-1 text-xl font-bold'>24,746</span>
              </div>
              <div className='flex flex-col items-center ml-5'>
                <span className='font-medium text-gray-500'>Traded Shares</span>
                <span className='mt-1 text-xl font-bold'>59,56,351</span>
              </div>
            </div>
          </div>
          <div className='flex-1 rounded-lg p-4 bg-white'>
            <strong>
              <div className='flex justify-between'>
                <span>Fear & Greed Index <span className='ml-1 text-blue-400'> &gt;</span></span>
              </div>
            </strong>
            <div className='flex'>
              <p className='mt-8'>
                <span className='text-sm text-green-500 font-bold'>Extreme Greed</span><br/>
                <span className='text-sm'>is driving the market</span>
              </p>
              <img 
                src='/p.png' 
                alt='Fear & Greed Index' 
                style={{ width: '160px', height: '135px' }} // Adjust the size as needed
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LineChart;
