/**
 * BoardsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const TodosController = require("./TodosController");

//const Boards = require("../models/Boards")
module.exports = {
  
    getBoards:async(req,res)=>{
       const boards = await Boards.find();
       return res.status(200).json(boards)
    },
    createBoards:async(req,res)=>{
        const board = {
            id:req.body.id,
            boardName:req.body.boardName
        }
        const boards = await Boards.create(board);
        const todos = TodosController.addTodo(req)
        console.log("todos..",todos)
        return res.status(200).json(boards)
    },
    deleteBoard:async(req,res)=>{
        const boardId = req.params.boardId
        Boards.destroy({boardId})
    }

};

