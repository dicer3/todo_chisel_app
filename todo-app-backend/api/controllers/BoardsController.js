/**
 * BoardsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const TodosController = require("./TodosController");

module.exports = {
  
    getBoards:async(req,res)=>{
       const boards = await Boards.find();
       const todos = await TodosController.getTodo();
        return res.status(200).json({boards,todos})
    },
    createBoards:async(req,res)=>{
        try {
            const board = {
                id:req.body.boardId,
                boardName:req.body.boardName
            }
            await Boards.create(board);
            await TodosController.addTodo(req,res)
            return res.status(200).json({"message":"Created Board"})
        } catch(e) {
            res.status(500).json({"message":e.message})
        }
    },
    deleteBoard:async(req,res)=>{
        const boardId = req.params.boardId
        await Boards.destroy({id:boardId})
        await TodosController.removeTodoUsingBoardId(boardId)
        res.status(200).json({"message":"Board Deleted"})
    }

};

