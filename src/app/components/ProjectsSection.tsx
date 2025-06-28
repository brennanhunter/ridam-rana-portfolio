// src/app/components/ProjectsSection.tsx
'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import OpenWorldRPGRacing from './projectsection/OpenWorldRPGRacing';
import CarParkingDrivingSchool from './projectsection/CarParkingDrivingSchool';
import CommunityDrivenEvents from './projectsection/CommunityDrivenEvents';
import LoopBound from './projectsection/LoopBound';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeMediaType, setActiveMediaType] = useState<'video' | 'image'>('image');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const projects = [
    { 
      name: "Open World RPG Racing Sim", 
      shortName: "RPG Racing",
      component: OpenWorldRPGRacing 
    },
    { 
      name: "LoopBound", 
      shortName: "LoopBound",
      component: LoopBound 
    },
    { 
      name: "Car Parking Driving School", 
      shortName: "Driving School",
      component: CarParkingDrivingSchool 
    },
    { 
      name: "Community-Driven Events", 
      shortName: "Events",
      component: CommunityDrivenEvents 
    }
  ];

  const CurrentProjectComponent = projects[selectedProject].component;

  return (
    <section 
      id="projects-section" 
      ref={sectionRef} 
      className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-slate-800 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="text-blue-400 font-mono text-sm tracking-widest mb-4"
          >
            &gt; FEATURED_PROJECTS.EXE
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            PROVEN
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              IMPACT
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Deep dives into projects where player empathy meets design expertise. 
            Each project showcases measurable impact and innovative solutions.
          </motion.p>
        </motion.div>

        {/* Project Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="flex flex-wrap gap-4">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedProject(index);
                }}
                className={`group relative px-6 py-4 rounded-lg border transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer ${
                  selectedProject === index
                    ? 'bg-gradient-to-r from-slate-700 to-slate-600 border-blue-500/50 text-white shadow-lg shadow-blue-500/25'
                    : 'border-gray-700/50 text-gray-400 hover:text-white hover:border-gray-600 hover:bg-slate-800/30'
                }`}
              >
                <div className="text-sm font-semibold">
                  <span className="hidden md:inline">{project.name}</span>
                  <span className="md:hidden">{project.shortName}</span>
                </div>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Current Project Display */}
        <CurrentProjectComponent 
          activeMediaType={activeMediaType}
          onMediaTypeChange={setActiveMediaType}
        />
      </div>
    </section>
  );
};

export default ProjectsSection;