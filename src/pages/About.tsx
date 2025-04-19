
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "PERSON-1",
      position: "CEO & Founder",
      bio: "With over 15 years of experience in SaaS and CRM solutions, PERSON-1 founded Technix-CRM to help businesses build stronger customer relationships.",
      image: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "PERSON-2",
      position: "CTO",
      bio: "PERSON-2 leads our technology team, focusing on building a scalable, secure, and innovative CRM platform that meets the evolving needs of our customers.",
      image: "https://randomuser.me/api/portraits/men/15.jpg"
    },
    {
      name: "PERSON-3",
      position: "Head of Product",
      bio: "PERSON-3 ensures that Technix-CRM delivers an exceptional user experience while continually adding features that drive business value for our clients.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "PERSON-4",
      position: "Customer Success Director",
      bio: "PERSON-4 leads our customer success team, ensuring that every client gets maximum value from our platform through dedicated support and training.",
      image: "https://randomuser.me/api/portraits/men/23.jpg"
    }
  ];

  const values = [
    {
      title: "Customer Focus",
      description: "We prioritize understanding and meeting the unique needs of each customer, ensuring their success is our success."
    },
    {
      title: "Innovation",
      description: "We constantly push the boundaries of what's possible in CRM technology, developing new features that deliver real business value."
    },
    {
      title: "Simplicity",
      description: "We believe powerful software doesn't have to be complicated. We strive for intuitive design and ease of use in everything we build."
    },
    {
      title: "Integrity",
      description: "We operate with transparency and honesty in all our interactions, building long-term trust with our customers and partners."
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About Technix-CRM</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                We're on a mission to transform how businesses build and manage customer relationships.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-lg">
                  <p>
                    Founded in 2018, Technix-CRM began with a simple observation: most CRM systems were either too complex for small businesses or too basic for growing enterprises.
                  </p>
                  <p>
                    Our founder, PERSON-1, had spent years as a sales director struggling with CRM tools that promised much but delivered little. She envisioned a platform that would be both powerful and intuitive, providing businesses of all sizes with the tools they need to build meaningful customer relationships.
                  </p>
                  <p>
                    Today, Technix-CRM serves thousands of businesses worldwide, from startups to established enterprises. Our platform continues to evolve based on customer feedback and industry trends, always staying true to our mission of making customer relationship management accessible, effective, and even enjoyable.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:w-1/2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1000&q=80" 
                    alt="Technix-CRM team" 
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-lg font-semibold">Our headquarters in New Delhi, Delhi</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Our Values</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                These core principles guide everything we do at Technix-CRM.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
                >
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl font-bold mb-6">Our Leadership Team</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Meet the passionate people driving innovation at Technix-CRM.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm text-center"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-brand-blue dark:text-brand-blue-light font-medium mb-4">{member.position}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{member.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
