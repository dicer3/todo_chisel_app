import React from 'react'
import { Button } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
function Table() {
    const boards = ["board1","board2","board3"]
    const pendingTodos = ["pending 1","pending 2"];
    const completedTodos = ["completed todos"]
    return (
        <div className="table">
            <div className="table-upper-bar">
                <div className="board-headings">
                {boards.map(board => <div className="board">
                   <div className="board-name">{board}</div> 
                    <Icon link name='close' />
                    </div> )}
                </div>
                <div className="add-board">
                    <i className="plus square icon"></i>
                    <p>Add Board</p>
                </div>
            </div>
            <div className="table-middle-bar">
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
                            <Icon link name='close' />
                        </div>
                        )}
                </div>
                <div className="completed-todos">
                    <div className="completed-todos-upper-box">
                        Completed Todos
                    </div>   
                    {completedTodos.map(todo=>
                        <div className="todo">
                            <div className="todo-name">{todo}</div>
                            <Icon link name='close' />
                        </div>
                        )}
                </div>
            </div>
        </div>
    )
}

export default Table
