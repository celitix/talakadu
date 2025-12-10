import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative text-white">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero2.jpg" 
          alt="Footer Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
      </div>

      {/* Footer Content */}
      <div className="relative container mx-auto px-6 py-12 grid md:grid-cols-4 sm:grid-cols-2 gap-10 z-10">
        {/*  Logo */}
        <div>
         <Link href="/"><div className="text-4xl font-bold mb-4 text-[#c6957d]">Talakadu</div></Link>
          <p className="text-gray-300 text-base">
            Explore heritage temples partially buried under shifting sands and steeped in fascinating legends.Uncover the mysteries and cultural richness of Talakadu, where history lies hidden beneath golden sands.
          </p>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>
          <div className="space-y-4">
            {/* Blog Item */}
            <Link href="/blog/road-trip-shivanasamudra" className="flex items-center gap-3 group ">
              <div className="w-14 h-14 relative flex-shrink-0 rounded overflow-hidden">
                <Image
                  src="/assets/blog1.jpg"
                  alt="Blog thumbnail"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-gray-300 text-sm group-hover:text-[#c6957d] transition leading-snug">
             Road Trip to Shivanasamudra
              </p>
            </Link>

           

          
         
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li><Link href="/" className="hover:text-[#c6957d] transition">Home</Link></li>
            <li><Link href="/history" className="hover:text-[#c6957d] transition">History</Link></li>
            <li><Link href="/temples" className="hover:text-[#c6957d] transition">Temples</Link></li>
            <li><Link href="/destinations" className="hover:text-[#c6957d] transition">Destinations</Link></li>
            <li><Link href="/gallery" className="hover:text-[#c6957d] transition">Gallery</Link></li>
            <li><Link href="/reach-there" className="hover:text-[#c6957d] transition">Reach There</Link></li>
            <li><Link href="/blog" className="hover:text-[#c6957d] transition">Blog</Link></li>
            
          </ul>
        </div>

        {/* Map */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d104947.56055083337!2d76.96257439731234!3d12.171071109981614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf19c6637bfdbb%3A0x9a2bd0b16d1dc88c!2sTalakadu%2C%20Karnataka%20571122%2C%20India!5e0!3m2!1sen!2sus!4v1763197964088!5m2!1sen!2sus" 
            referrerPolicy="no-referrer-when-downgrade"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
            className="rounded-lg border-0"
          ></iframe>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="relative border-t border-gray-600/40 text-center py-4 text-sm text-gray-400 z-10">
        © {new Date().getFullYear()} All Rights Reserved | Built by{" "}
        <Link href="https://www.proactivedigital.in/" target="_blank"   rel="noopener noreferrer" className="text-blue-400 hover:text-cyan-600">Proactive</Link> |{" "}
        {/* <Link href="/disclaimer" className="text-blue-400 hover:text-cyan-600">Disclaimer</Link> */}
      </div>
    </footer>
  );
}
