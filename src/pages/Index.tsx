
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoFormSection from '../components/DemoFormSection';
import Footer from '../components/Footer';
import ProductTour from '../components/ProductTour';
import WorkflowBuilder from '../components/WorkflowBuilder';
import AchievementBadges from '../components/AchievementBadges';
import WebARDemo from '../components/WebARDemo';
import { motion } from 'framer-motion';
import { initPersonalization } from '../utils/contentPersonalizer';

const Index = () => {
  const [isFirstVisit, setIsFirstVisit] = useState(false);
  
  useEffect(() => {
    // Initialize content personalization
    initPersonalization();
    
    // Determine if this is the first visit
    const hasVisitedBefore = localStorage.getItem('hasVisitedBefore') === 'true';
    setIsFirstVisit(!hasVisitedBefore);
    localStorage.setItem('hasVisitedBefore', 'true');
    
    // Smooth scroll to hash on load
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Reset scroll position on load
    window.scrollTo(0, 0);
    
    // Add particles effect to background
    const createParticles = () => {
      const container = document.createElement('div');
      container.className = 'fixed inset-0 pointer-events-none z-0';
      document.body.appendChild(container);
      
      for (let i = 0; i < 100; i++) {
        const particle = document.createElement('div');
        particle.className = 'absolute rounded-full bg-brand-blue/5 dark:bg-brand-blue-light/5';
        
        // Random properties
        const size = Math.random() * 10 + 2;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const duration = Math.random() * 120 + 60;
        const delay = Math.random() * 10;
        
        // Apply styles
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animation = `float ${duration}s ${delay}s infinite ease-in-out`;
        
        container.appendChild(particle);
      }
    };
    
    createParticles();
    
    // Clean up on unmount
    return () => {
      const particleContainer = document.querySelector('.fixed.inset-0.pointer-events-none');
      if (particleContainer) {
        document.body.removeChild(particleContainer);
      }
    };
  }, []);

  // Show product tour if it's the first visit
  const shouldShowTour = isFirstVisit;

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <Header />
      
      {/* Background gradients */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-brand-blue/10 dark:bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-brand-orange/10 dark:bg-brand-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <main>
        <HeroSection />
        
        {/* Interactive Workflow Builder */}
        <motion.section
          className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <WorkflowBuilder />
        </motion.section>
        
        <FeaturesSection />
        <BenefitsSection />
        
        {/* WebAR Demo Section */}
        <WebARDemo />
        
        <TestimonialsSection />
        <DemoFormSection />
      </main>
      
      <Footer />
      
      {/* Floating components */}
      {shouldShowTour && <ProductTour />}
      <AchievementBadges />
      
      {/* Add the progress indicator */}
      <motion.div
        className="fixed bottom-4 left-4 z-50 flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Exploring Technix-CRM</span>
      </motion.div>
      
      {/* Add futuristic interactive cursor */}
      <div id="cursor-follower" className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference opacity-0"></div>
    </div>
  );
};

export default Index;
