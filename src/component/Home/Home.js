import React from 'react'
import Search from './Search'
import Pagination from './Pagination'
import Stories from './Stories'
import './index.css'
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {

    const { user, isAuthenticated } = useAuth0();


    return (
        <>
            <h1 className='text-center shadow bg-primary p-2 text-light'>Welcome {isAuthenticated && <span className='px-1 text-decoration-underline text-warning'>{user.name}</span>} To Tech News</h1>
            <Search />
            <Pagination />
            <Stories />
        </>
    )
}

export default Home