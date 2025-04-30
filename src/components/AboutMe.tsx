interface AboutMeProps {
  // You can add props here if needed in the future
}

export default function AboutMe(_: AboutMeProps) {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="src/assets/images/about-me.png" alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Driven by a deep sense of responsibility and exceptional organizational skills, I thrive in dynamic environments, seamlessly navigating multiple priorities with an unwavering positive spirit. My history is marked by a consistent ability to not just meet, but surpass team goals, fueled by a proactive mindset and a genuine enthusiasm for taking on new challenges.
          </p>
          <p className="hero--section-description">
          I am deeply invested in collective success and readily embrace additional responsibilities, inspired by the opportunity to contribute meaningfully to shared aspirations and achievements.
          </p>
        </div>
      </div>
    </section>
  );
}