import Link from 'next/link';

const Artists = () => {
  return (
    <div className="py-12 px-32 flex justify-center items-center space-x-12">
      {/* Text Section */}
      <div className="w-1/2 pr-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Artists</h1>
        <p className="body-poppins text-lg mb-4">
          {`Explore our captivating podcasts featuring some of the world’s most intriguing and knowledgeable musicians, brought to you by the Music Maker Network. Each episode dives deep into the artists' personal journeys and creative processes, revealing insights that encompass everything from overcoming personal challenges to mastering technical intricacies in the music industry. Here's what our speakers bring to each session:`}
        </p>
        <ul className="body-poppins list-disc list-inside mb-4 text-gray-600">
          <li><span className="font-bold">In-Depth Conversations:</span> Dive into the life stories of musicians who've shaped their worlds through sound.</li>
          <li><span className="font-bold">Tech Tips and Tricks:</span> Learn valuable techniques directly from the pros in music production and sound engineering.</li>
          <li><span className="font-bold">Interactive Q&A Sessions:</span> Have your pressing questions answered in real-time by industry veterans.</li>
        </ul>
        <Link href="/speakers" className="text-red-600 hover:text-red-800 font-bold">View all speakers</Link>
      </div>
      
      {/* Speaker Images Grid */}
      <div className="w-1/3">
        <div className="grid grid-cols-2 gap-4">
          {/* Placeholder for speakers */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src="/images/speaker.webp" alt="Speaker Placeholder" className="w-36 h-36 mb-1" />
              <span className="text-sm text-gray-500">TBC</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Artists;
