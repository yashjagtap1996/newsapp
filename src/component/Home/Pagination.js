import React from 'react'
import { useGlobalContext } from '../../Store'

const Pagination = () => {

    let { page, nbPages, getPrevPage, getNextPage } = useGlobalContext()

    return (
        <>
            <div className="pagination mt-4 d-flex mx-auto justify-content-evenly align-items-center">
                <button onClick={() => getPrevPage()} className='bg-dark text-light'>PREV</button>
                <label className='fs-5'>{page + 1} - {nbPages}</label>
                <button onClick={() => getNextPage()} className='bg-dark text-light'>NEXT</button>
            </div>
        </>
    )
}

export default Pagination