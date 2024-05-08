const Hero = () => {
  return (
    <div className="bg-red-950 relative text-white" style={{ backgroundImage: 'url("/path/to/your/hero-background.jpg")', backgroundSize: 'cover', height: '100vh' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center h-full">
        <h1 className="text-6xl font-bold mb-4">Music Maker Network</h1>
        <p className="text-xl mb-6">LONDON, UK</p>
        <p className="max-w-2xl text-lg mb-6">
          {`If you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place.`}
        </p>
        <a 
          href="https://open.spotify.com/show/7Hg8aL7xyELS2CJ9TKYykC?si=eb671e91da174363" 
          className="bg-red-500 text-white font-bold px-4 py-2 rounded hover:bg-red-700 text-center" 
          target="_blank" 
          rel="noopener noreferrer">
            LISTEN TO EPISODES
        </a>
      </div>
    </div>
  );
};

export default Hero;
