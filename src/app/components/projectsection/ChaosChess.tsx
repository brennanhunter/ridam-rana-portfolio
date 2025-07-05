// src/app/components/projectsection/ChaosChess.tsx
'use client';

import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectData } from './types';

const projectData: ProjectData = {
  id: 4,
  title: "Chaos Chess",
  subtitle: "Game Designer & Systems Developer",
  duration: "2024 - Present",
  status: "Design Complete",
  description: "A chaotic twist on traditional chess where players must adapt to unpredictable, game-altering events. Victory is achieved either through checkmate or by losing one's own king, turning conventional chess strategies on their head. AI-generated cards introduce random, chess-themed effects that can reshape the board, eliminate pieces, or alter movement rules.",
  challenge: "Balance strategic depth with controlled chaos, ensuring randomness enhances rather than destroys meaningful decision-making. Create alternative win conditions that feel fair while maintaining the tactical essence of chess.",
  solution: "Developed a two-phase turn system alternating between Chaos Phase (card effects) and Chess Phase (traditional moves). Designed 50+ unique cards with varying impact levels, implemented multiple match lengths, and created win conditions that reward both offensive and defensive strategies.",
  impact: [
    "Created complete GDD with comprehensive ruleset and card system",
    "Designed 50+ balanced cards ranging from subtle to game-changing effects", 
    "Developed alternative win condition mechanics that maintain strategic depth",
    "Established scalable card generation system for endless variety",
    "Balanced chaos elements to enhance rather than replace core chess strategy"
  ],
  skills: ["Game Design", "Systems Design", "Balance Design", "Rule Creation", "Strategic Design", "Card Design"],
  media: {
    video: "", // No video for Chaos Chess
    images: [
      "/images/chaos1.png",
      "/images/chaos2.png",
      "/images/chaos3.png",
      "/images/chaos4.png",
      "/images/chaos5.png"
    ],
    documents: [
      { name: "Complete Game Design Document", type: "GDD", size: "PDF" },
      { name: "Card Database & Effects", type: "Spreadsheet", size: "Excel" }
    ]
  },
  tags: ["Strategy", "Turn-Based", "Card Game", "Chess Variant", "RNG-Strategy"],
  color: "from-amber-600 to-yellow-600"
};

interface ChaosChessProps {
  activeMediaType?: 'video' | 'image';
  onMediaTypeChange?: (type: 'video' | 'image') => void;
}

const ChaosChess: React.FC<ChaosChessProps> = ({ 
}) => {
  return (
    <ProjectCard 
      project={projectData}
      activeMediaType="image" // Always force image mode
      onMediaTypeChange={() => {}} // Disable media type changes
    />
  );
};

export default ChaosChess;