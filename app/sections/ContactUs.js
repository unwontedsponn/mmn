"use client"

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log("Form submitted!");
  };

  return (
    <div className="bg-red-950 relative text-white py-12 px-8" style={{ backgroundImage: 'url("/images/footer pic.jpg")' }}>
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div className="w-1/2">
          <p>Got other questions?</p>
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="mb-8 body-poppins">Creator? Influencer? Entrepreneur? The Music Maker Network welcomes enquiries from passionate professionals looking to collaborate. Drop us a line.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Full Name" className="w-full p-2 bg-transparent border-b-2 border-white outline-none" required />
            <input type="email" placeholder="Email" className="w-full p-2 bg-transparent border-b-2 border-white outline-none" required />
            <input type="text" placeholder="Phone" className="w-full p-2 bg-transparent border-b-2 border-white outline-none" />
            <button type="submit" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">SUBMIT</button>
          </form>
        </div>
        <div className="w-1/3">
          {/* Optionally place additional content or leave it for styling */}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
