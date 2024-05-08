import Image from 'next/image'; // Adjust this if you prefer <img> for SVG
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex min-h-screen bg-orange-50">
      {/* SVG/Image container */}
      <div className="w-1/2">
        {/* Insert your SVG here */}
        <img
          src="/images/DALL·E 2024-05-07 14.34.50 - Abstract modern art style SVG illustration for a webpage about section. The image should feature an abstract, fluid shape in vibrant red color, resemb.webp"
          alt="Abstract Art"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text content container */}
      <div className="w-1/2 flex flex-col justify-center p-12 space-y-6 bg-white">
        <h1 className="text-4xl font-bold">What is MMN?</h1>
        <p className="text-xl body-poppins">
          {`Welcome to the Music Maker Network’s podcast. Where we chat to the people who make music happen. From artists to producers, engineers to composers, if you are looking to learn more about the ‘behind the scenes’ of music, you’ve come to the right place. `}
        </p>
        <Link href="/watch-video" className="text-red-500 hover:text-red-700 font-bold">Watch video</Link>
      </div>
    </div>
  );
};

export default About;
