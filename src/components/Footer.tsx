
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, Github, Heart, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-white dark:bg-gray-950 relative overflow-hidden">
      {/* Decorative Elements with Indian flag colors */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#FF9933]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#138808]/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-6">Technix<span className="text-[#FF9933]">CRM</span></h3>
            <p className="text-gray-400 mb-6">
              Empowering Indian businesses to build stronger customer relationships through innovative CRM solutions.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://facebook.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://twitter.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a 
                href="https://linkedin.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors" 
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <Instagram size={20} />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-400 hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white transition-colors">Resources</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </motion.div>
          
          {/* Resources */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><Link to="/resources/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/resources/knowledge-base" className="text-gray-400 hover:text-white transition-colors">Knowledge Base</Link></li>
              <li><Link to="/resources/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/resources/webinars" className="text-gray-400 hover:text-white transition-colors">Webinars</Link></li>
              <li><Link to="/resources/api-docs" className="text-gray-400 hover:text-white transition-colors">API Documentation</Link></li>
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Mail size={18} className="mr-3" />
                <a href="mailto:support@technixcrm.in">support@technixcrm.in</a>
              </li>
              <li className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Phone size={18} className="mr-3" />
                <a href="tel:+911140506070">+91 11 4050 6070</a>
              </li>
              <li className="flex items-start text-gray-400 hover:text-white transition-colors">
                <MapPin size={18} className="mr-3 mt-1" />
                <span>
                  Technix Tower, Block B<br />
                  Cyber City, Gurugram<br />
                  Haryana 122002, India
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-500 text-sm">&copy; {currentYear} TechnixCRM. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Heart className="text-red-500 w-4 h-4 animate-pulse" />
            <span className="text-brand-orange text-base font-semibold tracking-wide">Engineered with <span className='inline-block align-middle'>❤️</span> by Abhishek</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-4">
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link>
            <Link to="/cookie-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
