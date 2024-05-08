import Link from 'next/link';

const Artists = () => {
  return (
    <div className="py-12 px-24 flex justify-between">
      {/* Text Section */}
      <div className="w-1/2 pr-10">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Highlight speakers</h1>
        <p className="body-poppins text-lg mb-4">
          {`We've gone all out for our launch night, with [total number] unmissable speakers who've developed exciting presentations exclusively for the Music Maker Network. Our speakers are also offering:`}
        </p>
        <ul className="body-poppins list-disc list-inside mb-4 text-gray-600">
          <li>Q+A sessions</li>
          <li>Freebies and discounts</li>
          <li>Real-time feedback on YOUR projects</li>
        </ul>
        <Link href="/speakers" className="text-red-600 hover:text-red-800 font-bold">View all speakers</Link>
      </div>
      
      {/* Speaker Images Grid */}
      <div className="w-1/3">
        <div className="grid grid-cols-2 gap-4">
          {/* Placeholder for speakers */}
          {[...Array(4)].map((_, i) => (
            <div key={i} className="flex flex-col items-center">
              <img src="/images/speaker.webp" alt="Speaker Placeholder" className="w-24 h-24 mb-1" />
              <span className="text-sm text-gray-500">TBC</span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Additional Imagery - Red Accent on the Far Right */}
      <div className="w-1/12 bg-red-600 h-full"></div>
    </div>
  );
};

export default Artists;
