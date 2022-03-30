import './EditRecord.css';

function EditRecord(props){
    return(
        <div className="modal">
            EDIT
            <p className='exit' onClick={props.onCancel}>X</p>
        </div>
    )
}

export default EditRecord;