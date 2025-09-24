import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 tracking-wide">
            LET'S BUILD TOGETHER
          </h2>
          <p className="font-body text-xl text-brand-secondary max-w-3xl mx-auto">
            Ready to create your dream home? Contact us to schedule a consultation and begin your luxury home building journey.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-heading text-2xl mb-8 tracking-wide">GET IN TOUCH</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center">
                <Phone className="w-6 h-6 mr-4 text-brand-primary" />
                <div>
                  <div className="font-body text-lg">+1 (203) 555-0123</div>
                  <div className="font-body text-gray-400 text-sm">Monday - Friday, 8AM - 6PM</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-6 h-6 mr-4 text-brand-primary" />
                <div>
                  <div className="font-body text-lg">info@elysianbuild.com</div>
                  <div className="font-body text-gray-400 text-sm">We'll respond within 24 hours</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <MapPin className="w-6 h-6 mr-4 text-brand-primary" />
                <div>
                  <div className="font-body text-lg">123 Luxury Lane</div>
                  <div className="font-body text-gray-400 text-sm">Greenwich, CT 06830</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="w-6 h-6 mr-4 text-brand-primary" />
                <div>
                  <div className="font-body text-lg">Showroom Hours</div>
                  <div className="font-body text-gray-400 text-sm">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900 p-6 rounded-lg">
              <h4 className="font-heading text-xl mb-4 tracking-wide">CONSULTATION PROCESS</h4>
              <div className="space-y-3 text-gray-300">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">1</div>
                  <div>
                    <div className="font-body text-white">Initial Consultation</div>
                    <div className="font-body text-sm">Discuss your vision, budget, and timeline</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">2</div>
                  <div>
                    <div className="font-body text-white">Site Analysis</div>
                    <div className="font-body text-sm">Evaluate your property and requirements</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-brand-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5">3</div>
                  <div>
                    <div className="font-body text-white">Proposal & Design</div>
                    <div className="font-body text-sm">Custom design and detailed proposal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h3 className="font-heading text-2xl mb-8 tracking-wide">REQUEST CONSULTATION</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Full Name *</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Email Address *</label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Phone Number</label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="bg-gray-900 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Project Type</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded"
                  >
                    <option value="">Select Project Type</option>
                    <option value="new-construction">New Construction</option>
                    <option value="renovation">Major Renovation</option>
                    <option value="addition">Home Addition</option>
                    <option value="interior">Interior Design</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded"
                  >
                    <option value="">Select Budget Range</option>
                    <option value="1-2m">$1M - $2M</option>
                    <option value="2-5m">$2M - $5M</option>
                    <option value="5-10m">$5M - $10M</option>
                    <option value="10m+">$10M+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm mb-2 text-gray-300">Timeline</label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className="w-full p-3 bg-gray-900 border border-gray-700 text-white rounded"
                  >
                    <option value="">Select Timeline</option>
                    <option value="immediate">Ready to Start</option>
                    <option value="3-months">Within 3 Months</option>
                    <option value="6-months">Within 6 Months</option>
                    <option value="1-year">Within 1 Year</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm mb-2 text-gray-300">Project Details</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your vision, specific requirements, or any questions you have..."
                  className="bg-gray-900 border-gray-700 text-white min-h-[120px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="font-body w-full bg-brand-primary text-white hover:bg-brand-primary/90 text-lg py-6 tracking-wide"
              >
                SCHEDULE CONSULTATION
              </Button>
              
              <p className="text-sm text-gray-400 text-center">
                By submitting this form, you agree to our privacy policy and consent to be contacted about your project.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}