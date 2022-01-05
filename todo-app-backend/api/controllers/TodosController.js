/**
 * TodosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
        getTodo:async()=>{
            return await Todos.find();
        },
        addTodo:async(req,res)=>{
            try {
                const todo = {
                    id:req.body.todoId,
                    todoName:req.body.todoName,
                    boardId:req.body.boardId,
                    completed:req.body.completed
                }
                await Todos.create(todo);
                return res.status(200).json({message:"created todos"})
            } catch(e) {
                res.status(500).json(e.message)
            }
        },
        removeTodo:async(req,res)=>{
            const todoId = req.params.todoId
            const todos = await Todos.destroy({todoId})
            return res.status(200).json(todos)
        },
        makeTodoComplete:async(req,res)=>{
            const todoId = req.params.todoId
            const todos = await Todos.update({completed:true}, {todoId});
            return res.status(200).json(todos)
        }
};

