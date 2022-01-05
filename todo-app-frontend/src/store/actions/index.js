import axios from 'axios'

import {formatBoardTodo} from '../../utils'

const apiBaseUrl = "http://localhost:1337"

export default {
    getBoards: () => async (dispatch) => {
        console.log("hifire..")
        const response = await axios.get(`${apiBaseUrl}/api/boards`)
        dispatch({
            type: "GET_BOARDS_AND_TODOS",
            payload: formatBoardTodo(response.data)
        })
    },
    clearBoards: () => async (dispatch) => {
        dispatch({
            type: "CLEAR_BOARDS_AND_TODOS",
        })
    }
}   