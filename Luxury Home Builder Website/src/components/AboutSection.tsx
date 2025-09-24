import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutSection() {
  return (
    <section className="py-20 bg-brand-secondary/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl mb-8 tracking-wide text-black">
              ABOUT US
            </h2>
            <p className="font-body text-xl mb-6 text-gray-700 leading-relaxed">
              For over two decades, Elysian Build has been the pinnacle of custom home construction in Connecticut's most prestigious communities.
            </p>
            <p className="font-body text-lg mb-6 text-gray-600 leading-relaxed">
              We specialize in creating extraordinary residences that seamlessly blend architectural innovation with timeless elegance. Our team of master craftsmen, renowned architects, and interior designers work collaboratively to bring your vision to life.
            </p>
            <p className="font-body text-lg mb-8 text-gray-600 leading-relaxed">
              From initial concept to final walk-through, we maintain the highest standards of quality and attention to detail, ensuring that every home we build becomes a legacy for generations to come.
            </p>
            
            <div className="grid grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="font-heading text-3xl mb-2 text-brand-primary">25+</div>
                <div className="font-body text-sm text-gray-600 tracking-wide">YEARS EXPERIENCE</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl mb-2 text-brand-primary">150+</div>
                <div className="font-body text-sm text-gray-600 tracking-wide">HOMES BUILT</div>
              </div>
              <div className="text-center">
                <div className="font-heading text-3xl mb-2 text-brand-primary">100%</div>
                <div className="font-body text-sm text-gray-600 tracking-wide">CLIENT SATISFACTION</div>
              </div>
            </div>
            
            <button className="font-body bg-brand-primary text-white px-8 py-4 text-lg tracking-wide hover:bg-brand-primary/90 transition-colors duration-300">
              LEARN MORE
            </button>
          </div>
          
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTg2OTg2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury home interior"
                className="w-full h-[500px] object-cover image-hover-reveal"
              />
            </div>
            <div className="absolute top-8 -left-8 w-full h-full border-2 border-brand-secondary -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}