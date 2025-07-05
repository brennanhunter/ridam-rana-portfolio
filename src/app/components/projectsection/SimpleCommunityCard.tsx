// src/app/components/projectsection/SimpleCommunityCard.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { ProjectData } from './types';

interface SimpleCommunityCardProps {
  project: ProjectData;
}

const SimpleCommunityCard: React.FC<SimpleCommunityCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      <div className="bg-gradient-to-r from-slate-800/40 to-slate-700/20 rounded-xl p-8 border border-gray-700/30">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
              Support Role
            </div>
          </div>
          <p className="text-green-400 font-medium mb-4">{project.subtitle}</p>
          <p className="text-gray-300 leading-relaxed max-w-3xl mx-auto">{project.description}</p>
        </div>

        {/* Challenge-Solution-Impact in a row */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* Challenge */}
          <div className="p-6 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg border border-red-700/30">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              The Challenge
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg border border-blue-700/30">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              The Solution
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm">{project.solution}</p>
          </div>

          {/* Impact */}
          <div className="p-6 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-700/30">
            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              The Impact
            </h4>
            <ul className="space-y-1">
              {project.impact.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills & Duration */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {project.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="text-center md:text-right">
            <span className="text-gray-400 text-sm">{project.duration}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SimpleCommunityCard;