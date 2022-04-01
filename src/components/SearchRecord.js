import './SearchRecord.css';

function SearchRecord(props){
    return(
        <div className="modal">
            We're sorry, this feature isn't available yet!
            <p className='exit' onClick={props.onCancel}>X</p>
        </div>
    )
}

export default SearchRecord;