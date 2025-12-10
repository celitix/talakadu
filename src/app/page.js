import Image from "next/image";
import HeroSection from "@/app/components/hero";
import { FaBrush, FaSun, FaMountain,FaRoad } from "react-icons/fa";
import CountdownStats from "@/app/components/countdown";
import Link from "next/link";

export default function Home() {
  return (
    <>
{/*================ Hero Section ===================*/}

    <HeroSection />

{/*============= Earthen City Section =============*/}
  <section className="w-full py-14 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#b05b36]">
          Earthen City: Talakadu
        </h2>

        {/* Center underline */}
        <div className="flex items-center justify-center my-4">
          <div className="w-10 h-[1px] bg-[#b05b36]"></div>
          <div className="w-2 h-2 bg-[#b05b36] rounded-full mx-2"></div>
          <div className="w-10 h-[1px] bg-[#b05b36]"></div>
        </div>

        <p className="text-gray-700 max-w-5xl mx-auto leading-relaxed">
          The mysterious and unpopular place Talakadu has it all what it takes to be the popular and most attractive tourist place in India. Talakadu is a small town in south India, situated in Mysore district of Karnataka. Talakadu is situated near the left bank of river <Link href="https://en.wikipedia.org/wiki/Kaveri" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Kaveri</Link>. This place was once had been a plethora of temples which is now buried under sand.  Talakadu is a place for Hindu pilgrims. This place is a worth visiting tourist spot to experience the visible drastic change from lush green town to deserted city, left with few of temples to explore. Once had been the place of interest to different dynasties, Talakadu is now attracting tourists, scholars, scientists and even chefs from places because of its cursed story and horticulture practices.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14">

          {/* CARD 1 */}
          <div className="relative group bg-white border border-gray-300 border-b-4 border-b-gray-400 px-8 py-12 rounded shadow-sm transition-all duration-300 hover:border-b-[#b05b36]">


            {/* Icon */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 bg-white rounded-full border-[6px] border-[#e4c1a2]
                              flex items-center justify-center transition-all duration-300
                              group-hover:bg-[#f4e5dc] group-hover:border-[#b05b36]">
                <FaBrush className="text-3xl text-[#b05b36] transition-all duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="mt-6 font-semibold text-gray-800">Temple Art</h3>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Talakadu is famous for the earthen temples which ones been the part of the temple town. Now it is left with few temples with beautiful architecture. Temples are built in different styles during different reigning dynasty. Temple build in dynasty has a dravidian style architecture.
            </p>

           <Link href="/temples"><p className="mt-6 text-[#b05b36] cursor-pointer font-medium">Read More</p></Link>
          </div>

          {/* CARD 2 */}
          <div className="relative group bg-white border border-gray-300 border-b-4 border-b-gray-400 px-8 py-12 rounded shadow-sm transition-all duration-300 hover:border-b-[#b05b36]">

            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 bg-white rounded-full border-[6px] border-[#e4c1a2]
                              flex items-center justify-center transition-all duration-300
                              group-hover:bg-[#f4e5dc] group-hover:border-[#b05b36]">
                <FaSun className="text-3xl text-[#b05b36] transition-all duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="mt-6 font-semibold text-gray-800">Contemporary Culture</h3>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              Talakadu town serves both, witness to ancient history and also divine wine making vineyards. This place is also gaining chef’s attention. The place is now also growing as a gourmet delight to food experts.
            </p>

           <Link href="/history"><p className="mt-6 text-[#b05b36] cursor-pointer font-medium">Read More</p></Link>
          </div>

          {/* CARD 3 */}
         <div className="relative group bg-white border border-gray-300 border-b-4 border-b-gray-400 px-8 py-12 rounded shadow-sm transition-all duration-300 hover:border-b-[#b05b36]">

            <div className="absolute -top-10 left-1/2 -translate-x-1/2">
              <div className="w-20 h-20 bg-white rounded-full border-[6px] border-[#e4c1a2]
                              flex items-center justify-center transition-all duration-300
                              group-hover:bg-[#f4e5dc] group-hover:border-[#b05b36]">
                <FaRoad className="text-3xl text-[#b05b36] transition-all duration-300 group-hover:scale-110" />
              </div>
            </div>

            <h3 className="mt-6 font-semibold text-gray-800">On the go!</h3>

            <p className="text-gray-600 text-sm leading-relaxed mt-4">
              The place has lot to make your day. Make one day spent in the Talakadu city worth  by visiting temples, experiencing vineyards, river bank activity, boat rides, sand house bulding. This place takes care of all age groups to make their trip to remember.
            </p>

           <Link href="/reach-there"><p className="mt-6 text-[#b05b36] cursor-pointer font-medium">Read More</p></Link>
          </div>

        </div>
      </div>
    </section>

{/*============ Countdown Section =============*/}
    <CountdownStats />

  {/*=============== Holy Bath Section ===============*/}
   <section className="w-full py-12 px-4 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="w-full h-full">
          <div className="relative w-full h-80 md:h-[450px] lg:h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/assets/panchalingam.jpg"   
              alt="Panchalinga Darshana"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#b05b36] leading-snug">
            Panchalinga Darshana : Holy Bath
          </h2>

          {/* Small underline / bar */}
          <div className="w-24 h-[2px] bg-gray-500 mt-2 mb-6"></div>

          <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
            The five temples among the many ones, the Pathaleshwara, Maruleshwara, Arkeshwara,
            Vaidyanatheshwara, and Mallikarjuna temples are believed to be lingas representing
            the faces of god Shiva. Once in every 12 years fair called “panchalinga darshan”
            takes place, which last happened in the year 2009. Darshan is held on new mood day
            of Kartika month according to Hindu calendar. On this auspicious day, the stars vishaka
            and Khuha Yoga conjoin. According to tradition, the pilgrims a dip in Gokarna teertha,
            worshipping Gokarneswara and Chandikadevi and then Vaidyeshwara and again taking a dip 
            into the Kaveri worshiping Arkeshwara, Pataleshwara, Maraleshwara, Mallikarjuna and 
            again to the Vaidyeshwara and finally worshiping the Kritinarayana to complete the 
            one day pilgrimage.
          </p>
        </div>
      </div>
    </section>


  {/*================ Overlay section ================*/}
  
    <section className="relative w-full py-20 flex items-center justify-center text-center">

      {/* Background Image */}
      <Image
        src="/assets/Sand.jpg"   
        alt="Sand Background"
        fill
        priority
        className="object-cover"
      />

      {/* Soft overlay for contrast */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* GLASS CONTENT BOX */}
      <div className="
        relative z-10 px-18 py-10 
        bg-white/10 
        backdrop-blur-md 
        border border-white/20 
        rounded-2xl 
        shadow-lg
        max-w-3xl mx-auto
      ">
        <h2 className="text-white text-3xl md:text-4xl font-semibold drop-shadow">
          Tourist Places near Talakadu
        </h2>

        {/* Underline */}
        <div className="w-16 h-[2px] bg-white/60 mx-auto mt-3 mb-4 rounded-full"></div>

        <p className="text-white text-sm md:text-base drop-shadow">
          There is always a space for more. Dust off the sand from your shoes and make way to the highway.
        </p>
      </div>
    </section>

    {/*================ Tourist Place Section ================*/}
     <section className="w-full py-14 px-4">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

          {/* CARD 1 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#b05b36]">
              Srirangapatna
            </h2>

            {/* underline */}
            <div className="flex items-center justify-center my-3">
              <div className="w-12 h-[2px] bg-[#e5c3a4]"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-md mx-auto">
              Shrirangapattana, formally known as Seringapatam during British Raj.
              This place has many of its monuments nominated under <Link href="https://en.wikipedia.org/wiki/UNESCO" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">UNESCO</Link> world heritage site. The place is easy to reach by road or train from
              Talakadu as the Bangalore Mysore highways pass through this town.
              This place has witnessed a historical battle of Anglo-Mysore. The
              town is worth to visit as it is blessed with different monuments,
              bird sanctuary, and many of British era buildings.
            </p>
          </div>

          {/* CARD 2 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#b05b36]">
              Shivanasamudra Falls
            </h2>

            <div className="flex items-center justify-center my-3">
              <div className="w-12 h-[2px] bg-[#e5c3a4]"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-md mx-auto">
              This Shivanasamudra twin waterfall serves a delight to your view.
              The waterfall is on the river Kaveri. Twin waterfall holds a
              misconception. This misconception has named waterfall’s both right
              and left segments. The left segment is called as Gaganachukki and
              the right segment is called as Bharachukki. The place is also well
              blended with the human modern interaction of dam that is one of
              the first hydroelectric power stations in Asia and second of India’s.
            </p>
          </div>

          {/* CARD 3 */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#b05b36]">
              Somnathapura
            </h2>

            <div className="flex items-center justify-center my-3">
              <div className="w-12 h-[2px] bg-[#e5c3a4]"></div>
            </div>

            <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-md mx-auto">
              Somanathapura is famous for the Chennakesava temple. This temple is
              dedicated to the Vaishnava Hindu. The temples there were consecrated
              by Somanatha Dandanayaka who had worked for the Hoysala dynasty. The
              temple architecture reflects Hoysala reign of that period. The temples
              located in the east of Mysore are back dated to 1258.
            </p>
          </div>

        </div>

      </div>
    </section>


    {/*================ Temple Section ================*/}
     <section className="relative w-full h-[280px] md:h-[320px] flex items-center justify-center">
      
      {/* Background Image */}
      <Image
        src="/assets/Sand.jpg" 
        alt="Talakadu Sand Beach"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Glass Box */}
      <div className="relative z-10 px-6 py-8 rounded-xl 
                      bg-white/10 backdrop-blur-sm border border-white/20
                      max-w-6xl mx-auto text-center">

        <h2 className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
          Talakadu , sand beach of river bank is the place to explore oldest temples.
        </h2>

      <Link href="/temples"> <button className="mt-6 bg-[#7b4b32] hover:bg-[#5f3a25] text-white px-6 py-2 rounded-sm transition-all">
          EXPLORE TEMPLES
        </button></Link>
      </div>
    </section>

    </>
  );
}
