
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, Award, Shield, Users, Clock, Database, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const benefits = [
  {
    icon: <BarChart className="text-green-500 mr-3 h-5 w-5" />,
    text: "35% increase in sales team productivity for Indian businesses"
  },
  {
    icon: <Users className="text-green-500 mr-3 h-5 w-5" />,
    text: "30% higher customer retention rates across all industry sectors"
  },
  {
    icon: <Clock className="text-green-500 mr-3 h-5 w-5" />,
    text: "60% reduction in lead response time - crucial in the fast-paced Indian market"
  },
  {
    icon: <Database className="text-green-500 mr-3 h-5 w-5" />,
    text: "Centralized customer data with support for Indian languages and regional preferences"
  },
  {
    icon: <Award className="text-green-500 mr-3 h-5 w-5" />,
    text: "Automated workflows designed for Indian business processes and compliance"
  },
  {
    icon: <Shield className="text-green-500 mr-3 h-5 w-5" />,
    text: "Secure data storage with compliance to Indian data protection standards"
  }
];

const BenefitsSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section id="benefits" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?auto=format&fit=crop&w=1000&q=80" 
              alt="Indian business professionals using Technix-CRM" 
              className="rounded-lg shadow-lg mx-auto"
            />
            
            {/* Success metrics floating card */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 absolute -bottom-5 right-10 md:right-20 hidden md:block"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <BarChart className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Success Rate</p>
                  <p className="text-xl font-bold text-gray-900 dark:text-gray-50">98.5%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 lg:pl-16 order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Indian Businesses Choose Technix-CRM</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Join thousands of companies across India that have transformed their customer relationships and boosted sales performance with our powerful CRM solution tailored for the Indian market.
            </p>
            
            <motion.ul 
              className="space-y-4 mb-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.li 
                  key={index} 
                  className="flex items-start"
                  variants={itemVariants}
                >
                  {benefit.icon}
                  <span>{benefit.text}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button className="cta-button-primary">
                  Start Your Free Trial
                </Button>
              </Link>
              <Link to="/features">
                <Button variant="outline" className="cta-button-secondary">
                  Learn More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
