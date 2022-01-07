import React, { useEffect, useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { Icon, Checkbox } from 'semantic-ui-react'
import AddModal from './AddModal';
import DeleteModal from './DeleteModal';
import {sepratePendingCompletedTodos} from '../utils'
import { makeTodoComplete } from '../api';
import boardActions from '../store/actions';


const BOARD_CONSTANT = "Board";
const TODO_CONSTANT = "Todo";
function Table() {
    const dispatch = useDispatch();
    const {boardsAndTodos} = useSelector(({boardsAndTodos}) => boardsAndTodos) // getting boardAndTodos from Redux

    const {boards,todos} = boardsAndTodos

    const [showAddModel,setAddShowModel] = useState(false); 
    const [toggleAddShowModel,setToggleAddShowModel] = useState(false); // hooks for opening/closing Add Model , Add Model will used for adding or deleting todos or boards
    const [addModalType,setAddModalType] = useState(""); // Modal Type of Add Modal , can be Board or Todo
    const [showDeleteModel,setDeleteShowModel] = useState(false);
    const [toggleDeleteShowModel,setDeleteAddShowModel] = useState(false); // hooks for opening/closing Delete Model , Delete Model will used for adding or deleting todos or boards
    const [deleteModalType,setDeleteModalType] = useState(""); // Modal Type of Delete Modal , can be Board or Todo
    const [deletedId,setDeletedId] = useState(""); // deletedId for current deleting board or todo
    const boardsExist = Object.keys(boards).length > 0; // checking if any board exist

    let defSelectedBoard,defSepPendingTodos=[],defSepCompletedTodos=[]; // default selectedBoard , default Pending Todos and default Completed Todos
    defSelectedBoard = boardsExist ? Object.keys(boards)[0] : "";
    const [selectedBoard,setSelectedBoard] = useState(defSelectedBoard) // selectedd Board , currently selected Board
    if(boardsExist) {
        const {sepPendingTodos,sepCompletedTodos} = sepratePendingCompletedTodos(todos[selectedBoard]) // seprate todos into pending and completed
        defSepPendingTodos = sepPendingTodos;
        defSepCompletedTodos = sepCompletedTodos;
    }
    const [pendingTodos,setPendingTodos] = useState(defSepPendingTodos);
    const [completedTodos,setCompletedTodos] = useState(defSepCompletedTodos);

    useEffect(() => {
        if(selectedBoard) {
            const {sepPendingTodos,sepCompletedTodos} = sepratePendingCompletedTodos(todos[selectedBoard]) // setting PendingTodos and CompletedTodos on board change
            setPendingTodos(sepPendingTodos)
            setCompletedTodos(sepCompletedTodos)
        }
    }, [selectedBoard])


    const openAddModal=(modalType)=>{ // opening Add Modal and setting up hooks
        setAddShowModel(true);
        setToggleAddShowModel(!toggleAddShowModel);
        setAddModalType(modalType)
    }

    const openDeleteModal=(modalType)=>{ // opening Delete Modal and setting up hooks
        setDeleteShowModel(true);
        setDeleteAddShowModel(!toggleDeleteShowModel);
        setDeleteModalType(modalType)
    }

    const todoToComplete=async(todoId)=>{ // making a Todo Complete
        await makeTodoComplete(todoId);
        dispatch(boardActions.clearBoards())
    }

    return (
        <>
        <div className="todo-table">
            <div className="table-upper-bar">
                {
                    Object.keys(boards).length > 0 && <div className={`${selectedBoard && "board-headings"}`}>
                        { Object.entries(boards).
                        map(([key, boardName]) => <div key={key} className={`board ${key===selectedBoard && "active"}`}>
                                <div className="board-name" onClick={()=>setSelectedBoard(key)}>{boardName}</div> 
                                <Icon link name='close' onClick={()=> { setDeletedId(key); openDeleteModal(BOARD_CONSTANT);}}/>
                            </div>
                        )}
                    </div> 
                }
                <div className={`add-board ${!selectedBoard && "active"}`} onClick={()=>openAddModal(BOARD_CONSTANT)}>
                    <i className="plus square icon"></i>
                    <p>Add Board</p>
                </div>
            </div>
            {selectedBoard && <div className="table-middle-bar"  onClick={()=>openAddModal(TODO_CONSTANT)}>
                <span>Add Todo</span>
                <i className="plus square icon"></i>
            </div> }
            { selectedBoard && <div className="table-lower-bar">
                <div className="new-todos">
                    <div className="new-todos-upper-box">
                        Pending Todos
                    </div>
                    {pendingTodos.length > 0 ? pendingTodos.map(todo=>
                        <div className="todo" key={todo.id}>
                            <div className="todo-name">{todo.todoName}</div>
                            <div className="selectors">
                                <Icon link name='close' onClick={()=>{ setDeletedId(todo.id); openDeleteModal(TODO_CONSTANT)}} />
                                <Checkbox checked={false} onClick={()=>todoToComplete(todo.id)} />
                            </div>
                        </div>
                        ) : <p className="no-content-message">No Pending Todos</p>
                    }    
                </div>
                <div className="completed-todos">
                    <div className="completed-todos-upper-box">
                        Completed Todos
                    </div>   
                    {completedTodos.length > 0 ?  completedTodos.map(todo=>
                        <div className="todo" style={{"padding": "22.2px"}} key={todo.id}>
                            <div className="todo-name">{todo.todoName}</div>
                        </div>
                        )  : <p className="no-content-message">No Completed Todos</p> }
                </div>
            </div> }
        </div>
        <AddModal showModel={showAddModel} toggleShowModel={toggleAddShowModel} modalType={addModalType} selectedBoard={selectedBoard}/>
        <DeleteModal showModel={showDeleteModel} toggleShowModel={toggleDeleteShowModel} modalType={deleteModalType} deletedId={deletedId} />
        </>
    )
}

export default Table
