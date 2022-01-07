import React,{useState,useEffect} from 'react'
import { Modal } from 'semantic-ui-react';
import { createBoards,createTodo } from '../api'
import boardActions from '../store/actions'
import { useDispatch } from 'react-redux';
function AddModal({showModel,toggleShowModel,modalType,selectedBoard}) {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);
    const [boardName,setBoardName] = useState("");
    const [todoName,setTodoName] = useState("");
    const [error,setError] = useState("");

    useEffect(() => {
      if(showModel)
        setShow(true);
    }, [toggleShowModel])

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const actionModal = async() => {
      if(modalType==="Board"){
        if(!boardName || !todoName) {
          setError("Kindly Fill All Particulars")
        }  
        await createBoards({boardName,todoName}); // adding board to send api
        dispatch(boardActions.clearBoards())  // making loading false to call api again
      } else {
        if(!todoName)
          setError("Kindly Fill All Particulars")
        await createTodo({todoName,boardId:selectedBoard}) // adding todo to send api
        dispatch(boardActions.clearBoards()) // making loading false to call api again
      }
         
    }

    return <Modal onClose={handleClose}
      onOpen={handleOpen}
      open={show} >
        <Modal.Content>
          <div className="cross-button" onClick={handleClose}>&times;</div>
          <p className="add-title"> Add {modalType} </p>
          { modalType ==="Board" && <input type="text" placeholder="Board Name" value={boardName} onChange={(e)=>setBoardName(e.target.value)} />}
          <input type="text" className="mt-2" placeholder="Todo Name" value={todoName} onChange={(e)=>setTodoName(e.target.value)} />
          <p>Please Add different {modalType} names</p>
          <div className="error">{error}</div>
          <button onClick={actionModal}>Submit</button>
        </Modal.Content>
    </Modal>
}

export default AddModal
