import classes from "./HelpCard.css";
import FadeInSection from "../components/FadeInSection";

function HelpCard(props) {
  return (
    <div>
      <FadeInSection>
        <div className={`${props.order ? "sectionEven" : "sectionOdd"}`}>
          <p className="text ">{props.text}</p>
          <img src={props.image} />
        </div>
      </FadeInSection>
    </div>
  );
}

export default HelpCard;
