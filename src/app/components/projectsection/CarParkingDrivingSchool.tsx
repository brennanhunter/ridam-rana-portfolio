// src/app/components/projectsection/CarParkingDrivingSchool.tsx
'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 2,
  title: "Car Parking Driving School",
  subtitle: "Game Designer - Level & Systems",
  duration: "2023 - 2024",
  status: "Live & Successful",
  description: "Reworked multiple levels to improve player retention and mission completion rates. Focused on pacing, difficulty curves, and onboarding flow to create a more engaging learning experience for driving simulation.",
  challenge: "Player feedback indicated issues with level pacing and difficulty progression that were affecting the overall learning experience.",
  solution: "Redesigned level progression with better tutorialization, implemented visual feedback systems, and refined difficulty curves based on player testing and feedback.",
  impact: [
    "Improved level completion rates by 34%",
    "Enhanced player progression flow with 89% tutorial completion", 
    "Increased overall player satisfaction scores to 4.2/5",
    "Created reusable level design templates for 15+ future levels"
  ],
  skills: ["Level Design", "Player Analytics", "Difficulty Balancing", "UI/UX Flow", "Retention Optimization"],
  media: {
    video: "/videos/car-parking-school.mp4",
    images: [
      "/images/projects/parking-level-redesign.jpg",
      "/images/projects/parking-analytics.jpg",
      "/images/projects/parking-ui-flow.jpg"
    ],
    documents: [
      { name: "Level Redesign Analysis", type: "Research", size: "28 pages" },
      { name: "Player Feedback Report", type: "Analytics", size: "15 pages" },
      { name: "Level Template Guide", type: "Documentation", size: "12 pages" }
    ]
  },
  tags: ["Mobile", "Simulation", "Educational", "Live Service"],
  color: "from-blue-600 to-cyan-600"
};

interface CarParkingDrivingSchoolProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const CarParkingDrivingSchool: React.FC<CarParkingDrivingSchoolProps> = ({ 
  activeMediaType = 'image', 
  onMediaTypeChange = () => {} 
}) => {
  return (
    <ProjectCard 
      project={projectData}
      activeMediaType={activeMediaType}
      onMediaTypeChange={onMediaTypeChange}
    />
  );
};

export default CarParkingDrivingSchool;