import "./Home.css";
import TextBox from "../components/TextBox";
import FadeInSection from "../components/FadeInSection";
import FadeIn from "react-fade-in";
import arrow from '../images/arrow.png';
import { Link } from 'react-router-dom';

const quotes = [
  {
    id: "1",
    quote:
      "It’s estimated that internationally there are between 20 million and 40 million people in modern slavery today. Assessing the full scope of human trafficking is difficult because so cases so often go undetected, something the United Nations refers to as “the hidden figure of crime.”",
    name: "International Labor Organization",
  },

  {
    id: "2",
    quote:
      "In 2018, over half (51.6%) of the criminal human trafficking cases active in the US were sex trafficking cases involving only children.",
    name: "- The Human Trafficking Institute",
  },

  {
    id: "3",
    quote:
      "The average age a teen enters the sex trade in the US is 12 to 14 years old. Many victims are runaway girls who were sexually abused as children.",
    name: "- Office of the Assistant Secretary for Planning and Evaluation",
  },
];

function HomePage() {
  return (
    <div className="layout">
      <div className="tagline infosection">Help put an end to child trafficking.</div>
      <FadeIn>
        <div className="hero">
          {quotes.map((quote) => {
            return (
              <TextBox key={quote.id} quote={quote.quote} name={quote.name} />
            );
          })}
        </div>
      </FadeIn>
      <br />
      <FadeIn delay="250">
          <div className="transition">
            <Link to='/about'>
                <img className='arrow' src={arrow} alt="arrow" />    
                <h2>Learn More</h2>
                <img className='arrow' src={arrow} alt="arrow" /> 
            </Link>
        </div>

      </FadeIn>
      <br />
      <FadeInSection>  
      <div className="infosection">
        <p>
          Human trafficking involves the use of force, fraud, or coercion to
          obtain some type of labor or commercial sex act.{" "}
          <b>
            Every year, millions of men, women, and children are trafficked
            worldwide
          </b>{" "}
          – including right here in the United States. It can happen in any
          community and victims can be any age, race, gender, or nationality.
          Traffickers might use violence, manipulation, or false promises of
          well-paying jobs or romantic relationships to lure victims into
          trafficking situations. Language barriers, fear of their traffickers,
          and/or fear of law enforcement frequently keep victims from seeking
          help, making human trafficking a hidden crime.
          <br />
          <br />
          Traffickers use force, fraud, or coercion to lure their victims and
          force them into labor or commercial sexual exploitation. They look for
          people who are susceptible for a variety of reasons, including
          psychological or emotional vulnerability, economic hardship, lack of a
          social safety net, natural disasters, or political instability.{" "}
          <b>
            The trauma caused by the traffickers can be so great that many may
            not identify themselves as victims or ask for help, even in highly
            public settings.
          </b>
        </p>
      </div>
    </FadeInSection>  
    </div>
  );
}

export default HomePage;
