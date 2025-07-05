// src/app/components/projectsection/CarParkingCard.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Zap } from 'lucide-react';
import { ProjectData } from './types';

interface CarParkingCardProps {
  project: ProjectData;
}

const CarParkingCard: React.FC<CarParkingCardProps> = ({ project }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  // Car Parking Driving School images
  const images = [
    "/images/traffic1.jpg",
    "/images/traffic2.jpg", 
    "/images/traffic3.jpg",
    "/images/traffic4.png"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 items-start"
    >
      {/* Left Column - Image Gallery */}
      <div className="space-y-6">
        {/* Main Image Display */}
        <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl overflow-hidden border border-gray-700/30">
          <div className="aspect-video relative">
            <motion.img
              key={selectedImage}
              src={images[selectedImage]}
              alt={`${project.title} - Screenshot ${selectedImage + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Image Counter */}
            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
              <span className="text-white text-sm font-semibold">
                {selectedImage + 1} / {images.length}
              </span>
            </div>

            {/* Project Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30">
              <div className="text-blue-400 text-xs font-mono tracking-wider">LEVEL_DESIGN.EXE</div>
              <div className="text-white text-sm font-semibold">Redesign Screenshots</div>
            </div>
          </div>
          
          {/* Project Status */}
          <div className="p-4 bg-slate-900/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                <span className="text-gray-300 text-sm">{project.status}</span>
              </div>
              <span className="text-gray-400 text-sm">{project.duration}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery Thumbnails */}
        <div className="grid grid-cols-4 gap-4">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`aspect-video bg-slate-800/30 rounded-lg overflow-hidden border transition-all duration-300 group ${
                selectedImage === index 
                  ? 'border-blue-500/50 shadow-lg shadow-blue-500/25' 
                  : 'border-gray-700/30 hover:border-gray-600/50'
              }`}
            >
              <img 
                src={image}
                alt={`${project.title} - View ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Right Column - Project Details */}
      <div className="space-y-8">
        {/* Title & Description */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-3xl font-bold text-white">{project.title}</h3>
            <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
              Featured
            </div>
          </div>
          <p className="text-blue-400 font-medium mb-4">{project.subtitle}</p>
          <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
        </div>

        {/* Challenge-Solution-Impact */}
        <div className="space-y-6">
          {/* Challenge */}
          <div className="p-6 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg border border-red-700/30">
            <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
              <Target className="w-4 h-4" />
              The Challenge
            </h4>
            <p className="text-gray-300 leading-relaxed">{project.challenge}</p>
          </div>

          {/* Solution */}
          <div className="p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg border border-blue-700/30">
            <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              The Solution
            </h4>
            <p className="text-gray-300 leading-relaxed">{project.solution}</p>
          </div>

          {/* Impact */}
          <div className="p-6 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-700/30">
            <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              The Impact
            </h4>
            <ul className="space-y-2">
              {project.impact.map((item, index) => (
                <li key={index} className="text-gray-300 flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Skills & Tags */}
        <div className="space-y-4">
          <div>
            <h4 className="text-white font-semibold mb-3">Core Skills Applied</h4>
            <div className="flex flex-wrap gap-2">
              {project.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800/50 text-gray-300 text-sm rounded-full border border-gray-700/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Project Tags</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 bg-gradient-to-r ${project.color} text-white text-sm rounded-full font-medium`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CarParkingCard;