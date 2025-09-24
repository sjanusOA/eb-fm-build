import { Home, Palette, Hammer, Shield } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const services = [
  {
    icon: Home,
    title: "Custom Home Design",
    description: "Bespoke architectural design tailored to your lifestyle, preferences, and the unique characteristics of your property.",
    features: ["Architectural Planning", "3D Visualization", "Permit Acquisition", "Site Analysis"],
    image: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDF8fHx8MTc1ODcwMTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Hammer,
    title: "Luxury Construction",
    description: "Premium construction services using the finest materials and master craftsmanship to bring your vision to life.",
    features: ["Quality Materials", "Expert Craftsmanship", "Project Management", "Timeline Adherence"],
    image: "https://images.unsplash.com/photo-1758448755969-8791367cf5c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtYXN0ZXIlMjBzdWl0ZSUyMGJlZHJvb218ZW58MXx8fHwxNzU4NzIyNzU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Palette,
    title: "Spa & Wellness Suites",
    description: "Create your personal sanctuary with luxury spa bathrooms, wellness rooms, and master suites designed for ultimate relaxation and rejuvenation.",
    features: ["Spa Bathrooms", "Steam Rooms", "Wellness Spaces", "Master Suite Design"],
    image: "https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjBiYXRocm9vbXxlbnwxfHx8fDE3NTg3MjI3NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  },
  {
    icon: Shield,
    title: "Wellness & Recreation",
    description: "Transform your home into a complete wellness retreat with state-of-the-art amenities and luxurious recreational spaces.",
    features: ["Home Gyms", "Saunas", "Wine Cellars", "Entertainment Spaces"],
    image: "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob21lJTIwc3BhJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU4NzIyNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
  }
];

export function ServicesSection() {
  return (
    <section className="py-20 bg-brand-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl mb-6 tracking-wide text-black">
            OUR SERVICES
          </h2>
          <p className="font-body text-xl text-gray-600 max-w-3xl mx-auto">
            From initial design concept to final completion, we provide comprehensive luxury home building services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div key={index} className="group relative bg-white overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover image-hover-reveal"
                />
                <div className="absolute inset-0 bg-white/90 group-hover:bg-white/80 transition-colors duration-500"></div>
              </div>
              
              {/* Content */}
              <div className="relative z-10 p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-brand-primary text-white rounded-full flex items-center justify-center mr-4 group-hover:bg-brand-primary/90 transition-colors duration-300">
                    <service.icon size={32} />
                  </div>
                  <h3 className="font-heading text-2xl tracking-wide text-black">{service.title}</h3>
                </div>
                
                <p className="font-body text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-brand-primary rounded-full mr-3"></div>
                      <span className="font-body">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="font-body bg-brand-primary text-white px-8 py-4 text-lg tracking-wide hover:bg-brand-primary/90 transition-colors duration-300 mr-4">
            REQUEST CONSULTATION
          </button>
          <button className="font-body border-2 border-brand-primary text-brand-primary px-8 py-4 text-lg tracking-wide hover:bg-brand-primary hover:text-white transition-all duration-300">
            VIEW PROCESS
          </button>
        </div>
      </div>
    </section>
  );
}