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
          Results-driven Full Stack Developer with 7+ years of experience building high-performance web and mobile applications. Expert in React ecosystem, cloud technologies, and A/B testing optimization using VWO. Recognized leader with multiple awards, specializing in AI-powered solutions and performance optimization that drive business growth.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src="src/assets/images/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}