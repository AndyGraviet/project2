import './SearchRecord.css';

function SearchRecord(props){
    return(
        <div className="modal">
            SEARCH
            <p className='exit' onClick={props.onCancel}>X</p>
        </div>
    )
}

export default SearchRecord;