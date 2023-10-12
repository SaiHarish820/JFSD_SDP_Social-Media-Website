import React from 'react'
import {TbCircleDashed} from "react-icons/tb"

const ProfileUserDetails = () => {
  return (
    <div className='py-10 w-full '>
        <div className='flex items-center'>

            <div className='w-[15%]'>
        <img className='w-32 h-32 rounded-full'
         src="https://cdn.pixabay.com/photo/2023/10/11/05/10/man-8307671_1280.jpg" alt="" />
            </div>  

            <div className='space-y-5 text-xs'>
                <div className='flex space-x-10 items-center'>
                <p>username</p>
                <button>edit profile</button>
                <TbCircleDashed></TbCircleDashed>
                </div>
                <div className='flex space-x-10'>
                <div>
                  <span className='font-semibold mr-2'>10</span>
                  <span>posts</span>
                </div>

                <div>
                  <span className='font-semibold mr-2'>5</span>
                  <span>follower</span>
                </div>

                <div>
                  <span className='font-semibold mr-2'>7</span>
                  <span>following</span>
                </div>
              </div>

              <div>
                <p className='font-semibold'>Full Name</p>
                <p className='font-thin textsm'>
                One VS Rest
                </p>
              </div>

            </div>
        </div>

    </div>
  )
}

export default ProfileUserDetails