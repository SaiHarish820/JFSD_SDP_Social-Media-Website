import React from 'react'
import Sidebar from '../Components/SideBar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'

const Router = () => {
  return (
    <div>
      <div className='flex'>
        <div>
        <Sidebar/>
        </div>
        <div>
        <Routes>
      <Route path='/' element={<HomePage/>}></Route>
        </Routes>
        </div>
      </div>
    </div>
  )
}

export default Router