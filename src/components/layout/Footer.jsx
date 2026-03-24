import {
  Facebook,
  Youtube,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full pt-16 pb-6">
      
      {/* MAIN CONTENT */}
      <div className="max-w-[1300px] mx-auto px-3">

        {/* TOP SECTION */}
        <div className="flex justify-between items-start">

          {/* LEFT */}
          <div className="w-[36%]">
            
            <div className="flex items-center gap-4">
              <div className="w-[64px] h-[64px] bg-[#e9e5dc] rounded-2xl flex items-center justify-center">
                <span className="text-green-700 text-xl">📖</span>
              </div>

              <div>
                <h2 className="text-[22px] font-semibold text-[#0f172a]">
                  LEAF
                </h2>
                <p className="text-sm text-gray-500">
                  Book Store Website
                </p>
              </div>
            </div>

            <p className="text-[15px] text-gray-600 mt-6 leading-relaxed max-w-[340px]">
              Leaf is a Book Store Website lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>

            <div className="mt-8">
              <p className="font-semibold text-[#0f172a] mb-4">
                Follow Us
              </p>

              <div className="flex gap-4">
                {[Facebook, Youtube, Twitter, Linkedin, Instagram].map(
                  (Icon, i) => (
                    <div
                      key={i}
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white border shadow-sm hover:shadow-md transition"
                    >
                      <Icon size={18} className="text-gray-600" />
                    </div>
                  )
                )}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="w-[60%] flex justify-between">

            {/* DATABASE */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Database Categories
              </h3>

              <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-[15px] text-gray-600">
                <span>Action</span><span>Law</span>
                <span>Adventure</span><span>Mystery</span>
                <span>Comedy</span><span>Professional</span>
                <span>Crime</span><span>Romance</span>
                <span>Drama</span><span>TV Series</span>
                <span>Fantasy</span>
                <span className="text-green-600 font-medium">View more →</span>
                <span>Horror</span>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Quick Links
              </h3>

              <div className="flex flex-col gap-3 text-[15px] text-gray-600">
                <span>About us</span>
                <span>Contact us</span>
                <span>Products</span>
                <span>Login</span>
                <span>Sign Up</span>
                <span>FAQ</span>
                <span>Shipment</span>
              </div>
            </div>

            {/* STORE */}
            <div>
              <h3 className="text-[18px] font-semibold mb-6">
                Our Store
              </h3>

              <div className="w-[240px] h-[130px] rounded-2xl overflow-hidden mb-5 relative group">
  
  <img
    src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
    alt="store"
    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
  />

  {/* subtle overlay for premium look */}
  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition"></div>

</div>

              <div className="flex flex-col gap-4 text-[15px] text-gray-600">
                
                <div className="flex gap-3">
                  <MapPin size={18} className="text-green-600 mt-1" />
                  <p>
                    832 Thompson Drive, San Fransisco <br />
                    CA 94107, United States
                  </p>
                </div>

                <div className="flex gap-3 items-center">
                  <Phone size={18} className="text-green-600" />
                  <p>+123 345123 556</p>
                </div>

                <div className="flex gap-3 items-center">
                  <Mail size={18} className="text-green-600" />
                  <p>support@leaf.id</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

     <div className="mt-6 relative">

  {/* FULL WIDTH LINE */}
  <div className="absolute left-1/2 -translate-x-1/2 w-screen border-t"></div>

  {/* CONTENT */}
  <div className="pt-6 flex justify-between items-center text-[14px] text-gray-500">
    <p>Leaf Book Store Website - © 2025 All Rights Reserved</p>
    <p>
      Made with <span className="text-red-500">❤</span> by AR DESIGN
    </p>
  </div>

</div>

    </footer>
  );
}