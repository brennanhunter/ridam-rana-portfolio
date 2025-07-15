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
  Star,
  Calendar,
  Briefcase,
  GraduationCap,
  Heart,
  Music,
  Gamepad2,
  Zap,
  Wrench,
  Video
} from 'lucide-react';
import Link from 'next/link';

// Animation variants for staggered children (used in motion.div)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ResumePage = () => {

  const skills = [
    "Gameplay Loops", "Flow", "3Cs", "Level Design", "Gameplay Design", 
    "Level Blockout", "Unreal", "Unity", "MS Office", "Figma", 
    "Photoshop", "Jira", "Sourcetree"
  ];

  const strengths = [
    {
      title: "Creative Thinking",
      description: "Always exploring fresh, fun ideas that stand out.",
      icon: <Star className="w-5 h-5" />
    },
    {
      title: "Game Systems",
      description: "Strong understanding of how mechanics work and connect.",
      icon: <Gamepad2 className="w-5 h-5" />
    },
    {
      title: "Collaboration", 
      description: "Work smoothly with artists, devs, and other designers.",
      icon: <Heart className="w-5 h-5" />
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
          className="max-w-4xl mx-auto"
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
            
            <p className="text-2xl text-gray-300 mb-2">Game Designer</p>
            <p className="text-lg text-gray-400 mb-8">Systems Design | Player Experience | Creative Storytelling</p>
            
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Summary</span>
            </h2>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Creative and dedicated game designer with a strong foundation in systems design, worldbuilding, and rapid prototyping. 
                Skilled at crafting engaging, player-first experiences backed by a deep understanding of game mechanics and design principles. 
                Continuously evolving with new tools and ideas, and eager to contribute to innovative projects that push the boundaries of 
                interactive storytelling and gameplay.
              </p>
            </div>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Experience Section */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <Briefcase className="w-8 h-8 text-blue-400" />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Experience</span>
                </h2>
                
                <div className="bg-slate-800/50 rounded-xl p-8 border border-gray-700/50 backdrop-blur-sm">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">Game Designer</h3>
                      <p className="text-xl text-blue-400 font-semibold">Appsoleut Games</p>
                    </div>
                    <div className="text-right text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>10/2022 - 04/2025</span>
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
                      <span>Designed engaging game mechanics, environments, and feature concepts across multiple projects.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Developed narrative elements, lore, and character/world backstories to enhance immersion.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Built camera systems for vehicles and player characters with a cinematic gameplay feel.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Worked closely with 3D artists and UI/UX designers to bring ideas from sketches to fully playable systems.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Created clear design documentation and visual references to align teams on gameplay vision.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Contributed to live game feedback and iteration cycles to improve player experience.</span>
                    </li>
                  </ul>
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
                      <h3 className="text-2xl font-bold text-white">Bachelor of Science in Art and Game Design</h3>
                      <p className="text-xl text-purple-400 font-semibold">Chandigarh University</p>
                    </div>
                    <div className="text-right text-gray-400">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>2019 - 2022</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300">
                    Specialized in core game design principles with a focus on 2D art and animation.
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Skills</span>
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
                transition={{ duration: 0.6, delay: 1.2 }}
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

              {/* Strengths Section */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-6 text-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Strengths</span>
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
          <motion.div variants={itemVariants} className="mt-16">
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
          <motion.div variants={itemVariants} className="text-center mt-16">
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