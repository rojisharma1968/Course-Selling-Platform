
import { Course } from './types';

export const additionalCourses: Course[] = [
  {
    id: "android-development",
    title: "Android App Development Bootcamp",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 94.99,
    category: "Mobile Development",
    level: "beginner",
    description: "Learn Android development from scratch. Build real-world Android applications using Kotlin, Android Studio, and modern Android development practices.",
    shortDescription: "Create professional Android apps with Kotlin and Android Studio",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1573,
    students: 18942,
    duration: "30h 15m",
    updatedAt: "2023-11-08",
    curriculum: [
      {
        title: "Introduction to Android",
        lessons: [
          { title: "Setting Up Android Studio", duration: "15:30", isPreview: true },
          { title: "Creating Your First Project", duration: "20:45" },
          { title: "Android Project Structure", duration: "25:20" }
        ]
      },
      {
        title: "Kotlin Fundamentals",
        lessons: [
          { title: "Kotlin Basics", duration: "30:15" },
          { title: "Object-Oriented Programming in Kotlin", duration: "35:30" },
          { title: "Null Safety and Other Kotlin Features", duration: "25:45" }
        ]
      },
      {
        title: "Building User Interfaces",
        lessons: [
          { title: "UI Layouts in Android", duration: "40:10" },
          { title: "RecyclerView and Adapters", duration: "45:30" },
          { title: "Material Design Components", duration: "35:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Build professional Android applications from scratch",
      "Master Kotlin programming for Android development",
      "Implement modern UI with Material Design components",
      "Work with data persistence and networking in Android",
      "Understand Android app architecture and best practices",
      "Publish your apps to the Google Play Store"
    ]
  },
  {
    id: "web-accessibility",
    title: "Web Accessibility Masterclass",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 69.99,
    category: "Web Development",
    level: "intermediate",
    description: "Learn how to make your websites accessible to everyone. This course covers WCAG guidelines, assistive technologies, accessible HTML, CSS, and JavaScript, and testing techniques.",
    shortDescription: "Create inclusive websites that work for everyone, including people with disabilities",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    rating: 4.8,
    reviewCount: 985,
    students: 12547,
    duration: "22h 30m",
    updatedAt: "2023-10-20",
    curriculum: [
      {
        title: "Introduction to Web Accessibility",
        lessons: [
          { title: "Why Accessibility Matters", duration: "15:30", isPreview: true },
          { title: "Understanding Disabilities and Assistive Technologies", duration: "25:45" },
          { title: "WCAG Guidelines Overview", duration: "30:20" }
        ]
      },
      {
        title: "Accessible Content and Design",
        lessons: [
          { title: "Semantic HTML", duration: "35:15" },
          { title: "Accessible CSS Techniques", duration: "30:30" },
          { title: "Color Contrast and Text Readability", duration: "25:45" },
          { title: "Accessible Navigation and Landmarks", duration: "20:20" }
        ]
      },
      {
        title: "Interactive Elements and Testing",
        lessons: [
          { title: "Keyboard Navigation", duration: "30:10" },
          { title: "ARIA Roles and Attributes", duration: "40:30" },
          { title: "Testing with Screen Readers", duration: "35:15" },
          { title: "Automated and Manual Testing Techniques", duration: "25:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand accessibility principles and guidelines",
      "Create websites that conform to WCAG 2.1 standards",
      "Implement accessible navigation and content structure",
      "Build accessible forms and interactive components",
      "Use ARIA effectively to enhance accessibility",
      "Test websites with assistive technologies"
    ]
  },
  {
    id: "devops-fundamentals",
    title: "DevOps Fundamentals: CI/CD, Docker, and Kubernetes",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 99.99,
    category: "DevOps",
    level: "intermediate",
    description: "Learn essential DevOps skills including continuous integration and delivery, containerization with Docker, and orchestration with Kubernetes.",
    shortDescription: "Master DevOps tools and practices for modern software delivery",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1254,
    students: 15987,
    duration: "30h 45m",
    updatedAt: "2023-11-15",
    curriculum: [
      {
        title: "DevOps Introduction",
        lessons: [
          { title: "What is DevOps?", duration: "20:30", isPreview: true },
          { title: "DevOps Culture and Practices", duration: "30:45" },
          { title: "Development and Operations Collaboration", duration: "25:20" }
        ]
      },
      {
        title: "Continuous Integration and Delivery",
        lessons: [
          { title: "CI/CD Principles", duration: "35:15" },
          { title: "Setting Up CI Pipelines with Jenkins", duration: "40:30" },
          { title: "GitHub Actions for CI/CD", duration: "45:45" },
          { title: "Automated Testing in CI/CD", duration: "30:20" }
        ]
      },
      {
        title: "Containerization and Orchestration",
        lessons: [
          { title: "Docker Fundamentals", duration: "45:10" },
          { title: "Building and Managing Docker Images", duration: "40:30" },
          { title: "Kubernetes Basics", duration: "50:15" },
          { title: "Deploying Applications to Kubernetes", duration: "55:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Implement CI/CD pipelines for automated software delivery",
      "Containerize applications using Docker",
      "Deploy and manage applications with Kubernetes",
      "Apply infrastructure as code principles",
      "Implement monitoring and logging for DevOps",
      "Adopt DevOps culture and practices in your organization"
    ]
  },
  {
    id: "vue-js-complete",
    title: "Vue.js - The Complete Guide",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 84.99,
    category: "Web Development",
    level: "beginner",
    description: "Master Vue.js from the ground up. Learn Vue 3, Vuex, Vue Router, and how to build modern, reactive web applications with the Vue ecosystem.",
    shortDescription: "Build powerful, reactive web applications with Vue.js",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 2358,
    students: 24789,
    duration: "28h 15m",
    updatedAt: "2023-10-05",
    isPopular: true,
    curriculum: [
      {
        title: "Vue Basics",
        lessons: [
          { title: "Introduction to Vue.js", duration: "15:30", isPreview: true },
          { title: "Vue Instance and Templates", duration: "20:45" },
          { title: "Directives and Data Binding", duration: "25:20" }
        ]
      },
      {
        title: "Components and Communication",
        lessons: [
          { title: "Vue Components", duration: "30:15" },
          { title: "Component Communication", duration: "35:30" },
          { title: "Slots and Dynamic Components", duration: "25:45" },
          { title: "Component Lifecycle", duration: "20:20" }
        ]
      },
      {
        title: "Vue Ecosystem",
        lessons: [
          { title: "Vue Router", duration: "40:10" },
          { title: "State Management with Vuex", duration: "45:30" },
          { title: "Vue 3 Composition API", duration: "50:15" },
          { title: "Testing Vue Applications", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Build complete applications with Vue.js",
      "Understand the Vue 3 Composition API",
      "Implement routing with Vue Router",
      "Manage application state with Vuex",
      "Create reusable components and directives",
      "Optimize and deploy Vue applications"
    ]
  },
  {
    id: "data-visualization",
    title: "Data Visualization with D3.js",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 79.99,
    category: "Data Science",
    level: "intermediate",
    description: "Learn how to create beautiful, interactive data visualizations with D3.js. This course covers the fundamentals of data visualization design and implementation with D3.",
    shortDescription: "Create stunning interactive data visualizations for the web",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    reviewCount: 1126,
    students: 14523,
    duration: "25h 45m",
    updatedAt: "2023-09-18",
    curriculum: [
      {
        title: "D3.js Fundamentals",
        lessons: [
          { title: "Introduction to D3.js", duration: "15:30", isPreview: true },
          { title: "Data Binding and DOM Manipulation", duration: "20:45" },
          { title: "Scales and Axes", duration: "25:20" }
        ]
      },
      {
        title: "Building Visualizations",
        lessons: [
          { title: "Bar Charts and Histograms", duration: "30:15" },
          { title: "Line and Area Charts", duration: "25:30" },
          { title: "Pie and Donut Charts", duration: "20:45" },
          { title: "Scatter Plots and Bubble Charts", duration: "30:20" }
        ]
      },
      {
        title: "Interactive Visualizations",
        lessons: [
          { title: "Adding Interactivity with Events", duration: "35:10" },
          { title: "Transitions and Animations", duration: "40:30" },
          { title: "Building a Dashboard", duration: "45:15" },
          { title: "Responsive Visualizations", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Create data-driven visualizations with D3.js",
      "Implement various chart types for different data scenarios",
      "Add interactivity and animations to visualizations",
      "Design effective visualizations based on principles of perception",
      "Build responsive visualizations that work across devices",
      "Combine multiple visualizations into interactive dashboards"
    ]
  },
  {
    id: "typescript-masterclass",
    title: "TypeScript Masterclass",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 74.99,
    category: "Web Development",
    level: "intermediate",
    description: "Master TypeScript from basic to advanced concepts. Learn how to use TypeScript effectively with React, Node.js, and other frameworks.",
    shortDescription: "Write safer, more maintainable JavaScript with TypeScript",
    image: "https://images.unsplash.com/photo-1599507593499-a3f7d7d97667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1458,
    students: 18765,
    duration: "24h 30m",
    updatedAt: "2023-11-02",
    isPopular: true,
    curriculum: [
      {
        title: "TypeScript Fundamentals",
        lessons: [
          { title: "Introduction to TypeScript", duration: "15:30", isPreview: true },
          { title: "TypeScript Types and Interfaces", duration: "25:45" },
          { title: "Functions and Type Assertions", duration: "20:20" }
        ]
      },
      {
        title: "Advanced TypeScript",
        lessons: [
          { title: "Generics", duration: "30:15" },
          { title: "Union and Intersection Types", duration: "25:30" },
          { title: "Type Guards and Type Narrowing", duration: "20:45" },
          { title: "Advanced Type Features", duration: "35:20" }
        ]
      },
      {
        title: "TypeScript with Frameworks",
        lessons: [
          { title: "TypeScript with React", duration: "40:10" },
          { title: "TypeScript with Node.js", duration: "35:30" },
          { title: "TypeScript with Express", duration: "30:15" },
          { title: "Testing TypeScript Applications", duration: "25:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write type-safe JavaScript applications with TypeScript",
      "Understand and use advanced type system features",
      "Refactor JavaScript code to TypeScript",
      "Integrate TypeScript with React, Node.js, and other frameworks",
      "Set up and configure TypeScript projects",
      "Implement best practices for maintainable TypeScript code"
    ]
  },
  {
    id: "motion-graphics",
    title: "Motion Graphics and Animation",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 89.99,
    category: "Design",
    level: "intermediate",
    description: "Learn how to create stunning motion graphics and animations for video, web, and social media. This course covers After Effects, Cinema 4D basics, and animation principles.",
    shortDescription: "Create professional motion graphics and animations for digital media",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1354,
    students: 16985,
    duration: "26h 15m",
    updatedAt: "2023-10-15",
    curriculum: [
      {
        title: "Animation Fundamentals",
        lessons: [
          { title: "Principles of Animation", duration: "20:30", isPreview: true },
          { title: "Timing and Spacing", duration: "25:45" },
          { title: "Easing and Anticipation", duration: "15:20" }
        ]
      },
      {
        title: "After Effects Essentials",
        lessons: [
          { title: "Introduction to After Effects", duration: "30:15" },
          { title: "Working with Layers and Keyframes", duration: "35:30" },
          { title: "Masks and Mattes", duration: "25:45" },
          { title: "Effects and Expressions", duration: "40:20" }
        ]
      },
      {
        title: "Advanced Motion Graphics",
        lessons: [
          { title: "Character Animation", duration: "45:10" },
          { title: "3D in After Effects", duration: "50:30" },
          { title: "Cinema 4D Basics", duration: "55:15" },
          { title: "Integration and Rendering", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Apply principles of animation to create professional motion graphics",
      "Create engaging animations for video and web",
      "Master essential After Effects techniques and workflows",
      "Design and animate typography for motion graphics",
      "Integrate 2D and 3D elements in your animations",
      "Render and export animations for different platforms"
    ]
  },
  {
    id: "game-development-unity",
    title: "Game Development with Unity",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 94.99,
    category: "Game Development",
    level: "beginner",
    description: "Learn game development from scratch using Unity. This course covers C# programming, game design principles, 2D and 3D game development, and publishing your games.",
    shortDescription: "Create your own games using Unity and C#",
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 2145,
    students: 25698,
    duration: "38h 30m",
    updatedAt: "2023-11-08",
    isFeatured: true,
    curriculum: [
      {
        title: "Getting Started with Unity",
        lessons: [
          { title: "Introduction to Unity", duration: "20:30", isPreview: true },
          { title: "Unity Interface and Workflow", duration: "25:45" },
          { title: "C# Programming Basics", duration: "30:20" }
        ]
      },
      {
        title: "2D Game Development",
        lessons: [
          { title: "2D Game Fundamentals", duration: "35:15" },
          { title: "Sprites and Animation", duration: "30:30" },
          { title: "Physics and Collision", duration: "25:45" },
          { title: "Building a 2D Platformer", duration: "45:20" }
        ]
      },
      {
        title: "3D Game Development",
        lessons: [
          { title: "3D Game Basics", duration: "40:10" },
          { title: "3D Models and Materials", duration: "35:30" },
          { title: "Lighting and Effects", duration: "30:15" },
          { title: "Building a 3D Game", duration: "50:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Develop games using Unity and C#",
      "Create both 2D and 3D games from scratch",
      "Implement game mechanics and physics",
      "Design game levels and user interfaces",
      "Optimize game performance",
      "Publish games to multiple platforms"
    ]
  },
  {
    id: "sql-data-analysis",
    title: "SQL for Data Analysis",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 0,
    category: "Data Science",
    level: "beginner",
    description: "Learn SQL from the ground up for data analysis. This course covers SQL basics, advanced queries, data manipulation, and how to use SQL for data analytics and reporting.",
    shortDescription: "Master SQL for data analysis and reporting",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1021&q=80",
    rating: 4.6,
    reviewCount: 2358,
    students: 32145,
    duration: "20h 15m",
    updatedAt: "2023-09-10",
    curriculum: [
      {
        title: "SQL Basics",
        lessons: [
          { title: "Introduction to SQL and Databases", duration: "15:30", isPreview: true },
          { title: "SELECT Statements and Filtering", duration: "20:45" },
          { title: "Ordering and Limiting Results", duration: "15:20" }
        ]
      },
      {
        title: "Intermediate SQL",
        lessons: [
          { title: "Aggregations and GROUP BY", duration: "25:15" },
          { title: "Joins and Relationships", duration: "30:30" },
          { title: "Subqueries", duration: "25:45" },
          { title: "Common Table Expressions", duration: "20:20" }
        ]
      },
      {
        title: "SQL for Data Analysis",
        lessons: [
          { title: "Window Functions", duration: "35:10" },
          { title: "Date and Time Functions", duration: "25:30" },
          { title: "Creating Reports with SQL", duration: "30:15" },
          { title: "Optimizing SQL Queries", duration: "25:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write complex SQL queries for data analysis",
      "Use aggregation functions to summarize data",
      "Join multiple tables to access related data",
      "Apply window functions for advanced analysis",
      "Create reports and visualizations from SQL data",
      "Optimize SQL queries for better performance"
    ]
  },
  {
    id: "content-marketing",
    title: "Content Marketing Strategy",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 74.99,
    category: "Marketing",
    level: "intermediate",
    description: "Learn how to create and implement a successful content marketing strategy. This course covers content planning, creation, distribution, and measurement.",
    shortDescription: "Create content that attracts, engages, and converts your audience",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1245,
    students: 18965,
    duration: "22h 30m",
    updatedAt: "2023-10-05",
    curriculum: [
      {
        title: "Content Marketing Fundamentals",
        lessons: [
          { title: "What is Content Marketing?", duration: "15:30", isPreview: true },
          { title: "Content Marketing vs. Traditional Marketing", duration: "20:45" },
          { title: "Building a Content Marketing Framework", duration: "25:20" }
        ]
      },
      {
        title: "Content Strategy and Planning",
        lessons: [
          { title: "Audience Research and Personas", duration: "30:15" },
          { title: "Content Mapping and Journey Planning", duration: "25:30" },
          { title: "Content Calendars and Planning", duration: "20:45" },
          { title: "SEO for Content Marketing", duration: "35:20" }
        ]
      },
      {
        title: "Content Creation and Distribution",
        lessons: [
          { title: "Creating Engaging Blog Content", duration: "25:10" },
          { title: "Video and Visual Content", duration: "30:30" },
          { title: "Content Distribution Channels", duration: "20:15" },
          { title: "Measuring Content Performance", duration: "25:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Develop a comprehensive content marketing strategy",
      "Create content that resonates with your target audience",
      "Optimize content for search engines and conversion",
      "Build a sustainable content creation workflow",
      "Distribute content effectively across multiple channels",
      "Measure and analyze content marketing performance"
    ]
  },
  {
    id: "photography-masterclass",
    title: "Photography Masterclass",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 84.99,
    category: "Photography",
    level: "beginner",
    description: "Master the art of photography from the ground up. Learn camera settings, composition, lighting, and post-processing to take stunning photographs in any situation.",
    shortDescription: "Take stunning photographs in any situation",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
    rating: 4.9,
    reviewCount: 3254,
    students: 42365,
    duration: "30h 45m",
    updatedAt: "2023-09-15",
    isPopular: true,
    curriculum: [
      {
        title: "Photography Basics",
        lessons: [
          { title: "Understanding Your Camera", duration: "20:30", isPreview: true },
          { title: "Exposure Triangle: ISO, Aperture, Shutter Speed", duration: "30:45" },
          { title: "Camera Modes and Settings", duration: "25:20" }
        ]
      },
      {
        title: "Composition and Lighting",
        lessons: [
          { title: "Rules of Composition", duration: "35:15" },
          { title: "Understanding Light", duration: "40:30" },
          { title: "Natural vs. Artificial Lighting", duration: "30:45" },
          { title: "Color Theory in Photography", duration: "25:20" }
        ]
      },
      {
        title: "Photography Specialties",
        lessons: [
          { title: "Portrait Photography", duration: "45:10" },
          { title: "Landscape Photography", duration: "40:30" },
          { title: "Street Photography", duration: "35:15" },
          { title: "Post-Processing with Lightroom", duration: "50:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Master camera settings and functions",
      "Compose visually compelling photographs",
      "Work with different lighting conditions",
      "Develop your unique photography style",
      "Edit and enhance photos in post-processing",
      "Build a photography portfolio"
    ]
  },
  {
    id: "blockchain-development",
    title: "Blockchain Development",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 119.99,
    category: "Blockchain",
    level: "advanced",
    description: "Learn blockchain development from theory to practice. This course covers blockchain fundamentals, smart contracts, Ethereum development, and building decentralized applications.",
    shortDescription: "Build decentralized applications with blockchain technology",
    image: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    rating: 4.7,
    reviewCount: 987,
    students: 12564,
    duration: "32h 30m",
    updatedAt: "2023-11-10",
    curriculum: [
      {
        title: "Blockchain Fundamentals",
        lessons: [
          { title: "Introduction to Blockchain", duration: "25:30", isPreview: true },
          { title: "Cryptography and Consensus Mechanisms", duration: "30:45" },
          { title: "Blockchain Architecture", duration: "35:20" }
        ]
      },
      {
        title: "Smart Contract Development",
        lessons: [
          { title: "Introduction to Smart Contracts", duration: "30:15" },
          { title: "Solidity Programming Language", duration: "45:30" },
          { title: "Testing and Deploying Smart Contracts", duration: "40:45" },
          { title: "Smart Contract Security", duration: "35:20" }
        ]
      },
      {
        title: "Decentralized Applications",
        lessons: [
          { title: "Building dApps with Web3.js", duration: "50:10" },
          { title: "User Interface for dApps", duration: "45:30" },
          { title: "Interacting with Smart Contracts", duration: "40:15" },
          { title: "Decentralized Storage with IPFS", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand blockchain technology and its applications",
      "Write, test, and deploy smart contracts",
      "Build decentralized applications (dApps)",
      "Implement blockchain security best practices",
      "Use Web3.js to interact with Ethereum blockchain",
      "Deploy applications to mainnet and test networks"
    ]
  },
  {
    id: "personal-finance",
    title: "Personal Finance Masterclass",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 69.99,
    category: "Finance",
    level: "beginner",
    description: "Take control of your financial future. Learn budgeting, saving, investing, debt management, and retirement planning in this comprehensive personal finance course.",
    shortDescription: "Master your money and build wealth for the future",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.8,
    reviewCount: 3214,
    students: 45123,
    duration: "25h 15m",
    updatedAt: "2023-09-20",
    isPopular: true,
    curriculum: [
      {
        title: "Financial Foundations",
        lessons: [
          { title: "Financial Mindset and Goals", duration: "15:30", isPreview: true },
          { title: "Budgeting Fundamentals", duration: "25:45" },
          { title: "Emergency Funds and Saving", duration: "20:20" }
        ]
      },
      {
        title: "Debt and Credit Management",
        lessons: [
          { title: "Understanding Credit Scores", duration: "30:15" },
          { title: "Debt Reduction Strategies", duration: "35:30" },
          { title: "Smart Credit Card Usage", duration: "25:45" },
          { title: "Student Loan Management", duration: "30:20" }
        ]
      },
      {
        title: "Investing and Retirement",
        lessons: [
          { title: "Investing Basics", duration: "40:10" },
          { title: "Retirement Accounts", duration: "35:30" },
          { title: "Stock Market Investing", duration: "45:15" },
          { title: "Real Estate Fundamentals", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Create and maintain a personal budget",
      "Build an emergency fund and savings strategy",
      "Manage and eliminate debt efficiently",
      "Understand and improve your credit score",
      "Develop an investment strategy for long-term growth",
      "Plan for retirement and other financial goals"
    ]
  },
  {
    id: "3d-modeling-blender",
    title: "3D Modeling with Blender",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 89.99,
    category: "Design",
    level: "intermediate",
    description: "Learn 3D modeling, texturing, lighting, and rendering with Blender. This course takes you from beginner to creating impressive 3D models and animations.",
    shortDescription: "Create stunning 3D models and animations with Blender",
    image: "https://images.unsplash.com/photo-1617791160505-6f00504e3519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
    rating: 4.7,
    reviewCount: 1745,
    students: 19854,
    duration: "35h 30m",
    updatedAt: "2023-10-25",
    curriculum: [
      {
        title: "Blender Basics",
        lessons: [
          { title: "Introduction to Blender Interface", duration: "20:30", isPreview: true },
          { title: "Navigation and Viewport Controls", duration: "15:45" },
          { title: "Basic Object Manipulation", duration: "25:20" }
        ]
      },
      {
        title: "3D Modeling Techniques",
        lessons: [
          { title: "Mesh Modeling Basics", duration: "35:15" },
          { title: "Modifiers and Deformers", duration: "30:30" },
          { title: "Sculpting in Blender", duration: "40:45" },
          { title: "Hard Surface Modeling", duration: "45:20" }
        ]
      },
      {
        title: "Materials and Rendering",
        lessons: [
          { title: "Materials and Texturing", duration: "40:10" },
          { title: "Lighting Techniques", duration: "35:30" },
          { title: "Camera Setup and Composition", duration: "25:15" },
          { title: "Rendering with Cycles and Eevee", duration: "45:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Create detailed 3D models from scratch",
      "Apply materials and textures to 3D objects",
      "Set up lighting for realistic renders",
      "Use modifiers to efficiently model complex objects",
      "Create basic animations in Blender",
      "Render final images and animations"
    ]
  },
  {
    id: "project-management",
    title: "Project Management Professional (PMP) Preparation",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 119.99,
    category: "Business",
    level: "advanced",
    description: "Prepare for the PMP certification exam. This course covers all knowledge areas in the PMBOK Guide, provides practice questions, and teaches project management best practices.",
    shortDescription: "Prepare for the PMP certification with comprehensive training",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1654,
    students: 18965,
    duration: "35h 45m",
    updatedAt: "2023-11-05",
    curriculum: [
      {
        title: "Project Management Framework",
        lessons: [
          { title: "Introduction to Project Management", duration: "20:30", isPreview: true },
          { title: "Project Life Cycle and Organization", duration: "25:45" },
          { title: "Project Management Processes", duration: "30:20" }
        ]
      },
      {
        title: "Project Management Knowledge Areas",
        lessons: [
          { title: "Integration Management", duration: "35:15" },
          { title: "Scope Management", duration: "30:30" },
          { title: "Time and Cost Management", duration: "40:45" },
          { title: "Quality and Resource Management", duration: "35:20" }
        ]
      },
      {
        title: "PMP Exam Preparation",
        lessons: [
          { title: "Exam Structure and Approach", duration: "25:10" },
          { title: "Practice Questions and Solutions", duration: "50:30" },
          { title: "Mock Exams", duration: "60:15" },
          { title: "Final Preparation Strategies", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the PMBOK Guide and its knowledge areas",
      "Apply project management principles to real-world scenarios",
      "Develop project schedules, budgets, and risk management plans",
      "Lead project teams effectively",
      "Prepare thoroughly for the PMP certification exam",
      "Implement project management best practices"
    ]
  },
  {
    id: "seo-masterclass",
    title: "SEO Masterclass: Rank #1 on Google",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 84.99,
    category: "Marketing",
    level: "intermediate",
    description: "Master search engine optimization to rank higher on Google. This course covers on-page SEO, off-page SEO, technical SEO, keyword research, and SEO analytics.",
    shortDescription: "Drive organic traffic by mastering search engine optimization",
    image: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 2458,
    students: 28945,
    duration: "28h 15m",
    updatedAt: "2023-10-10",
    curriculum: [
      {
        title: "SEO Fundamentals",
        lessons: [
          { title: "How Search Engines Work", duration: "20:30", isPreview: true },
          { title: "SEO Strategy Development", duration: "25:45" },
          { title: "Google Algorithm Updates", duration: "30:20" }
        ]
      },
      {
        title: "On-Page and Off-Page SEO",
        lessons: [
          { title: "Keyword Research and Analysis", duration: "35:15" },
          { title: "On-Page Optimization Techniques", duration: "40:30" },
          { title: "Content Strategy for SEO", duration: "30:45" },
          { title: "Link Building Strategies", duration: "45:20" }
        ]
      },
      {
        title: "Technical SEO and Analytics",
        lessons: [
          { title: "Technical SEO Audit", duration: "50:10" },
          { title: "Site Speed Optimization", duration: "35:30" },
          { title: "Mobile SEO", duration: "30:15" },
          { title: "Analytics and SEO Reporting", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Develop effective SEO strategies",
      "Conduct comprehensive keyword research",
      "Optimize website content for target keywords",
      "Implement technical SEO improvements",
      "Build high-quality backlinks",
      "Track and measure SEO performance"
    ]
  },
  {
    id: "advanced-excel",
    title: "Advanced Excel: Formulas, Macros & Data Analysis",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 74.99,
    category: "Data Science",
    level: "intermediate",
    description: "Take your Excel skills to the next level. Learn advanced formulas, macros, VBA programming, and data analysis techniques to become an Excel power user.",
    shortDescription: "Master advanced Excel techniques for complex data analysis",
    image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 3254,
    students: 42365,
    duration: "25h 30m",
    updatedAt: "2023-09-25",
    isPopular: true,
    curriculum: [
      {
        title: "Advanced Formulas and Functions",
        lessons: [
          { title: "Complex Formulas and Nested Functions", duration: "30:30", isPreview: true },
          { title: "Lookup and Reference Functions", duration: "35:45" },
          { title: "Array Formulas", duration: "25:20" }
        ]
      },
      {
        title: "Data Analysis and Visualization",
        lessons: [
          { title: "Data Tables and Scenario Manager", duration: "30:15" },
          { title: "Advanced PivotTables", duration: "40:30" },
          { title: "Power Query for Data Transformation", duration: "45:45" },
          { title: "Creating Dashboards in Excel", duration: "50:20" }
        ]
      },
      {
        title: "Macros and VBA",
        lessons: [
          { title: "Introduction to Macros", duration: "25:10" },
          { title: "VBA Fundamentals", duration: "40:30" },
          { title: "Creating Custom Functions", duration: "35:15" },
          { title: "Building Automated Reports", duration: "45:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Master advanced Excel formulas and functions",
      "Create dynamic reports with PivotTables",
      "Transform and clean data with Power Query",
      "Automate tasks with macros and VBA",
      "Build interactive dashboards in Excel",
      "Perform complex data analysis"
    ]
  },
  {
    id: "figma-ui-design",
    title: "UI Design with Figma",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 79.99,
    category: "Design",
    level: "beginner",
    description: "Learn UI design using Figma. This course covers design principles, wireframing, prototyping, design systems, and collaboration features in Figma.",
    shortDescription: "Create beautiful user interfaces with Figma",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1854,
    students: 24698,
    duration: "22h 45m",
    updatedAt: "2023-10-20",
    isFeatured: true,
    curriculum: [
      {
        title: "Figma Fundamentals",
        lessons: [
          { title: "Introduction to Figma", duration: "15:30", isPreview: true },
          { title: "Figma Interface and Tools", duration: "20:45" },
          { title: "Vector Networks and Pen Tool", duration: "25:20" }
        ]
      },
      {
        title: "UI Design Principles",
        lessons: [
          { title: "Layout and Grid Systems", duration: "30:15" },
          { title: "Typography in UI Design", duration: "25:30" },
          { title: "Color Theory for Interfaces", duration: "20:45" },
          { title: "Components and Styles", duration: "35:20" }
        ]
      },
      {
        title: "Prototyping and Collaboration",
        lessons: [
          { title: "Creating Interactive Prototypes", duration: "40:10" },
          { title: "Design Systems in Figma", duration: "45:30" },
          { title: "Collaboration and Feedback", duration: "25:15" },
          { title: "Handoff to Developers", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Design beautiful user interfaces using Figma",
      "Create wireframes and prototypes for websites and apps",
      "Develop and maintain design systems",
      "Collaborate effectively with teams in Figma",
      "Prepare designs for developer handoff",
      "Apply UI design principles to create usable interfaces"
    ]
  },
  {
    id: "c-sharp-development",
    title: "C# Programming for Beginners",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 84.99,
    category: "Programming",
    level: "beginner",
    description: "Learn C# programming from scratch. This course covers C# fundamentals, object-oriented programming, LINQ, and building applications with .NET Core.",
    shortDescription: "Master C# programming and .NET development",
    image: "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1206&q=80",
    rating: 4.7,
    reviewCount: 1485,
    students: 19845,
    duration: "28h 30m",
    updatedAt: "2023-09-15",
    curriculum: [
      {
        title: "C# Basics",
        lessons: [
          { title: "Introduction to C# and .NET", duration: "20:30", isPreview: true },
          { title: "Variables, Data Types, and Operators", duration: "25:45" },
          { title: "Control Flow: Conditions and Loops", duration: "30:20" }
        ]
      },
      {
        title: "Object-Oriented Programming",
        lessons: [
          { title: "Classes and Objects", duration: "35:15" },
          { title: "Inheritance and Polymorphism", duration: "40:30" },
          { title: "Interfaces and Abstract Classes", duration: "30:45" },
          { title: "Generics and Collections", duration: "35:20" }
        ]
      },
      {
        title: "Advanced C# Features",
        lessons: [
          { title: "LINQ and Lambda Expressions", duration: "45:10" },
          { title: "Asynchronous Programming", duration: "40:30" },
          { title: "File I/O and Serialization", duration: "35:15" },
          { title: "Building a Console Application", duration: "50:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write C# code with proper syntax and structure",
      "Apply object-oriented programming principles",
      "Use LINQ for data manipulation",
      "Implement asynchronous programming techniques",
      "Build applications with .NET Core",
      "Debug and troubleshoot C# code"
    ]
  },
  {
    id: "ethical-hacking",
    title: "Ethical Hacking and Penetration Testing",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 99.99,
    category: "IT & Security",
    level: "intermediate",
    description: "Learn ethical hacking and penetration testing from scratch. This course covers network security, vulnerability assessment, exploitation, and reporting.",
    shortDescription: "Master ethical hacking techniques to secure systems and networks",
    image: "https://images.unsplash.com/photo-1567301861931-2f8a38a46027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    rating: 4.8,
    reviewCount: 1785,
    students: 21456,
    duration: "35h 45m",
    updatedAt: "2023-11-15",
    curriculum: [
      {
        title: "Introduction to Ethical Hacking",
        lessons: [
          { title: "Ethical Hacking Concepts", duration: "20:30", isPreview: true },
          { title: "Legal and Ethical Considerations", duration: "15:45" },
          { title: "Setting Up a Penetration Testing Lab", duration: "30:20" }
        ]
      },
      {
        title: "Reconnaissance and Scanning",
        lessons: [
          { title: "Passive Reconnaissance", duration: "25:15" },
          { title: "Active Reconnaissance", duration: "30:30" },
          { title: "Vulnerability Scanning", duration: "35:45" },
          { title: "Network Mapping", duration: "25:20" }
        ]
      },
      {
        title: "Exploitation and Reporting",
        lessons: [
          { title: "Exploitation Fundamentals", duration: "40:10" },
          { title: "Web Application Attacks", duration: "45:30" },
          { title: "Network Attacks", duration: "40:15" },
          { title: "Penetration Testing Report Writing", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the ethical hacking methodology",
      "Perform reconnaissance and vulnerability scanning",
      "Exploit vulnerabilities in systems and networks",
      "Secure web applications against common attacks",
      "Conduct penetration tests following industry standards",
      "Write professional penetration testing reports"
    ]
  },
  {
    id: "copywriting-mastery",
    title: "Copywriting Mastery: Write to Sell",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 69.99,
    category: "Marketing",
    level: "beginner",
    description: "Learn the art and science of copywriting to create compelling content that sells. This course covers headline writing, sales pages, email campaigns, and persuasive techniques.",
    shortDescription: "Write persuasive copy that converts readers into customers",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80",
    rating: 4.7,
    reviewCount: 2145,
    students: 28965,
    duration: "20h 15m",
    updatedAt: "2023-09-30",
    curriculum: [
      {
        title: "Copywriting Fundamentals",
        lessons: [
          { title: "What is Copywriting?", duration: "15:30", isPreview: true },
          { title: "Understanding Your Audience", duration: "20:45" },
          { title: "The Psychology of Persuasion", duration: "25:20" }
        ]
      },
      {
        title: "Writing Compelling Copy",
        lessons: [
          { title: "Headline Formulas That Work", duration: "30:15" },
          { title: "Writing Engaging Introductions", duration: "25:30" },
          { title: "Building Desire and Overcoming Objections", duration: "30:45" },
          { title: "Calls to Action That Convert", duration: "20:20" }
        ]
      },
      {
        title: "Copywriting for Different Mediums",
        lessons: [
          { title: "Sales Page Copywriting", duration: "35:10" },
          { title: "Email Copywriting", duration: "30:30" },
          { title: "Ad Copywriting", duration: "25:15" },
          { title: "Social Media Copywriting", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write compelling headlines that grab attention",
      "Create persuasive sales pages that convert",
      "Craft email campaigns that drive action",
      "Apply psychological triggers in your copy",
      "Adapt your copywriting for different mediums",
      "Test and optimize your copy for better results"
    ]
  },
  {
    id: "public-speaking",
    title: "Public Speaking Mastery",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 74.99,
    category: "Personal Development",
    level: "beginner",
    description: "Overcome fear of public speaking and become a confident, compelling speaker. This course covers speech preparation, delivery techniques, body language, and handling Q&A sessions.",
    shortDescription: "Become a confident and powerful public speaker",
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 2145,
    students: 27896,
    duration: "18h 30m",
    updatedAt: "2023-10-05",
    curriculum: [
      {
        title: "Building Speaking Confidence",
        lessons: [
          { title: "Overcoming Fear and Anxiety", duration: "25:30", isPreview: true },
          { title: "Finding Your Authentic Voice", duration: "20:45" },
          { title: "Building Self-Confidence", duration: "30:20" }
        ]
      },
      {
        title: "Speech Preparation and Structure",
        lessons: [
          { title: "Researching Your Topic", duration: "20:15" },
          { title: "Crafting Powerful Openings and Closings", duration: "25:30" },
          { title: "Storytelling Techniques", duration: "30:45" },
          { title: "Using Visual Aids Effectively", duration: "20:20" }
        ]
      },
      {
        title: "Delivery and Engagement",
        lessons: [
          { title: "Vocal Variety and Projection", duration: "25:10" },
          { title: "Body Language and Stage Presence", duration: "30:30" },
          { title: "Engaging with Your Audience", duration: "25:15" },
          { title: "Handling Q&A and Difficult Situations", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Overcome fear and anxiety about public speaking",
      "Prepare and structure compelling speeches",
      "Deliver speeches with confidence and authority",
      "Use storytelling techniques to engage audiences",
      "Master body language and vocal delivery",
      "Handle questions and challenging situations effectively"
    ]
  },
  {
    id: "angular-complete",
    title: "Angular - The Complete Guide",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 89.99,
    category: "Web Development",
    level: "intermediate",
    description: "Master Angular development with this comprehensive course. Learn TypeScript, components, services, routing, HTTP, observables, forms, and more.",
    shortDescription: "Build modern, reactive web apps with Angular",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    rating: 4.7,
    reviewCount: 2358,
    students: 25698,
    duration: "33h 30m",
    updatedAt: "2023-11-10",
    curriculum: [
      {
        title: "Getting Started with Angular",
        lessons: [
          { title: "Introduction to Angular", duration: "20:30", isPreview: true },
          { title: "TypeScript Crash Course", duration: "30:45" },
          { title: "Angular CLI and Project Setup", duration: "25:20" }
        ]
      },
      {
        title: "Angular Fundamentals",
        lessons: [
          { title: "Components and Data Binding", duration: "35:15" },
          { title: "Directives and Pipes", duration: "30:30" },
          { title: "Services and Dependency Injection", duration: "35:45" },
          { title: "Routing and Navigation", duration: "40:20" }
        ]
      },
      {
        title: "Advanced Angular",
        lessons: [
          { title: "Reactive Forms", duration: "45:10" },
          { title: "HTTP and Observables", duration: "40:30" },
          { title: "Angular Modules and Optimization", duration: "35:15" },
          { title: "Authentication and Route Guards", duration: "50:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Build professional Angular applications from scratch",
      "Understand Angular architecture and components",
      "Work with reactive forms and form validation",
      "Connect to backend services with HTTP",
      "Implement authentication and authorization",
      "Optimize Angular applications for performance"
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing with Premiere Pro",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 84.99,
    category: "Video Production",
    level: "beginner",
    description: "Learn professional video editing with Adobe Premiere Pro. This course covers importing and organizing footage, editing techniques, audio, color grading, effects, and exporting.",
    shortDescription: "Master video editing with Adobe Premiere Pro",
    image: "https://images.unsplash.com/photo-1574717024453-e40f1cb7fdb5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1854,
    students: 22365,
    duration: "28h 15m",
    updatedAt: "2023-10-15",
    curriculum: [
      {
        title: "Getting Started with Premiere Pro",
        lessons: [
          { title: "Introduction to Premiere Pro Interface", duration: "20:30", isPreview: true },
          { title: "Project Setup and Organization", duration: "25:45" },
          { title: "Importing and Managing Media", duration: "30:20" }
        ]
      },
      {
        title: "Editing Techniques",
        lessons: [
          { title: "Basic Editing in the Timeline", duration: "35:15" },
          { title: "Advanced Editing Techniques", duration: "40:30" },
          { title: "Working with Audio", duration: "30:45" },
          { title: "Adding Titles and Graphics", duration: "25:20" }
        ]
      },
      {
        title: "Finishing and Exporting",
        lessons: [
          { title: "Color Correction and Grading", duration: "45:10" },
          { title: "Visual Effects and Transitions", duration: "40:30" },
          { title: "Export Settings and Delivery", duration: "30:15" },
          { title: "Creating a Complete Video Project", duration: "50:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Edit professional-quality videos with Premiere Pro",
      "Apply industry-standard editing techniques",
      "Create smooth transitions and compelling visual effects",
      "Mix and enhance audio for better sound quality",
      "Color grade footage to achieve professional looks",
      "Export videos for different platforms and purposes"
    ]
  },
  {
    id: "drawing-fundamentals",
    title: "Drawing Fundamentals",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 0,
    category: "Art",
    level: "beginner",
    description: "Learn the fundamentals of drawing, from basic shapes to realistic rendering. This course covers perspective, shading, composition, and drawing techniques for various subjects.",
    shortDescription: "Master the basics of drawing with proven techniques",
    image: "https://images.unsplash.com/photo-1453396450673-3fe83d2db2c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    rating: 4.7,
    reviewCount: 2458,
    students: 35241,
    duration: "18h 30m",
    updatedAt: "2023-09-10",
    curriculum: [
      {
        title: "Drawing Basics",
        lessons: [
          { title: "Introduction to Drawing Materials", duration: "15:30", isPreview: true },
          { title: "Lines, Shapes, and Forms", duration: "20:45" },
          { title: "Proportion and Measurement", duration: "25:20" }
        ]
      },
      {
        title: "Perspective and Shading",
        lessons: [
          { title: "Understanding Perspective", duration: "30:15" },
          { title: "Light and Shadow", duration: "35:30" },
          { title: "Value and Shading Techniques", duration: "25:45" },
          { title: "Texture and Detail", duration: "20:20" }
        ]
      },
      {
        title: "Drawing Different Subjects",
        lessons: [
          { title: "Still Life Drawing", duration: "35:10" },
          { title: "Portrait Drawing Basics", duration: "40:30" },
          { title: "Figure Drawing", duration: "45:15" },
          { title: "Landscape Drawing", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Draw with accurate proportion and perspective",
      "Create realistic light and shadow effects",
      "Understand and apply composition principles",
      "Render different textures and materials",
      "Draw various subjects from observation",
      "Develop your personal drawing style"
    ]
  },
  {
    id: "react-native-mobile",
    title: "React Native - Build Mobile Apps",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 89.99,
    category: "Mobile Development",
    level: "intermediate",
    description: "Build cross-platform mobile apps with React Native. This course teaches you how to create native iOS and Android apps using JavaScript and React.",
    shortDescription: "Create native mobile apps for iOS and Android with React Native",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    rating: 4.7,
    reviewCount: 1745,
    students: 19854,
    duration: "30h 45m",
    updatedAt: "2023-11-05",
    isFeatured: true,
    curriculum: [
      {
        title: "React Native Basics",
        lessons: [
          { title: "Introduction to React Native", duration: "20:30", isPreview: true },
          { title: "Setting Up Development Environment", duration: "25:45" },
          { title: "Core Components and APIs", duration: "30:20" }
        ]
      },
      {
        title: "Building UI with React Native",
        lessons: [
          { title: "Styling and Layout with Flexbox", duration: "35:15" },
          { title: "Navigation and Routing", duration: "40:30" },
          { title: "Lists and User Input", duration: "30:45" },
          { title: "Animations and Gestures", duration: "45:20" }
        ]
      },
      {
        title: "Advanced React Native",
        lessons: [
          { title: "State Management with Redux", duration: "50:10" },
          { title: "Native Modules and APIs", duration: "40:30" },
          { title: "Networking and Data Fetching", duration: "35:15" },
          { title: "Publishing to App Stores", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Build cross-platform mobile apps with React Native",
      "Create responsive layouts using Flexbox",
      "Implement navigation between screens",
      "Connect to REST APIs and manage app state",
      "Use native device features like camera and location",
      "Deploy apps to Google Play Store and Apple App Store"
    ]
  },
  {
    id: "linux-administration",
    title: "Linux Administration Bootcamp",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 79.99,
    category: "IT & Security",
    level: "intermediate",
    description: "Master Linux administration from the command line to system management. This course covers Linux installation, file systems, user management, services, networking, and security.",
    shortDescription: "Become a Linux administrator with hands-on training",
    image: "https://images.unsplash.com/photo-1629654291663-b91ad427698f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    rating: 4.8,
    reviewCount: 1458,
    students: 17523,
    duration: "32h 30m",
    updatedAt: "2023-10-10",
    curriculum: [
      {
        title: "Linux Fundamentals",
        lessons: [
          { title: "Introduction to Linux", duration: "25:30", isPreview: true },
          { title: "Linux Installation and Setup", duration: "30:45" },
          { title: "Command Line Basics", duration: "35:20" }
        ]
      },
      {
        title: "System Administration",
        lessons: [
          { title: "File System Management", duration: "40:15" },
          { title: "User and Group Administration", duration: "35:30" },
          { title: "Process Management", duration: "30:45" },
          { title: "Package Management", duration: "25:20" }
        ]
      },
      {
        title: "Networking and Security",
        lessons: [
          { title: "Linux Networking", duration: "45:10" },
          { title: "Setting Up Services", duration: "50:30" },
          { title: "Security Fundamentals", duration: "40:15" },
          { title: "System Monitoring and Troubleshooting", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Administer Linux systems from the command line",
      "Manage users, groups, and permissions",
      "Configure networking and essential services",
      "Implement security best practices",
      "Automate tasks with shell scripting",
      "Perform system monitoring and troubleshooting"
    ]
  },
  {
    id: "mongodb-masterclass",
    title: "MongoDB - The Complete Developer's Guide",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 79.99,
    category: "Database",
    level: "intermediate",
    description: "Master MongoDB database development. This course covers MongoDB concepts, CRUD operations, indexes, aggregation, performance optimization, and integration with various programming languages.",
    shortDescription: "Learn MongoDB and build scalable NoSQL database applications",
    image: "https://images.unsplash.com/photo-1569012871812-f38ee64cd54c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1254,
    students: 16547,
    duration: "25h 45m",
    updatedAt: "2023-09-28",
    curriculum: [
      {
        title: "MongoDB Basics",
        lessons: [
          { title: "Introduction to MongoDB and NoSQL", duration: "20:30", isPreview: true },
          { title: "MongoDB Atlas Setup", duration: "15:45" },
          { title: "MongoDB Shell and Compass", duration: "25:20" }
        ]
      },
      {
        title: "Working with MongoDB",
        lessons: [
          { title: "CRUD Operations", duration: "35:15" },
          { title: "Query Operators", duration: "30:30" },
          { title: "Indexes and Performance", duration: "40:45" },
          { title: "Schema Design", duration: "35:20" }
        ]
      },
      {
        title: "Advanced MongoDB",
        lessons: [
          { title: "Aggregation Framework", duration: "45:10" },
          { title: "MongoDB and Node.js", duration: "40:30" },
          { title: "Transactions and Data Consistency", duration: "35:15" },
          { title: "Deployment and Security", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand MongoDB concepts and architecture",
      "Perform CRUD operations in MongoDB",
      "Design efficient schemas for various use cases",
      "Create and optimize indexes for better performance",
      "Use the aggregation framework for data analysis",
      "Integrate MongoDB with application code"
    ]
  },
  {
    id: "nutrition-fundamentals",
    title: "Nutrition Fundamentals",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 64.99,
    category: "Health & Fitness",
    level: "beginner",
    description: "Learn the fundamentals of nutrition science. This course covers macronutrients, micronutrients, metabolism, diet planning, and practical nutrition applications for health and wellness.",
    shortDescription: "Understand the science of nutrition for better health",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
    rating: 4.8,
    reviewCount: 2154,
    students: 28965,
    duration: "20h 15m",
    updatedAt: "2023-10-05",
    curriculum: [
      {
        title: "Nutrition Science Basics",
        lessons: [
          { title: "Introduction to Nutrition", duration: "15:30", isPreview: true },
          { title: "Digestive System and Metabolism", duration: "25:45" },
          { title: "Energy Balance and Weight Management", duration: "30:20" }
        ]
      },
      {
        title: "Macronutrients and Micronutrients",
        lessons: [
          { title: "Carbohydrates", duration: "20:15" },
          { title: "Proteins", duration: "25:30" },
          { title: "Fats", duration: "20:45" },
          { title: "Vitamins and Minerals", duration: "35:20" }
        ]
      },
      {
        title: "Practical Nutrition",
        lessons: [
          { title: "Meal Planning and Preparation", duration: "30:10" },
          { title: "Reading Food Labels", duration: "15:30" },
          { title: "Nutrition for Different Life Stages", duration: "25:15" },
          { title: "Common Diet Patterns and Their Effects", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the fundamentals of nutrition science",
      "Identify the roles of different nutrients in the body",
      "Design balanced meal plans for various needs",
      "Make informed food choices based on nutritional content",
      "Apply nutrition principles to support health goals",
      "Evaluate dietary patterns and trends with a scientific perspective"
    ]
  },
  {
    id: "french-beginners",
    title: "French for Beginners",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 69.99,
    category: "Languages",
    level: "beginner",
    description: "Learn French from scratch with this comprehensive beginner's course. Master pronunciation, essential vocabulary, grammar, and basic conversation skills for everyday situations.",
    shortDescription: "Start speaking French with confidence from day one",
    image: "https://images.unsplash.com/photo-1505048492-4599b7a3eb73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    rating: 4.8,
    reviewCount: 2158,
    students: 28945,
    duration: "30h 30m",
    updatedAt: "2023-09-15",
    curriculum: [
      {
        title: "Getting Started with French",
        lessons: [
          { title: "French Alphabet and Pronunciation", duration: "20:30", isPreview: true },
          { title: "Greetings and Introductions", duration: "25:45" },
          { title: "Numbers and Basic Expressions", duration: "15:20" }
        ]
      },
      {
        title: "Essential Grammar and Vocabulary",
        lessons: [
          { title: "Articles and Nouns", duration: "30:15" },
          { title: "Present Tense Verbs", duration: "35:30" },
          { title: "Adjectives and Descriptions", duration: "25:45" },
          { title: "Question Words and Asking Questions", duration: "20:20" }
        ]
      },
      {
        title: "Practical Conversations",
        lessons: [
          { title: "Ordering Food and Drinks", duration: "25:10" },
          { title: "Shopping and Numbers", duration: "30:30" },
          { title: "Directions and Transportation", duration: "25:15" },
          { title: "Talking About Yourself and Others", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Speak French with proper pronunciation",
      "Understand and use everyday expressions and phrases",
      "Hold basic conversations in French",
      "Apply fundamental grammar rules correctly",
      "Read and write simple French texts",
      "Navigate common situations while traveling in French-speaking countries"
    ]
  },
  {
    id: "guitar-basics",
    title: "Guitar Basics for Beginners",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 0,
    category: "Music",
    level: "beginner",
    description: "Learn to play guitar from scratch. This course covers guitar basics, chords, strumming patterns, reading tablature, and playing simple songs for complete beginners.",
    shortDescription: "Start playing the guitar with easy-to-follow lessons",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1112&q=80",
    rating: 4.7,
    reviewCount: 3254,
    students: 45896,
    duration: "18h 45m",
    updatedAt: "2023-10-10",
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Guitar Anatomy and Tuning", duration: "15:30", isPreview: true },
          { title: "Proper Posture and Hand Position", duration: "20:45" },
          { title: "Reading Chord Charts and Tablature", duration: "25:20" }
        ]
      },
      {
        title: "Basic Chords and Techniques",
        lessons: [
          { title: "First Chords: A, D, and E", duration: "30:15" },
          { title: "Basic Strumming Patterns", duration: "25:30" },
          { title: "Chord Transitions", duration: "35:45" },
          { title: "Adding G, C, and Am Chords", duration: "30:20" }
        ]
      },
      {
        title: "Playing Songs",
        lessons: [
          { title: "Your First Songs with 2 Chords", duration: "25:10" },
          { title: "3-Chord Songs Everyone Knows", duration: "35:30" },
          { title: "Basic Fingerpicking", duration: "30:15" },
          { title: "Next Steps for Guitar Growth", duration: "20:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Play basic guitar chords with proper technique",
      "Perform common strumming patterns",
      "Transition smoothly between chords",
      "Read chord charts and guitar tablature",
      "Play simple songs from start to finish",
      "Develop a practice routine for continued improvement"
    ]
  },
  {
    id: "adobe-illustrator",
    title: "Adobe Illustrator: From Beginner to Advanced",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 84.99,
    category: "Design",
    level: "beginner",
    description: "Master Adobe Illustrator from the ground up. This course covers the complete workflow from basic tools to advanced illustration techniques, typography, and vector graphics.",
    shortDescription: "Create stunning vector graphics and illustrations with Adobe Illustrator",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.8,
    reviewCount: 1854,
    students: 22456,
    duration: "28h 30m",
    updatedAt: "2023-10-18",
    curriculum: [
      {
        title: "Illustrator Basics",
        lessons: [
          { title: "Introduction to Illustrator Interface", duration: "20:30", isPreview: true },
          { title: "Selection and Artboards", duration: "25:45" },
          { title: "Basic Shapes and the Pen Tool", duration: "35:20" }
        ]
      },
      {
        title: "Vector Graphics Techniques",
        lessons: [
          { title: "Working with Paths and Anchor Points", duration: "40:15" },
          { title: "Color and Gradients", duration: "30:30" },
          { title: "Type and Typography", duration: "35:45" },
          { title: "Layers and Organization", duration: "25:20" }
        ]
      },
      {
        title: "Advanced Illustration",
        lessons: [
          { title: "Advanced Pen Tool Techniques", duration: "45:10" },
          { title: "Creating Complex Illustrations", duration: "50:30" },
          { title: "Effects and Appearance", duration: "40:15" },
          { title: "Preparing Files for Print and Web", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Navigate the Adobe Illustrator interface with confidence",
      "Create and manipulate vector graphics using essential tools",
      "Master the pen tool for precise path creation",
      "Work with typography and text effects",
      "Create complex illustrations using advanced techniques",
      "Prepare designs for different output formats"
    ]
  },
  {
    id: "trading-fundamentals",
    title: "Stock Trading Fundamentals",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 89.99,
    category: "Finance",
    level: "beginner",
    description: "Learn the fundamentals of stock trading and investing. This course covers market basics, technical and fundamental analysis, portfolio management, and trading strategies.",
    shortDescription: "Start trading stocks with confidence and a solid strategy",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1458,
    students: 19854,
    duration: "24h 45m",
    updatedAt: "2023-10-05",
    curriculum: [
      {
        title: "Stock Market Basics",
        lessons: [
          { title: "Introduction to Stock Markets", duration: "25:30", isPreview: true },
          { title: "Types of Securities and Orders", duration: "30:45" },
          { title: "Understanding Stock Prices and Indexes", duration: "20:20" }
        ]
      },
      {
        title: "Analysis Techniques",
        lessons: [
          { title: "Fundamental Analysis", duration: "35:15" },
          { title: "Technical Analysis Basics", duration: "40:30" },
          { title: "Chart Patterns and Indicators", duration: "45:45" },
          { title: "Market Psychology", duration: "30:20" }
        ]
      },
      {
        title: "Trading Strategies and Risk Management",
        lessons: [
          { title: "Developing a Trading Plan", duration: "25:10" },
          { title: "Risk Management Principles", duration: "30:30" },
          { title: "Common Trading Strategies", duration: "35:15" },
          { title: "Building and Managing a Portfolio", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand how stock markets work",
      "Analyze stocks using fundamental and technical analysis",
      "Develop a personalized trading plan and strategy",
      "Manage risk effectively to protect capital",
      "Build and manage a diversified portfolio",
      "Make informed investment decisions"
    ]
  },
  {
    id: "swift-ios-development",
    title: "iOS Development with Swift",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 94.99,
    category: "Mobile Development",
    level: "intermediate",
    description: "Learn iOS app development using Swift. This comprehensive course covers Swift programming, UIKit, SwiftUI, networking, data persistence, and publishing to the App Store.",
    shortDescription: "Create professional iOS apps with Swift and publish to the App Store",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1745,
    students: 19852,
    duration: "35h 30m",
    updatedAt: "2023-11-10",
    isFeatured: true,
    curriculum: [
      {
        title: "Swift Programming",
        lessons: [
          { title: "Introduction to Swift", duration: "25:30", isPreview: true },
          { title: "Swift Syntax and Basics", duration: "30:45" },
          { title: "Object-Oriented Programming with Swift", duration: "35:20" }
        ]
      },
      {
        title: "iOS Development Fundamentals",
        lessons: [
          { title: "UIKit Essentials", duration: "45:15" },
          { title: "View Controllers and Navigation", duration: "40:30" },
          { title: "Table Views and Collection Views", duration: "35:45" },
          { title: "Introduction to SwiftUI", duration: "50:20" }
        ]
      },
      {
        title: "Advanced iOS Development",
        lessons: [
          { title: "Networking and API Integration", duration: "45:10" },
          { title: "Data Persistence with Core Data", duration: "40:30" },
          { title: "Working with Maps and Location", duration: "35:15" },
          { title: "App Store Submission Process", duration: "30:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write clean and efficient Swift code",
      "Build iOS apps with UIKit and SwiftUI",
      "Implement network operations and API integration",
      "Store and retrieve data with Core Data",
      "Add maps and location functionality to apps",
      "Publish iOS applications to the App Store"
    ]
  }
];
