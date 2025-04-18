
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      title: "Lead Management",
      description: "Capture, qualify, and nurture leads throughout your sales pipeline. Track lead sources, assign ownership, and automate follow-ups.",
      items: [
        "Lead capture forms and landing pages",
        "Lead scoring and qualification",
        "Automated follow-up sequences",
        "Source attribution and ROI tracking",
        "Custom fields and lead categories"
      ],
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sales Analytics & Reporting",
      description: "Gain actionable insights with comprehensive reports and dashboards to optimize your sales strategy and team performance.",
      items: [
        "Real-time sales dashboards",
        "Custom report builder",
        "Performance analytics and forecasting",
        "Team and individual metrics",
        "Export and share capabilities"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Customer Engagement",
      description: "Build stronger relationships with integrated communication tools and complete interaction history tracking.",
      items: [
        "Unified communication inbox",
        "Email, SMS, and call tracking",
        "Meeting scheduler and calendar",
        "Customer interaction timeline",
        "Sentiment analysis and feedback collection"
      ],
      image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Workflow Automation",
      description: "Eliminate manual tasks with powerful automation tools that streamline your sales and customer service processes.",
      items: [
        "Visual workflow builder",
        "Trigger-based automation",
        "Task assignment and notification",
        "Multi-step approval processes",
        "Time-based actions and reminders"
      ],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
      <main className="pt-24 pb-20">
        <section className="py-16 md:py-24 bg-gradient-hero">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features to Transform Your Business</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Discover how Technix-CRM's comprehensive suite of tools can help you build stronger customer relationships and accelerate growth.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 mb-24 last:mb-0`}
              >
                <div className="lg:w-1/2">
                  <h2 className="text-3xl font-bold mb-4">{feature.title}</h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{feature.description}</p>
                  
                  <ul className="space-y-3">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="lg:w-1/2">
                  <motion.div 
                    className="rounded-xl overflow-hidden shadow-xl"
                    whileHover={{ scale: 1.03 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  >
                    <img 
                      src={feature.image} 
                      alt={feature.title} 
                      className="w-full h-auto"
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
