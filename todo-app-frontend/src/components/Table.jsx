import React, { useEffect, useState } from 'react'
import { Icon, Checkbox } from 'semantic-ui-react'
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import { getBoards } from '../api'

const BOARD_CONSTANT = "Board";
const TODO_CONSTANT = "Todo";
function Table() {
    const boards = ["board1","board2","board3"]
    const pendingTodos = ["pending 1","pending 2"];
    const completedTodos = ["completed todos"];


    const [showAddModel,setAddShowModel] = useState(false);
    const [toggleAddShowModel,setToggleAddShowModel] = useState(false);
    const [addModalType,setAddModalType] = useState("");
    const [showDeleteModel,setDeleteShowModel] = useState(false);
    const [toggleDeleteShowModel,setDeleteAddShowModel] = useState(false);
    const [deleteModalType,setDeleteModalType] = useState("");

    useEffect(async()=>{
        await getBoards()
    },[])


    const openAddModal=(modalType)=>{
        setAddShowModel(true);
        setToggleAddShowModel(!toggleAddShowModel);
        setAddModalType(modalType)
    }

    const openDeleteModal=(modalType)=>{
        setDeleteShowModel(true);
        setDeleteAddShowModel(!toggleDeleteShowModel);
        setDeleteModalType(modalType)
    }

    return (
        <>
        <div className="todo-table">
            <div className="table-upper-bar">
                <div className="board-headings">
                {boards.map(board => <div className="board">
                   <div className="board-name">{board}</div> 
                    <Icon link name='close' onClick={()=>openDeleteModal(BOARD_CONSTANT)}/>
                    </div> )}
                </div>
                <div className="add-board" onClick={()=>openAddModal(BOARD_CONSTANT)}>
                    <i className="plus square icon"></i>
                    <p>Add Board</p>
                </div>
            </div>
            <div className="table-middle-bar"  onClick={()=>openAddModal(TODO_CONSTANT)}>
                <span>Add Todo</span>
                <i className="plus square icon"></i>
            </div>
            <div className="table-lower-bar">
                <div className="new-todos">
                    <div className="new-todos-upper-box">
                        Pending Todos
                    </div>
                    {pendingTodos.map(todo=>
                        <div className="todo">
                            <div className="todo-name">{todo}</div>
                            <div className="selectors">
                                <Icon link name='close' onClick={()=>openDeleteModal(TODO_CONSTANT)}/>
                                <Checkbox checked={true} />
                            </div>
                        </div>
                        )}
                </div>
                <div className="completed-todos">
                    <div className="completed-todos-upper-box">
                        Completed Todos
                    </div>   
                    {completedTodos.map(todo=>
                        <div className="todo" style={{"padding": "22.2px"}}>
                            <div className="todo-name">{todo}</div>
                        </div>
                        )}
                </div>
            </div>
        </div>
        <AddModal showModel={showAddModel} toggleShowModel={toggleAddShowModel} modalType={addModalType} />
        <DeleteModal showModel={showDeleteModel} toggleShowModel={toggleDeleteShowModel} modalType={deleteModalType} />
        </>
    )
}

export default Table
