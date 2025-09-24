import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <HeroSection />
            <FeaturedProjects />
            <AboutSection />
          </>
        );
      case 'about':
        return (
          <>
            <div className="h-20"></div> {/* Navigation spacer */}
            <AboutSection />
            <div className="py-20 bg-brand-secondary/10">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-wide text-black text-center">
                  OUR TEAM
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-48 h-48 bg-brand-secondary rounded-full mx-auto mb-6"></div>
                    <h3 className="font-heading text-xl mb-2 tracking-wide">Michael Richardson</h3>
                    <p className="font-body text-gray-600 mb-4">Founder & Master Builder</p>
                    <p className="font-body text-sm text-gray-500">25+ years crafting luxury homes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 bg-brand-secondary rounded-full mx-auto mb-6"></div>
                    <h3 className="font-heading text-xl mb-2 tracking-wide">Sarah Chen</h3>
                    <p className="font-body text-gray-600 mb-4">Lead Architect</p>
                    <p className="font-body text-sm text-gray-500">Award-winning residential design</p>
                  </div>
                  <div className="text-center">
                    <div className="w-48 h-48 bg-brand-secondary rounded-full mx-auto mb-6"></div>
                    <h3 className="font-heading text-xl mb-2 tracking-wide">David Martinez</h3>
                    <p className="font-body text-gray-600 mb-4">Project Director</p>
                    <p className="font-body text-sm text-gray-500">Ensuring flawless execution</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case 'services':
        return (
          <>
            <div className="h-20"></div>
            <ServicesSection />
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-wide text-black text-center">
                  OUR PROCESS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {[
                    { step: "01", title: "Consultation", description: "Initial meeting to understand your vision and requirements" },
                    { step: "02", title: "Design", description: "Collaborative design process with detailed plans and 3D visualizations" },
                    { step: "03", title: "Construction", description: "Meticulous construction with regular progress updates" },
                    { step: "04", title: "Completion", description: "Final walkthrough and handover of your dream home" }
                  ].map((phase, index) => (
                    <div key={index} className="text-center">
                      <div className="font-heading text-6xl text-brand-secondary mb-4">{phase.step}</div>
                      <h3 className="font-heading text-xl mb-4 tracking-wide">{phase.title}</h3>
                      <p className="font-body text-gray-600">{phase.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'portfolio':
        return (
          <>
            <div className="h-20"></div>
            <FeaturedProjects />
            <div className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <h2 className="font-heading text-4xl md:text-5xl mb-12 tracking-wide text-black text-center">
                  PROJECT HIGHLIGHTS
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { title: "Greenwich Mansion", details: "12,000 sq ft • 6 bed • 8 bath • $8.5M" },
                    { title: "Westport Contemporary", details: "8,500 sq ft • 5 bed • 6 bath • $5.2M" },
                    { title: "New Canaan Estate", details: "15,000 sq ft • 7 bed • 10 bath • $12M" },
                    { title: "Darien Waterfront", details: "10,000 sq ft • 6 bed • 7 bath • $9.8M" },
                    { title: "Stamford Penthouse", details: "6,000 sq ft • 4 bed • 5 bath • $4.5M" },
                    { title: "Ridgefield Manor", details: "14,000 sq ft • 8 bed • 9 bath • $11.2M" }
                  ].map((project, index) => (
                    <div key={index} className="bg-brand-secondary/10 p-6 hover:bg-brand-secondary/20 transition-colors duration-300">
                      <div className="w-full h-48 bg-brand-secondary mb-4"></div>
                      <h3 className="font-heading text-xl mb-2 tracking-wide">{project.title}</h3>
                      <p className="font-body text-gray-600 text-sm">{project.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
      case 'contact':
        return (
          <>
            <div className="h-20"></div>
            <ContactSection />
          </>
        );
      default:
        return (
          <>
            <HeroSection />
            <FeaturedProjects />
            <AboutSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPageContent()}
      <Footer />
    </div>
  );
}