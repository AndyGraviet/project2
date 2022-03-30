import './Background.css'

function Background(props){
    return(
        <div className="background" onClick={props.onCancel}>
        </div>
    )
}

export default Background;