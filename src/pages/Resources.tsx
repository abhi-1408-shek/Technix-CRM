
import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { motion } from 'framer-motion';
import { Search, Calendar, File, BookOpen, Users, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogs = [
    {
      title: "10 Ways to Improve Your Sales Process with Technix-CRM",
      date: "April 12, 2025",
      category: "Sales",
      excerpt: "Discover actionable strategies to optimize your sales workflow and close more deals using our powerful CRM tools.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "The Future of Customer Relationship Management",
      date: "April 5, 2025",
      category: "Industry Trends",
      excerpt: "Explore emerging technologies and trends that are reshaping how businesses interact with and manage customer relationships.",
      image: "https://images.unsplash.com/photo-1487088678257-3a541e6e3922?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Building an Effective Lead Nurturing Strategy",
      date: "March 28, 2025",
      category: "Marketing",
      excerpt: "Learn how to create automated lead nurturing campaigns that convert prospects into loyal customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const guides = [
    {
      title: "Getting Started with Technix-CRM",
      description: "A comprehensive guide for new users to set up and configure their Technix-CRM workspace.",
      icon: <File className="text-brand-blue dark:text-brand-blue-light" />
    },
    {
      title: "Advanced Lead Scoring Techniques",
      description: "Learn how to implement sophisticated lead scoring models to prioritize your most promising opportunities.",
      icon: <BookOpen className="text-brand-blue dark:text-brand-blue-light" />
    },
    {
      title: "Automating Your Sales Workflow",
      description: "Step-by-step instructions for creating effective automation rules and triggers.",
      icon: <Users className="text-brand-blue dark:text-brand-blue-light" />
    },
    {
      title: "Data Import and Migration Guide",
      description: "Seamlessly transfer your existing customer data to Technix-CRM with this detailed walkthrough.",
      icon: <File className="text-brand-blue dark:text-brand-blue-light" />
    }
  ];

  const webinars = [
    {
      title: "Mastering Customer Retention Strategies",
      date: "April 25, 2025",
      time: "11:00 AM PST",
      presenter: "Sarah Johnson, CEO",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Integrating Technix-CRM with Your Tech Stack",
      date: "May 10, 2025",
      time: "2:00 PM PST",
      presenter: "Michael Chen, CTO",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const caseStudies = [
    {
      title: "How TechGrow Inc. Increased Sales by 35%",
      company: "TechGrow Inc.",
      industry: "SaaS",
      result: "35% increase in sales",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Elevate Solutions: Improving Customer Satisfaction",
      company: "Elevate Solutions",
      industry: "Professional Services",
      result: "40% improvement in CSAT scores",
      image: "https://images.unsplash.com/photo-1573497161079-f3fd25cc6b90?auto=format&fit=crop&w=800&q=80"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Resources & Learning</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Explore our knowledge base, blog articles, webinars, and case studies to get the most out of Technix-CRM.
              </p>
              
              <div className="max-w-2xl mx-auto relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 rounded-full shadow-md"
                />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="blog" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-12">
                <TabsTrigger value="blog" className="text-lg py-3">Blog</TabsTrigger>
                <TabsTrigger value="guides" className="text-lg py-3">Guides</TabsTrigger>
                <TabsTrigger value="webinars" className="text-lg py-3">Webinars</TabsTrigger>
                <TabsTrigger value="case-studies" className="text-lg py-3">Case Studies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="blog" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="aspect-video overflow-hidden">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                            <Calendar className="h-4 w-4 mr-1" /> {blog.date}
                          </span>
                          <span className="mx-2 text-gray-300 dark:text-gray-600">•</span>
                          <span className="text-sm text-brand-blue dark:text-brand-blue-light">
                            {blog.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">
                          <Link to="#">{blog.title}</Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                          {blog.excerpt}
                        </p>
                        <Link to="#">
                          <Button variant="outline" className="w-full">Read Article</Button>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button>View All Blog Posts</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="guides" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {guides.map((guide, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex items-start">
                        <div className="flex-shrink-0 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg mr-4">
                          {guide.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">
                            <Link to="#">{guide.title}</Link>
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {guide.description}
                          </p>
                          <Link to="#" className="text-brand-blue hover:text-brand-blue-dark dark:text-brand-blue-light dark:hover:text-white font-medium flex items-center">
                            Read Guide
                            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button>Browse All Guides</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="webinars" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {webinars.map((webinar, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <img 
                          src={webinar.image} 
                          alt={webinar.title} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                          <div className="p-6 text-white">
                            <div className="flex items-center mb-2">
                              <Video className="mr-2 h-4 w-4" />
                              <span>Upcoming Webinar</span>
                            </div>
                            <p className="font-medium">{webinar.date} • {webinar.time}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">
                          <Link to="#">{webinar.title}</Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          Presented by: {webinar.presenter}
                        </p>
                        <Button className="w-full">Register Now</Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="mt-12 p-8 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="mb-6 md:mb-0 md:mr-8">
                      <h3 className="text-2xl font-bold mb-2">On-Demand Webinars</h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Missed a live session? Access our library of recorded webinars at your convenience.
                      </p>
                    </div>
                    <Button>View Recordings</Button>
                  </div>
                </motion.div>
              </TabsContent>
              
              <TabsContent value="case-studies" className="mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {caseStudies.map((study, index) => (
                    <motion.div
                      key={index}
                      custom={index}
                      variants={fadeInUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="md:w-2/5 overflow-hidden">
                        <img 
                          src={study.image} 
                          alt={study.company} 
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="md:w-3/5 p-6">
                        <div className="mb-2">
                          <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-brand-blue dark:text-brand-blue-light text-sm px-3 py-1 rounded-full">
                            {study.industry}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 hover:text-brand-blue dark:hover:text-brand-blue-light transition-colors">
                          <Link to="#">{study.title}</Link>
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-1">
                          <strong>Client:</strong> {study.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          <strong>Result:</strong> <span className="text-green-600 dark:text-green-400">{study.result}</span>
                        </p>
                        <Link to="#" className="text-brand-blue hover:text-brand-blue-dark dark:text-brand-blue-light dark:hover:text-white font-medium flex items-center">
                          Read Case Study
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                          </svg>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Button>View All Case Studies</Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
