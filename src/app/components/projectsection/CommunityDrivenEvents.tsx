// src/app/components/projectsection/CommunityDrivenEvents.tsx
'use client';

import React from 'react';
import SimpleCommunityCard from './SimpleCommunityCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 3,
  title: "Community Management - CPDS",
  subtitle: "Community Manager & Content Creator",
  duration: "Car Parking Driving School", 
  status: "Active Mobile Game Community",
  description: "Served as Community Manager for Car Parking Driving School (CPDS), a mobile car simulation game with a highly active player base. Created and managed a specialized playtester program featuring exclusive badges, items, and early access to beta updates through test flights. Successfully maintained community engagement across Discord and social media channels.",
  challenge: "Build and maintain engagement in a passionate gaming community while creating effective feedback systems that would help developers iterate on features across multiple game versions.",
  solution: "Established a special tester group from the most active community members, rewarding them with exclusive badges, in-game items, and access to test flights (beta versions). This VIP treatment made testers feel valued while ensuring consistent, high-quality feedback throughout development cycles.",
  impact: [
    "Created exclusive playtester program with custom badges and premium items",
    "Implemented test flight system for early access to beta updates",
    "Managed active Discord community and coordinated social media presence",
    "Established consistent feedback loops across multiple game versions", 
    "Developed comprehensive content creation skills (graphic design, illustration, video editing)",
    "Successfully bridged communication between passionate players and development team"
  ],
  skills: ["Community Management", "Discord Administration", "Content Creation", "Graphic Design", "Player Engagement", "Feedback Systems"],
  media: {
    video: "", 
    images: [],
    documents: []
  },
  tags: ["Community Management", "Mobile Gaming", "Content Creation", "Player Engagement"],
  color: "from-green-600 to-emerald-600"
};

interface CommunityDrivenEventsProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const CommunityDrivenEvents: React.FC<CommunityDrivenEventsProps> = ({ 

}) => {
  return (
    <SimpleCommunityCard project={projectData} />
  );
};

export default CommunityDrivenEvents;