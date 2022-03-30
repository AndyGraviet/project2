import './DeleteRecord.css';

function DeleteRecord(props){
    return(
        <div className="modal">
            DELETE
            <p className='exit' onClick={props.onCancel}>X</p>
        </div>
    )
}

export default DeleteRecord;