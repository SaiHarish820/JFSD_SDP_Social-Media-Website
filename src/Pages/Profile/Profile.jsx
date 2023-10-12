import React from 'react'
import ProfileUserDetails from '../../Components/ProfileComponenets/ProfileUserDetails'
import ReqUserPostPart from '../../Components/ProfileComponenets/ReqUserPostPart'

const Profile = () => {
  return (
    <div className='px-20'>

        <div>
            <ProfileUserDetails/>
        </div>

        <div>
          <ReqUserPostPart/>
        </div>
    </div>
  )
}

export default Profile