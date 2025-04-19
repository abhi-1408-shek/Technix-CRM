import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Person-1",
    role: "Sales Director",
    company: "Tech Solutions India",
    image: "https://images.unsplash.com/photo-1566492031773-4a4c28761666?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGluZGlhbiUyMGJ1c2luZXNzJTIwcGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    quote: "After implementing Technix-CRM, our sales team's productivity increased by 45%. The seamless integration with our existing systems and the intuitive UI made adoption across our Delhi offices incredibly smooth."
  },
  {
    id: 2,
    name: "Person-2",
    role: "Customer Support Manager",
    company: "Retail Innovations Pvt Ltd",
    image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGluZGlhbiUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=200&q=80",
    quote: "The customer service capabilities of Technix-CRM have transformed our support processes. We're now responding to customer inquiries 60% faster, and our satisfaction ratings are at an all-time high across our Mumbai and Delhi locations."
  },
  {
    id: 3,
    name: "Person-3",
    role: "CEO",
    company: "Drishti Digital",
    image: "https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW5kaWFuJTIwYnVzaW5lc3MlMjBwZXJzb258ZW58MHx8MHx8&auto=format&fit=crop&w=200&q=80",
    quote: "As a growing startup based in Gurgaon, we needed a CRM that would scale with us. Technix-CRM has been instrumental in our growth, helping us manage relationships with over 1,500 clients across India with just a small team."
  },
  {
    id: 4,
    name: "Person-4",
    role: "Marketing Director",
    company: "Bharat Innovations",
    image: "https://images.unsplash.com/photo-1572631382901-cf1a0a6087cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhbiUyMG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=200&q=80",
    quote: "The analytics and reporting features in Technix-CRM give us unprecedented visibility into our marketing campaigns across all Indian markets. We've been able to optimize our spend and increase ROI by understanding exactly what resonates with our audience."
  }
];

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex(prev => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    setCurrentTestimonial(testimonials[currentIndex]);
  }, [currentIndex]);

  return (
    <section id="testimonials" className="py-20 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#FF9933]/10 rounded-full blur-3xl dark:bg-[#FF9933]/5"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#138808]/10 rounded-full blur-3xl dark:bg-[#138808]/5"></div>
      
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
            Don't just take our word for it - hear from some of our satisfied customers across India
          </p>
        </motion.div>
        
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:w-1/3 relative">
                    <img 
                      src={currentTestimonial.image} 
                      alt={currentTestimonial.name} 
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r flex items-end md:items-center p-6">
                      <div className="text-white">
                        <h3 className="text-xl font-bold">{currentTestimonial.name}</h3>
                        <p className="text-sm opacity-90">{currentTestimonial.role}</p>
                        <p className="text-xs opacity-80">{currentTestimonial.company}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                    <svg className="text-brand-blue h-10 w-10 mb-4 opacity-20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064c3.36 0 5.856-2.688 5.856-5.856c0-3.168-2.208-5.472-5.088-5.472c-.576 0-1.344.096-1.536.192c.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36c0 5.088 3.072 8.064 6.624 8.064c3.264 0 5.856-2.688 5.856-5.856c0-3.168-2.304-5.472-5.184-5.472c-.576 0-1.248.096-1.44.192c.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    
                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-6 leading-relaxed">
                      "{currentTestimonial.quote}"
                    </p>
                    
                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-gray-500 dark:text-gray-400">Verified Customer</span>
                      </div>
                      
                      <div className="flex space-x-2">
                        {testimonials.map((testimonial, index) => (
                          <button
                            key={testimonial.id}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-brand-blue' : 'bg-gray-300 dark:bg-gray-700'}`}
                            aria-label={`Go to testimonial ${index + 1}`}
                          ></button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <button 
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-3 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-3 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg z-10 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <img src="https://via.placeholder.com/200x80/F3F4F6/718096?text=TechIndia" alt="TechIndia" className="h-8 object-contain mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://via.placeholder.com/200x80/F3F4F6/718096?text=Bharat+Digital" alt="Bharat Digital" className="h-8 object-contain mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://via.placeholder.com/200x80/F3F4F6/718096?text=InnovateIndia" alt="InnovateIndia" className="h-8 object-contain mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
            <img src="https://via.placeholder.com/200x80/F3F4F6/718096?text=NexGen+Solutions" alt="NexGen Solutions" className="h-8 object-contain mx-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
