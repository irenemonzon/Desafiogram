import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import { SignUp } from './components/SignUp'
import { Explore } from './components/Explore'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/explore' element={<Explore />} />
      <Route path='*' element={<Navigate to='/login' />} />
    </Routes>
  )
}
