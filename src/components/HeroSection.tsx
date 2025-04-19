
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart, Zap, Users, CheckCircle, Shield, Building, Indian } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  // Dynamic highlights for the hero section
  const [highlightIndex, setHighlightIndex] = useState(0);
  const highlights = [
    "Transform customer engagement",
    "Boost sales productivity",
    "Streamline business operations",
    "Enhance client relationships"
  ];

  // Cycle through highlights
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightIndex((prev) => (prev + 1) % highlights.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  // Particle animation
  useEffect(() => {
    const createParticles = () => {
      const hero = document.querySelector('.hero-particles');
      if (!hero) return;
      
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 4 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = `${opacity}`;
        particle.style.animationDuration = `${duration}s`;
        
        hero.appendChild(particle);
      }
    };
    
    createParticles();
    
    return () => {
      const hero = document.querySelector('.hero-particles');
      if (hero) {
        const particles = hero.querySelectorAll('.hero-particle');
        particles.forEach(p => p.remove());
      }
    };
  }, []);

  const features = [
    { icon: <BarChart className="h-4 w-4" />, text: "Real-time analytics" },
    { icon: <Zap className="h-4 w-4" />, text: "Automation workflows" },
    { icon: <Users className="h-4 w-4" />, text: "Team collaboration" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Particle animation container */}
      <div className="hero-particles absolute inset-0 z-0"></div>
      
      {/* Decorative elements with Indian flag colors */}
      <div className="absolute top-20 right-0 w-1/3 h-1/3 bg-[#FF9933]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#138808]/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-1/4 h-1/4 bg-[#000080]/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 lg:pr-10 mb-12 lg:mb-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              India's Premier <span className="text-gradient">CRM Solution</span>
            </motion.h1>
            
            <motion.div
              className="mt-4 h-12 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <div className="relative transition-all duration-500" style={{ transform: `translateY(-${highlightIndex * 3}rem)` }}>
                {highlights.map((highlight, index) => (
                  <div key={index} className="h-12 text-2xl md:text-3xl font-semibold text-brand-blue dark:text-brand-blue-light">
                    {highlight}
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Technix-CRM empowers Indian businesses to streamline lead management, boost sales, and deliver exceptional customer service all in one platform.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to="/contact">
                <Button className="cta-button-primary w-full sm:w-auto flex items-center justify-center group">
                  Book a Demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="cta-button-secondary w-full sm:w-auto">
                  Start Free Trial
                </Button>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center text-sm text-gray-500 dark:text-gray-400"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <CheckCircle className="text-green-500 mr-2 h-5 w-5" />
              No credit card required • 14-day free trial
            </motion.div>
            
            <motion.div 
              className="mt-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Trusted by 5,000+ Indian businesses</p>
              <div className="grid grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <motion.div 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center space-x-2 text-sm"
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-brand-blue text-white flex items-center justify-center">
                      {feature.icon}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              delay: 0.3
            }}
          >
            <div className="relative z-10 rounded-xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF9933] via-white to-[#138808]"></div>
              <img 
                src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1200&q=80" 
                alt="Technix-CRM Dashboard with Indian business data" 
                className="w-full h-auto"
              />
              
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-4 right-4 bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg"
              >
                Live Dashboard
              </motion.div>
            </div>
            
            {/* Accent elements with Indian flag colors */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FF9933]/20 dark:bg-[#FF9933]/10 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#138808]/20 dark:bg-[#138808]/10 rounded-full blur-2xl"></div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -right-6 top-1/4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{ animation: "float 7s ease-in-out infinite" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                  <ArrowRight className="h-4 w-4 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <p className="text-xs font-medium">Sales Increased</p>
                  <p className="text-sm font-bold text-green-600 dark:text-green-400">+27% this month</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -left-6 bottom-1/4 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8 }}
              style={{ animation: "float 5s ease-in-out 1s infinite" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <Users className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-xs font-medium">New Customers</p>
                  <p className="text-sm font-bold">250 this week</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
