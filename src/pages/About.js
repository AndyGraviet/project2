import classes from "./About.module.css";
import FadeIn from "react-fade-in";
import FadeInSection from "../components/FadeInSection";
import HelpCard from "../components/HelpCard";
//images 
import parent from "../images/parent.jpg";
import mentor from "../images/mentor.jpg";
import help from "../images/help.jpg";
import school from "../images/school.jpg";

function AboutPage() {
  return (
    <div className={classes.layout}>
      <FadeIn>
        <div className={classes.section1}>
          <div className={classes.text}>
            <p>
              Human trafficking involves the use of force, fraud, or coercion to
              obtain some type of labor or commercial sex act.{" "}
              <b>
                Every year, millions of men, women, and children are trafficked
                worldwide
              </b>{" "}
              – including right here in the United States. It can happen in any
              community and victims can be any age, race, gender, or
              nationality. Traffickers might use violence, manipulation, or
              false promises of well-paying jobs or romantic relationships to
              lure victims into trafficking situations. Language barriers, fear
              of their traffickers, and/or fear of law enforcement frequently
              keep victims from seeking help, making human trafficking a hidden
              crime.
              <br />
              <br />
              Traffickers use force, fraud, or coercion to lure their victims
              and force them into labor or commercial sexual exploitation. They
              look for people who are susceptible for a variety of reasons,
              including psychological or emotional vulnerability, economic
              hardship, lack of a social safety net, natural disasters, or
              political instability.{" "}
              <b>
                The trauma caused by the traffickers can be so great that many
                may not identify themselves as victims or ask for help, even in
                highly public settings.
              </b>
            </p>
          </div>
          <div className={classes.help}>
            <img src={help} />
          </div>
        </div>
      </FadeIn>

      <div className={classes.section2}>
        <FadeIn delay="500">
          <h1>What can you do to help?</h1>
        </FadeIn>
      </div>

      <HelpCard
        text="Encourage your local schools or school district to include human trafficking in their curricula and to develop protocols 
            for identifying and reporting a suspected case of human trafficking or responding to a potential victim. Schools can and should be safe places for students, 
            and even more so for students whose lives are otherwise characterized by instability and lack of safety and security. Everyone who is part of the school 
            community—administrators, school counselors, nurses, other mental health professionals, teachers, bus drivers, maintenance personnel, food service staff, 
            resource officers, and other school community members—has the potential to be an advocate for children who have been exploited. First, however, school 
            community members must learn the factors that make students vulnerable to trafficking and how to identify the warning signs."
        image={school}
        order="true"
      />
      <HelpCard
        text="Parents and Caregivers: Learn how human traffickers often
              target and recruit youth and who to turn to for help in
              potentially dangerous situations. Host community conversations
              with parent teacher associations, law enforcement, schools, and
              community members regarding safeguarding children in your
              community. Build and maintain healthy relationships with your children. Spend quality time together 
              and check in often. Many victims of trafficking are vulnerable because they are lonely, depressed and isolated.
                Healthy parental attachments reduce those vulnerabilities."
        image={parent}
        order=""
      />
      <HelpCard
        text="Become a mentor to a young person or someone in need. Traffickers often target 
        people who are going through a difficult time or who lack strong support systems. As a mentor, 
        you can be involved in new and positive experiences in that person’s life during a formative time."
        order="true"
        image={mentor}
      />
    </div>
  );
}

export default AboutPage;
