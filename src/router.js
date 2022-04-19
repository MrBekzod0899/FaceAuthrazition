import React, {useReducer} from 'react'
import { Route, Routes } from 'react-router-dom'
import App from './App'
import User from './User'
import {MyContext} from './index'
import {reducer} from './reducer';

export default function Router() {
  const [state, dispatch] = useReducer(reducer, {username: '', token: ''})

  return (
    <MyContext.Provider value={{user: state, userDispatch: dispatch}}>
        <Routes>
            <Route  path='/' element={<App/>}/>
            <Route path='/user' element={<User/>}/>
        </Routes>
    </MyContext.Provider>
  )
}
