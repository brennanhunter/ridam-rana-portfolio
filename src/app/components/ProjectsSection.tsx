'use client';

import React, { useState, useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Play, ExternalLink, Github, FileText, Users, Target, TrendingUp, Clock, Award, Zap } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [activeMediaType, setActiveMediaType] = useState<'video' | 'image'>('image');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  // Featured projects data
  const projects = [
    {
      id: 1,
      title: "Open World RPG Racing Sim",
      subtitle: "Lead System & World Designer",
      duration: "2024 - 2025",
      status: "In Development",
      description: "Leading the complete design of a cross-platform RPG-inspired racing simulation from the ground up. Responsible for R&R documentation, comprehensive GDD creation, and open-world design that balances exploration with racing mechanics.",
      
      challenge: "Create an engaging open-world experience that seamlessly blends RPG progression with realistic driving mechanics, appealing to both racing enthusiasts and story-driven gamers.",
      
      solution: "Developed a layered progression system combining vehicle customization, character development, and narrative choices. Designed interconnected world zones with distinct racing challenges and story beats.",
      
      impact: [
        "Created scalable mission templates for future content",
        "Designed camera systems enhancing cinematic quality", 
        "Implemented player choice systems affecting world state",
        "Developed economic balance for vehicle progression"
      ],
      
      skills: ["System Design", "World Building", "GDD Creation", "Narrative Design", "Economic Balancing"],
      
      media: {
        video: "/api/placeholder/video-openworld.mp4",
        images: [
          "/api/placeholder/800/500", // World map overview
          "/api/placeholder/800/500", // Mission flow diagram
          "/api/placeholder/800/500"  // Character progression UI
        ],
        documents: [
          { name: "Game Design Document", type: "GDD", size: "[X pages]" },
          { name: "World Design Spec", type: "Design Doc", size: "[X pages]" },
          { name: "Progression Systems", type: "Feature Spec", size: "[X pages]" }
        ]
      },
      
      tags: ["RPG", "Racing", "Open World", "Cross-Platform"],
      color: "from-purple-600 to-pink-600"
    },
    
    {
      id: 2,
      title: "Car Parking Driving School",
      subtitle: "Game Designer - Level & Systems",
      duration: "2023 - 2024",
      status: "Live & Successful",
      description: "Reworked multiple levels to improve player retention and mission completion rates. Focused on pacing, difficulty curves, and onboarding flow to create a more engaging learning experience for driving simulation.",
      
      challenge: "Player feedback indicated issues with level pacing and difficulty progression that were affecting the overall learning experience.",
      
      solution: "Redesigned level progression with better tutorialization, implemented visual feedback systems, and refined difficulty curves based on player testing and feedback.",
      
      impact: [
        "Improved level completion rates significantly",
        "Enhanced player progression flow", 
        "Increased overall player satisfaction",
        "Created reusable level design templates"
      ],
      
      skills: ["Level Design", "Player Analytics", "Difficulty Balancing", "UI/UX Flow", "Retention Optimization"],
      
      media: {
        video: "/api/placeholder/video-carparking.mp4",
        images: [
          "/api/placeholder/800/500", // Before/after level comparison
          "/api/placeholder/800/500", // Player flow diagrams  
          "/api/placeholder/800/500"  // Analytics dashboard
        ],
        documents: [
          { name: "Level Redesign Analysis", type: "Research", size: "[X pages]" },
          { name: "Player Feedback Report", type: "Analytics", size: "[X pages]" },
          { name: "Level Template Guide", type: "Documentation", size: "[X pages]" }
        ]
      },
      
      tags: ["Mobile", "Simulation", "Educational", "Live Service"],
      color: "from-blue-600 to-cyan-600"
    },
    
    {
      id: 3,
      title: "Community-Driven Events",
      subtitle: "Event Designer & Community Manager",
      duration: "2022 - 2024", 
      status: "Multiple Successful Launches",
      description: "Designed and launched multiple in-game events based on direct player feedback and community insights. Leveraged community management experience to create events that truly resonated with the player base.",
      
      challenge: "Needed to create engaging events that felt personalized and community-driven rather than generic top-down designed content.",
      
      solution: "Implemented player feedback loops, created community polls for event themes, and designed flexible event systems that could adapt based on real-time player behavior and preferences.",
      
      impact: [
        "Achieved high player participation rates in events",
        "Generated positive community engagement and content",
        "Built sustainable event templates for multiple titles",
        "Strengthened community-developer relationship"
      ],
      
      skills: ["Event Design", "Community Management", "Player Psychology", "Content Creation", "Data Analysis"],
      
      media: {
        video: "/api/placeholder/video-events.mp4", 
        images: [
          "/api/placeholder/800/500", // Event participation charts
          "/api/placeholder/800/500", // Community feedback compilation
          "/api/placeholder/800/500"  // Event timeline design
        ],
        documents: [
          { name: "Event Design Framework", type: "Process Doc", size: "[X pages]" },
          { name: "Community Feedback Analysis", type: "Research", size: "[X pages]" },
          { name: "Event Success Metrics", type: "Analytics", size: "[X pages]" }
        ]
      },
      
      tags: ["Live Events", "Community", "Mobile", "Viral Content"],
      color: "from-green-600 to-emerald-600"
    }
  ];

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

  const currentProject = projects[selectedProject];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-slate-800 overflow-hidden">
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
                key={project.id}
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
                <div className="text-sm font-semibold">{project.title}</div>
                <div className="text-xs opacity-70">{project.subtitle}</div>
                
                {selectedProject === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.color} -z-10`}
                  />
                )}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <motion.div
          key={selectedProject}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column - Media Showcase */}
          <div className="space-y-6">
            {/* Main Media Display */}
            <div className="relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl overflow-hidden border border-gray-700/30">
              <div className="aspect-video relative">
                {activeMediaType === 'video' ? (
                  <video 
                    className="w-full h-full object-cover"
                    controls
                    poster={currentProject.media.images[0]}
                  >
                    <source src={currentProject.media.video} type="video/mp4" />
                  </video>
                ) : (
                  <img 
                    src={currentProject.media.images[0]}
                    alt={currentProject.title}
                    className="w-full h-full object-cover"
                  />
                )}
                
                {/* Media Type Toggle */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setActiveMediaType('image')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      activeMediaType === 'image'
                        ? 'bg-blue-600 text-white'
                        : 'bg-black/50 text-gray-400 hover:text-white'
                    }`}
                  >
                    <FileText className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setActiveMediaType('video')}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      activeMediaType === 'video'
                        ? 'bg-red-600 text-white'
                        : 'bg-black/50 text-gray-400 hover:text-white'
                    }`}
                  >
                    <Play className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Project Status */}
              <div className="p-4 bg-slate-900/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      currentProject.status === 'Live & Successful' ? 'bg-green-400' :
                      currentProject.status === 'In Development' ? 'bg-yellow-400' :
                      'bg-blue-400'
                    } animate-pulse`}></div>
                    <span className="text-gray-300 text-sm">{currentProject.status}</span>
                  </div>
                  <span className="text-gray-400 text-sm">{currentProject.duration}</span>
                </div>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-3 gap-4">
              {currentProject.media.images.map((image, index) => (
                <button
                  key={index}
                  className="aspect-video bg-slate-800/30 rounded-lg overflow-hidden border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300 group"
                >
                  <img 
                    src={image}
                    alt={`${currentProject.title} - View ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            {/* Documents */}
            <div className="space-y-3">
              <h4 className="text-white font-semibold flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-400" />
                Design Documents
              </h4>
              {currentProject.media.documents.map((doc, index) => (
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
            </div>
          </div>

          {/* Right Column - Project Details */}
          <div className="space-y-8">
            {/* Title & Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-bold text-white">{currentProject.title}</h3>
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${currentProject.color} text-white text-xs font-semibold`}>
                  Featured
                </div>
              </div>
              <p className="text-blue-400 font-medium mb-4">{currentProject.subtitle}</p>
              <p className="text-gray-300 leading-relaxed text-lg">{currentProject.description}</p>
            </div>

            {/* Challenge-Solution-Impact */}
            <div className="space-y-6">
              {/* Challenge */}
              <div className="p-6 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg border border-red-700/30">
                <h4 className="text-red-400 font-semibold mb-3 flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  The Challenge
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentProject.challenge}</p>
              </div>

              {/* Solution */}
              <div className="p-6 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg border border-blue-700/30">
                <h4 className="text-blue-400 font-semibold mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  The Solution
                </h4>
                <p className="text-gray-300 leading-relaxed">{currentProject.solution}</p>
              </div>

              {/* Impact */}
              <div className="p-6 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg border border-green-700/30">
                <h4 className="text-green-400 font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  The Impact
                </h4>
                <ul className="space-y-2">
                  {currentProject.impact.map((item, index) => (
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
                  {currentProject.skills.map((skill, index) => (
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
                  {currentProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 bg-gradient-to-r ${currentProject.color} text-white text-sm rounded-full font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 pt-4">
              <button className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${currentProject.color} hover:opacity-90 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300`}>
                <ExternalLink className="w-4 h-4" />
                View Case Study
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border-2 border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;