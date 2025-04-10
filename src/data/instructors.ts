
import { Instructor } from './types';

export const instructors: Instructor[] = [
  {
    id: "sarah-johnson",
    name: "Sarah Johnson",
    bio: "Sarah is a software engineer with over 10 years of experience in web development. She specializes in React and modern JavaScript frameworks. Previously, she worked at Google and Facebook, where she contributed to major frontend projects. Sarah is passionate about teaching and has helped thousands of students master React development.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    expertise: ["React", "JavaScript", "Web Development", "Redux", "Front-end Architecture"],
    rating: 4.8,
    reviewCount: 5820,
    coursesCount: 5,
    studentsCount: 45000,
    social: {
      website: "https://sarahjohnson.example.com",
      twitter: "sarahjcoder",
      linkedin: "sarahjohnson",
      github: "sarahjcoder"
    }
  },
  {
    id: "michael-chen",
    name: "Michael Chen",
    bio: "Michael is a data scientist and machine learning engineer with expertise in Python, TensorFlow, and PyTorch. He holds a Ph.D. in Computer Science from MIT and has published several research papers on deep learning. Michael has worked at leading AI research labs and is dedicated to making complex data science concepts accessible to everyone.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    expertise: ["Python", "Machine Learning", "Data Science", "TensorFlow", "Deep Learning"],
    rating: 4.9,
    reviewCount: 4250,
    coursesCount: 3,
    studentsCount: 38000,
    social: {
      website: "https://michaelchen.example.com",
      twitter: "michaelchen_ai",
      linkedin: "michaelchenai",
      github: "michaelchen"
    }
  },
  {
    id: "james-wilson",
    name: "James Wilson",
    bio: "James is a full stack developer and software architect with expertise in JavaScript, Node.js, and cloud technologies. He has built dozens of production applications and has consulted for startups and enterprises alike. James is known for his practical teaching style and focus on real-world coding skills.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    expertise: ["JavaScript", "Node.js", "Express", "MongoDB", "Full Stack Development"],
    rating: 4.7,
    reviewCount: 6150,
    coursesCount: 7,
    studentsCount: 62000,
    social: {
      website: "https://jameswilson.example.com",
      twitter: "jameswdev",
      linkedin: "jameswilson",
      github: "jameswdev"
    }
  },
  {
    id: "emily-rodriguez",
    name: "Emily Rodriguez",
    bio: "Emily is a UI/UX designer and creative director with over 8 years of experience working with major brands. She has a background in graphic design and user psychology, allowing her to create beautiful and functional interfaces. Emily has led design teams at several startups and now focuses on teaching design principles and tools.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
    expertise: ["UI/UX Design", "Figma", "Adobe XD", "User Research", "Design Systems"],
    rating: 4.8,
    reviewCount: 3680,
    coursesCount: 4,
    studentsCount: 32000,
    social: {
      website: "https://emilyrodriguez.example.com",
      twitter: "emilydesigns",
      linkedin: "emilyrodriguez",
      github: "emilydesigns"
    }
  },
  {
    id: "david-thompson",
    name: "David Thompson",
    bio: "David is a cloud architect and DevOps specialist with certifications in AWS, Azure, and Google Cloud. He has helped numerous companies migrate to the cloud and implement efficient CI/CD pipelines. With 12 years of experience in IT infrastructure, David provides practical insights into modern cloud solutions.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    expertise: ["AWS", "Cloud Architecture", "DevOps", "Docker", "Kubernetes"],
    rating: 4.7,
    reviewCount: 2980,
    coursesCount: 6,
    studentsCount: 28000,
    social: {
      website: "https://davidthompson.example.com",
      twitter: "davidcloud",
      linkedin: "davidthompson",
      github: "davidcloud"
    }
  },
  {
    id: "jessica-parker",
    name: "Jessica Parker",
    bio: "Jessica is a digital marketing expert with experience leading marketing teams at tech companies and agencies. She specializes in SEO, content marketing, and social media strategy. Jessica has helped businesses of all sizes grow their online presence and has a talent for explaining complex marketing concepts simply.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
    expertise: ["Digital Marketing", "SEO", "Content Strategy", "Social Media", "Analytics"],
    rating: 4.6,
    reviewCount: 4120,
    coursesCount: 5,
    studentsCount: 45000,
    social: {
      website: "https://jessicaparker.example.com",
      twitter: "jessicamarketing",
      linkedin: "jessicaparker",
      github: ""
    }
  },
  {
    id: "ryan-kim",
    name: "Ryan Kim",
    bio: "Ryan is a mobile app developer specializing in cross-platform development with Flutter and React Native. He has built and published over 20 apps to the App Store and Google Play. Ryan previously worked as a lead mobile developer at several tech startups and now shares his expertise through his courses.",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    expertise: ["Flutter", "React Native", "iOS Development", "Android Development", "Mobile UX"],
    rating: 4.7,
    reviewCount: 2850,
    coursesCount: 4,
    studentsCount: 25000,
    social: {
      website: "https://ryankim.example.com",
      twitter: "ryankimdev",
      linkedin: "ryankim",
      github: "ryankimdev"
    }
  }
];

export default instructors;
