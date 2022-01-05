export const formatBoardTodo=(boardsResponse)=>{
    console.log("nire ",boardsResponse)
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

    console.log("hi...",boardsObj,"...",todosObj)
    return {boards:boardsObj,todos:todosObj}
}