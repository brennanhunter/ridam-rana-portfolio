// src/app/components/projectsection/LoopBound.tsx
'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 2,
  title: "LoopBound",
  subtitle: "Lead Game Designer & Creative Director",
  duration: "2024 - Present",
  status: "In Development",
  description: "A first-person survival extraction shooter set in a dark fantasy forest with PS1-inspired horror aesthetics. Players must scavenge, survive supernatural threats, and extract before being consumed by an eldritch god's endless loop. Originally conceived as a Borderlands-style game, evolved into a psychological horror experience emphasizing the uncanny fear of low-poly graphics.",
  challenge: "Create an oppressive survival horror experience that leverages PS1-era limitations as strengths, blending extraction gameplay with psychological terror while maintaining engaging survival mechanics and non-linear storytelling.",
  solution: "Developed a layered approach combining realistic survival needs with supernatural horror elements. Designed diverse biomes each with unique threats, implemented dynamic NPC systems with moral consequences, and created 'The Book' - a meta-narrative device that documents player actions and world mysteries.",
  impact: [
    "Pioneered innovative use of retro aesthetics for modern horror design",
    "Created comprehensive world with 5 distinct biomes and rich lore system", 
    "Designed complex survival mechanics balancing realism with supernatural elements",
    "Developed dynamic NPC system with branching narratives and consequences",
    "Established extraction gameplay loop with 15-25 minute high-tension sessions"
  ],
  skills: ["Game Design", "Horror Design", "World Building", "Narrative Design", "System Design", "Unity", "Blender"],
  media: {
    video: "", // No video for LoopBound
    images: [
      "/images/loopbound1.jpg",
      "/images/loopbound2.png",
        "/images/loopbound3.png",
        "/images/loopbound4.png",
        "/images/loopbound5.png",
        "/images/loopbound6.png",
        "/images/loopbound7.png",
        "/images/loopbound8.png",
    ],
    documents: [
      { name: "Complete Game Design Document", type: "GDD", size: "PDF" }
    ]
  },
  tags: ["Survival Horror", "Extraction Shooter", "PS1 Aesthetic", "Unity", "Psychological Horror"],
  color: "from-red-600 to-orange-600"
};

interface LoopBoundProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const LoopBound: React.FC<LoopBoundProps> = ({ 
}) => {
  return (
    <ProjectCard 
      project={projectData}
      activeMediaType="image" // Always force image mode
      onMediaTypeChange={() => {}} // Disable media type changes
    />
  );
};

export default LoopBound;