
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isScrolled = scrollPosition > 20;

  return (
    <motion.header 
      className={`py-4 px-6 fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-background/0'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <motion.span 
                className="text-2xl font-bold text-brand-blue dark:text-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Technix<span className="text-brand-orange">CRM</span>
              </motion.span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/features" className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">Features</Link>
            <Link to="/pricing" className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">Pricing</Link>
            <Link to="/resources" className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">Resources</Link>
            <Link to="/about" className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">About</Link>
            <Link to="/contact" className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">Contact</Link>
          </nav>

          {/* CTA Buttons - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/login" className="font-medium text-brand-blue hover:text-brand-blue-dark dark:text-brand-blue-light dark:hover:text-white transition-colors">Login</Link>
            <Link to="/contact">
              <Button className="bg-brand-orange hover:bg-orange-600 text-white">Free Trial</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground focus:outline-none"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 0 }}
                  whileTap={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            className="md:hidden mt-4 py-4 bg-background/80 backdrop-blur-lg rounded-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav className="flex flex-col space-y-4 px-4">
              <Link 
                to="/features" 
                className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                to="/pricing" 
                className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                to="/resources" 
                className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                to="/about" 
                className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-foreground hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <Link 
                  to="/login" 
                  className="font-medium text-brand-blue dark:text-brand-blue-light hover:text-brand-blue-dark transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link 
                  to="/contact"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button 
                    className="bg-brand-orange hover:bg-orange-600 text-white w-full"
                  >
                    Free Trial
                  </Button>
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
