'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  Download, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  ArrowLeft,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Music,
  Gamepad2,
  Zap,
  Wrench,
  Video,
  Globe,
  Star,
  Trophy,
  Users
} from 'lucide-react';
import Link from 'next/link';

const ResumePage = () => {

  const skills = [
    "Unity", "Unreal Engine", "Blender", "Figma", "Photoshop", "Jira",
    "Systems Design", "Level Design", "World Building", "Narrative Design", "Economic Design",
    "Gameplay Loops", "Player Flow", "3Cs", "Difficulty Balancing", "Player Analytics",
    "Community Management", "Content Creation", "GDD Documentation", "Playtesting"
  ];

  const strengths = [
    {
      title: "Player-Centric Design",
      description: "Data-driven approach to creating engaging player experiences with proven retention improvements.",
      icon: <Users className="w-5 h-5" />
    },
    {
      title: "Community Building",
      description: "Proven results growing communities to 100K+ followers across multiple platforms with engaging content.",
      icon: <Heart className="w-5 h-5" />
    },
    {
      title: "Technical Implementation", 
      description: "Multi-engine expertise with comprehensive game development pipeline from concept to launch.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Content Creation",
      description: "Full pipeline content creation including graphics, videos, and interactive multimedia experiences.",
      icon: <Video className="w-5 h-5" />
    }
  ];

  const professionalProjects = [
    {
      title: "Car Driving Multiplayer (Open World RPG Racing Sim)",
      role: "System & World Designer",
      period: "2024 - 2025",
      description: "Cross-platform RPG racing simulation responsible for R&R documentation, GDD creation, and open-world design balancing exploration with racing mechanics.",
      achievements: [
        "Created scalable mission templates for future content expansion",
        "Designed cinematic camera systems enhancing gameplay experience", 
        "Developed economic progression systems balancing player engagement",
        "Successfully launched on App Store with positive reception"
      ]
    }
  ];

  const featuredProjects = [
    {
      title: "LoopBound (Survival Horror)",
      role: "Game Designer & Creative Director",
      period: "2024 - Present",
      description: "First-person survival extraction shooter with PS1-inspired horror aesthetics. Complete design ownership from concept through comprehensive documentation.",
      achievements: [
        "Created comprehensive world with 5 distinct biomes and rich lore system",
        "Designed complex survival mechanics balancing realism with supernatural elements",
        "Developed complete GDD with 50+ pages of detailed documentation",
        "Pioneered innovative use of retro aesthetics for modern horror design"
      ]
    },
    {
      title: "Chaos Chess",
      role: "Game Designer & Systems Developer", 
      period: "2024 - Present",
      description: "Strategic chess variant with random card-based effects. Complete ruleset creation with comprehensive balance testing.",
      achievements: [
        "Designed 50+ balanced cards with varying strategic impact levels",
        "Created alternative win condition mechanics maintaining chess essence",
        "Developed two-phase turn system combining strategy with controlled chaos",
        "Established complete ruleset with comprehensive card database"
      ]
    }
  ];

  const hobbies = [
    {
      title: "Discovering Music",
      description: "Always digging for new tracks — from ambient loops to pure chaotic noise. Music fuels my creative energy.",
      icon: <Music className="w-5 h-5" />
    },
    {
      title: "Game Dev Deep Dives",
      description: "I love watching devlogs, behind-the-scenes content, and postmortems to understand how games truly come to life.",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "Speedrun Curiosity",
      description: "It's fascinating to watch speedrunners break games with precision and creativity — I learn a lot about design limits that way.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Modding Games",
      description: "Playing with modding tools and tweaking game elements is one of my favorite ways to learn and experiment with design.",
      icon: <Wrench className="w-5 h-5" />
    },
    {
      title: "Video Editing",
      description: "I enjoy capturing gameplay moments, creating edits, and telling visual stories through motion.",
      icon: <Video className="w-5 h-5" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12 py-12">
        {/* Header Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-12"
        >
          <Link 
            href="/"
            className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold">Back to Portfolio</span>
          </Link>

          <a
            href="/resume/ridam-rana-resume.pdf"
            download="Ridam_Rana_Game_Designer_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            staggerChildren: 0.1,
            delayChildren: 0.2
          }}
          className="max-w-6xl mx-auto"
        >
          {/* Header Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-16"
          >
            <div className="relative mb-8">
              <Image
                src="/images/Headshot.jpg"
                alt="Ridam Rana"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full mx-auto border-4 border-blue-500/30 shadow-2xl shadow-blue-500/25"
              />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse"></div>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4">
              RIDAM <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">RANA</span>
            </h1>
            
            <p className="text-2xl text-gray-300 mb-8">Game Designer</p>
            
            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 9872149390</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>ridamrana.official@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Punjab, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Linkedin className="w-4 h-4" />
                <a href="https://www.linkedin.com/in/ridamrana" className="hover:text-blue-400 transition-colors">
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <a href="https://ridam-rana-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </div>
            </div>
          </motion.div>

          {/* Summary Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Professional Summary</span>
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                <span className="text-blue-400 font-semibold">Versatile Game Designer</span> with <span className="text-blue-400 font-semibold">2+ years of professional experience</span> creating engaging player experiences across multiple shipped titles. Proven ability to improve player retention through <span className="text-blue-400 font-semibold">data-driven design decisions</span> and successful <span className="text-blue-400 font-semibold">community management</span>. Strong technical skills in Unity, Unreal Engine, and comprehensive game development pipeline from concept to launch.
              </p>
            </div>
          </motion.div>

          {/* Professional Projects Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Trophy className="w-8 h-8 text-green-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Professional Projects</span>
            </h2>
            
            <div className="space-y-6">
              {professionalProjects.map((project, index) => (
                <div key={index} className="bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-xl p-8 border border-green-700/30 backdrop-blur-sm">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-green-100 mb-2">{project.title}</h3>
                      <p className="text-lg text-green-400 font-semibold">{project.role}</p>
                    </div>
                    <div className="text-gray-400 mt-2 lg:mt-0">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <ul className="space-y-3">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-300">
                        <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Featured Projects Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center gap-3">
              <Star className="w-8 h-8 text-purple-400" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Featured Projects</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-6">
              {featuredProjects.map((project, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                  <div className="flex flex-col justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-blue-400 font-semibold">{project.role}</p>
                    </div>
                    <div className="text-gray-400 text-sm mt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{project.period}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Professional Experience</span>
                </h2>
                
                <div className="space-y-8">
                  {/* Game Designer */}
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Game Designer</h3>
                        <p className="text-xl text-blue-400 font-semibold">Appsoleut Games</p>
                      </div>
                      <div className="text-right text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>October 2022 - Present</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Gurgaon, India</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Designed engaging game mechanics, environments, and feature concepts</strong> across multiple projects including Car Parking Driving School and Car Driving Multiplayer</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Contributed to Car Driving Multiplayer development</strong> - Cross-platform RPG-inspired racing simulation with open-world design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Developed narrative elements, lore, and character/world backstories</strong> to enhance player immersion and engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Built camera systems for vehicles and player characters</strong> with cinematic gameplay feel enhancing user experience</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Worked closely with 3D artists and UI/UX designers</strong> to bring ideas from sketches to fully playable systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Created clear design documentation and visual references</strong> to align teams on gameplay vision and project goals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Contributed to live game feedback and iteration cycles</strong> to improve player experience and retention</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Improved player retention by 34%</strong> through data-driven level design and difficulty balancing</span>
                      </li>
                    </ul>
                  </div>

                  {/* Community Manager */}
                  <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-white">Community Manager</h3>
                        <p className="text-xl text-purple-400 font-semibold">Car Parking Driving School (CPDS)</p>
                      </div>
                      <div className="text-right text-gray-400">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>2023</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-4 h-4" />
                          <span>Mobile Game Community</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-gray-300">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Managed multi-platform digital presence</strong> across Instagram, TikTok, Discord, and YouTube channels</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Grew Instagram community to 100K followers</strong> through strategic content planning and consistent engagement</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Scaled YouTube channel to 100K subscribers</strong> creating viral short-form content with high engagement rates</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Developed diverse content strategy</strong> combining informative tutorials with entertaining gameplay highlights</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Created exclusive playtester program</strong> with custom badges and early access privileges</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span><strong>Produced high-quality multimedia content</strong> including graphics, videos, and interactive posts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              {/* Education Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Education</span>
                </h2>
                
                <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Bachelor of Science</h3>
                      <p className="text-xl text-purple-400 font-semibold">Art and Game Design</p>
                      <p className="text-lg text-purple-400">Chandigarh University</p>
                    </div>
                    <div className="text-right text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2019 - 2022</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">
                    Specialized in core game design principles with focus on 2D art and animation
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Skills Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technical Skills</span>
                </h2>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-2 bg-slate-700/50 text-sm rounded-lg border border-gray-600/50 text-gray-300 hover:bg-slate-600/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Languages Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">Languages</span>
                </h2>
                
                <div className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">English</span>
                    <span className="text-green-400">Proficient</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Hindi</span>
                    <span className="text-green-400">Native</span>
                  </div>
                </div>
              </motion.div>

              {/* Core Strengths Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Core Strengths</span>
                </h2>
                
                <div className="space-y-4">
                  {strengths.map((strength, index) => (
                    <div key={index} className="bg-slate-800/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="text-blue-400">{strength.icon}</div>
                        <h3 className="font-semibold text-white">{strength.title}</h3>
                      </div>
                      <p className="text-sm text-gray-300">{strength.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Hobbies Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-red-400">Hobbies</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hobbies.map((hobby, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm hover:bg-slate-700/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-purple-400">{hobby.icon}</div>
                    <h3 className="font-semibold text-white">{hobby.title}</h3>
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed">{hobby.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4 text-white">Ready to Create Amazing Games Together?</h3>
              <p className="text-gray-300 mb-6">Let&apos;s discuss how I can contribute to your next project.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:ridamrana.official@gmail.com"
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/25 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </a>
                <Link
                  href="/"
                  className="px-6 py-3 border-2 border-gray-600 hover:border-purple-400 text-gray-300 hover:text-purple-400 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Portfolio
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResumePage;