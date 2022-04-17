import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import User from './User'

export default function Router() {
  return (
    <>
        <Routes>
            <Route  path='/' element={<App/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
    </>
  )
}
