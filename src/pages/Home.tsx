import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import Footer from '../components/Footer';
import AboutMe from '../components/AboutMe';
import MyPortfolio from '../components/MyPortfolio';
import Testimonial from '../components/Testimonial';
import ContactMe from '../components/ContactMe';

export default function Home() {

  return (
    <>
      <HeroSection />
      <SkillsSection />
      <AboutMe />
      <MyPortfolio />
      <Testimonial/>
      <ContactMe />
      <Footer />
    </>
  );
}