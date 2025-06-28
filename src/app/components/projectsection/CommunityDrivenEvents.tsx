// src/app/components/projectsection/CommunityDrivenEvents.tsx
'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 3,
  title: "Community-Driven Events",
  subtitle: "Event Designer & Community Manager",
  duration: "2022 - 2024", 
  status: "Multiple Successful Launches",
  description: "Designed and launched multiple in-game events based on direct player feedback and community insights. Leveraged community management experience to create events that truly resonated with the player base.",
  challenge: "Needed to create engaging events that felt personalized and community-driven rather than generic top-down designed content.",
  solution: "Implemented player feedback loops, created community polls for event themes, and designed flexible event systems that could adapt based on real-time player behavior and preferences.",
  impact: [
    "Achieved 67% average player participation rates in events",
    "Generated 2.3M+ social media impressions across campaigns",
    "Built sustainable event templates used across 8 different titles",
    "Strengthened community-developer relationship with 94% positive feedback"
  ],
  skills: ["Event Design", "Community Management", "Player Psychology", "Content Creation", "Data Analysis"],
  media: {
    video: "/videos/community-events.mp4", 
    images: [
      "/images/projects/event-participation.jpg",
      "/images/projects/community-feedback.jpg",
      "/images/projects/event-timeline.jpg"
    ],
    documents: [
      { name: "Event Design Framework", type: "Process Doc", size: "43 pages" },
      { name: "Community Feedback Analysis", type: "Research", size: "31 pages" },
      { name: "Event Success Metrics", type: "Analytics", size: "18 pages" }
    ]
  },
  tags: ["Live Events", "Community", "Mobile", "Viral Content"],
  color: "from-green-600 to-emerald-600"
};

interface CommunityDrivenEventsProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const CommunityDrivenEvents: React.FC<CommunityDrivenEventsProps> = ({ 
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

export default CommunityDrivenEvents;