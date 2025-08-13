import Button from '../common/Button';
import { OptimizedBackground } from '../common';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur Effect */}
      <OptimizedBackground
        src="./headerBanner.jpg"
        alt="Jodhpur Cafe Hero Background"
        className="absolute inset-0"
        priority={true}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      </OptimizedBackground>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Welcome to{' '}
          <span className="text-[#F5652F]">Jodhpur Cafe</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed">
          Experience the authentic flavors of Rajasthan with our traditional recipes 
          and modern culinary expertise.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="primary" size="lg" className="text-lg px-8 py-4">
            Book a Table
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-4">
            View Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
