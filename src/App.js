import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home/Home'
import Navbar from './component/Navbar'
import Contact from './component/Contact/Contact'
import { useAuth0 } from "@auth0/auth0-react";
import Login from './component/Home/Login'


const App = () => {

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return <div className="d-flex vh-100 justify-content-center align-items-center">
      <div className="spinner-border text-warning" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>

  }

  return (
    <>

      <BrowserRouter>
        <Navbar />

        {
          isAuthenticated
            ?
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/contact' element={<Contact />} />

            </Routes>
            :
            <Login />
        }

      </BrowserRouter>


    </>
  )
}

export default App