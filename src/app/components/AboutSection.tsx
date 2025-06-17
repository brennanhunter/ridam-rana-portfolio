'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import { Users, Gamepad2, FileText, Target, Award, TrendingUp } from 'lucide-react';

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('journey');
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  // Timeline data
  const journey = [
    {
      year: "2022",
      title: "The Beginning",
      role: "Recent Graduate",
      description: "Graduated with Bachelor of Science in Art and Game Design, looking for opportunities in the gaming industry.",
      icon: "🎓"
    },
    {
      year: "2022",
      title: "Community First",
      role: "Community Manager",
      description: "Landed my first role managing Discord communities, leveraging my experience with gaming communities and content creation skills.",
      icon: "👥"
    },
    {
      year: "2023",
      title: "The Bridge Builder",
      role: "Community Manager → Designer",
      description: "Started creating GDDs and proposing gameplay changes based on player feedback. Became the voice between players and development team.",
      icon: "🌉"
    },
    {
      year: "2023",
      title: "The Promotion",
      role: "Game Designer",
      description: "Promoted to Game Designer after demonstrating design thinking and player advocacy. Began working on Car Parking Driving School.",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "Level Master",
      role: "Game Designer",
      description: "Reworked multiple levels improving retention rates and designed engaging in-game events that resonated with the player base.",
      icon: "🎮"
    },
    {
      year: "2024-2025",
      title: "World Builder",
      role: "Lead Game Designer",
      description: "Leading design on new open-world RPG project. From R&R to GDD, building immersive experiences from the ground up.",
      icon: "🌍"
    }
  ];

  // Core strengths
  const strengths = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Player Empathy",
      description: "Years of direct player interaction gives me unique insight into what players actually want and need.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Gamepad2 className="w-6 h-6" />,
      title: "Design Systems",
      description: "Creating balanced, engaging mechanics that drive player motivation and long-term retention.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Documentation",
      description: "Clear, actionable GDDs and design specs that align teams and communicate vision effectively.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Player-Focused Design",
      description: "Every design decision is filtered through 'What would the players feel in this moment?'",
      color: "from-red-500 to-orange-500"
    }
  ];

  // Philosophy points
  const philosophy = [
    {
      title: "The Sandbox Carpenter",
      content: "Think of me as a carpenter in a school. It's my job to make an awesome, cute, fun, or terrifying sandbox for the kids to play in. But it's up to me to make it small or big or interactive."
    },
    {
      title: "Emotion Through Interaction",
      content: "Video games are the only medium where players can play a narrative and have emotions. I believe games should make players feel something - whether it's love for a car, thrill of victory, or heartbreak of loss."
    },
    {
      title: "Community-Driven Design",
      content: "My time as a Community Manager taught me that the best games come from listening to players, not just designing in isolation. Real conversation creates real connection."
    }
  ];

  const tabs = [
    { id: 'journey', label: 'My Journey', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'strengths', label: 'Core Strengths', icon: <Award className="w-4 h-4" /> },
    { id: 'philosophy', label: 'Design Philosophy', icon: <Target className="w-4 h-4" /> }
  ];

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-64 h-64 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity }}
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
            &gt; LOADING_BACKGROUND.EXE
          </motion.div>
          
          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            THE PLAYER'S
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
              ADVOCATE
            </span>
          </motion.h2>
          
          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From community manager to game designer, I bridge the gap between players and development teams. 
            I don't just design games—I design experiences that make players feel something.
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-lg p-1 border border-gray-700/50">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {/* Journey Tab */}
          {activeTab === 'journey' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">From Community to Design</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  My unique path through the gaming industry, from managing Discord communities to designing 
                  engaging gameplay experiences that players love.
                </p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-red-500"></div>
                
                {/* Timeline Items */}
                <div className="space-y-12">
                  {journey.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="relative flex items-center gap-8"
                    >
                      {/* Timeline Dot */}
                      <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 rounded-full border-4 border-blue-500/50 flex items-center justify-center text-2xl">
                        {item.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 bg-gradient-to-r from-slate-800/40 to-slate-700/20 rounded-lg p-6 border border-gray-700/30">
                        <div className="flex items-center gap-4 mb-3">
                          <span className="px-3 py-1 bg-blue-600/80 text-white text-sm rounded-full font-mono">
                            {item.year}
                          </span>
                          <span className="text-blue-400 font-semibold">{item.role}</span>
                        </div>
                        <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Strengths Tab */}
          {activeTab === 'strengths' && (
            <div className="grid md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl p-8 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${strength.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-full h-full bg-slate-800 rounded-lg flex items-center justify-center text-white">
                      {strength.icon}
                    </div>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-3">{strength.title}</h4>
                  <p className="text-gray-300 leading-relaxed">{strength.description}</p>
                  
                  {/* Hover Glow */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 bg-gradient-to-r ${strength.color} transition-opacity duration-300`}></div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Philosophy Tab */}
          {activeTab === 'philosophy' && (
            <div className="space-y-8">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-white mb-4">Design Philosophy</h3>
                <p className="text-gray-300 max-w-2xl mx-auto">
                  The core beliefs that guide every design decision I make, rooted in player empathy 
                  and emotional connection.
                </p>
              </div>
              
              <div className="space-y-8">
                {philosophy.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Content */}
                    <div className="flex-1 bg-gradient-to-r from-slate-800/40 to-slate-700/20 rounded-xl p-8 border border-gray-700/30">
                      <h4 className="text-xl font-bold text-white mb-4">{point.title}</h4>
                      <p className="text-gray-300 leading-relaxed text-lg">{point.content}</p>
                    </div>
                    
                    {/* Visual Element */}
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-500/20 to-red-500/20 border border-gray-600/30 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-red-600 flex items-center justify-center text-white font-bold text-xl">
                        {index + 1}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-xl p-8 border border-gray-700/30 max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Ready to Create Something Amazing?</h3>
            <p className="text-gray-300 mb-6">
              Let's build games that make players feel something extraordinary.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg">
              Let's Collaborate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;