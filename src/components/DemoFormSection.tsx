
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, AlertCircle } from 'lucide-react';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DemoFormSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phoneNumber: '',
    companySize: '',
    industry: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    
    if (!formData.companySize) newErrors.companySize = 'Company size is required';
    
    if (!formData.industry) newErrors.industry = 'Industry is required';
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/.test(formData.phoneNumber.replace(/[\s-]/g, ''))) {
      newErrors.phoneNumber = 'Please enter a valid Indian phone number';
    }
    
    if (!formData.message.trim()) newErrors.message = 'Please provide some details about your needs';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success notification
      toast({
        title: "Demo Request Submitted",
        description: "Thank you! Our team will contact you shortly to schedule your demo.",
        variant: "default",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        phoneNumber: '',
        companySize: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      // Error notification
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const industries = [
    "IT & Software Services",
    "Healthcare & Pharmaceuticals",
    "Banking & Financial Services",
    "Manufacturing",
    "Retail & E-commerce",
    "Education & Training",
    "Media & Entertainment",
    "Real Estate & Construction",
    "Travel & Hospitality",
    "Consulting & Professional Services",
    "Telecommunications",
    "Other"
  ];

  return (
    <section id="demo" className="py-20 bg-gradient-to-r from-[#0ea5e9] to-[#1e40af] dark:bg-[#18181c] dark:bg-none text-white transition-colors duration-500">
  {/* Indian-style illustration/banner */}
  <div className="flex justify-center mb-8">
    <img
      src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
      alt="Indian business teamwork illustration"
      className="rounded-2xl shadow-lg w-full max-w-2xl object-cover"
      style={{ maxHeight: 220 }}
    />
  </div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center flex items-center justify-center gap-3">
  Ready to Transform Your Business?
  <img
    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
    alt="Indian Flag"
    className="inline-block h-7 w-10 rounded shadow"
    style={{ marginBottom: 4 }}
  />
</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto text-center mb-12">
            Schedule a personalized demo with our product specialists and discover how Technix-CRM can help your business grow in the Indian market.
          </p>
          
          <div className="bg-white dark:bg-[#23232a] rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-800 transition-colors duration-500">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Request Your Free Demo</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-700 dark:text-white font-semibold">Full Name *</Label>
                  <Input
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className={`text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-[#23232a] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-brand-orange transition-colors duration-300 ${errors.name ? 'border-red-500' : ''}`}
  placeholder="Rajesh Kumar"
/>
                  {errors.name && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.name}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 dark:text-white font-semibold">Business Email *</Label>
                  <Input
  id="email"
  name="email"
  type="email"
  value={formData.email}
  onChange={handleChange}
  className={`text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-[#23232a] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-brand-orange transition-colors duration-300 ${errors.email ? 'border-red-500' : ''}`}
  placeholder="rajesh@company.in"
/>
                  {errors.email && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.email}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700 dark:text-white font-semibold">Company Name *</Label>
                  <Input
  id="company"
  name="company"
  value={formData.company}
  onChange={handleChange}
  className={`text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-[#23232a] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-brand-orange transition-colors duration-300 ${errors.company ? 'border-red-500' : ''}`}
  placeholder="Innovate Solutions Pvt. Ltd."
/>
                  {errors.company && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.company}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-gray-700 dark:text-white font-semibold">Phone Number *</Label>
                  <Input
  id="phoneNumber"
  name="phoneNumber"
  value={formData.phoneNumber}
  onChange={handleChange}
  className={`text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-[#23232a] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-brand-orange transition-colors duration-300 ${errors.phoneNumber ? 'border-red-500' : ''}`}
  placeholder="+91 98765 43210"
/>
                  {errors.phoneNumber && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="companySize" className="text-gray-700 dark:text-white font-semibold">Company Size *</Label>
                  <Select onValueChange={(value) => handleSelectChange('companySize', value)} value={formData.companySize}>
                    <SelectTrigger className={errors.companySize ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select company size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501+">501+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.companySize && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.companySize}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="industry" className="text-gray-700 dark:text-white font-semibold">Industry *</Label>
                  <Select onValueChange={(value) => handleSelectChange('industry', value)} value={formData.industry}>
                    <SelectTrigger className={errors.industry ? "border-red-500" : ""}>
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((industry) => (
                        <SelectItem key={industry} value={industry}>{industry}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.industry && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.industry}
                    </p>
                  )}
                </div>
                
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-white font-semibold">How can we help? *</Label>
                  <Textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  className={`min-h-[120px] text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 bg-white dark:bg-[#23232a] border border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-blue-400 dark:focus:ring-brand-orange transition-colors duration-300 ${errors.message ? 'border-red-500' : ''}`}
  placeholder="Please tell us about your current challenges and what you're looking for in a CRM solution..."
/>
                  {errors.message && (
                    <p className="text-red-500 text-sm flex items-center mt-1">
                      <AlertCircle className="w-4 h-4 mr-1" /> {errors.message}
                    </p>
                  )}
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <CheckCircle className="h-4 w-4 text-brand-blue" />
                <span>Your data is secure and will never be shared with third parties.</span>
              </div>
              
              <div className="flex justify-center md:justify-end mt-6">
                <Button 
                  type="submit" 
                  className="bg-brand-orange hover:bg-orange-600 text-white py-2 px-6"
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : 'Schedule My Demo'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoFormSection;
