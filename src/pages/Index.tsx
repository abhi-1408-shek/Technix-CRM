
import React, { useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import BenefitsSection from '../components/BenefitsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoFormSection from '../components/DemoFormSection';
import Footer from '../components/Footer';
import WorkflowBuilder from '../components/WorkflowBuilder';
import AchievementBadges from '../components/AchievementBadges';
import WebARDemo from '../components/WebARDemo';
import { motion } from 'framer-motion';
import { initPersonalization } from '../utils/contentPersonalizer';

const Index = () => {
  useEffect(() => {
    // Initialize content personalization
    initPersonalization();
    
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
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
      <Header />
      
      {/* Background gradients with Indian flag colors */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF9933]/10 dark:bg-[#FF9933]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#138808]/10 dark:bg-[#138808]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#000080]/5 dark:bg-[#000080]/5 rounded-full blur-3xl"></div>
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
      <AchievementBadges />
      
      {/* Add the progress indicator with Indian flag colors */}
      <motion.div
        className="fixed bottom-4 left-4 z-50 flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-full shadow-lg px-3 py-1.5"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="w-2 h-2 rounded-full bg-[#138808] animate-pulse"></div>
        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Exploring Technix-CRM India</span>
      </motion.div>
    </div>
  );
};

export default Index;
