import classes from './Footer.module.css'

function Footer(){
    return (
        <div className={classes.mainfooter}>
            <h2 className={classes.footerBig}>BRIGHAM YOUNG UNIVERSITY</h2>
            <p className={classes.text}>Provo, UT 84602, USA | © 2022 Andrew Graviet</p>
        </div>
    );
}

export default Footer;