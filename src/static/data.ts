import { PortfolioItem } from '../types';

// Sample project data
export const sampleProjects: PortfolioItem[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js. Includes user authentication, product management, shopping cart functionality, payment processing with Stripe, and order management.",
    imageUrl: "/images/ecommerce-project.jpg",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Redux"],
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    liveUrl: "https://okr.worxmate.ai/",
    features: [
      "User authentication and profile management",
      "Product catalog with search and filtering",
      "Shopping cart and checkout process",
      "Payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for product management"
    ],
  },
  {
    id: "2",
    title: "Task Management App",
    description: "A productivity application that helps teams organize and track their projects. Features include task creation, assignment, due dates, status tracking, and team collaboration tools.",
    imageUrl: "/images/task-manager.jpg",
    technologies: ["TypeScript", "React", "Firebase", "Material UI", "Redux Toolkit"],
    githubUrl: "https://github.com/yourusername/task-management",
    liveUrl: "https://okr.worxmate.ai/",
    features: [
      "User authentication with roles and permissions",
      "Project and task creation with detailed attributes",
      "Drag-and-drop task organization",
      "Real-time updates and notifications",
      "Team collaboration features",
      "Progress tracking and reporting"
    ]
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description: "An interactive weather application that displays current weather conditions and forecasts for locations worldwide. Utilizes OpenWeatherMap API and includes visualization of weather patterns.",
    imageUrl: "../src/assets/images/worxmate-logo.png",
    technologies: ["JavaScript", "Angular", "Chart.js", "NodeJS", "Firestore", "Google Cloud Functions", "App Engine", "Cloud Run", "Cloud Storage", "Cloud Pub/Sub", "BigQuery", "Cloud Monitoring", "Cloud Logging"],
    githubUrl: "https://github.com/yourusername/weather-dashboard",
    liveUrl: "https://okr.worxmate.ai/",
    features: [
      "Location search with autocomplete",
      "Current weather conditions display",
      "5-day weather forecast",
      "Visual charts for temperature and precipitation",
      "Location saving for quick access",
      "Responsive design for all devices"
    ]
  },
  {
    id: "4",
    title: "Social Media Dashboard",
    description: "A comprehensive dashboard that aggregates metrics and content from various social media platforms. Allows users to schedule posts, track engagement, and analyze performance across platforms.",
    imageUrl: "/images/social-dashboard.jpg",
    technologies: ["React", "Node.js", "Express", "GraphQL", "Social Media APIs", "D3.js"],
    githubUrl: "https://github.com/yourusername/social-dashboard",
    liveUrl: "https://okr.worxmate.ai/",
    features: [
      "Integration with multiple social media platforms",
      "Content scheduling and publishing",
      "Analytics and reporting features",
      "Engagement tracking and metrics",
      "Audience insights and demographics",
      "Custom report generation"
    ]
  },
  {
    id: "5",
    title: "Real Estate Listing Platform",
    description: "A property listing application designed for real estate agents and homebuyers. Features include property listings, search functionality, agent profiles, and appointment scheduling.",
    imageUrl: "/images/realestate-app.jpg",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Google Maps API", "Cloudinary", "Tailwind CSS"],
    githubUrl: "https://github.com/yourusername/realestate-platform",
    liveUrl: "https://realestate-demo.vercel.app",
    features: [
      "Advanced property search and filtering",
      "Interactive map view of properties",
      "Virtual tour scheduling",
      "Agent profiles and direct messaging",
      "Saved favorites and search alerts",
      "Mortgage calculator and affordability tools"
    ]
  },
  {
    id: "6",
    title: "Fitness Tracking Application",
    description: "A mobile-responsive web application for tracking workouts, nutrition, and fitness goals. Includes customizable workout plans, progress tracking, and social sharing features.",
    imageUrl: "/images/fitness-tracker.jpg",
    technologies: ["React Native", "Firebase", "Redux", "Chart.js", "Expo", "Auth0"],
    githubUrl: "https://github.com/yourusername/fitness-tracker",
    liveUrl: "https://fitness-app-demo.web.app",
    features: [
      "Customizable workout plan creation",
      "Exercise library with instructional videos",
      "Nutrition and meal tracking",
      "Progress visualization with charts",
      "Goal setting and achievement tracking",
      "Community challenges and sharing"
    ]
  }
];

// Usage example:
// import { sampleProjects } from '../data/sampleProjects';
// 
// function Portfolio() {
//   const [loading, setLoading] = useState(false);
//   
//   return (
//     <div>
//       <h2>My Portfolio</h2>
//       <ProjectGrid projects={sampleProjects} loading={loading} />
//     </div>
//   );
// }