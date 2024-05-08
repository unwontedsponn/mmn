export default function About () {
  return (
    <div className="flex min-h-screen">
      {/* SVG/Image container */}
      <div className="w-1/2">
        {/* Insert your SVG here */}
        <img
          src="/images/about image.webp"
          alt="Abstract Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content container */}
      <div className="w-1/2 flex flex-col justify-center p-12 space-y-6 pr-40">
        <h1 className="text-5xl text-black font-bold">What is MMN?</h1>
        <p className="text-xl body-poppins text-black">
          {`Welcome to the Music Maker Network’s podcast. Where we chat to the people who make music happen. From artists to producers, engineers to composers, if you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place. `}
        </p>
        <button href="/watch-video" className="text-red-500 hover:bg-red-700 hover:text-white text-xl py-2 px-4 w-36 text-left">Watch video</button>
      </div>
    </div>
  );
};