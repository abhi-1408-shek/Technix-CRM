
import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    content: "Technix-CRM transformed our sales process. The pipeline visibility and automation features helped us increase our closing rate by 35% in just three months.",
    author: "Sarah Johnson",
    position: "Sales Director, TechGrow Inc.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    company: "TechGrow Inc.",
    logo: "https://source.unsplash.com/random/150x50/?logo",
    rating: 5
  },
  {
    content: "The customer engagement tools in Technix-CRM have been a game-changer for our support team. We've seen a 40% improvement in customer satisfaction scores since implementation.",
    author: "Michael Chen",
    position: "Customer Success Manager, Elevate Solutions",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    company: "Elevate Solutions",
    logo: "https://source.unsplash.com/random/150x50/?logo",
    rating: 5
  },
  {
    content: "As a small business, we needed an affordable CRM that could grow with us. Technix-CRM delivered that and more - it's intuitive, powerful, and has helped us streamline our entire sales process.",
    author: "Emily Rodriguez",
    position: "Founder, Bright Innovations",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    company: "Bright Innovations",
    logo: "https://source.unsplash.com/random/150x50/?logo",
    rating: 5
  },
  {
    content: "The analytics and reporting capabilities are outstanding. We can now make data-driven decisions quickly, which has helped us identify new opportunities and optimize our sales strategy.",
    author: "David Wilson",
    position: "VP of Sales, GrowFast Technologies",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    company: "GrowFast Technologies",
    logo: "https://source.unsplash.com/random/150x50/?logo",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const controls = useAnimation();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const nextTestimonial = () => {
    setCurrent(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrent(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Handle autoplay
  useEffect(() => {
    if (autoplay) {
      intervalRef.current = setInterval(nextTestimonial, 8000);
    }
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoplay]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Progress bar animation
  useEffect(() => {
    if (autoplay) {
      controls.start({
        width: '100%',
        transition: { duration: 8, ease: 'linear' }
      });
    } else {
      controls.stop();
    }
    
    return () => {
      controls.stop();
    };
  }, [current, autoplay, controls]);

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl dark:bg-blue-500/5"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl dark:bg-brand-orange/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">What Our Customers Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear from businesses that have transformed their customer relationships with Technix-CRM
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-xl shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                <motion.div
                  className="h-full bg-brand-blue dark:bg-brand-blue-light"
                  animate={controls}
                  initial={{ width: 0 }}
                  key={current}
                ></motion.div>
              </div>
              
              <div className="absolute top-8 right-8 text-brand-orange/20 dark:text-brand-orange/10">
                <Quote size={120} />
              </div>
              
              <div className="relative z-10">
                <div className="flex mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-8 relative z-10 italic font-light">
                  "{testimonials[current].content}"
                </p>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex items-center mb-4 md:mb-0">
                    <motion.img 
                      src={testimonials[current].avatar} 
                      alt={testimonials[current].author} 
                      className="w-14 h-14 rounded-full border-2 border-brand-blue dark:border-brand-blue-light mr-4"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <div>
                      <p className="font-semibold text-lg">{testimonials[current].author}</p>
                      <p className="text-gray-600 dark:text-gray-400">{testimonials[current].position}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <img 
                      src={testimonials[current].logo} 
                      alt={testimonials[current].company} 
                      className="h-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === current ? 'bg-brand-blue dark:bg-brand-blue-light scale-125' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <motion.button
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200"
              onClick={prevTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </motion.button>
            
            <motion.button
              className="p-3 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 dark:text-gray-200"
              onClick={nextTestimonial}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
