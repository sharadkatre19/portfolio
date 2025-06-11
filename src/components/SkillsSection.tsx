import React, { useState } from 'react';

// Mock data for demonstration
const mockData = {
  skills: [
    {
      src: "https://via.placeholder.com/64x64/4F46E5/ffffff?text=JS",
      title: "JavaScript",
      description: "Building dynamic and interactive web applications with modern JavaScript ES6+ features, async programming, and DOM manipulation."
    },
    {
      src: "https://via.placeholder.com/64x64/06B6D4/ffffff?text=R",
      title: "React",
      description: "Creating responsive user interfaces with React hooks, state management, component lifecycle, and modern development patterns."
    },
    {
      src: "https://via.placeholder.com/64x64/10B981/ffffff?text=N",
      title: "Node.js",
      description: "Developing scalable backend services, RESTful APIs, database integration, and server-side application architecture."
    },
    {
      src: "https://via.placeholder.com/64x64/F59E0B/ffffff?text=D",
      title: "Design",
      description: "Crafting user-centered designs with focus on usability, accessibility, and creating engaging digital experiences."
    }
  ]
};

// Define interfaces
interface SkillItem {
  src: string;
  title: string;
  description: string;
}

interface DataStructure {
  skills?: SkillItem[];
}

export default function MySkills() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [focusedCard, setFocusedCard] = useState<number | null>(null);
  
  // Use mock data for demonstration
  const typedData = mockData as DataStructure;

  const handleCardClick = (index: number, title: string) => {
    // Add analytics or navigation logic here
    console.log(`Clicked on ${index}: ${title} skill card`);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number, title: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(index, title);
    }
  };

  return (
    <section className="skills-section" id="mySkills" aria-labelledby="skills-heading">
      <div className="portfolio-container">
        <p className="section-title">My Skills</p>
        <h2 id="skills-heading" className="skills-section-heading">My Expertise</h2>
      </div>
      <div className="skills-section-container" role="list">
        {typedData?.skills?.map((item, index) => (
          <div
            key={index}
            className={`skills-section-card ${hoveredCard === index ? 'hovered' : ''} ${focusedCard === index ? 'focused' : ''}`}
            role="listitem"
            tabIndex={0}
            onClick={() => handleCardClick(index, item.title)}
            onKeyDown={(e) => handleKeyDown(e, index, item.title)}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            onFocus={() => setFocusedCard(index)}
            onBlur={() => setFocusedCard(null)}
            aria-label={`${item.title} skill`}
          >
            <div className="skills-section-img" aria-hidden="true">
              <img 
                src={item.src} 
                alt={`${item.title} icon`}
                loading="lazy"
                width="64"
                height="64"
              />
            </div>
            <div className="skills-section-card-content">
              <h3 className="skills-section-title">{item.title}</h3>
              <p className="skills-section-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .skills-section {
          display: flex;
          padding: clamp(60px, 10vw, 149.33px) clamp(20px, 6vw, 85.33px);
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(40px, 6vw, 60px);
        }

        .skills-section-heading {
          color: var(--heading-color, #2d3748);
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 700;
          line-height: 1.25;
          margin: 0;
        }

        .section-title {
          color: var(--primary, #4F46E5);
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin: 0 0 8px 0;
        }

        .portfolio-container {
          width: 100%;
        }

        .skills-section-container {
          display: grid;
          justify-content: center;
          align-items: flex-start;
          gap: clamp(20px, 3vw, 32.6px);
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          width: 100%;
        }

        .skills-section-card {
          display: flex;
          padding: clamp(24px, 3vw, 32px);
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(24px, 3vw, 32px);
          background: var(--bg-shade, #ffffff);
          min-height: clamp(400px, 50vw, 500px);
          border-radius: 12px;
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid transparent;
          position: relative;
          overflow: hidden;
        }

        .skills-section-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79, 70, 229, 0.05), rgba(6, 182, 212, 0.05));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 0;
        }

        .skills-section-card:hover::before,
        .skills-section-card.hovered::before {
          opacity: 1;
        }

        .skills-section-card:hover,
        .skills-section-card.hovered {
          transform: translateY(-8px);
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          border-bottom: 4px solid var(--primary, #4F46E5);
        }

        .skills-section-card:focus,
        .skills-section-card.focused {
          outline: none;
          border: 2px solid var(--primary, #4F46E5);
          box-shadow: 
            0 0 0 3px rgba(79, 70, 229, 0.1),
            0 20px 25px -5px rgba(0, 0, 0, 0.1), 
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        .skills-section-card:active {
          transform: translateY(-4px);
        }

        .skills-section-img {
          display: flex;
          padding: clamp(12px, 1.5vw, 13.3px);
          justify-content: center;
          align-items: center;
          gap: 13.3px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ffffff, #f8fafc);
          box-shadow: 
            0 4px 6px -1px rgba(0, 0, 0, 0.1), 
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
          position: relative;
          z-index: 1;
          transition: transform 0.3s ease;
        }

        .skills-section-card:hover .skills-section-img,
        .skills-section-card.hovered .skills-section-img {
          transform: scale(1.05);
        }

        .skills-section-card-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: clamp(16px, 2vw, 24px);
          align-self: stretch;
          position: relative;
          z-index: 1;
        }

        .skills-section-title {
          color: var(--heading-color, #2d3748);
          font-size: clamp(24px, 2.5vw, 32px);
          font-weight: 700;
          line-height: 1.4;
          margin: 0;
          transition: color 0.3s ease;
        }

        .skills-section-description {
          color: var(--black, #4a5568);
          font-size: clamp(16px, 1.8vw, 18px);
          font-weight: 400;
          line-height: 1.6;
          margin: 0;
          transition: color 0.3s ease;
        }

        .skills-section-card:hover .skills-section-description,
        .skills-section-card.hovered .skills-section-description {
          color: var(--darkblue, #2d3748);
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .skills-section-container {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .skills-section-card {
            min-height: 300px;
          }
        }

        /* Tablet optimizations */
        @media (min-width: 769px) and (max-width: 1024px) {
          .skills-section-container {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Large screen optimizations */
        @media (min-width: 1200px) {
          .skills-section-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        /* Reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          .skills-section-card,
          .skills-section-img,
          .skills-section-title,
          .skills-section-description,
          .skills-section-card::before {
            transition: none;
          }
          
          .skills-section-card:hover,
          .skills-section-card.hovered {
            transform: none;
          }
        }

        /* High contrast mode support */
        @media (prefers-contrast: high) {
          .skills-section-card {
            border: 2px solid;
          }
          
          .skills-section-card:hover,
          .skills-section-card.hovered {
            border-width: 3px;
          }
        }
      `}</style>
    </section>
  );
}