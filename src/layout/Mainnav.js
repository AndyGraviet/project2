import classes from "./Mainnav.module.css";
import { Link } from 'react-router-dom';

function Mainnav() {
  return (
    <header>
      <div className={classes.navBar}>
        <div id={classes.logo}>
          <h1>BYU</h1>
          <span id={classes.tagline}>Against Human Trafficking</span>
        </div>

        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/about'>LEARN</Link></li>
          <li><Link to='/data'>VIEW LOCAL DATA</Link></li>
        </ul>
      </div>
    </header>
  );
}

export default Mainnav;
