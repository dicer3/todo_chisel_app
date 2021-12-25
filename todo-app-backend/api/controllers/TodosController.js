/**
 * TodosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
        addTodo:async(req,res)=>{
            const todo = {
                todoId:req.body.todoId,
                boardName:req.body.todoName,
                boardId:req.body.boardId,
                completed:req.body.completed
            }
            const todos = await Todos.create(todo);
            return res.status(200).json(todos)
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

