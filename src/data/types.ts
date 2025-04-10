
export interface Course {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  price: number;
  category: string;
  level: 'beginner' | 'intermediate' | 'advanced';
  description: string;
  shortDescription: string;
  image: string;
  rating: number;
  reviewCount: number;
  students: number;
  duration: string;
  updatedAt: string;
  isPopular?: boolean;
  isFeatured?: boolean;
  curriculum: CurriculumSection[];
  learningOutcomes: string[];
}

export interface CurriculumSection {
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  title: string;
  duration: string;
  isPreview?: boolean;
}

export interface Instructor {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  expertise: string[];
  rating: number;
  reviewCount: number;
  coursesCount: number;
  studentsCount: number;
  social: {
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Review {
  id: string;
  courseId: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  courseCount: number;
}

export interface EnrolledCourse {
  courseId: string;
  enrolledAt: string;
  progress: number;
  lastAccessedAt: string;
}

export interface UserProfile {
  enrolledCourses: EnrolledCourse[];
}
