import Hero from '../../components/sections/Hero';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Jodhpur Cafe
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We bring the authentic flavors of Rajasthan to your table.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
