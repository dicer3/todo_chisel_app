import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  Loader ,Dimmer } from 'semantic-ui-react'
import Table from '../components/Table'
import actions from '../store/actions'
function TodoPage() {
    const dispatch = useDispatch();
    const {loadedBoardsAndTodos} = useSelector(({boardsAndTodos}) => boardsAndTodos)
    useEffect(() => {
        dispatch(actions.getBoards());
    }, [loadedBoardsAndTodos])
    return <Dimmer active>
        { loadedBoardsAndTodos ? <Table /> : <Loader /> }
    </Dimmer>
}

export default TodoPage
