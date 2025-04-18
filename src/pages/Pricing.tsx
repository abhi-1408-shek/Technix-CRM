
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { motion } from 'framer-motion';
import { Check, HelpCircle } from 'lucide-react';
import { Switch } from "@/components/ui/switch";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small businesses and startups",
      monthlyPrice: 29,
      annualPrice: 24,
      features: [
        "Up to 5 team members",
        "Lead management",
        "Contact management",
        "Email integration",
        "Basic reporting",
        "Mobile app access",
        "5GB storage",
        "Email support"
      ],
      popular: false,
      color: "bg-blue-500"
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 69,
      features: [
        "Up to 20 team members",
        "All Starter features",
        "Sales automation",
        "Custom dashboards",
        "Advanced reporting",
        "API access",
        "20GB storage",
        "Priority support",
        "Sales forecasting",
        "Document management"
      ],
      popular: true,
      color: "bg-brand-orange"
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 149,
      annualPrice: 129,
      features: [
        "Unlimited team members",
        "All Professional features",
        "Dedicated account manager",
        "Custom integrations",
        "Advanced security features",
        "Single sign-on",
        "Unlimited storage",
        "24/7 phone support",
        "Custom training",
        "Enterprise-grade analytics",
        "Multi-department management"
      ],
      popular: false,
      color: "bg-purple-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Choose the plan that's right for your business, with no hidden fees or long-term commitments.
              </p>
              
              <div className="flex items-center justify-center space-x-4 mb-12">
                <span className={`text-lg ${!isAnnual ? "font-semibold" : ""}`}>Monthly</span>
                <Switch
                  checked={isAnnual}
                  onCheckedChange={setIsAnnual}
                  className="data-[state=checked]:bg-brand-orange"
                />
                <span className={`text-lg ${isAnnual ? "font-semibold" : ""}`}>
                  Annually <span className="text-sm text-brand-orange">Save 15%</span>
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative rounded-2xl overflow-hidden border ${plan.popular ? 'border-brand-orange shadow-lg scale-105 z-10' : 'border-gray-200 dark:border-gray-700'} bg-white dark:bg-gray-800 transition-all duration-300 hover:shadow-xl`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-brand-orange text-white text-xs font-semibold px-4 py-1 uppercase rounded-bl-lg">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className={`${plan.color} h-2 w-full`}></div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-bold">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 ml-2">
                        /month {isAnnual && "(billed annually)"}
                      </span>
                    </div>
                    
                    <Button className={`w-full mb-8 ${plan.popular ? 'bg-brand-orange hover:bg-orange-600' : ''}`}>
                      Start {plan.name} Plan
                    </Button>
                    
                    <div className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <Check size={18} className="text-green-500 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be prorated for the remainder of your billing cycle. When downgrading, changes will take effect at the end of your current billing cycle.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">Is there a free trial?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, we offer a 14-day free trial on all plans. No credit card required to start your trial, and you can cancel anytime before the trial ends.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-gray-600 dark:text-gray-300">We accept all major credit cards (Visa, Mastercard, American Express, Discover), as well as PayPal for payment. Enterprise customers can also arrange for invoice payments.</p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold mb-2">Can I cancel my subscription?</h3>
                  <p className="text-gray-600 dark:text-gray-300">Yes, you can cancel your subscription at any time. When you cancel, you'll maintain access to your account until the end of your current billing period.</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
