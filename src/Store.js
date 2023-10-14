import React, { createContext, useContext, useEffect, useReducer } from 'react'
import reducer from './reducer'

let sender = createContext()

let API = "http://hn.algolia.com/api/v1/search?"

let initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: []
}

const Store = ({ children }) => {

  let [state, dispatch] = useReducer(reducer, initialState)

  let fetchAPI = async (url) => {

    dispatch({ type: "IS_LOADING" })

    try {
      const response = await fetch(url)
      const data = await response.json()
      console.log(data);
      dispatch(
        {
          type: "GET_STORIES",
          payload: {
            hits: data.hits,
            nbPages: data.nbPages
          }
        }
      )
    }
    catch (error) {
      console.log(error);
    }
  }

  let searchPost = (search_query) => {
    return dispatch({ type: "SEARCH_POST", payload: search_query })
  }

  let getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" })
  }

  let getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" })
  }

  let removePost = (post_ID) => {
    return dispatch({ type: "REMOVE_POST", payload: post_ID })
  }

  useEffect(() => {
    fetchAPI(`${API}query=${state.query}&page=${state.page}`)
  }, [state.query, state.page])


  return (
    <>
      <sender.Provider value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}>
        {children}
      </sender.Provider>
    </>
  )
}

let useGlobalContext = () => {
  return useContext(sender)
}

export default Store
export { sender, useGlobalContext }