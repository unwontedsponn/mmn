const Hero = () => {
  return (
    <div className="bg-red-950 relative text-white" style={{ backgroundImage: 'url("/path/to/your/hero-background.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <h1 className="text-6xl font-bold mb-4">Music Maker Network</h1>
        <p className="text-xl mb-6">LONDON, UK</p>
        <p className="max-w-2xl text-lg mb-6">
          {`Learn, connect and be inspired by the music industry's hottest, most intriguing innovators and emerging talent at the Music Maker Network launch night.`}
        </p>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          BUY TICKETS
        </button>
      </div>
    </div>
  );
};

export default Hero;
