import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    id: 1,
    title: "Modern Waterfront Estate",
    location: "Greenwich, CT",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob3VzZSUyMGV4dGVyaW9yfGVufDF8fHx8MTc1ODY0NjE5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "large"
  },
  {
    id: 2,
    title: "Contemporary Living",
    location: "Westport, CT",
    image: "https://images.unsplash.com/photo-1613545325268-9265e1609167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMGludGVyaW9yJTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NTg2OTg2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium"
  },
  {
    id: 3,
    title: "Gourmet Kitchen",
    location: "New Canaan, CT",
    image: "https://images.unsplash.com/photo-1639405069836-f82aa6dcb900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBsdXh1cnklMjBraXRjaGVufGVufDF8fHx8MTc1ODcwMTM3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "medium"
  },
  {
    id: 4,
    title: "Spa-Like Bathroom",
    location: "Darien, CT",
    image: "https://images.unsplash.com/photo-1638799869566-b17fa794c4de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiYXRocm9vbSUyMGludGVyaW9yfGVufDF8fHx8MTc1ODY5ODM0OXww&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small"
  },
  {
    id: 5,
    title: "Master Suite",
    location: "Stamford, CT",
    image: "https://images.unsplash.com/photo-1625579002297-aeebbf69de89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBiZWRyb29tJTIwaW50ZXJpb3J8ZW58MXx8fHwxNzU4NjQ3MDQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "small"
  },
  {
    id: 6,
    title: "Pool & Outdoor Living",
    location: "Ridgefield, CT",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3VzZSUyMHBvb2wlMjBleHRlcmlvcnxlbnwxfHx8fDE3NTg3MTk3MjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    size: "large"
  }
];

export function FeaturedProjects() {
  return (
    <section className="py-20 bg-black">
      <div className="text-center mb-16 max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="font-heading text-4xl md:text-5xl text-white mb-6 tracking-wide">
          FEATURED PROJECTS
        </h2>
        <p className="font-body text-xl text-brand-secondary max-w-3xl mx-auto">
          Each home we create is a unique masterpiece, meticulously crafted to reflect our clients' vision and lifestyle.
        </p>
      </div>
      
      {/* Mosaic Grid - Full Width */}
      <div className="grid grid-cols-12 gap-[1px] bg-white">
          {/* Large Project 1 */}
          <div className="col-span-12 md:col-span-8 row-span-2 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-[400px] md:h-[500px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-8 left-8 text-white">
                <h3 className="font-heading text-2xl md:text-3xl mb-2 tracking-wide">{projects[0].title}</h3>
                <p className="font-body text-lg text-brand-secondary">{projects[0].location}</p>
              </div>
            </div>
          </div>
          
          {/* Medium Project 1 */}
          <div className="col-span-12 md:col-span-4 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[1].image}
              alt={projects[1].title}
              className="w-full h-[250px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-xl mb-1 tracking-wide">{projects[1].title}</h3>
                <p className="font-body text-sm text-brand-secondary">{projects[1].location}</p>
              </div>
            </div>
          </div>
          
          {/* Medium Project 2 */}
          <div className="col-span-12 md:col-span-4 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[2].image}
              alt={projects[2].title}
              className="w-full h-[250px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-xl mb-1 tracking-wide">{projects[2].title}</h3>
                <p className="font-body text-sm text-brand-secondary">{projects[2].location}</p>
              </div>
            </div>
          </div>
          
          {/* Small Project 1 */}
          <div className="col-span-6 md:col-span-3 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[3].image}
              alt={projects[3].title}
              className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-heading text-lg mb-1 tracking-wide">{projects[3].title}</h3>
                <p className="font-body text-xs text-brand-secondary">{projects[3].location}</p>
              </div>
            </div>
          </div>
          
          {/* Small Project 2 */}
          <div className="col-span-6 md:col-span-3 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[4].image}
              alt={projects[4].title}
              className="w-full h-[200px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="font-heading text-lg mb-1 tracking-wide">{projects[4].title}</h3>
                <p className="font-body text-xs text-brand-secondary">{projects[4].location}</p>
              </div>
            </div>
          </div>
          
          {/* Large Project 2 */}
          <div className="col-span-12 md:col-span-6 relative group overflow-hidden bg-black">
            <ImageWithFallback
              src={projects[5].image}
              alt={projects[5].title}
              className="w-full h-[300px] object-cover transition-all duration-700 group-hover:scale-105 image-hover-reveal"
            />
            <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/20">
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-heading text-2xl mb-2 tracking-wide">{projects[5].title}</h3>
                <p className="font-body text-lg text-brand-secondary">{projects[5].location}</p>
              </div>
            </div>
          </div>
        </div>
        
      <div className="text-center mt-12 max-w-7xl mx-auto px-6 lg:px-8">
        <button className="font-body bg-brand-primary text-white px-8 py-4 text-lg tracking-wide hover:bg-brand-primary/90 transition-colors duration-300">
          VIEW ALL PROJECTS
        </button>
      </div>
    </section>
  );
}