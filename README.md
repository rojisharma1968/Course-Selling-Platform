
# SkillSphere - Online Course Selling Platform

## Project Description

SkillSphere is a fully responsive online course selling platform built with React and Tailwind CSS. The platform allows users to browse, filter, and enroll in a variety of courses across different categories.

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Router
- JSON mock data

## Features

### Core Pages:

- **Homepage**
  - Hero section with CTA
  - Featured courses carousel
  - Popular categories grid
  - Testimonials from learners
  - Newsletter signup

- **Courses Page**
  - Grid display of courses
  - Category filtering
  - Price filtering (free/paid)
  - Level filtering (beginner/intermediate/advanced)
  - Pagination

- **Course Details Page**
  - Course overview and description
  - Curriculum breakdown (accordion-style)
  - Learning outcomes
  - Instructor information
  - Enrollment functionality

- **Instructor Pages**
  - List of all instructors
  - Individual instructor profiles
  - Instructor's courses

- **Dashboard / Enrolled Courses**
  - List of enrolled courses
  - Progress tracking
  - Continue learning functionality

### Other Features:

- Fully responsive layout
- LocalStorage for saving user enrollment and progress
- Loading states and fallbacks
- Scroll position reset on navigation

## Folder Structure

```
src/
├── components/          # UI components
│   ├── common/          # Shared components like LoadingSpinner
│   ├── courses/         # Course-related components 
│   ├── dashboard/       # Dashboard components
│   ├── home/            # Homepage-specific components
│   ├── instructors/     # Instructor-related components
│   ├── layout/          # Layout components like Navbar and Footer
│   └── ui/              # UI library components
├── data/                # Mock data for courses, instructors, etc.
├── hooks/               # Custom React hooks
├── pages/               # Page components
├── utils/               # Utility functions
```

## Setup Instructions

1. Clone the repository
```bash
git clone <repository-url>
cd skill-sphere
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

## Usage Notes

- All data is mock data stored in the `src/data` directory
- Enrollment and progress are saved to localStorage
- No authentication is required to use the platform
