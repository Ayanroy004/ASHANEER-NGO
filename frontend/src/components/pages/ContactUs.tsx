import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function ContactUs() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Have questions or want to get involved? Reach out to us — we’d love
            to hear from you.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-red-500 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Our Address</h4>
                <p className="text-gray-500">
                  123 NGO Street, City Name, Country
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-red-500 text-xl">
                <FaPhoneAlt />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Phone</h4>
                <p className="text-gray-500">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-red-500 text-xl">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-500">contact@ngo.org</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-md font-semibold hover:bg-red-600 transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
