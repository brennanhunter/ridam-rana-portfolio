// src/app/components/projectsection/OpenWorldRPGRacing.tsx
'use client';

import React from 'react';
import RacingVideoCard from './RacingVideoCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 1,
  title: "Open World RPG Racing Sim",
  subtitle: "Lead System & World Designer",
  duration: "2024 - 2025",
  status: "Live & Successful",
  description: "Leading the complete design of a cross-platform RPG-inspired racing simulation from the ground up. Responsible for R&R documentation, comprehensive GDD creation, and open-world design that balances exploration with racing mechanics.",
  challenge: "Create an engaging open-world experience that seamlessly blends RPG progression with realistic driving mechanics, appealing to both racing enthusiasts and story-driven gamers.",
  solution: "Developed a layered progression system combining vehicle customization, character development, and narrative choices. Designed interconnected world zones with distinct racing challenges and story beats.",
  impact: [
    "Created scalable mission templates for future content",
    "Designed camera systems enhancing cinematic quality", 
    "Implemented player choice systems affecting world state",
    "Developed economic balance for vehicle progression"
  ],
  skills: ["System Design", "World Building", "GDD Creation", "Narrative Design", "Economic Balancing"],
  media: {
    video: "/videos/CarRacingGameTrailer.mp4",
    images: [], // Empty array - no images for this project
    documents: [] // Empty array - no documents for this project
  },
  tags: ["RPG", "Racing", "Open World", "Cross-Platform"],
  color: "from-purple-600 to-pink-600"
};

interface OpenWorldRPGRacingProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const OpenWorldRPGRacing: React.FC<OpenWorldRPGRacingProps> = ({ 
  activeMediaType = 'video', 
  onMediaTypeChange = () => {} 
}) => {
  return (
    <RacingVideoCard project={projectData} />
  );
};

export default OpenWorldRPGRacing;