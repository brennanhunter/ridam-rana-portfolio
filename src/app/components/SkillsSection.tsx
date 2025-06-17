'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Gamepad2, 
  Users, 
  Palette, 
  Monitor,
  Target,
  TrendingUp,
  Zap
} from 'lucide-react';

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('design');
  
  console.log('SkillsSection render - activeCategory:', activeCategory);

  // Enhanced skills data with personality
  const skillCategories = {
    design: {
      title: "Game Design",
      icon: <Gamepad2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { 
          name: "System Design", 
          level: "Advanced",
          description: "Crafting the invisible magic that keeps players hooked - from progression loops that feel rewarding to mechanics that whisper 'just one more level'",
          experience: "3+ years",
          projects: ["Open World RPG", "Mobile Events"]
        },
        { 
          name: "Level Design", 
          level: "Advanced",
          description: "Building worlds that guide without holding hands, challenge without frustrating, and tell stories through every corner and corridor",
          experience: "3+ years",
          projects: ["Car Parking School", "Open World RPG"]
        },
        { 
          name: "Game Documentation", 
          level: "Expert",
          description: "Turning wild creative visions into crystal-clear blueprints that teams can rally behind and actually build",
          experience: "3+ years",
          projects: ["All Projects", "Process Documentation"]
        },
        { 
          name: "Player Psychology", 
          level: "Advanced",
          description: "Reading the player's mind before they know what they want - understanding the emotions behind every click, swipe, and rage quit",
          experience: "4+ years",
          projects: ["Community Events", "Retention Optimization"]
        }
      ]
    },
    tools: {
      title: "Tools & Engines", 
      icon: <Monitor className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      skills: [
        { 
          name: "Unity", 
          level: "Proficient",
          description: "My trusty sidekick for bringing ideas to life - from rapid prototypes to polished experiences that actually work",
          experience: "2+ years",
          projects: ["Level Prototypes", "Gameplay Testing"]
        },
        { 
          name: "Unreal Engine", 
          level: "Learning",
          description: "The beast I'm currently taming - because why settle for good when you can have cinematic excellence?",
          experience: "Learning",
          projects: ["Personal Projects"]
        },
        { 
          name: "Godot", 
          level: "Familiar",
          description: "The scrappy underdog that proves you don't need corporate backing to make something beautiful",
          experience: "1+ year",
          projects: ["Indie Prototypes"]
        },
        { 
          name: "Blueprint Visual Scripting", 
          level: "Proficient",
          description: "Making code visual and logic beautiful - because sometimes the best ideas come in pictures, not text",
          experience: "2+ years",
          projects: ["Unreal Prototypes"]
        }
      ]
    },
    creative: {
      title: "Creative Arsenal",
      icon: <Palette className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      skills: [
        { 
          name: "Photoshop", 
          level: "Advanced",
          description: "My digital paintbrush for everything from meme warfare to concept art that makes executives say 'yes, we need this'",
          experience: "4+ years",
          projects: ["Community Content", "Design Mockups"]
        },
        { 
          name: "Video Editing", 
          level: "Advanced",
          description: "Turning raw footage into stories that grab attention, build hype, and occasionally go viral",
          experience: "4+ years",
          projects: ["YouTube Channel", "Event Promotion"]
        },
        { 
          name: "Blender", 
          level: "Intermediate",
          description: "Wrestling with vertices and winning - creating 3D magic that bridges the gap between imagination and reality",
          experience: "2+ years",
          projects: ["Asset Creation", "Prototyping"]
        },
        { 
          name: "Figma", 
          level: "Proficient",
          description: "Where wireframes become dreams and user journeys turn into addiction - designing interfaces players actually want to use",
          experience: "2+ years",
          projects: ["UI Mockups", "Design Systems"]
        }
      ]
    },
    collaboration: {
      title: "People Power",
      icon: <Users className="w-6 h-6" />,
      color: "from-red-500 to-orange-500", 
      skills: [
        { 
          name: "Community Management", 
          level: "Expert",
          description: "The art of turning strangers into superfans - building tribes that defend your game like it's their firstborn",
          experience: "4+ years",
          projects: ["Discord Communities", "Player Events"]
        },
        { 
          name: "JIRA", 
          level: "Proficient",
          description: "Taming the chaos of game development one ticket at a time - making sure brilliant ideas actually ship",
          experience: "3+ years",
          projects: ["Team Projects", "Development Cycles"]
        },
        { 
          name: "Discord", 
          level: "Expert",
          description: "My second home and the beating heart of modern gaming communities - where memes are born and legends are made",
          experience: "4+ years",
          projects: ["Community Servers", "Team Communication"]
        },
        { 
          name: "Content Strategy", 
          level: "Advanced",
          description: "Predicting what will make people click, share, and obsess over - riding the waves of internet culture like a digital surfer",
          experience: "4+ years",
          projects: ["YouTube Channel", "Community Growth"]
        }
      ]
    }
  };

  const getSkillWidth = (level: string) => {
    switch (level) {
      case 'Expert': return '100%';
      case 'Advanced': return '85%';
      case 'Proficient': return '70%';
      case 'Intermediate': return '55%';
      case 'Learning': return '35%';
      case 'Familiar': return '40%';
      default: return '35%';
    }
  };

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'from-green-500 to-emerald-400';
      case 'Advanced': return 'from-blue-500 to-cyan-400';
      case 'Proficient': return 'from-purple-500 to-violet-400';
      case 'Intermediate': return 'from-yellow-500 to-orange-400';
      case 'Learning': return 'from-gray-500 to-slate-400';
      case 'Familiar': return 'from-indigo-500 to-blue-400';
      default: return 'from-gray-500 to-slate-400';
    }
  };

  const categories = Object.keys(skillCategories) as Array<keyof typeof skillCategories>;
  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];

  return (
    <section className="relative py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        
        {/* Enhanced Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-cyan-400 font-mono text-sm tracking-widest mb-4"
          >
            &gt; SKILLS_ARSENAL.EXE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            TECHNICAL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              EXPERTISE
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From pixel-perfect prototypes to community-conquering content - 
            my toolkit spans the entire spectrum of modern game development. 
            Each skill sharpened by real projects, real players, real results.
          </motion.p>
        </motion.div>

        {/* Enhanced Category Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-2 border border-gray-700/50">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
              {categories.map((categoryKey) => {
                const category = skillCategories[categoryKey];
                return (
                  <motion.button
                    key={categoryKey}
                    onClick={() => {
                      console.log('CLICK DETECTED:', categoryKey);
                      setActiveCategory(categoryKey);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex flex-col items-center gap-2 p-4 rounded-lg transition-all duration-300 min-w-[120px] ${
                      activeCategory === categoryKey
                        ? 'bg-gradient-to-br from-slate-700 to-slate-600 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700/50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} ${
                      activeCategory === categoryKey ? 'shadow-lg' : 'opacity-60 hover:opacity-100'
                    } transition-all duration-300`}>
                      {category.icon}
                    </div>
                    <span className="text-sm font-medium text-center">{category.title}</span>
                    
                    {activeCategory === categoryKey && (
                      <motion.div
                        layoutId="activeCategory"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 0.1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        className={`absolute inset-0 rounded-lg bg-gradient-to-r ${category.color} -z-10`}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Enhanced Skills Display with Animations */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {currentCategory.skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                    <p className="text-sm text-gray-400">{skill.experience}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${getLevelColor(skill.level)} text-white shadow-lg`}>
                    {skill.level}
                  </span>
                </div>

                {/* Skill Level Progress Bar */}
                <div className="mb-4">
                  <div className="w-full bg-slate-700/30 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: getSkillWidth(skill.level) }}
                      transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: "easeOut" }}
                      className={`h-2 rounded-full bg-gradient-to-r ${getLevelColor(skill.level)}`}
                    />
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {skill.description}
                </p>

                {/* Projects */}
                <div>
                  <p className="text-xs text-gray-400 mb-2">Applied in:</p>
                  <div className="flex flex-wrap gap-1">
                    {skill.projects.map((project, projectIndex) => (
                      <motion.span
                        key={projectIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + projectIndex * 0.05 + 0.5 }}
                        className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded border border-gray-600/30 hover:bg-slate-600/50 transition-colors"
                      >
                        {project}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-5 bg-gradient-to-r ${currentCategory.color} transition-opacity duration-300 -z-10`}></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/20 rounded-xl p-8 border border-gray-700/30 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-6 h-6 text-cyan-400" />
              <h3 className="text-xl font-bold text-white">Always Evolving</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              The game industry doesn't just move fast - it teleports. That's why I never stop learning, 
              experimenting, and pushing boundaries. Today's cutting-edge becomes tomorrow's baseline, 
              and I intend to stay ahead of the curve. Currently deep-diving into Unreal Engine because 
              beautiful graphics deserve beautiful systems underneath.
            </p>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <Zap className="w-4 h-4" />
                Currently Learning: Unreal Engine
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Target className="w-4 h-4" />
                Next Goal: Advanced Blueprints
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;