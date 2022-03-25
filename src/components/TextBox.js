import classes from './Textbox.module.css';

function TextBox(props){
    return(
    <div className={classes.card}>
        <h2>{props.quote}</h2>
        <p>{props.name}</p>
    </div>
    );
}

export default TextBox;