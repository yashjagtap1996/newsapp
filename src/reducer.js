const reducer = (state, action) => {
    switch (action.type) {

        case "IS_LOADING":
            return {
                ...state,
                isLoading: true
            }

        case "GET_STORIES":
            return {
                ...state,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages,
                isLoading: false
            }

        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload,
                page: 0
            }

        case "PREV_PAGE":

            let prevPage = state.page
            console.log(prevPage);

            if (prevPage <= 0) {
                prevPage = 0
            }
            else {
                prevPage = prevPage - 1
            }

            return {
                ...state,
                page: prevPage
            }

        case "NEXT_PAGE":

            let nextPage = state.page + 1

            if (nextPage >= state.nbPages) {
                nextPage = 0
            }

            return {
                ...state,
                page: nextPage
            }

        case "REMOVE_POST":
            return {
                ...state,
                hits: state.hits.filter(
                    (post) => post.objectID !== action.payload
                )

            }

    }

}

export default reducer