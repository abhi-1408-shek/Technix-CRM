
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Cookie Policy</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
            Last Updated: {currentDate}
          </p>
          
          <section className="mb-8">
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your computer or mobile device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information to the owners of the site. 
              Cookies allow us to recognize your device and store information about your preferences or past actions.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>How We Use Cookies</h2>
            <p>
              We use cookies for various purposes including:
            </p>
            <ul>
              <li><strong>Essential cookies:</strong> These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and account access.</li>
              <li><strong>Analytics cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and services.</li>
              <li><strong>Functionality cookies:</strong> These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.</li>
              <li><strong>Advertising cookies:</strong> These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other sites.</li>
              <li><strong>Session cookies:</strong> These are temporary cookies that are deleted when you close your browser. They help us track your movements from page to page so you don't get asked for the same information you've already provided.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>Cookies We Use</h2>
            <p>
              The following types of cookies may be used when you visit Technix-CRM:
            </p>
            
            <h3 className="mt-4">First-Party Cookies</h3>
            <ul>
              <li><strong>Session ID:</strong> Used to maintain your login session</li>
              <li><strong>User Preferences:</strong> Remember your settings and preferences</li>
              <li><strong>Authentication:</strong> Verify you are logged in to your account</li>
            </ul>
            
            <h3 className="mt-4">Third-Party Cookies</h3>
            <ul>
              <li><strong>Google Analytics:</strong> Track website usage and user behavior</li>
              <li><strong>Marketing Cookies:</strong> Help us understand the effectiveness of our marketing campaigns</li>
              <li><strong>Social Media:</strong> Allow you to share content on social media platforms</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings. You can:
            </p>
            <ul>
              <li>Delete cookies from your device</li>
              <li>Block cookies by activating the setting on your browser that allows you to refuse all or some cookies</li>
              <li>Set your browser to notify you when you receive a cookie</li>
            </ul>
            <p>
              Please note that if you choose to block or delete cookies, you may not be able to access certain areas or features of our website, 
              and some services may not function properly.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Your Consent</h2>
            <p>
              By continuing to use our website, you consent to our use of cookies as described in this Cookie Policy. 
              You can withdraw your consent at any time by changing your browser settings or deleting cookies from your device.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Changes to Our Cookie Policy</h2>
            <p>
              We may update our Cookie Policy from time to time. Any changes will be posted on this page. 
              We encourage you to review this Cookie Policy periodically to stay informed about how we are using cookies.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>Contact Us</h2>
            <p>
              If you have any questions about our use of cookies, please contact us at:
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

export default CookiePolicy;
