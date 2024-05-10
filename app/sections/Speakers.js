"use client"
import FadeIn from "../utilities/FadeIn";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Wiggle from '../utilities/Wiggle';

const speakers = [
  { episode: 'Episode 4', text: 'TBC', link: '' },
  { episode: 'Episode 3', text: 'King Tides', link: '' },
  { episode: 'Episode 2', text: 'Claudia Kate', link: 'https://open.spotify.com/episode/3hQnBrRYHMO8aY0cy8KYCj?si=6b9e3f915d16424a' },
  { episode: 'Episode 1', text: 'Michael Sebastian', link: 'https://open.spotify.com/episode/1FEhy5RQbkxnd6bfuE75EL?si=67ae94381ed04524' }
];

export default function Speakers( {setSpeakersInView} ) {
  const { ref, inView } = useInView({
    threshold: 0.5,  // Trigger when 50% of the element is in view
  });

  useEffect(() => {
    console.log("Speakers in view:", inView);
    setSpeakersInView(inView);
  }, [inView, setSpeakersInView]);

  return (
    <FadeIn className="pt-12 xl:pb-40 px-10 xl:px-32 xl:flex justify-center items-center xl:space-x-12" ref={ref}>
      {/* Text Section */}
      <div className="md:px-20 xl:w-1/2 xl:pr-10 space-y-4">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Artists</h1>
        <p className="body-poppins text-lg mb-4">
          {`Explore our captivating podcasts featuring some of the world’s most intriguing and knowledgeable musicians, brought to you by the Music Maker Network. Each episode dives deep into the artists' personal journeys and creative processes, revealing insights that encompass everything from overcoming personal challenges to mastering technical intricacies in the music industry. Here's what our speakers bring to each session:`}
        </p>
        <ul className="body-poppins mb-4 text-gray-800 space-y-2">
          <li>
            <span className="font-bold">In-Depth Conversations:</span>
            <div>{`Dive into the life stories of musicians who've shaped their worlds through sound.`}</div>
          </li>
          <li>
            <span className="font-bold">Tech Tips and Tricks:</span>
            <div>Learn valuable techniques directly from the pros in music production and sound engineering.</div>
          </li>
          <li>
            <span className="font-bold">Interactive Q&A Sessions:</span>
            <div>Have your pressing questions answered in real-time by industry veterans.</div>
          </li>
        </ul>
        <button href="/speakers" className="text-center px-4 py-2 text-red border-2 border-red hover:text-white hover:bg-red">View all speakers</button>
      </div>
      
      {/* Speaker Images Grid */}
      <div className="py-16 xl:w-1/3">
        <div className="grid grid-cols-2 gap-4">
          {speakers.map((speaker, i) => (
            <Wiggle key={i} className="flex flex-col items-center hover:cursor-pointer">
            <a href={speaker.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center">
              <img src={`/images/speaker 2.webp`} alt={`Speaker ${i + 1}`} className="w-36 h-36 mb-1" />
              <span className="text-sm text-gray-500">{speaker.episode}</span>
              <span className="hidden xl:block text-sm text-gray-500">{speaker.text}</span>
            </a>
          </Wiggle>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};