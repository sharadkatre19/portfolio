interface HeroSectionProps {
  // You can add props here if needed in the future
}

export default function HeroSection(_: HeroSectionProps) {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Sharad</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Highly organized and dependable professional.
            <br /> Effectively manages multiple priorities, exceeds expectations, and willingly takes on extra responsibilities to achieve team goals.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="../src/assets/images/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}