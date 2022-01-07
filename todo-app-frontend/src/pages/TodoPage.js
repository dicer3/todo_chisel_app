import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Loader ,Dimmer } from 'semantic-ui-react'
import Table from '../components/Table'
import actions from '../store/actions'
function TodoPage() {
    const dispatch = useDispatch();
    const {loadedBoardsAndTodos} = useSelector(({boardsAndTodos}) => boardsAndTodos) // fetching loading value from redux
    useEffect(() => {
        dispatch(actions.getBoards()); // getting board again when loading value changes
    }, [loadedBoardsAndTodos])
    return <Dimmer active>
        {/* displaying loager or table according to loading value */}
        { loadedBoardsAndTodos ? <Table /> : <Loader /> } 
    </Dimmer>
}

export default TodoPage
