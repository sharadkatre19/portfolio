import React, { useState, useEffect, useRef } from 'react';

// --- SVG ICONS ---
// Keeping icons as separate, reusable components is a best practice.

const DownloadIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 9.707a1 1 0 011.414 0L9 11.086V3a1 1 0 112 0v8.086l1.293-1.379a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
);

const CloseIcon: React.FC = () => (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
);

const MenuIcon: React.FC = () => (
     <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    </svg>
);

const GithubIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
    </svg>
);

const LinkedinIcon: React.FC = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.389 0-1.601 1.017-1.601 2.206v4.249H8.041V9H10.68v1.16h.037c.355-.675 1.227-1.387 2.599-1.387 2.778 0 3.286 1.825 3.286 4.201v4.864zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.336 8.905H4.002V9h2.671v7.338z" clipRule="evenodd" />
    </svg>
);

const MailIcon: React.FC = () => (
     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
    </svg>
);


// --- HOOK for observing elements ---
const useIntersectionObserver = (options: IntersectionObserverInit) => {
    const [elements, setElements] = useState<Element[]>([]);
    const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

    const observer = useRef<IntersectionObserver | null>(null);

    useEffect(() => {
        if (elements.length > 0) {
            observer.current = new IntersectionObserver((ioEntries) => {
                setEntries(ioEntries);
            }, options);
            elements.forEach(element => observer.current?.observe(element));
        }
        return () => {
            if (observer.current) {
                elements.forEach(element => observer.current?.unobserve(element));
            }
        };
    }, [elements, options]);

    return [setElements, entries] as const;
};


// --- DATA ---
const projectData = {
    'worxmate-okr': {
        title: 'Worxmate OKR Platform', emoji: '📈',
        description: 'Architected and led the development of a unified web and mobile OKR platform to drive team alignment and boost productivity for enterprise clients.',
        achievements: [
            'Enhanced team velocity by 25% through continuous mentorship and the implementation of streamlined agile workflows.',
            'Engineered a scalable backend that reduced data processing times by 40%, supporting real-time progress tracking.',
            'Reduced long-term operational costs by 15% by identifying and refactoring legacy systems for higher efficiency.',
            'Managed the full development and deployment lifecycle on Azure, ensuring 99.9% uptime.'
        ],
        tech: ['React Native', 'Web App', 'Node.js', 'Azure DevOps', 'Agile']
    },
    'worxmate-pms': {
        title: 'AI-Powered Performance Management System', emoji: '🤖',
        description: 'Developed an intelligent, AI-driven Performance Review System (PMS) to provide objective, data-backed insights and reduce manager bias.',
        achievements: [
            'Integrated Azure OpenAI to automate the generation of performance summaries, saving managers an average of 3 hours per review cycle.',
            'Designed a multi-platform experience (Web & Mobile) that increased employee survey participation by 50%.',
            'Built a secure, scalable architecture to handle sensitive employee data for enterprise-level clients.'
        ],
        tech: ['React Native', 'AI/LLM', 'Azure OpenAI', 'Web App', 'TypeScript']
    },
    'dtracker': {
        title: 'DTracker - IoT Location Tracking App', emoji: '🛰️',
        description: 'Led the development of a commercial IoT-based location tracking application for Delighteck Pvt. Ltd., enabling real-time asset monitoring via mobile.',
        achievements: [
            'Engineered a low-latency connection with IoT hardware using Bluetooth Low Energy (BLE), achieving sub-second data updates.',
            'Implemented battery-optimization algorithms that extended device field life by over 30%.',
            'Developed a reliable and highly responsive React Native application that became a core product for the company.'
        ],
        tech: ['React Native', 'IoT', 'Location Services', 'Bluetooth (BLE)', 'Android']
    },
    'truck-pulse': {
        title: 'Truck Pulse Logistics Platform', emoji: '🚚',
        description: 'Delivered a two-part native mobile application for the logistics sector, creating a marketplace for shippers and transporters.',
        achievements: [
            'Built a real-time bidding system that decreased freight matching time by an average of 20%.',
            'Designed and developed two distinct native apps (for Shippers and Transporters) on both iOS and Android.',
            'Streamlined the end-to-end shipment lifecycle, from job request and driver assignment to final delivery confirmation.'
        ],
        tech: ['iOS (Swift)', 'Android (Native)', 'Objective-C', 'Logistics Tech']
    },
    'fastudo': {
        title: 'Fastudo On-Demand Home Services', emoji: '🛠️',
        description: 'Created a native mobile app for on-demand home services, connecting users with verified local professionals for tasks like cleaning and maintenance.',
        achievements: [
            'Developed an intuitive service request flow that resulted in a 95% completion rate for first-time users.',
            'Integrated a dynamic pricing engine to provide instant, transparent cost estimates for users.',
            'Implemented Stripe for secure, in-app payment processing, enhancing user trust and convenience.'
        ],
        tech: ['iOS (Objective-C)', 'Android (Native)', 'Swift', 'Stripe API']
    }
};

type ProjectKey = keyof typeof projectData;

const experienceData = [
    {
      role: 'Senior Full Stack Developer',
      company: 'Cloudaeon Technology Pvt. Ltd.',
      period: '2022 - Present',
      tasks: [
        'Led development of a module-based architecture using NodeJS, Angular & React Native.',
        'Built end-to-end OKR and PMS products to track progress and performance reviews.',
        'Implemented AI LLM features using Azure OpenAI for data generation and insights.',
        'Established CI/CD pipelines with Azure DevOps, improving deployment efficiency.',
      ],
    },
    {
      role: 'React Native Developer',
      company: 'Delightech Pvt. Ltd.',
      period: 'May 2019 - April 2020',
      tasks: [
        'Developed a React Native mobile app with IoT device integration using Bluetooth Low Energy (BLE).',
        'Wrote comprehensive unit tests using the Appium testing framework.',
        'Achieved a 100% performance improvement by optimizing and upgrading the project codebase.',
      ],
    },
    {
      role: 'Software Engineer',
      company: 'Mobisoft Pvt. Ltd.',
      period: 'July 2017 - May 2019',
      tasks: [
          'Developed native mobile applications for both iOS and Android platforms.',
          'Designed, developed, and maintained various application modules.',
          'Consistently delivered modules 15% ahead of schedule on average.',
      ]
    }
];

const skillsData = {
    frontend: {
        name: "Frontend Development",
        skills: ['React', 'Angular', 'Next.js', 'HTML5 & CSS3', 'Tailwind CSS', 'Redux'],
    },
    backend: {
        name: "Backend & DevOps",
        skills: ['Node.js', 'NestJS', 'Express.js', 'Azure', 'GCP', 'AWS', 'Docker', 'CI/CD', 'REST APIs', 'GraphQL']
    },
    databases: {
        name: "Databases & Tools",
        skills: ['MySQL', 'PostgreSQL', 'Firestore', 'MongoDB', 'Git & GitHub', 'Jira']
    }
}

// --- LAYOUT COMPONENTS ---

const Section: React.FC<{ id: string; title: string; subtitle: string; children: React.ReactNode; className?: string }> = ({ id, title, subtitle, children, className = "" }) => {
    const [ref, setRef] = useState<HTMLElement | null>(null);
    const [setElements, entries] = useIntersectionObserver({ threshold: 0.1, rootMargin: '0px' });
    const isVisible = entries.some(entry => entry.isIntersecting);
    
    useEffect(() => {
        if (ref) {
            setElements([ref]);
        }
    }, [ref, setElements]);

    return (
        <section
            id={id}
            ref={setRef}
            className={`py-24 transition-opacity duration-1000 ${className} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">{title}</h2>
                <p className="text-center text-gray-500 text-lg mb-16">{subtitle}</p>
                {children}
            </div>
        </section>
    );
};


// --- PAGE COMPONENTS ---

const Header: React.FC<{ onMenuOpen: () => void }> = ({ onMenuOpen }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const navLinkClasses = "text-gray-600 hover:text-indigo-600 transition-colors duration-300 font-medium";
    const iconLinkClasses = "text-gray-500 hover:text-indigo-600 transition-colors duration-300";

    return (
        <header id="header" className={`bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold text-gray-900">Sharad Katre</a>
                <div className="hidden md:flex items-center space-x-6">
                    <a href="#about" className={navLinkClasses}>About</a>
                    <a href="#experience" className={navLinkClasses}>Experience</a>
                    <a href="#skills" className={navLinkClasses}>Skills</a>
                    <a href="#projects" className={navLinkClasses}>Projects</a>
                    <a href="#contact" className={navLinkClasses}>Contact</a>
                    <div className="flex items-center space-x-4 pl-4 border-l border-gray-200">
                        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className={iconLinkClasses} aria-label="GitHub Profile"><GithubIcon /></a>
                        <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className={iconLinkClasses} aria-label="LinkedIn Profile"><LinkedinIcon /></a>
                    </div>
                    <a href="/Sharad_Katre_CV.pdf" download className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-indigo-700 transition-transform duration-300 hover:scale-105 flex items-center space-x-2">
                        <DownloadIcon />
                        <span>Resume</span>
                    </a>
                </div>
                <button id="mobile-menu-button" className="md:hidden text-gray-800 focus:outline-none" onClick={onMenuOpen}>
                    <MenuIcon />
                </button>
            </nav>
        </header>
    );
};

const MobileMenu: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => (
    <div id="mobile-menu" className={`mobile-menu fixed top-0 left-0 w-full bg-white h-screen md:hidden transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-end p-6">
            <button id="close-menu-button" className="text-gray-800" onClick={onClose} aria-label="Close menu"><CloseIcon /></button>
        </div>
        <div className="flex flex-col items-center justify-center space-y-8 h-full -mt-16">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map(item => (
                 <a href={`#${item.toLowerCase()}`} onClick={onClose} key={item} className="mobile-nav-link text-2xl font-semibold text-gray-700 hover:text-indigo-600">{item}</a>
            ))}
            <a href="/Sharad_Katre_CV.pdf" download className="mt-8 bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-transform duration-300 hover:scale-105 flex items-center space-x-2">
                <DownloadIcon />
                <span>Download Resume</span>
            </a>
        </div>
    </div>
);

const Hero = () => (
    <section id="home" className="hero-bg min-h-screen flex items-center pt-24 md:pt-0">
        <div className="container mx-auto px-6 text-white">
            <div className="max-w-3xl">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">Senior Full Stack Developer</h1>
                <p className="text-xl md:text-2xl text-indigo-200 max-w-xl mb-8">I specialize in building robust, user-centric applications with React, Node.js, and modern cloud technologies.</p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href="#contact" className="bg-white text-indigo-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-105">Get In Touch</a>
                    <a href="#projects" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-white/20 transition-all duration-300 transform hover:scale-105">View My Work</a>
                </div>
            </div>
        </div>
    </section>
);

const About = () => (
     <Section id="about" title="About Me" subtitle="A brief professional summary." className="bg-white">
        <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 flex justify-center">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl shadow-indigo-200">
                    <img 
                        src="src/assets/images/Profile.png?text=Sharad+Katre" 
                        alt="Professional headshot of Sharad Katre"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
            <div className="md:col-span-3">
                <p className="text-xl text-gray-600 leading-relaxed mb-6">
                    As a Senior Full Stack Developer with over 7 years of hands-on experience, I am driven by the challenge of solving complex problems with clean, efficient, and scalable code. My expertise is in the MERN stack, complemented by a strong command of modern DevOps and cloud technologies.
                </p>
                <div className="bg-indigo-50 p-6 rounded-2xl border-l-4 border-indigo-500 mb-6">
                    <p className="text-lg text-indigo-800 font-semibold">
                        I am passionate about leading development teams, mentoring junior engineers, and fostering a culture of technical excellence and continuous improvement.
                    </p>
                </div>
                <p className="text-xl text-gray-600 leading-relaxed">
                    I am currently seeking a challenging role where I can leverage my skills in architecture, development, and leadership to contribute to impactful, user-focused products.
                </p>
            </div>
        </div>
    </Section>
);

const Experience = () => (
    <Section id="experience" title="Professional Experience" subtitle="My career journey and key accomplishments." className="bg-gray-50">
        <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-0">
            {experienceData.map((job, index) => (
                <div key={index} className="mb-12 md:flex items-start w-full">
                     <div className="md:w-1/3 md:pr-8 md:text-right">
                        <h3 className="text-xl font-bold text-indigo-600">{job.role}</h3>
                        <p className="text-gray-600">{job.company}</p>
                        <time className="text-sm text-gray-500">{job.period}</time>
                    </div>
                    <div className="bg-indigo-600 w-4 h-4 rounded-full absolute left-[-9px] mt-2 border-4 border-white"></div>
                    <div className="md:w-2/3 pl-8 mt-4 md:mt-0">
                        <div className="bg-white p-6 rounded-2xl shadow-lg">
                            <ul className="list-disc list-inside text-gray-700 space-y-2">
                                {job.tasks.map((task, i) => <li key={i}>{task}</li>)}
                            </ul>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Skills = () => (
    <Section id="skills" title="Technical Skills" subtitle="My technical toolkit for building high-quality software." className="bg-white">
        <div className="bg-indigo-50 p-8 rounded-2xl shadow-lg border-2 border-indigo-200 mb-8">
            <h3 className="text-2xl font-bold text-indigo-900 mb-4">Core Expertise</h3>
            <p className="text-indigo-700 mb-6">I have deep, hands-on experience architecting and building full-stack applications with these core technologies:</p>
            <div className="flex flex-wrap gap-4">
                {['React', 'Node.js', 'React Native', 'TypeScript', 'JavaScript (ES6+)'].map(skill => <span key={skill} className="bg-indigo-600 text-white px-4 py-2 rounded-lg font-bold text-base">{skill}</span>)}
            </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.values(skillsData).map(category => (
                <div key={category.name} className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-200">
                     <h3 className="text-xl font-bold text-gray-800 mb-4">{category.name}</h3>
                     <div className="flex flex-wrap gap-2">
                        {category.skills.map(skill => <span key={skill} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full font-medium text-sm">{skill}</span>)}
                     </div>
                </div>
            ))}
        </div>
    </Section>
);

const Projects: React.FC<{ onProjectClick: (key: ProjectKey) => void }> = ({ onProjectClick }) => {
    const projectCards = [
        { key: 'worxmate-okr', title: 'Worxmate OKR', emoji: '📈', description: 'Web & mobile platform to enhance team productivity.', tags: ['React Native', 'Web', 'Node.js'], color: 'indigo' },
        { key: 'worxmate-pms', title: 'Worxmate PMS', emoji: '�', description: 'AI-driven Performance Review System.', tags: ['React Native', 'AI', 'Web'], color: 'purple' },
        { key: 'dtracker', title: 'DTracker', emoji: '🛰️', description: 'Mobile app for location services and IoT devices.', tags: ['React Native', 'IoT', 'BLE'], color: 'sky' },
        { key: 'truck-pulse', title: 'Truck Pulse', emoji: '🚚', description: 'Logistics platform for shippers and transporters.', tags: ['iOS', 'Android', 'Swift'], color: 'amber' },
        { key: 'fastudo', title: 'Fastudo', emoji: '🛠️', description: 'On-demand home services application.', tags: ['iOS', 'Android', 'Objective-C'], color: 'rose' }
    ];

    return (
        <Section id="projects" title="Featured Projects" subtitle="A selection of my work." className="bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectCards.map(p => (
                    <div key={p.key} className="project-card bg-white rounded-2xl shadow-lg overflow-hidden group transition-transform duration-300 hover:-translate-y-2 flex flex-col">
                        <div className={`relative h-56 bg-${p.color}-500 flex items-center justify-center text-white text-5xl font-bold`}>{p.emoji}</div>
                        <div className="p-6 flex flex-col flex-grow">
                            <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                            <p className="text-gray-600 mb-4 h-12">{p.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                {p.tags.map(tag => <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md font-medium text-xs">{tag}</span>)}
                            </div>
                            <div className="mt-auto flex space-x-2">
                                <button onClick={() => onProjectClick(p.key as ProjectKey)} className={`w-1/2 bg-${p.color}-100 text-${p.color}-700 font-semibold py-3 rounded-lg hover:bg-${p.color}-200 transition-colors duration-300`}>
                                    View Details
                                </button>
                                <a href="#" onClick={(e) => e.preventDefault()} className={`w-1/2 flex justify-center items-center bg-white text-${p.color}-700 border border-${p.color}-200 font-semibold py-3 rounded-lg hover:bg-${p.color}-50 transition-colors duration-300`} aria-label={`Live demo for ${p.title}`}>
                                   Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const Contact = () => (
    <Section id="contact" title="Let's Connect" subtitle="I'm open to new opportunities and collaborations." className="bg-white">
        <div className="max-w-4xl mx-auto bg-gray-50 p-8 sm:p-12 rounded-2xl shadow-xl">
            <form id="contactForm" action="mailto:sharadkatre01@gmail.com" method="post" encType="text/plain">
                 <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input type="text" id="name" name="name" className="form-input" required />
                    </div>
                    <div>
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input type="email" id="email" name="email" className="form-input" required />
                    </div>
                </div>
                <div className="mt-6">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" name="message" rows={5} className="form-input" required placeholder="Tell me about your project..."></textarea>
                </div>
                <div className="text-center mt-8">
                    <button type="submit" className="bg-indigo-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto">Send Message</button>
                </div>
            </form>
        </div>
    </Section>
);

const Footer = () => (
    <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-6 py-12 text-center">
            <p className="text-xl font-bold mb-4">Sharad Katre</p>
            <div className="flex justify-center space-x-6 mb-8">
                <a href="mailto:sharadkatre01@gmail.com" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300" aria-label="Email"><MailIcon /></a>
                <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300" aria-label="GitHub"><GithubIcon /></a>
                <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-400 transition-colors duration-300" aria-label="LinkedIn"><LinkedinIcon /></a>
            </div>
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Sharad Katre. All rights reserved.</p>
        </div>
    </footer>
);

const ProjectModal: React.FC<{ projectKey: ProjectKey | null; onClose: () => void }> = ({ projectKey, onClose }) => {
    const modalRef = useRef<HTMLDivElement>(null);
    const project = projectKey ? projectData[projectKey] : null;

    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => { if (event.key === 'Escape') onClose(); };
        const handleClickOutside = (event: MouseEvent) => { if (modalRef.current && !modalRef.current.contains(event.target as Node)) onClose(); };
        
        if (projectKey) {
            document.addEventListener('keydown', handleEsc);
            document.addEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'auto';
        };
    }, [projectKey, onClose]);

    if (!project) return null;

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div ref={modalRef} className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto p-8 transform transition-all duration-300 scale-100 opacity-100">
                 <div className="flex justify-between items-start mb-6">
                    <div>
                        <span className="text-5xl mb-4">{project.emoji}</span>
                        <h2 className="text-3xl font-bold text-gray-900 mt-2">{project.title}</h2>
                    </div>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-4xl" aria-label="Close modal">&times;</button>
                </div>
                <p className="text-lg text-gray-600 mb-6">{project.description}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Key Achievements</h3>
                <ul className="space-y-3 text-gray-600 mb-6">
                    {project.achievements.map((a, i) => (
                        <li key={i} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                            <span>{a}</span>
                        </li>
                    ))}
                </ul>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Technologies & Domains</h3>
                <div className="flex flex-wrap gap-3">
                    {project.tech.map(t => <span key={t} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">{t}</span>)}
                </div>
            </div>
        </div>
    );
}

// --- MAIN APP COMPONENT ---
export default function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<ProjectKey | null>(null);

    // Apply reusable form input classes
    useEffect(() => {
        const inputs = document.querySelectorAll('.form-input');
        const formLabels = document.querySelectorAll('.form-label');
        inputs.forEach(el => {
            el.classList.add('w-full', 'px-4', 'py-3', 'bg-white', 'border', 'border-gray-300', 'rounded-lg', 'focus:ring-2', 'focus:ring-indigo-500', 'focus:border-indigo-500', 'outline-none', 'transition', 'duration-200');
        });
        formLabels.forEach(el => {
             el.classList.add('block', 'text-gray-700', 'font-semibold', 'mb-2');
        });
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <Header onMenuOpen={() => setIsMenuOpen(true)} />
            <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
            <main>
                <Hero />
                <About />
                <Experience />
                <Skills />
                <Projects onProjectClick={setSelectedProject} />
                <Contact />
            </main>
            <Footer />
            <ProjectModal projectKey={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}
