"use client"
import FadeIn from "../utilities/FadeIn";

export default function ContactUs() {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="relative flex items-center justify-center text-white py-12 px-8 bg-cover bg-center" style={{ backgroundImage: 'url("/images/footer pic.jpg")' }}>
      <FadeIn className="w-full max-w-4xl p-8 bg-black bg-opacity-50 rounded-lg">
        <div className="flex flex-col items-center">
          <p className="text-lg text-red">Got other questions?</p>
          <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
          <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-6">
            <input type="text" placeholder="Full Name" className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" required />
            <input type="email" placeholder="Email" className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" required />
            <input type="text" placeholder="Phone" className="w-full p-3 bg-transparent border-b-2 border-white outline-none text-white placeholder-white" />
            <button type="submit" className="w-full border-2 border-white bg-red-500 hover:bg-red hover:border-red text-white font-bold py-3 px-4 transition-colors duration-200">SUBMIT</button>
          </form>
        </div>
        <p className="mt-8 text-center">Creator? Influencer? Entrepreneur?<br/>The Music Maker Network welcomes enquiries from passionate professionals looking to collaborate. Drop us a line.</p>
      </FadeIn>
    </div>
  );
};
