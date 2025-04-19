
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
            Last Updated: {currentDate}
          </p>
          
          <section className="mb-8">
            <h2>Introduction</h2>
            <p>
              At Technix-CRM, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
              and safeguard your information when you visit our website or use our customer relationship management platform.
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you register for an account, create or modify your profile, 
              set preferences, sign-up for or make purchases through our platform. This information may include:
            </p>
            <ul>
              <li>Personal information such as your name, email address, phone number, and company details</li>
              <li>Account credentials including usernames and passwords</li>
              <li>Payment information</li>
              <li>Customer data that you input or upload into our system</li>
              <li>Correspondence that you send to us</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>How We Use Your Information</h2>
            <p>We may use the information we collect from you to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Process transactions and send related information</li>
              <li>Send administrative messages, updates, and security alerts</li>
              <li>Respond to your comments, questions, and requests</li>
              <li>Provide customer service and technical support</li>
              <li>Monitor and analyze trends, usage, and activities</li>
              <li>Personalize and improve the service and provide tailored content</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>Data Security</h2>
            <p>
              We have implemented appropriate technical and organizational security measures designed to protect the security 
              of any personal information we process. However, please also remember that we cannot guarantee that the internet 
              itself is 100% secure. Although we will do our best to protect your personal information, transmission of personal 
              information to and from our Services is at your own risk.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this privacy policy. 
              We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, 
              and enforce our policies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, such as:
            </p>
            <ul>
              <li>The right to access information we have about you</li>
              <li>The right to request that we correct any personal information we have about you</li>
              <li>The right to request that we delete any personal information we have about you</li>
              <li>The right to opt-out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the contact information provided below.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Contact Us</h2>
            <p>
              If you have any questions or concerns about our privacy policy or data processing, please contact us at:
            </p>
            <p>Email: privacy@technixcrm.com</p>
            <p>Address: 123 Tech Plaza, San Francisco, CA 94105</p>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
