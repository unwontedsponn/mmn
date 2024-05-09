import FadeIn from "../utilities/FadeIn";

export default function About () {
  return (
    <FadeIn className="flex min-h-screen">
      
      {/* SVG/Image container */}
      <div className="hidden lg:block w-1/2">
        <img
          src="/images/about image.webp"
          alt="Abstract Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content container */}
      <div className="lg:w-1/2 flex flex-col justify-center p-12 space-y-6 lg:pr-40">
        <h1 className="text-5xl text-black font-bold">What is MMN?</h1>
        <p className="text-xl body-poppins text-black">
          {`Welcome to the Music Maker Network’s podcast. Where we chat to the people who make music happen. From artists to producers, engineers to composers, if you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place. `}
        </p>
        <button href="/watch-video" className="text-center border-2 border-red text-white bg-red lg:text-red lg:bg-snow hover:bg-red hover:text-white text-xl py-2 px-4 w-40 text-left">Watch video</button>
      </div>
    </FadeIn>
  );
};