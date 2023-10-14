import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";


const Navbar = () => {

    const { loginWithRedirect } = useAuth0()
    const { logout } = useAuth0();
    const { user, isAuthenticated } = useAuth0();


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img width="38" height="38" src="https://img.icons8.com/nolan/64/news.png" alt="news" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>

                        </ul>
                        <div className="d-flex justify-content-center" role="search">


                            {
                                isAuthenticated
                                    ?
                                    <button className='btn btn-danger btn-sm' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                                        Log Out
                                    </button>
                                    :
                                    <button className='btn btn-success btn-sm' onClick={() => loginWithRedirect()}>Log In</button>

                            }

                        </div>
                    </div>
                </div>
            </nav>


        </>
    )
}

export default Navbar