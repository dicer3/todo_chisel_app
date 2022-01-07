const initialState = {
    boardsAndTodos: {},
    loadedBoardsAndTodos: false,
};
export default (state = initialState, action) => {
    switch (action.type) {
        case 'GET_BOARDS_AND_TODOS':
            return {
                ...state,
                boardsAndTodos: action.payload,
                loadedBoardsAndTodos:true,
            }
        case 'CLEAR_BOARDS_AND_TODOS':
            return {
                ...state,
                loadedBoardsAndTodos:false
            }
        default:
            return state;
    }
}