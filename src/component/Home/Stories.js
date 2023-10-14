import React, { useState } from 'react'
import { useGlobalContext } from '../../Store'
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { GiMoon } from "react-icons/gi";


const Stories = () => {

  let [mode, setMode] = useState(false)

  let { hits, nbPages, isLoading, removePost } = useGlobalContext()

  if (isLoading) {
    return <div className='d-flex justify-content-center vh-100'>
      <div className='spinner-border my-auto text-danger'>

      </div>
    </div>
  }

  return (
    <>
      <div className="container">
        <div className='text-center'>
          <button className='my-3 border-0 bg-white fs-3' onClick={() => setMode(!mode)}>{mode ? <BsFillSunFill className='spinner-border border-0' /> : <GiMoon className='spinner-border border-0' />}</button>
        </div>
        <div className="row">
          {
            hits.map((post) => {

              const { title, author, objectID, url, num_comments } = post

              return (

                <div className={`col-12 pt-4 bg-${mode ? "secondary" : "light"} `} key={objectID}>
                  <div className={`news_card card bg-${mode ? "dark" : "light"} text-${mode ? "light" : "dark"} mb-4 shadow text-start  mx-auto`}>
                    <div className="card-body">
                      <h4 className="card-title">{title}</h4>
                      <p className="card-text">By {author} | {num_comments}comments</p>
                      <div className='d-flex justify-content-between'>
                        <a href={url} className='text-decoration-none text-secondary fw-light' target='_blank'>
                          Read More
                        </a>
                        <button onClick={() => removePost(objectID)} className='border-0 bg-white text-danger'>Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}

export default Stories