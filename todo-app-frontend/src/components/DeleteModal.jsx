import React,{useEffect,useState} from 'react'
import { useDispatch } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import {deleteBoard,deleteTodo} from '../api'
import boardActions from '../store/actions';

function DeleteModal({showModel,toggleShowModel,modalType,deletedId}) {

    const dispatch = useDispatch()
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    useEffect(() => { // displaying model using prop hooks
        if(showModel)
          setShow(true);
      }, [toggleShowModel])
    
    const actionModal=async()=>{
        if(modalType==="Board") { 
            await deleteBoard(deletedId)  // caling deleting board api
            dispatch(boardActions.clearBoards()) // making loading false to call api again 
        }   else if(modalType==="Todo") {
            await deleteTodo(deletedId) // caling deleting todo api
            dispatch(boardActions.clearBoards()) // making loading false to call api again 
        }
    }

    return <Modal onClose={handleClose}
        onOpen={handleOpen}
        open={show} >
        <Modal.Content>
            <div className="cross-button" onClick={handleClose}>&times;</div>
            <p className="add-title">are you sure you want to delete current {modalType}</p>
            <div className="d-flex ">
                <button onClick={actionModal}>Yes</button>
                <button onClick={handleClose}>No</button>
            </div>
        </Modal.Content>
    </Modal>
}

export default DeleteModal
