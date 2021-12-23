/**
 * BoardsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
//const Boards = require("../models/Boards")
module.exports = {
  
    getBoards:async(req,res)=>{
       const boards = await Boards.find({});
       return res.status(200).json(boards)
    },
    createBoards:async(req,res)=>{
        //console.log("hi..")
        //console.log("hi..",req.body)
        const board = {
            id:req.body.id,
            boardName:req.body.boardName
        }
        const boards = await Boards.create(board);
        return res.status(200).json(boards)
    }

};

