// src/app/components/projectsection/RacingVideoCard.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, ExternalLink, Target, TrendingUp, Zap } from 'lucide-react';
import { ProjectData } from './types';

interface RacingVideoCardProps {
  project: ProjectData;
}

const RacingVideoCard: React.FC<RacingVideoCardProps> = ({ project }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 items-start"
    >
      {/* Left Column - Video Player */}
      <div className="space-y-6">
        {/* Main Video Display */}
        <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl overflow-hidden border border-gray-700/30">
          <div 
            className="aspect-video relative cursor-pointer"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/images/racing-poster.jpg" // You can add a poster image
              preload="metadata"
              muted
              playsInline
              onEnded={handleVideoEnd}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src={project.media.video} type="video/mp4" />
            </video>

            {/* Custom Play Button Overlay */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: isPlaying && !showControls ? 0 : 1 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 border-2 border-white/20"
              >
                {isPlaying ? (
                  <Pause className="w-8 h-8 text-white ml-0" />
                ) : (
                  <Play className="w-8 h-8 text-white ml-1" />
                )}
              </motion.button>
            </motion.div>

            {/* Racing Game Info Overlay */}
            <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30">
              <div className="text-purple-400 text-xs font-mono tracking-wider">RPG_RACING.EXE</div>
              <div className="text-white text-sm font-semibold">Gameplay Demo</div>
            </div>

            {/* Duration/Quality Info */}
            <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
              <span className="text-white text-xs font-semibold">HD • Demo</span>
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

        {/* Video Description */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-xl p-6 border border-gray-700/30">
          <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
            🎮 Gameplay Demo
          </h4>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            Watch the complete gameplay demonstration showcasing the RPG progression system, 
            realistic driving mechanics, and open-world exploration features.
          </p>
          <a
            href="https://www.youtube.com/watch?v=PLSOyuyv7I8&t=649s"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Watch Full Demo on YouTube
          </a>
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
          <p className="text-purple-400 font-medium mb-4">{project.subtitle}</p>
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

        {/* Action Button */}
        <div className="flex gap-4 pt-4">
          <a
            href="https://www.youtube.com/watch?v=PLSOyuyv7I8&t=649s"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} hover:opacity-90 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300`}
          >
            <Play className="w-4 h-4" />
            Watch Full Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default RacingVideoCard;