import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import ActorListPage from '../ActorListPage/ActorListPage'
import LoginPage from '../LoginPage/LoginPage'
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage'
import MovieListPage from '../MoviesListPage/MoviesListPage'

import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null)
  const userState = [user, setUser]
  return (
    <main className='App'>
      {user ?
      <>
      <NavBar user={user}/>
      <Routes>
        <Route path="/" element={<MovieListPage />} />
        <Route path="/movies/:movieName" element={<MovieDetailPage />} />
        <Route path="/actors" element={<ActorListPage />} />
      </Routes>
      </>
      :
      <Routes>
        <Route path="/" element={<LoginPage props={userState}/>} />
      </Routes>
      } 
    </main>
  )
}

export default App;
