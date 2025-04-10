
import { EnrolledCourse, UserProfile } from '@/data/types';

const STORAGE_KEY = 'course_platform_user_profile';

export const getUserProfile = (): UserProfile => {
  if (typeof window === 'undefined') {
    return { enrolledCourses: [] };
  }
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    return { enrolledCourses: [] };
  }
  
  try {
    return JSON.parse(stored);
  } catch (error) {
    console.error('Failed to parse user profile from localStorage', error);
    return { enrolledCourses: [] };
  }
};

export const saveUserProfile = (profile: UserProfile): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(profile));
  } catch (error) {
    console.error('Failed to save user profile to localStorage', error);
  }
};

export const enrollInCourse = (courseId: string): void => {
  const profile = getUserProfile();
  
  // Check if already enrolled
  if (profile.enrolledCourses.some(course => course.courseId === courseId)) {
    return;
  }
  
  const newEnrollment: EnrolledCourse = {
    courseId,
    enrolledAt: new Date().toISOString(),
    progress: 0,
    lastAccessedAt: new Date().toISOString(),
  };
  
  profile.enrolledCourses.push(newEnrollment);
  saveUserProfile(profile);
};

export const updateCourseProgress = (courseId: string, progress: number): void => {
  const profile = getUserProfile();
  const courseIndex = profile.enrolledCourses.findIndex(course => course.courseId === courseId);
  
  if (courseIndex === -1) return;
  
  profile.enrolledCourses[courseIndex].progress = progress;
  profile.enrolledCourses[courseIndex].lastAccessedAt = new Date().toISOString();
  
  saveUserProfile(profile);
};

export const isEnrolled = (courseId: string): boolean => {
  const profile = getUserProfile();
  return profile.enrolledCourses.some(course => course.courseId === courseId);
};

export const getEnrolledCourses = (): EnrolledCourse[] => {
  const profile = getUserProfile();
  return profile.enrolledCourses;
};
