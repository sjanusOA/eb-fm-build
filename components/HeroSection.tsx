import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1ODY0NjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
        >
          {/* Fallback to image if video fails */}
          <source src="https://player.vimeo.com/external/387975833.hd.mp4?s=e1c3de6d2b8e4b0fbe7f0b6f5a1c5f2f7b9c3d4e&profile_id=174" type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1ODY0NjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Luxury modern home exterior"
          className="absolute inset-0 w-full h-full object-cover image-hover-reveal"
        />
      </div>
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white max-w-4xl px-6">
          <h1 className="font-heading text-5xl md:text-7xl mb-6 tracking-wide">
            CRAFTING
            <span className="block">EXTRAORDINARY</span>
            <span className="block font-heading text-3xl md:text-5xl text-brand-secondary mt-4">LUXURY HOMES</span>
          </h1>
          
          <p className="font-body text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed text-gray-200">
            Elysian Build creates extraordinary luxury homes that transcend the ordinary, crafting bespoke residences that embody sophistication and timeless elegance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="font-body bg-brand-primary text-white px-8 py-4 text-lg tracking-wide hover:bg-brand-primary/90 transition-colors duration-300">
              VIEW OUR WORK
            </button>
            <button className="font-body border-2 border-brand-secondary text-brand-secondary px-8 py-4 text-lg tracking-wide hover:bg-brand-secondary hover:text-black transition-all duration-300">
              SCHEDULE CONSULTATION
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}