
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  BarChart, 
  MessageSquare, 
  Settings, 
  Calendar, 
  Zap,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: <Users size={24} />,
    color: 'bg-blue-500',
    title: 'Lead Management',
    description: 'Capture, track and nurture leads through your sales pipeline with powerful automation tools.'
  },
  {
    icon: <BarChart size={24} />,
    color: 'bg-indigo-500',
    title: 'Sales Analytics',
    description: 'Gain actionable insights with comprehensive reports and dashboards to optimize your sales strategy.'
  },
  {
    icon: <MessageSquare size={24} />,
    color: 'bg-purple-500',
    title: 'Customer Engagement',
    description: 'Build stronger relationships with integrated communication tools and interaction history.'
  },
  {
    icon: <Settings size={24} />,
    color: 'bg-brand-orange',
    title: 'Customizable Workflows',
    description: 'Tailor processes and automation to match your unique business requirements and objectives.'
  },
  {
    icon: <Calendar size={24} />,
    color: 'bg-green-500',
    title: 'Task Management',
    description: 'Stay organized with calendars, reminders, and task assignments for your entire team.'
  },
  {
    icon: <Zap size={24} />,
    color: 'bg-red-500',
    title: 'Integration Ecosystem',
    description: 'Connect seamlessly with your favorite tools and services for a unified workflow.'
  }
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl dark:bg-brand-orange/5"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl max-h-96 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 dark:from-blue-900/10 dark:to-indigo-900/10 rounded-[40%] blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Powerful Features to Grow Your Business</h2>
          <p className="section-subtitle">
            Discover how Technix-CRM can transform your customer relationships and accelerate your sales process
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -10, transition: { type: "spring", stiffness: 400 } }}
              className="feature-card relative group"
            >
              <div className={`feature-icon ${feature.color} group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="feature-title group-hover:text-brand-blue dark:group-hover:text-brand-blue-light transition-colors duration-300">{feature.title}</h3>
              <p className="feature-text">{feature.description}</p>
              
              <motion.div 
                className="absolute bottom-0 right-0 w-0 h-0.5 bg-gradient-to-r from-transparent to-brand-blue dark:to-brand-blue-light group-hover:w-full transition-all duration-500"
                transition={{ duration: 0.5 }}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link to="/features">
            <Button 
              variant="outline" 
              className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white dark:border-brand-blue-light dark:text-brand-blue-light dark:hover:bg-brand-blue-light dark:hover:text-gray-900 group"
            >
              Explore All Features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
