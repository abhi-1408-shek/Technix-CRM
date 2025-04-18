
import React from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle } from 'lucide-react';

const benefits = [
  "30% increase in sales team productivity",
  "25% higher customer retention rates",
  "50% reduction in lead response time",
  "Centralized customer data and interaction history",
  "Automated workflows to eliminate manual tasks",
  "Real-time analytics and performance insights"
];

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&w=1000&q=80" 
              alt="Technix-CRM Benefits" 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          
          <div className="lg:w-1/2 lg:pl-16 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Businesses Choose Technix-CRM</h2>
            <p className="text-lg text-gray-600 mb-8">
              Join thousands of companies that have transformed their customer relationships and boosted sales performance with our powerful CRM solution.
            </p>
            
            <ul className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" size={20} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            
            <Button className="cta-button-primary">
              Start Your Free Trial
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
