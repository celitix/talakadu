import Image from 'next/image'
import { FaGlobe, FaThumbsUp } from 'react-icons/fa';
import { SlBadge } from "react-icons/sl";
import { FaRegCompass } from "react-icons/fa6";
import { BiHistory } from "react-icons/bi";
import Link from 'next/link';

const page = () => {

 const features = [
    {
      icon: <FaGlobe className="w-8 h-8" />,
      title: "Best time to Visit",
      description: "Winter visit to this place is much better as the temperature is relatively high in summers. Average summer temperature goes upto 31C. Winters will be pleasant to explore town and dig history of talakad."
    },
    {
      icon: <SlBadge className="w-8 h-8" />,
      title: "Talakadu Temple Timing",
      description: "Temples can be visited between 8:30 am to 1:30 pm in morning and from 4:30 pm to 7:30 pm in evening daily. On certain days like Dhanurmasa gates will be open in early morning from 3:30 am. to 7:30 pm and on mudukuthore from early 7:30 am to evening 7:30 pm"
    },
    {
      icon: <FaThumbsUp className="w-8 h-8" />,
      title: "Temple Entry Charges",
      description: "Entry in temples is absolutely free. Minimal charges from 2 rupees to 50 rupees are charged for temples daily basic rituals,pujas or abhisheka from people if interested in."
    }
  ];

  return (
    <>
        {/*============== intro section ============= */}
        <section className="w-full bg-white py-4">
            <div className="max-w-7xl mx-auto px-6"> 
            <div className="max-w-5xl mx-auto text-center">
                   <h2 className="text-3xl md:text-4xl font-bold text-[#b05b36] mt-24">About Talakadu History</h2>
               
                   <div className="flex items-center justify-center gap-4 my-4">
                     <span className="h-px w-16 bg-[#b05b36]"></span>
                     <BiHistory className="text-[#b05b36] text-3xl" />
                     <span className="h-px w-16 bg-[#b05b36]"></span>
                   </div>
                <p className="text-center text-gray-700 mt-6 ">
                  As we dig deeper Talakadu is getting more mysterious. The history of talakad has it all what it takes to grab attention from people. A mythological tale, Curse of queen, Royalty decline and what more is this town is hiding under its hood of sands to offer. With every brushing off the sands from the buried city of temples there is something new to dig deeper. The Talakad history is enriched with folktales and beliefs.
                </p>
            </div>
            </div>
        </section>

     {/*================ Text and Image section ================== */} 
  <section className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* ---------------- LEFT COLUMN ---------------- */}
        <div>
          {/* Heading */}
          <h2 className="text-center text-[#b05b36] text-xl font-semibold tracking-wider">
            TALE OF TWO BROTHERS
          </h2>
          <p className="text-center text-[#9c6644] mt-1 mb-6">
            Brothers who named Talakadu
          </p>

          {/* Top line */}
          <div className="w-full border-t border-gray-300 mb-6"></div>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed">
            It is believed that ‘Talakadu’ has been named after two twin brothers
            Tala and Kadu. A famous tale has been associated with the history of
            Talakadu now known as Talakadu. Once they were cutting down the tree
            and noticing wild elephants worshiping the same tree, in which they
            discovered the tree having an image of <Link href="https://en.wikipedia.org/wiki/Shiva" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Lord Shiva</Link> and then
            drop their axes. Worshipping the tree, wild elephants miraculously
            transformed into the rishis and the tree restored itself. Every one
            present over that place of miracle obtained moksha and the place
            since then are called Talakadu. Now there are two stones representing
            twin brothers are placed in front of Veerabadra Swamy temple.
          </p>

          {/* Image */}
          <div className="w-full mt-10 flex justify-center">
            <div className="relative w-[330px] h-[220px]">
              <Image
                src="/assets/two brothers.jpg"
                alt="Temple Image"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>

          {/* Bottom paragraph */}
          <div className="w-full border-t border-gray-300 mt-10 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            It is also believed that later Lord Ram halted for a time while
            expediting towards Lanka. Talakadu name has been changed many times
            under the reign of different dynasties and possessions. The city has
            also been once the capital of kings and different sovereigns.
          </p>
        </div>

        {/* ---------------- RIGHT COLUMN ---------------- */}
        <div>
          {/* Heading */}
          <h2 className="text-center text-[#b05b36] text-xl font-semibold tracking-wider">
            TALAKADU: THE CURSED CITY
          </h2>
          <p className="text-center text-[#9c6644] mt-1 mb-6">
            The Curse Of The Queen
          </p>

          {/* Top line */}
          <div className="w-full border-t border-gray-300 mb-6"></div>

          {/* Text */}
          <p className="text-gray-700 leading-relaxed">
            Once upon a time, a king named Tirumala raja of Seringapatam was
            being afflicted by an incurable disease. He came to Talakad for
            offering his services to the Vaidyesvara temple. His second wife
            named Alamelamma was taking care of the kingdom after him, meanwhile
            hearing about his husband’s near to death condition she hand over
            the kingdom to the Raja Wodeyar of Mysore and left. Raja Wodeyar was
            in desperate of possessing jewels of Rani Alamelamma. He sent his
            soldiers to seize the jewels. Almelamma knowing the evil intention of
            the Wodeyar threw jewels in the river Kaveri (than known Cauvery),
            and drown herself uttering three curses:
          </p>

          {/* Image */}
          <div className="w-full mt-10 flex justify-center">
            <div className="relative w-[330px] h-[220px]">
              <Image
                src="/assets/cursed city.jpg" 
                alt="Temple Image"
                fill
                className="object-cover rounded"
              />
            </div>
          </div>

          {/* Bottom paragraph */}
          <div className="w-full border-t border-gray-300 mt-10 mb-6"></div>

          <p className="text-gray-700 leading-relaxed">
            “Let Talakad become sand, let Mālangi become a whirlpool, let the
            Mysore Rajas fail to beget heirs.” Since then it is said that those
            three curses affected the Talakad, making it from vibrant city to the
            deserted town and also the royal family reigning over there is a
            strange problem of having their rightful heir.
          </p>
        </div>

      </div>
    </section>


     {/*=============== Overlay Section ===================*/}
        <div className="relative w-full min-h-[400px] flex items-center justify-center py-16 px-4">
      {/* Background Image */}
      <Image
        src="/assets/hero2.jpg"
        alt="Background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0  bg-[#9c6644]/30"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-12">
       
          <div className="relative flex flex-col items-center">
  <h2 className="text-[#b05b36]  text-4xl font-bold mb-2 tracking-wide uppercase">It is better to know than to regret</h2>
  <span className="block w-40 h-[3px] bg-[#9c6644]"></span>
</div>
   <p className="text-sm md:text-lg text-white tracking-wide mt-2">Must know facts before a visit</p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white/30 backdrop-blur-xl border border-white/20 rounded-3xl p-6 hover:bg-white/20 transition-all duration-300 ease-in-out hover:scale-105 cursor-pointer ">
              {/* Icon Circle */}
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-[#c6957d] hover:text-[#deab90] mb-6 shadow-lg ">
                {feature.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">
                {feature.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-200 text-base leading-relaxed max-w-xs">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>


    {/*================ Kaveri River Section ===================*/}
      <section className="w-full py-12 px-4 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
            {/* Left Image */}
            <div className="w-full h-full">
              <div className="relative w-full h-80 md:h-[450px] lg:h-[350px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/kaveri.jpg"   
                  alt="Panchalinga Darshana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
    
            {/* Right Content */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#b05b36] leading-snug">
               Talakadu: The Kaveri river child
              </h2>
    
              {/* Small underline / bar */}
              <div className="w-24 h-[2px] bg-gray-500 mt-2 mb-6"></div>
    
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
               History of Talakad is dated back to the river <Link href="https://en.wikipedia.org/wiki/Kaveri" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Kaveri</Link>. Kaveri has blessed the Talakad with its sparkling flowing water on its left bank. It is believed the Talakadu now’s condition is the result of the changing course of water flow for the dam construction for irrigation purpose by one of the ministers of Vijaynagar Empire. Now, river Kaveri is being the tourist spot offering playful activities. “Panchalinga Darshan” is done by performing rituals in Kaveri. After exploring Talakadu, River Kaveri beach serves the refreshment after the whole tiring day.
              </p>
            </div>
          </div>
        </section>
    </>
  )
}

export default page