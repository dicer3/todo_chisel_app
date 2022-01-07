export const formatBoardTodo=(boardsResponse)=>{
    const {boards,todos} = boardsResponse;
    
    let boardsObj={},todosObj={};
    boards.forEach((board)=>{
        boardsObj[board["id"]] = board["boardName"]; 
        todosObj[board["id"]] = [];
    })

    todos.forEach((todo)=>{
        let key = todo["boardId"]
        delete todo["boardId"]
        todosObj[key].push(todo);
    })

    return {boards:boardsObj,todos:todosObj}
}

export const sepratePendingCompletedTodos=(todos)=>{

    const pendingTodos=[],completedTodos=[];
    todos.forEach((todo)=>{
        if(todo["completed"])
            completedTodos.push(todo)
        else 
            pendingTodos.push(todo)
    })
    return {sepPendingTodos:pendingTodos,sepCompletedTodos:completedTodos}
}