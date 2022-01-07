export const formatBoardTodo=(boardsResponse)=>{ // converting table from data to jsons
    const {boards,todos} = boardsResponse;
    
    let boardsObj={},todosObj={};
    boards.forEach((board)=>{  // making board object with key boardId
        boardsObj[board["id"]] = board["boardName"]; 
        todosObj[board["id"]] = [];
    })

    todos.forEach((todo)=>{  // making todo obejct with key todoId
        let key = todo["boardId"]
        delete todo["boardId"]
        todosObj[key].push(todo);
    })

    return {boards:boardsObj,todos:todosObj}
}

export const sepratePendingCompletedTodos=(todos)=>{

    const pendingTodos=[],completedTodos=[]; // seprating todos into completed and pending
    todos.forEach((todo)=>{
        if(todo["completed"])
            completedTodos.push(todo)
        else 
            pendingTodos.push(todo)
    })
    return {sepPendingTodos:pendingTodos,sepCompletedTodos:completedTodos}
}