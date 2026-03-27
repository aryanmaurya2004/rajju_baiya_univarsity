 'use client'
 
 function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-purple-900 via-black to-indigo-900 text-white">
      
      <div className="text-center px-6">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          𝓣𝓱𝓮 𝓜𝓪𝓰𝓲𝓬 𝓸𝓯 𝓽𝓱𝓮 𝓦𝓸𝓻𝓵𝓭
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Discover the beauty, mystery and magic hidden in every corner of the world ✨
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-xl transition">
            Explore Magic
          </button>
          
          <button className="px-6 py-3 border border-white hover:bg-white hover:text-purple-800 rounded-xl transition">
            Learn More
          </button>
        </div>

      </div>
    </section>
  );
}
export default Hero