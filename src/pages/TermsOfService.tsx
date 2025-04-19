
import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Terms of Service</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-center">
            Last Updated: {currentDate}
          </p>
          
          <section className="mb-8">
            <h2>1. Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Technix-CRM, 
              concerning your access to and use of our website and services. By accessing or using our service, 
              you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>2. Description of Service</h2>
            <p>
              Technix-CRM provides a customer relationship management platform that allows businesses to manage 
              customer interactions, sales processes, and business analytics. Our services include but are not limited to:
            </p>
            <ul>
              <li>Contact and lead management</li>
              <li>Sales pipeline tracking</li>
              <li>Task and workflow management</li>
              <li>Analytics and reporting</li>
              <li>Integration with third-party applications</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our platform, you must register for an account. When you register, 
              you agree to provide accurate, current, and complete information and to update this information to 
              maintain its accuracy. You are responsible for maintaining the confidentiality of your account and password 
              and for restricting access to your account. You agree to accept responsibility for all activities that occur 
              under your account or password.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>4. Subscription and Payments</h2>
            <p>
              Certain aspects of our service may require payment of fees. All fees are stated in US dollars. 
              You agree to pay all applicable fees for the services you select. Subscription fees are billed in advance 
              on a monthly or annual basis. There will be no refunds for partial months of service or for periods during 
              which your account remains open but unused.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>5. Intellectual Property</h2>
            <p>
              The Service and its original content, features, and functionality are and will remain the exclusive property 
              of Technix-CRM and its licensors. The Service is protected by copyright, trademark, and other laws of both the 
              United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product 
              or service without the prior written consent of Technix-CRM.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>6. User Content</h2>
            <p>
              Our Service allows you to upload, store, and share content, including but not limited to text, files, images, 
              and data ("User Content"). You retain all rights to your User Content. By uploading User Content to our platform, 
              you grant Technix-CRM a license to use, store, and process your User Content solely for the purpose of providing 
              our services to you.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>7. Prohibited Use</h2>
            <p>
              You agree not to use the Service for any purpose that is illegal or prohibited by these Terms. You may not use 
              the Service in any manner that could damage, disable, overburden, or impair the Service or interfere with any 
              other party's use of the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>8. Termination</h2>
            <p>
              We may terminate or suspend your account and access to the Service immediately, without prior notice or liability, 
              under our sole discretion, for any reason whatsoever, including without limitation if you breach the Terms. 
              Upon termination, your right to use the Service will immediately cease.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>9. Limitation of Liability</h2>
            <p>
              In no event shall Technix-CRM, nor its directors, employees, partners, agents, suppliers, or affiliates, be 
              liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, 
              loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or 
              inability to access or use the Service.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is 
              material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a 
              material change will be determined at our sole discretion.
            </p>
          </section>
          
          <section className="mb-8">
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>Email: legal@technixcrm.com</p>
            <p>Address: 123 Tech Plaza, San Francisco, CA 94105</p>
          </section>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
