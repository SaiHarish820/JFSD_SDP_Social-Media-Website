import React from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Sidebar = () => {
  return (
    <div>
      <div>
        <div>
          <img className='w-40' src="http://i.imgur.com/zqpwkLQ.png" alt="" />
        </div>
        <div className='flex items-center cursor-pointer'>
          <IoReorderThreeOutline />
          <p className='ml-5'>More</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
