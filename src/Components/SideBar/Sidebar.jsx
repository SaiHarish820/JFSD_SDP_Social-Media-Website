import React from 'react';
import { IoReorderThreeOutline } from 'react-icons/io5';
import { menu } from './SidebarConfig';

const Sidebar = () => {
  return (
    <div>
      <div>
          <div>
          <img className='w-40' src="http://i.imgur.com/zqpwkLQ.png" alt="" />
           </div>


        <div className='mt-10'>

          {menu.map((item)=>
          <div className='flex items-center mb-5 cursor-pointer textlg'>
          <p>{item.title}</p>
          {item.icon}
          </div>)}


        </div>


        </div>
        <div className='flex items-center cursor-pointer'>
          <IoReorderThreeOutline />
          <p className='ml-5'>More</p>
        </div>
      </div>
  );
}

export default Sidebar;
