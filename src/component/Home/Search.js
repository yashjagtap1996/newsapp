import React from 'react'
import { useGlobalContext } from '../../Store'

const Search = () => {

  let { query, searchPost } = useGlobalContext()

  return (
    <>
      <div className='text-center'>
        <input
          className='p-1 border-0 border-bottom border border-3 border border-danger w-25'
          type="text"
          value={query}
          onChange={(e) => searchPost(e.target.value)}
        />
      </div>

    </>
  )
}

export default Search