import React from 'react';

const Bookings = () => {
  return (
    <div className="container mx-auto px-6 py-20 mt-20">
      <h1 className="text-4xl font-bold font-display text-[#181E4B] mb-8 text-center">My Bookings</h1>
       <div className="bg-white rounded-lg shadow-lg p-8 min-h-[400px] flex flex-col items-center justify-center text-center">
        <p className="text-gray-500 text-xl mb-4">View and manage all your upcoming trips.</p>
        <div className="p-4 border border-dashed border-gray-300 rounded-md bg-gray-50 max-w-md w-full">
            <span className="text-gray-400">No active bookings found.</span>
        </div>
      </div>
    </div>
  );
};

export default Bookings;
