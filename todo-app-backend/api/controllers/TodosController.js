/**
 * TodosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
        getTodo:async()=>{
            return await Todos.find(); // finding Todos
        },
        addTodo:async(req,res)=>{
            try {
                const todo = {
                    id:req.body.todoId,
                    todoName:req.body.todoName,
                    boardId:req.body.boardId,
                    completed:false,
                }
                await Todos.create(todo);
                return res.status(200).json({message:"created todos"}) // creating todos and sending response
            } catch(e) {
                res.status(500).json(e.message)
            }
        },
        removeTodoUsingTodoId:async(req,res)=>{ // remove todo using todoId
            const todoId = req.params.todoId
            const todos = await Todos.destroy({id:todoId})
            return res.status(200).json(todos)
        },
        removeTodoUsingBoardId:async(boardId)=>{ // remove board using boardId
            await Todos.destroy({boardId})
            return "deleted"
        },
        makeTodoComplete:async(req,res)=>{ // make todo complete
            const todoId = req.params.todoId
            const todos = await Todos.update({id:todoId},{completed:true});
            return res.status(200).json(todos)
        },

};

