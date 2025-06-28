// src/app/components/projectsection/ProjectCard.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, FileText, Target, TrendingUp, Zap, AlertCircle, Download, BookOpen } from 'lucide-react';
import { ProjectData } from './types';
import ImageCarousel from './ImageCarousel';

interface ProjectCardProps {
  project: ProjectData;
  activeMediaType: 'video' | 'image';
  onMediaTypeChange: (type: 'video' | 'image') => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  project, 
  activeMediaType, 
  onMediaTypeChange 
}) => {
  const [videoError, setVideoError] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
    setVideoLoading(false);
  };

  const handleVideoLoad = () => {
    setVideoLoading(false);
    setVideoError(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="grid lg:grid-cols-2 gap-12 items-start"
    >
      {/* Left Column - Media Showcase */}
      <div className="space-y-6">
        {/* Main Media Display */}
        <div className="relative">
          {/* LoopBound: Image carousel only */}
          {project.title === "LoopBound" ? (
            
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl overflow-hidden border border-gray-700/30">
              <div className="aspect-video relative">
                <ImageCarousel 
                  images={project.media.images}
                  title={project.title}
                  color={project.color}
                />
              </div>
              
              {/* Project Status */}
              <div className="p-4 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === 'Live & Successful' ? 'bg-green-400' :
                      project.status === 'In Development' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    } animate-pulse`}></div>
                    <span className="text-gray-300 text-sm">{project.status}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{project.duration}</span>
                </div>
              </div>
            </div>
          ) : (
            /* All other projects: Regular video/image display */
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl overflow-hidden border border-gray-700/30">
              <div className="aspect-video relative">
                {activeMediaType === 'video' ? (
                  <div className="relative w-full h-full bg-slate-800">
                    {/* Loading State */}
                    {videoLoading && (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
                        <div className="flex flex-col items-center gap-3">
                          <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                          <span className="text-gray-300 text-sm">Loading video...</span>
                        </div>
                      </div>
                    )}

                    {/* Error State */}
                    {videoError ? (
                      <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
                        <div className="flex flex-col items-center gap-3 text-center p-6">
                          <AlertCircle className="w-12 h-12 text-red-400" />
                          <div>
                            <p className="text-white font-semibold mb-1">Video Unavailable</p>
                            <p className="text-gray-400 text-sm mb-3">Check if video file exists at: {project.media.video}</p>
                            <button
                              onClick={() => {
                                setVideoError(false);
                                setVideoLoading(true);
                              }}
                              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm rounded-lg transition-colors"
                            >
                              Retry
                            </button>
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Video Element */
                      <video 
                        className="w-full h-full object-cover"
                        controls
                        preload="none"
                        muted
                        playsInline
                        onLoadedData={handleVideoLoad}
                        onError={handleVideoError}
                        onLoadStart={() => setVideoLoading(true)}
                        onCanPlay={handleVideoLoad}
                        onWaiting={() => setVideoLoading(true)}
                        onPlaying={() => setVideoLoading(false)}
                      >
                        <source src={project.media.video} type="video/mp4" />
                        <p className="text-gray-400 p-4">
                          Your browser doesn't support video playback. 
                          <a href={project.media.video} className="text-blue-400 hover:underline ml-1">
                            Download the video
                          </a>
                        </p>
                      </video>
                    )}
                  </div>
                ) : (
                  <img 
                    src={project.media.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Toggle buttons - only for non-LoopBound projects with video */}
                {project.title !== "LoopBound" && project.media.video && project.media.images.length > 0 && (
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={() => onMediaTypeChange('image')}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeMediaType === 'image'
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                          : 'bg-black/50 text-gray-400 hover:text-white hover:bg-black/70'
                      }`}
                      title="View Images"
                    >
                      <FileText className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => {
                        onMediaTypeChange('video');
                        if (videoError) {
                          setVideoError(false);
                          setVideoLoading(true);
                        }
                      }}
                      className={`p-2 rounded-lg transition-all duration-300 ${
                        activeMediaType === 'video'
                          ? 'bg-red-600 text-white shadow-lg shadow-red-600/25'
                          : 'bg-black/50 text-gray-400 hover:text-white hover:bg-black/70'
                      }`}
                      title="Watch Video"
                    >
                      <Play className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
              
              {/* Project Status */}
              <div className="p-4 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === 'Live & Successful' ? 'bg-green-400' :
                      project.status === 'In Development' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    } animate-pulse`}></div>
                    <span className="text-gray-300 text-sm">{project.status}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{project.duration}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Image Gallery - Only show if NOT LoopBound and images exist */}
        {project.title !== "LoopBound" && project.media.images.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {project.media.images.map((image, index) => (
              <button
                key={index}
                onClick={() => onMediaTypeChange('image')}
                className="aspect-video bg-slate-800/30 rounded-lg overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group"
              >
                <img 
                  src={image}
                  alt={`${project.title} - View ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </button>
            ))}
          </div>
        )}

        {/* Documents - Special handling for LoopBound */}
        {project.media.documents.length > 0 && (
          <div className="space-y-3">
            {project.title === "LoopBound" ? (
 <a
    href="/images/GDD.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group cursor-pointer bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-xl p-6 border border-red-700/30 hover:border-red-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10"
  >
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="text-white text-lg font-bold mb-1">Full Project Overview</div>
          <div className="text-red-400 text-sm font-semibold">Complete Design Documentation</div>
          <div className="text-gray-400 text-xs mt-1">Core mechanics, world building, and systems</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-white text-sm font-semibold">View GDD</div>
          <div className="text-gray-400 text-xs">PDF Document</div>
        </div>
        <div className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center group-hover:bg-red-600/30 transition-colors">
          <ExternalLink className="w-5 h-5 text-red-400 group-hover:text-red-300" />
        </div>
      </div>
    </div>
  </a>
            ) : (
              /* Regular Document List for Other Projects */
              <>
                <h4 className="text-white font-semibold flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-400" />
                  Design Documents
                </h4>
                {project.media.documents.map((doc, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                        <FileText className="w-4 h-4 text-blue-400" />
                      </div>
                      <div>
                        <div className="text-white text-sm font-medium">{doc.name}</div>
                        <div className="text-gray-400 text-xs">{doc.type} • {doc.size}</div>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                ))}
              </>
            )}
          </div>
        )}
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

        {/* Action Buttons */}
        <div className="flex gap-4 pt-4">
          {project.title === "Open World RPG Racing Sim" ? (
            /* Racing Game - YouTube Demo */
            <a
              href="https://www.youtube.com/watch?v=PLSOyuyv7I8&t=649s"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} hover:opacity-90 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300`}
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          ) : (
            /* Other Projects - Generic Action Button */
            <button className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.color} hover:opacity-90 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300`}>
              <ExternalLink className="w-4 h-4" />
              View Case Study
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;