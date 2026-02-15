import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import MovieDetails from './components/MovieDetails'
import SeatLayout from './components/SeatLayout'
import MyBookings from './components/MyBookings'
import Favorite from './components/Favorite'
import {Toaster} from 'react-hot-toast'
const App = () => {
  const isAdminRoute = useLocation().pathname.startsWith('/admin');
   return (
    <>
    <Toaster/>
    {isAdminRoute ? null : <Navbar />}
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>}/>
      <Route path='/movies/:id' element={<MovieDetails/>}/>
      <Route path='/movies/:id/:date' element={<SeatLayout/>}/>
      <Route path='/my-bookings' element={<MyBookings/>}/>
      <Route path='/favorite' element={<Favorite/>}/>
    </Routes>
    </>
  )
}

export default App