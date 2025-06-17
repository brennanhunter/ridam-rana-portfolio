'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Linkedin, 
  Youtube, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  ArrowRight,
  Globe,
  Coffee,
  Zap
} from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ridamrana.official@gmail.com",
      description: "Best for detailed project discussions",
      link: "mailto:ridamrana.official@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      title: "LinkedIn",
      value: "/in/ridamrana",
      description: "Professional networking & opportunities",
      link: "https://www.linkedin.com/in/ridamrana/",
      color: "from-blue-600 to-blue-400"
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      title: "YouTube",
      value: "@kolasi3561",
      description: "Gaming content & design insights",
      link: "https://www.youtube.com/@kolasi3561",
      color: "from-red-500 to-red-400"
    }
  ];

  const availability = {
    status: "Available",
    location: "Mohali, Punjab",
    timezone: "IST (UTC +5:30)",
    preferences: "Remote preferred, willing to relocate",
    response: "Usually responds within 24 hours"
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-slate-900 to-slate-800 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        
        {/* Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px']
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        {/* Header */}
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
            className="text-blue-400 font-mono text-sm tracking-widest mb-4"
          >
            &gt; INITIATE_CONTACT.EXE
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            LET&apos;S BUILD
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-400">
              SOMETHING EPIC
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Got a game that needs a player advocate? A community that needs a champion? 
            Or just want to chat about the future of interactive entertainment? I&apos;m all ears.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          
          {/* Left Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl p-8 border border-gray-700/30 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="w-6 h-6 text-blue-400" />
                Drop Me a Line
              </h3>

              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                        placeholder="Your awesome name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 text-sm font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Company/Studio
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all"
                      placeholder="Your gaming empire"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all resize-none"
                      placeholder="Tell me about your project, your vision, or just say hi! I'd love to hear from you."
                    />
                  </div>
                  
                  <motion.button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-500 hover:to-red-500 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Launch Message
                      </>
                    )}
                  </motion.button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                    className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  >
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </motion.div>
                  <h4 className="text-xl font-bold text-white mb-2">Mission Accomplished!</h4>
                  <p className="text-gray-300">
                    Your message has been delivered. I&apos;ll get back to you faster than a speedrunner clearing level 1-1.
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Contact Methods & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Globe className="w-6 h-6 text-blue-400" />
                Connect With Me
              </h3>
              
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group block bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl p-6 border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${method.color} group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{method.title}</h4>
                      <p className="text-blue-400 font-mono text-sm">{method.value}</p>
                      <p className="text-gray-400 text-sm">{method.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Status */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              className="bg-gradient-to-br from-slate-800/40 to-slate-700/20 rounded-xl p-6 border border-gray-700/30"
            >
              <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-400" />
                Availability Status
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium">{availability.status}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{availability.location}</span>
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">{availability.timezone}</span>
                </div>
                
                <div className="pt-2 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">{availability.preferences}</p>
                  <p className="text-gray-400 text-sm mt-1">{availability.response}</p>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7 }}
              className="bg-gradient-to-r from-blue-600/20 to-red-600/20 rounded-xl p-6 border border-blue-500/30"
            >
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="w-6 h-6 text-blue-400" />
                <h4 className="text-white font-semibold">Ready to Level Up?</h4>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Whether you need a game designer who speaks fluent player, a community manager who turns strangers into superfans, or just someone who gets genuinely excited about making games better - let&apos;s chat.
              </p>
              <div className="flex items-center gap-2 text-blue-400 text-sm">
                <Zap className="w-4 h-4" />
                <span>Response time: Lightning fast ⚡</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;