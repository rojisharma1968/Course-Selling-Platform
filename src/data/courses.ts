
import { Course } from './types';
import { additionalCourses } from './additional-courses';

export const courses: Course[] = [
  {
    id: "react-complete",
    title: "React - The Complete Guide",
    instructor: "Sarah Johnson",
    instructorId: "sarah-johnson",
    price: 89.99,
    category: "Web Development",
    level: "beginner",
    description: "Learn React from the ground up and become an expert React developer. This comprehensive course covers everything from React basics to advanced concepts like Redux, React Router, and React Hooks.",
    shortDescription: "Master modern React development with hooks, context API, and more",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 4582,
    students: 38745,
    duration: "32h 45m",
    updatedAt: "2023-10-15",
    isPopular: true,
    isFeatured: true,
    curriculum: [
      {
        title: "Getting Started",
        lessons: [
          { title: "Introduction to React", duration: "5:30", isPreview: true },
          { title: "Setting Up the Development Environment", duration: "10:15" },
          { title: "Your First React Component", duration: "15:45" }
        ]
      },
      {
        title: "React Fundamentals",
        lessons: [
          { title: "JSX Syntax", duration: "12:20" },
          { title: "Props and State", duration: "18:30" },
          { title: "Component Lifecycle", duration: "14:15" },
          { title: "Handling Events", duration: "9:45" }
        ]
      },
      {
        title: "Advanced React",
        lessons: [
          { title: "Hooks in Depth", duration: "25:10" },
          { title: "Context API", duration: "20:30" },
          { title: "React Router", duration: "22:15" },
          { title: "Performance Optimization", duration: "17:45" }
        ]
      }
    ],
    learningOutcomes: [
      "Build powerful, fast, user-friendly and reactive web apps",
      "Apply for high-paid jobs or work as a freelance developer",
      "Understand the React ecosystem including Hooks, Redux, and Router",
      "Learn all about React Hooks and React Components",
      "Implement Authentication in React apps",
      "Create Single Page Applications with React"
    ]
  },
  {
    id: "python-data-science",
    title: "Python for Data Science and Machine Learning",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 94.99,
    category: "Data Science",
    level: "intermediate",
    description: "Learn how to use Python for Data Science and Machine Learning. This course covers NumPy, Pandas, Seaborn, Matplotlib, Plotly, Scikit-Learn, Machine Learning, Tensorflow, and more!",
    shortDescription: "Comprehensive Python programming for data analysis and machine learning",
    image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    rating: 4.7,
    reviewCount: 3854,
    students: 42369,
    duration: "41h 30m",
    updatedAt: "2023-11-02",
    isPopular: true,
    curriculum: [
      {
        title: "Python Crash Course",
        lessons: [
          { title: "Python Basics", duration: "15:30", isPreview: true },
          { title: "Python Data Structures", duration: "20:45" },
          { title: "Python Functions and Methods", duration: "18:20" }
        ]
      },
      {
        title: "Data Analysis with Pandas",
        lessons: [
          { title: "Introduction to Pandas", duration: "22:15" },
          { title: "Data Cleaning and Preparation", duration: "25:30" },
          { title: "Exploratory Data Analysis", duration: "28:45" },
          { title: "Visualization with Pandas", duration: "19:20" }
        ]
      },
      {
        title: "Machine Learning with Scikit-Learn",
        lessons: [
          { title: "Supervised Learning Algorithms", duration: "35:10" },
          { title: "Unsupervised Learning", duration: "28:30" },
          { title: "Model Evaluation and Improvement", duration: "24:15" },
          { title: "Building ML Pipelines", duration: "29:45" }
        ]
      }
    ],
    learningOutcomes: [
      "Use Python for Data Science and Machine Learning",
      "Implement Machine Learning Algorithms",
      "Learn how to use NumPy for Numerical Data",
      "Use Pandas for Data Analysis",
      "Use Matplotlib and Seaborn for data visualizations",
      "Use Scikit-Learn for Machine Learning Tasks",
      "Build a Machine Learning portfolio"
    ]
  },
  {
    id: "javascript-modern",
    title: "The Complete JavaScript Course",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 79.99,
    category: "Web Development",
    level: "beginner",
    description: "The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!",
    shortDescription: "From zero to hero with the most complete JavaScript course on the market",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    rating: 4.9,
    reviewCount: 5782,
    students: 52147,
    duration: "69h 15m",
    updatedAt: "2023-09-20",
    isPopular: true,
    isFeatured: true,
    curriculum: [
      {
        title: "JavaScript Fundamentals",
        lessons: [
          { title: "Welcome and First Steps", duration: "10:30", isPreview: true },
          { title: "JavaScript Fundamentals - Part 1", duration: "65:45" },
          { title: "JavaScript Fundamentals - Part 2", duration: "75:20" }
        ]
      },
      {
        title: "Developer Skills",
        lessons: [
          { title: "Developer Skills & Editor Setup", duration: "45:15" },
          { title: "HTML & CSS Crash Course", duration: "60:30" },
          { title: "JavaScript in the Browser: DOM Manipulation", duration: "85:45" }
        ]
      },
      {
        title: "Modern JavaScript",
        lessons: [
          { title: "Modern JavaScript Development", duration: "55:10" },
          { title: "Asynchronous JavaScript", duration: "95:30" },
          { title: "Modern JavaScript Applications", duration: "85:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Become job-ready with real-world projects and workflows",
      "Learn modern JavaScript from the beginning",
      "Build beautiful websites, apps and APIs with JavaScript",
      "Practice your skills with coding challenges and exercises",
      "Understand how JavaScript works behind the scenes",
      "Complex concepts like the 'this' keyword, function constructors, and prototypal inheritance"
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design Masterclass",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 69.99,
    category: "Design",
    level: "beginner",
    description: "Learn UI/UX design from scratch. This course covers everything from design principles, wireframing, prototyping, to user testing and handoff to developers.",
    shortDescription: "Create stunning user interfaces and experiences for web and mobile apps",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    reviewCount: 2854,
    students: 29741,
    duration: "28h 45m",
    updatedAt: "2023-10-28",
    isFeatured: true,
    curriculum: [
      {
        title: "Introduction to UI/UX Design",
        lessons: [
          { title: "What is UI/UX Design?", duration: "10:30", isPreview: true },
          { title: "Design Principles", duration: "15:45" },
          { title: "The Design Process", duration: "12:20" }
        ]
      },
      {
        title: "Wireframing and Prototyping",
        lessons: [
          { title: "Sketching and Wireframing", duration: "18:15" },
          { title: "Introduction to Figma", duration: "25:30" },
          { title: "Creating Interactive Prototypes", duration: "30:45" },
          { title: "Design Systems", duration: "22:20" }
        ]
      },
      {
        title: "User Testing and Handoff",
        lessons: [
          { title: "User Testing Methods", duration: "20:10" },
          { title: "Analyzing User Feedback", duration: "15:30" },
          { title: "Design Handoff to Developers", duration: "25:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the fundamentals of UI/UX design",
      "Create wireframes and prototypes using Figma",
      "Conduct user research and usability testing",
      "Design responsive interfaces for web and mobile",
      "Create a design system for consistent experiences",
      "Prepare designs for handoff to development teams",
      "Build a professional UI/UX portfolio"
    ]
  },
  {
    id: "aws-certified",
    title: "AWS Certified Solutions Architect",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 129.99,
    category: "Cloud Computing",
    level: "advanced",
    description: "Prepare for the AWS Certified Solutions Architect - Associate exam. Learn how to design and deploy scalable, highly available, and fault-tolerant systems on AWS.",
    shortDescription: "Master AWS services and pass the Solutions Architect certification exam",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 1985,
    students: 18452,
    duration: "35h 30m",
    updatedAt: "2023-11-10",
    curriculum: [
      {
        title: "Introduction to AWS",
        lessons: [
          { title: "AWS Global Infrastructure", duration: "15:30", isPreview: true },
          { title: "AWS Identity and Access Management (IAM)", duration: "20:45" },
          { title: "AWS Security", duration: "25:20" }
        ]
      },
      {
        title: "Compute and Storage",
        lessons: [
          { title: "Amazon EC2", duration: "35:15" },
          { title: "Amazon S3", duration: "30:30" },
          { title: "Amazon RDS", duration: "25:45" },
          { title: "Amazon DynamoDB", duration: "20:20" }
        ]
      },
      {
        title: "Networking and Architecture",
        lessons: [
          { title: "Amazon VPC", duration: "40:10" },
          { title: "High Availability and Scalability", duration: "35:30" },
          { title: "Serverless Architecture", duration: "30:15" },
          { title: "Practice Exam", duration: "60:00" }
        ]
      }
    ],
    learningOutcomes: [
      "Pass the AWS Certified Solutions Architect - Associate exam",
      "Design highly available, cost-efficient, and scalable systems on AWS",
      "Implement and deploy applications on Amazon Web Services",
      "Configure security services and manage AWS resources efficiently",
      "Master core AWS services such as EC2, S3, RDS, and IAM",
      "Understand AWS best practices for architecture and security"
    ]
  },
  {
    id: "flutter-bootcamp",
    title: "Flutter & Dart - The Complete App Development Bootcamp",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 99.99,
    category: "Mobile Development",
    level: "intermediate",
    description: "Learn Flutter and Dart from scratch. Build iOS and Android apps with a single codebase. Includes state management, Firebase integration, and more.",
    shortDescription: "Build iOS and Android apps with Google's latest technology",
    image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    rating: 4.7,
    reviewCount: 1854,
    students: 22369,
    duration: "28h 45m",
    updatedAt: "2023-10-25",
    curriculum: [
      {
        title: "Getting Started with Flutter",
        lessons: [
          { title: "Introduction to Flutter", duration: "15:30", isPreview: true },
          { title: "Dart Crash Course", duration: "25:45" },
          { title: "Setting Up Your Environment", duration: "20:20" }
        ]
      },
      {
        title: "Building UI with Flutter",
        lessons: [
          { title: "Widgets and Layout", duration: "35:15" },
          { title: "Handling User Input", duration: "30:30" },
          { title: "Navigation and Routes", duration: "25:45" },
          { title: "Animations", duration: "40:20" }
        ]
      },
      {
        title: "Advanced Flutter",
        lessons: [
          { title: "State Management with Provider", duration: "45:10" },
          { title: "Firebase Integration", duration: "50:30" },
          { title: "Building and Publishing Your App", duration: "30:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Build fully-fledged apps for both iOS and Android",
      "Work with Flutter SDK and Dart programming language",
      "Create elegant user interfaces using Flutter widgets",
      "Implement state management using Provider and Riverpod",
      "Integrate Firebase for authentication and cloud storage",
      "Publish your apps to the Google Play Store and Apple App Store"
    ]
  },
  {
    id: "graphic-design-essentials",
    title: "Graphic Design Essentials",
    instructor: "Emily Rodriguez",
    instructorId: "emily-rodriguez",
    price: 0,
    category: "Design",
    level: "beginner",
    description: "Learn the fundamental principles of graphic design. This course covers color theory, typography, layout design, branding, and introduces Adobe Creative Suite tools.",
    shortDescription: "Master the core principles of graphic design and start creating stunning visuals",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    rating: 4.5,
    reviewCount: 2154,
    students: 35741,
    duration: "18h 30m",
    updatedAt: "2023-08-15",
    curriculum: [
      {
        title: "Introduction to Graphic Design",
        lessons: [
          { title: "What is Graphic Design?", duration: "10:30", isPreview: true },
          { title: "Elements of Design", duration: "15:45" },
          { title: "Principles of Design", duration: "20:20" }
        ]
      },
      {
        title: "Color and Typography",
        lessons: [
          { title: "Color Theory", duration: "25:15" },
          { title: "Typography Basics", duration: "20:30" },
          { title: "Combining Fonts", duration: "15:45" }
        ]
      },
      {
        title: "Tools and Applications",
        lessons: [
          { title: "Introduction to Adobe Photoshop", duration: "30:10" },
          { title: "Introduction to Adobe Illustrator", duration: "35:30" },
          { title: "Creating a Basic Project", duration: "40:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the core principles of graphic design",
      "Create visually appealing designs using proper color theory",
      "Work with typography effectively in various design contexts",
      "Navigate the basic functions of Adobe Photoshop and Illustrator",
      "Design logos, posters, and other common graphic design assets",
      "Develop a basic graphic design portfolio"
    ]
  },
  {
    id: "nodejs-masterclass",
    title: "Node.js API Masterclass",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 89.99,
    category: "Web Development",
    level: "intermediate",
    description: "Build an extensive, RESTful API using Node.js, Express, MongoDB. Includes authentication, authorization, advanced query functionality, and more.",
    shortDescription: "Create secure and powerful backend systems with Node.js and Express",
    image: "https://images.unsplash.com/photo-1627163439134-7a8c47e08208?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    rating: 4.8,
    reviewCount: 1582,
    students: 18456,
    duration: "35h 15m",
    updatedAt: "2023-11-05",
    isFeatured: true,
    curriculum: [
      {
        title: "Node.js Fundamentals",
        lessons: [
          { title: "Introduction to Node.js", duration: "15:30", isPreview: true },
          { title: "Core Modules and NPM", duration: "20:45" },
          { title: "Asynchronous Programming in Node.js", duration: "25:20" }
        ]
      },
      {
        title: "Building RESTful APIs with Express",
        lessons: [
          { title: "Introduction to Express", duration: "20:15" },
          { title: "Routes and Middleware", duration: "25:30" },
          { title: "MongoDB Integration", duration: "30:45" },
          { title: "Creating CRUD Operations", duration: "35:20" }
        ]
      },
      {
        title: "API Security and Deployment",
        lessons: [
          { title: "Authentication with JWT", duration: "40:10" },
          { title: "Authorization and User Roles", duration: "30:30" },
          { title: "API Security Best Practices", duration: "25:15" },
          { title: "Deployment to Heroku", duration: "20:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Build a complete API with Node.js, Express, and MongoDB",
      "Implement authentication with JWT (JSON Web Tokens)",
      "Create advanced filtering, sorting, and pagination",
      "Implement proper error handling and data validation",
      "Deploy your API to production with Heroku",
      "Write clean, maintainable Node.js code"
    ]
  },
  {
    id: "excel-data-analysis",
    title: "Excel for Data Analysis and Visualization",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 0,
    category: "Data Science",
    level: "beginner",
    description: "Learn how to use Excel for data analysis and visualization. This course covers everything from basic Excel functions to advanced data analysis tools like PivotTables, VLOOKUP, and Power Query.",
    shortDescription: "Become an Excel power user for data analysis without programming",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
    rating: 4.6,
    reviewCount: 2854,
    students: 42369,
    duration: "22h 30m",
    updatedAt: "2023-09-22",
    curriculum: [
      {
        title: "Excel Basics",
        lessons: [
          { title: "Excel Interface and Navigation", duration: "10:30", isPreview: true },
          { title: "Basic Formulas and Functions", duration: "15:45" },
          { title: "Formatting and Conditional Formatting", duration: "12:20" }
        ]
      },
      {
        title: "Data Analysis Techniques",
        lessons: [
          { title: "Data Sorting and Filtering", duration: "20:15" },
          { title: "VLOOKUP and Other Lookup Functions", duration: "25:30" },
          { title: "PivotTables and PivotCharts", duration: "30:45" },
          { title: "What-If Analysis", duration: "15:20" }
        ]
      },
      {
        title: "Advanced Excel Features",
        lessons: [
          { title: "Power Query for Data Cleaning", duration: "35:10" },
          { title: "Creating Dashboards in Excel", duration: "40:30" },
          { title: "Macros and VBA Introduction", duration: "30:15" }
        ]
      }
    ],
    learningOutcomes: [
      "Analyze large datasets efficiently with Excel",
      "Create dynamic reports using PivotTables and PivotCharts",
      "Use lookup functions to retrieve data from large datasets",
      "Clean and transform data with Power Query",
      "Build interactive dashboards for data visualization",
      "Automate repetitive tasks with simple macros",
      "Make data-driven decisions using Excel's analytical tools"
    ]
  },
  {
    id: "machine-learning-bootcamp",
    title: "Machine Learning Bootcamp",
    instructor: "Michael Chen",
    instructorId: "michael-chen",
    price: 129.99,
    category: "Data Science",
    level: "advanced",
    description: "A complete machine learning bootcamp covering supervised and unsupervised learning algorithms, deep learning with TensorFlow and PyTorch, and real-world projects.",
    shortDescription: "Master the art and science of machine learning from theory to implementation",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.9,
    reviewCount: 1254,
    students: 15897,
    duration: "45h 45m",
    updatedAt: "2023-11-15",
    isPopular: true,
    curriculum: [
      {
        title: "Machine Learning Fundamentals",
        lessons: [
          { title: "Introduction to Machine Learning", duration: "20:30", isPreview: true },
          { title: "Linear Regression", duration: "30:45" },
          { title: "Logistic Regression", duration: "25:20" },
          { title: "Decision Trees and Random Forests", duration: "35:15" }
        ]
      },
      {
        title: "Advanced Machine Learning",
        lessons: [
          { title: "Support Vector Machines", duration: "30:15" },
          { title: "K-Means Clustering", duration: "25:30" },
          { title: "Principal Component Analysis", duration: "30:45" },
          { title: "Natural Language Processing", duration: "40:20" }
        ]
      },
      {
        title: "Deep Learning",
        lessons: [
          { title: "Neural Networks Fundamentals", duration: "45:10" },
          { title: "TensorFlow and Keras", duration: "50:30" },
          { title: "Convolutional Neural Networks", duration: "55:15" },
          { title: "Recurrent Neural Networks", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the mathematics behind major machine learning algorithms",
      "Build and train supervised learning models for prediction tasks",
      "Implement unsupervised learning models for pattern discovery",
      "Create deep learning models with TensorFlow and PyTorch",
      "Apply machine learning to real-world datasets and problems",
      "Deploy machine learning models to production environments",
      "Participate in data science competitions like Kaggle"
    ]
  },
  {
    id: "full-stack-javascript",
    title: "Full Stack JavaScript Developer",
    instructor: "James Wilson",
    instructorId: "james-wilson",
    price: 119.99,
    category: "Web Development",
    level: "intermediate",
    description: "Become a full stack JavaScript developer by mastering React, Node.js, Express, and MongoDB. Build complete web applications from front to back.",
    shortDescription: "Master frontend and backend development with JavaScript technologies",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.8,
    reviewCount: 2154,
    students: 25369,
    duration: "48h 30m",
    updatedAt: "2023-10-18",
    isFeatured: true,
    curriculum: [
      {
        title: "Frontend Development with React",
        lessons: [
          { title: "React Fundamentals", duration: "25:30", isPreview: true },
          { title: "React Hooks", duration: "30:45" },
          { title: "State Management with Redux", duration: "35:20" },
          { title: "Routing with React Router", duration: "20:15" }
        ]
      },
      {
        title: "Backend Development with Node.js",
        lessons: [
          { title: "Node.js Fundamentals", duration: "30:15" },
          { title: "Express.js Framework", duration: "35:30" },
          { title: "REST API Development", duration: "40:45" },
          { title: "MongoDB and Mongoose", duration: "45:20" }
        ]
      },
      {
        title: "Full Stack Integration",
        lessons: [
          { title: "Authentication with JWT", duration: "35:10" },
          { title: "Connecting Frontend and Backend", duration: "30:30" },
          { title: "Deployment with Heroku", duration: "25:15" },
          { title: "Real-Time Applications with Socket.io", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Build complete web applications using JavaScript from front to back",
      "Develop responsive and interactive UIs with React",
      "Create RESTful APIs with Node.js and Express",
      "Design and implement MongoDB database schemas",
      "Implement user authentication and authorization",
      "Deploy full stack applications to cloud platforms",
      "Build real-time features with WebSockets"
    ]
  },
  {
    id: "product-management",
    title: "Product Management: Skills for Product Managers",
    instructor: "Jessica Parker",
    instructorId: "jessica-parker",
    price: 79.99,
    category: "Business",
    level: "intermediate",
    description: "Learn the essential skills needed to be a successful product manager. This course covers product lifecycle, user research, roadmap planning, agile methodologies, and stakeholder management.",
    shortDescription: "Develop core product management skills to lead successful products",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1854,
    students: 22147,
    duration: "32h 15m",
    updatedAt: "2023-09-28",
    curriculum: [
      {
        title: "Product Management Fundamentals",
        lessons: [
          { title: "Introduction to Product Management", duration: "15:30", isPreview: true },
          { title: "Product Development Lifecycle", duration: "20:45" },
          { title: "Product Manager Responsibilities", duration: "25:20" }
        ]
      },
      {
        title: "User Research and Product Strategy",
        lessons: [
          { title: "User Research Methods", duration: "30:15" },
          { title: "Creating User Personas", duration: "25:30" },
          { title: "Product Strategy and Vision", duration: "35:45" },
          { title: "Roadmap Planning", duration: "30:20" }
        ]
      },
      {
        title: "Execution and Management",
        lessons: [
          { title: "Agile Product Management", duration: "40:10" },
          { title: "Feature Prioritization", duration: "25:30" },
          { title: "Working with Development Teams", duration: "30:15" },
          { title: "Product Analytics and Metrics", duration: "35:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand the role and responsibilities of a product manager",
      "Conduct effective user research to inform product decisions",
      "Create compelling product visions and strategies",
      "Develop and maintain product roadmaps",
      "Prioritize features based on business value and user needs",
      "Apply agile methodologies to product development",
      "Measure product success with appropriate metrics"
    ]
  },
  {
    id: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    instructor: "David Thompson",
    instructorId: "david-thompson",
    price: 89.99,
    category: "IT & Security",
    level: "beginner",
    description: "Learn the fundamentals of cybersecurity, including network security, cryptography, security policies, threat detection, and ethical hacking basics.",
    shortDescription: "Build a solid foundation in cybersecurity concepts and practices",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.6,
    reviewCount: 1254,
    students: 18523,
    duration: "26h 45m",
    updatedAt: "2023-10-12",
    curriculum: [
      {
        title: "Cybersecurity Basics",
        lessons: [
          { title: "Introduction to Cybersecurity", duration: "15:30", isPreview: true },
          { title: "Cybersecurity Threats and Vulnerabilities", duration: "20:45" },
          { title: "Security Principles", duration: "25:20" }
        ]
      },
      {
        title: "Network and System Security",
        lessons: [
          { title: "Network Security Fundamentals", duration: "30:15" },
          { title: "Firewalls and VPNs", duration: "25:30" },
          { title: "System Hardening", duration: "20:45" },
          { title: "Malware Analysis", duration: "35:20" }
        ]
      },
      {
        title: "Security Tools and Practices",
        lessons: [
          { title: "Cryptography Basics", duration: "25:10" },
          { title: "Security Auditing", duration: "30:30" },
          { title: "Incident Response", duration: "35:15" },
          { title: "Ethical Hacking Introduction", duration: "40:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Understand common cybersecurity threats and vulnerabilities",
      "Implement basic security measures for networks and systems",
      "Apply cryptographic principles to protect data",
      "Conduct basic security assessments and audits",
      "Develop incident response plans",
      "Understand ethical hacking methodologies",
      "Stay updated with emerging cybersecurity trends"
    ]
  },
  {
    id: "ios-development-swift",
    title: "iOS Development with Swift",
    instructor: "Ryan Kim",
    instructorId: "ryan-kim",
    price: 109.99,
    category: "Mobile Development",
    level: "intermediate",
    description: "Learn iOS app development using Swift. This course covers Swift programming, UIKit, SwiftUI, Core Data, networking, and publishing to the App Store.",
    shortDescription: "Create beautiful iOS apps and publish them to the App Store",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    rating: 4.7,
    reviewCount: 1354,
    students: 16985,
    duration: "37h 30m",
    updatedAt: "2023-11-08",
    curriculum: [
      {
        title: "Swift Programming",
        lessons: [
          { title: "Introduction to Swift", duration: "20:30", isPreview: true },
          { title: "Swift Syntax and Basics", duration: "25:45" },
          { title: "Object-Oriented Programming in Swift", duration: "30:20" },
          { title: "Functional Programming in Swift", duration: "25:15" }
        ]
      },
      {
        title: "iOS App Development",
        lessons: [
          { title: "UIKit Fundamentals", duration: "35:15" },
          { title: "SwiftUI Introduction", duration: "40:30" },
          { title: "View Controllers and Navigation", duration: "30:45" },
          { title: "Working with Table Views", duration: "25:20" }
        ]
      },
      {
        title: "Advanced iOS Development",
        lessons: [
          { title: "Core Data and Persistence", duration: "35:10" },
          { title: "Networking and API Integration", duration: "30:30" },
          { title: "Authentication and User Management", duration: "25:15" },
          { title: "App Store Submission", duration: "20:30" }
        ]
      }
    ],
    learningOutcomes: [
      "Write clean and efficient Swift code",
      "Build iOS applications using UIKit and SwiftUI",
      "Implement persistent storage with Core Data",
      "Integrate RESTful APIs into iOS applications",
      "Implement user authentication and account management",
      "Debug and test iOS applications effectively",
      "Publish applications to the Apple App Store"
    ]
  }
];

// Add the additional courses to the existing courses array
export default [...courses, ...additionalCourses];
