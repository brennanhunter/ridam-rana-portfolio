'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ExternalLink, Download, Mail, Linkedin, Youtube } from 'lucide-react';

const HeroSection = () => {
  const [currentProject, setCurrentProject] = useState(0);

  // Sample project data - replace with Ridam's actual content
  const projects = [
    {
      title: "Open World RPG Design",
      description: "From ground up R&R, GDD and open world design",
      type: "System Design"
    },
    {
      title: "Car Parking Driving School",
      description: "60 level reworks improving retention rates",
      type: "Level Design"
    },
    {
      title: "Mobile Game Events",
      description: "Designed engaging in-game events and systems",
      type: "Event Design"
    }
  ];

  // Auto-rotate projects
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to projects section
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      const offsetTop = projectsSection.offsetTop - 80; // 80px offset for better positioning
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    } else {
      // Fallback: scroll by viewport height if element not found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  // Grid animation background
  const GridBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
        {/* Animated grid */}
        <motion.div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '40px 40px']
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          className="absolute top-20 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-48 h-48 bg-red-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </div>
    </div>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black py-12 md:py-0">
      <GridBackground />
      
      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Left Column - Personal Brand */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            {/* Name and Role */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-blue-400 font-mono text-sm tracking-widest"
              >
                &gt; INITIALIZING_DESIGNER.EXE
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                RIDAM
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-red-400 to-blue-400 animate-pulse">
                  RANA
                </span>
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light"
              >
                Game Designer & Player Advocate
              </motion.div>
            </div>

            {/* Signature Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="relative p-4 md:p-6 bg-gradient-to-r from-slate-800/50 to-slate-700/30 rounded-lg border border-blue-500/30 backdrop-blur-sm"
            >
              <div className="absolute -left-2 top-4 w-1 h-8 bg-gradient-to-b from-blue-400 to-red-400"></div>
              <blockquote className="text-base md:text-lg text-gray-100 italic font-light">
                &quot;If you felt something while playing, then I did my job right.&quot;
              </blockquote>
              <div className="text-blue-400 text-xs md:text-sm mt-2 font-mono">- Design Philosophy</div>
            </motion.div>

            {/* Stats & Credentials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="grid grid-cols-2 gap-3 md:gap-4"
            >
              <div className="text-center p-3 md:p-4 bg-slate-800/30 rounded-lg border border-gray-700/50">
                <div className="text-xl md:text-2xl font-bold text-blue-400">3+</div>
                <div className="text-gray-400 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="text-center p-3 md:p-4 bg-slate-800/30 rounded-lg border border-gray-700/50">
                <div className="text-xl md:text-2xl font-bold text-red-400">60</div>
                <div className="text-gray-400 text-xs md:text-sm">Levels Reworked</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-3 md:gap-4"
            >
              <button 
                onClick={scrollToProjects}
                className="group px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg shadow-blue-500/25 text-sm md:text-base"
              >
                <Play className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                View My Work
              </button>
              
              <Link
                href="/resume"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-600 hover:border-red-400 text-gray-300 hover:text-red-400 font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm md:text-base"
              >
                <Download className="w-4 h-4 md:w-5 md:h-5" />
                View Resume
              </Link>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex gap-3 md:gap-4"
            >
              <a href="mailto:ridamrana.official@gmail.com" className="p-2 md:p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 group">
                <Mail className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="https://www.linkedin.com/in/ridamrana/" className="p-2 md:p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-gray-600/50 hover:border-blue-400/50 transition-all duration-300 group">
                <Linkedin className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-blue-400" />
              </a>
              <a href="https://www.youtube.com/@kolasi3561" className="p-2 md:p-3 bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-gray-600/50 hover:border-red-400/50 transition-all duration-300 group">
                <Youtube className="w-4 h-4 md:w-5 md:h-5 text-gray-400 group-hover:text-red-400" />
              </a>
            </motion.div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="flex items-center gap-2 md:gap-3 text-xs md:text-sm"
            >
              <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-gray-300">Available for opportunities • Remote preferred</span>
            </motion.div>
          </motion.div>

          {/* Right Column - Professional Headshot */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-xl border border-gray-700/50 backdrop-blur-sm overflow-hidden">
              
              {/* Headshot Display */}
              <div className="aspect-square relative">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-red-500/20"></div>
                
                <img 
                  src="/images/Headshot.jpg"
                  alt="Ridam Rana - Game Designer"
                  className="w-full h-full object-cover"
                />
                
                {/* Professional overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Floating Status Card */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5, duration: 0.6 }}
                  className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-green-500/30"
                >
                  <div className="text-green-400 text-xs font-mono">STATUS</div>
                  <div className="text-white text-sm font-semibold flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available
                  </div>
                </motion.div>
                
                {/* Floating Location Card */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.7, duration: 0.6 }}
                  className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-blue-500/30"
                >
                  <div className="text-blue-400 text-xs font-mono">LOCATION</div>
                  <div className="text-white text-sm font-semibold">Mohali, Punjab</div>
                </motion.div>
                
                {/* Featured Project Highlight */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6 }}
                    className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 border border-purple-500/30 max-w-[200px]"
                  >
                    <div className="text-purple-400 text-xs font-mono">FEATURED</div>
                    <div className="text-white text-sm font-semibold truncate">{projects[currentProject].title}</div>
                    <div className="text-gray-300 text-xs truncate">{projects[currentProject].type}</div>
                  </motion.div>
                </AnimatePresence>
              </div>
              
              {/* Project Navigation */}
              <div className="p-3 md:p-4 bg-slate-900/50">
                <div className="flex justify-center gap-2 md:gap-3">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                        index === currentProject 
                          ? 'bg-purple-400 shadow-lg shadow-purple-400/50' 
                          : 'bg-gray-600 hover:bg-gray-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Action Button */}
            <motion.button
              onClick={scrollToProjects}
              className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white rounded-full shadow-lg shadow-red-500/25 flex items-center justify-center transform hover:scale-110 transition-all duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <ExternalLink className="w-4 h-4 md:w-6 md:h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Only show on desktop */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={scrollToProjects}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center hover:border-blue-400 transition-colors"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;