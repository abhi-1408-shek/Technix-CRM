
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, CheckCircle2, DollarSign, FileText } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

// Define badge types
const BADGES = {
  FEATURE_EXPLORER: {
    id: 'feature-explorer',
    title: 'Feature Explorer',
    description: 'Discovered the amazing features',
    icon: <CheckCircle2 className="h-6 w-6 text-green-500" />,
    color: 'bg-green-500/10 border-green-500/20'
  },
  PRICING_PRO: {
    id: 'pricing-pro',
    title: 'Pricing Pro',
    description: 'Reviewed our pricing options',
    icon: <DollarSign className="h-6 w-6 text-blue-500" />,
    color: 'bg-blue-500/10 border-blue-500/20'
  },
  DEMO_MASTER: {
    id: 'demo-master',
    title: 'Demo Master',
    description: 'Requested a personalized demo',
    icon: <FileText className="h-6 w-6 text-purple-500" />,
    color: 'bg-purple-500/10 border-purple-500/20'
  }
};

// Confetti component
const Confetti = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="confetti-container">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className={`confetti bg-${['red', 'blue', 'green', 'yellow', 'purple', 'pink'][i % 6]}-500`}
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Badge Component
const Badge = ({ badge, isNew }) => {
  return (
    <motion.div
      className={`relative flex items-center p-3 mb-2 rounded-lg border ${badge.color} shadow-sm`}
      initial={{ x: isNew ? 50 : 0, opacity: isNew ? 0 : 1 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="mr-3">
        {badge.icon}
      </div>
      <div>
        <h3 className="font-medium text-sm text-gray-800 dark:text-white">{badge.title}</h3>
        <p className="text-xs text-gray-600 dark:text-gray-300">{badge.description}</p>
      </div>
      {isNew && (
        <motion.span 
          className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-red-500"
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.5, 1] }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.div>
  );
};

// Progress Bar
const ProgressBar = ({ unlockedCount }) => {
  const progress = (unlockedCount / Object.keys(BADGES).length) * 100;
  
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-4">
      <motion.div 
        className="bg-gradient-to-r from-brand-blue to-brand-orange h-2.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
};

// Main component
const AchievementBadges = () => {
  const [unlockedBadges, setUnlockedBadges] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);
  const [newBadge, setNewBadge] = useState(null);
  
  // Set up intersection observers for the three sections
  const { ref: featuresRef, inView: featuresInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: pricingRef, inView: pricingInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  const { ref: demoFormRef, inView: demoFormInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  // Load saved badges from localStorage
  useEffect(() => {
    const savedBadges = localStorage.getItem('unlockedBadges');
    if (savedBadges) {
      try {
        setUnlockedBadges(JSON.parse(savedBadges));
      } catch (e) {
        console.error('Error parsing saved badges', e);
      }
    }
  }, []);

  // Save badges to localStorage when they change
  useEffect(() => {
    localStorage.setItem('unlockedBadges', JSON.stringify(unlockedBadges));
  }, [unlockedBadges]);

  // Effect for unlocking badges based on scroll position
  useEffect(() => {
    const unlockBadge = (badgeId) => {
      if (!unlockedBadges.includes(badgeId)) {
        setNewBadge(badgeId);
        setUnlockedBadges((prev) => [...prev, badgeId]);
        setShowConfetti(true);
        setTimeout(() => {
          setShowConfetti(false);
          setNewBadge(null);
        }, 3000);
      }
    };

    if (featuresInView) {
      unlockBadge(BADGES.FEATURE_EXPLORER.id);
    }
    if (pricingInView) {
      unlockBadge(BADGES.PRICING_PRO.id);
    }
    if (demoFormInView) {
      unlockBadge(BADGES.DEMO_MASTER.id);
    }
  }, [featuresInView, pricingInView, demoFormInView, unlockedBadges]);
  
  // Connect sections with IntersectionObserver refs
  useEffect(() => {
    const featuresSection = document.getElementById('features');
    const pricingSection = document.getElementById('pricing');
    const demoFormSection = document.getElementById('demo-form');
    
    if (featuresSection) {
      featuresRef(featuresSection);
    }
    
    if (pricingSection) {
      pricingRef(pricingSection);
    }
    
    if (demoFormSection) {
      demoFormRef(demoFormSection);
    }
  }, [featuresRef, pricingRef, demoFormRef]);

  return (
    <>
      <motion.div
        className="fixed right-4 top-1/4 z-40 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg max-w-[220px] border border-gray-100 dark:border-gray-700"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 1 }}
      >
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-bold text-gray-800 dark:text-white flex items-center">
            <Award className="mr-2 h-4 w-4 text-brand-orange" />
            Your Achievements
          </h2>
          <span className="text-xs bg-brand-blue text-white dark:bg-brand-blue-light dark:text-gray-900 px-2 py-0.5 rounded-full">
            {unlockedBadges.length}/{Object.keys(BADGES).length}
          </span>
        </div>
        
        <ProgressBar unlockedCount={unlockedBadges.length} />
        
        <div className="space-y-2 mt-4">
          {unlockedBadges.length === 0 ? (
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 p-4">
              <p>Scroll down to unlock badges!</p>
            </div>
          ) : (
            Object.values(BADGES)
              .filter(badge => unlockedBadges.includes(badge.id))
              .map(badge => (
                <Badge 
                  key={badge.id}
                  badge={badge}
                  isNew={newBadge === badge.id}
                />
              ))
          )}
        </div>
      </motion.div>
      
      <AnimatePresence>
        {showConfetti && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Confetti />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AchievementBadges;
