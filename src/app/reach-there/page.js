import React from 'react'
import Image from 'next/image'
import { FaRegCompass } from "react-icons/fa";
import Link from 'next/link';


const reachThere = () => {

 const cards = [
    {
      img: "/assets/plane.jpg",
      title: "BY AIR",
      desc: "International airport situated in Bangalore Kempegowda International Airport is the nearest airport to reach Talakadu. Hiring cab would be very easy after landing at the airport to reach Talakadu from Bangalore.",
    },
    {
      img: "/assets/train.jpg",
      title: "BY TRAIN",
      desc: "Three major railway station at Mandya, Mysore and Bangalore junctions are nearest railway stations to talakadu. After Disembarking, buses and taxis are available to reach easily from Bangalore to Talakadu.",
    },
    {
      img: "/assets/car.png",
      title: "BY ROAD",
      desc: "Taking Karnataka road transport KSRTC bus services will be an easy access source to reach Talakadu. Or can prefer private buses or cab on a highway to reach easily or way back from Talakadu.",
    },
  ];

  return (
    <>
    {/*========== Trip Calling Section =========*/}
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#b05b36] mb-4 mt-16 text-center">Trip Calling Section</h2>

          {/* Icon divider */}
          <div className="flex items-center justify-center gap-4 my-4">
          <span className="h-px w-16 bg-[#b05b36]"></span>
          <FaRegCompass className="text-[#b05b36] text-3xl" />
          <span className="h-px w-16 bg-[#b05b36]"></span>
          </div>

            <p className="text-lg text-slate-600 mb-8 text-center">Talakad Karnataka is a small yet fascinating town is situated in south India. Deserted town Talakadu is situated on a left bank of river Kaveri. The place is just 45 km away from Mysore and 133 km from Bangalore city. T. Nasirpur is the nearest town to Talakad Karnataka that is just 15 km away trip. The trip to Talakad is an easy road Talakadu road trip from any of the cities. This place has an easy access from any of the three roads, rail or airways to reach from Bangalore to Talakadu or back from Talakadu to Bangalore.</p>
        </div>
    </section>


    {/*========== Mid Section =========*/}
     <section className="w-full py-8 px-4 lg:px-16">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
    
            {/* Left Image */}
            <div className="w-full h-full">
              <div className="relative w-full h-80 md:h-[450px] lg:h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/assets/tracingtrail.jpg"   
                  alt="Panchalinga Darshana"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
    
            {/* Right Content */}
            <div className="w-full">
              <h2 className="text-3xl md:text-4xl font-semibold text-[#b05b36] leading-snug">
               Tracing Trail
              </h2>
    
              {/* Small underline / bar */}
              <div className="w-24 h-[2px] bg-gray-500 mt-2 mb-6"></div>
    
              <p className="text-gray-700 leading-relaxed text-[15px] md:text-[16px]">
              Making trips to new places connects you with nature, people and food. The most beautiful trip is the one you didn't do yet. Every journey teaches you something new about the world and yourself. Travel opens your mind to different cultures, perspectives, and ways of living. The memories you create while exploring become treasures that last a lifetime. Sometimes the best discoveries happen when you step outside your comfort zone and embrace the unknown.
              </p>
            </div>
          </div>
        </section>

    {/*========== Way to Visit Section =========*/}
   <section className="w-full py-14 px-4">
         <div className="max-w-7xl mx-auto text-center">
   
           {/* Heading */}
           <h2 className="text-3xl md:text-4xl font-semibold text-[#b05b36]">
             Ways to visit destinations nearby to Talakad Karnataka
           </h2>
   
           {/* Center underline */}
           <div className="flex items-center justify-center my-4">
             <div className="w-10 h-[1px] bg-[#b05b36]"></div>
             <div className="w-2 h-2 bg-[#b05b36] rounded-full mx-2"></div>
             <div className="w-10 h-[1px] bg-[#b05b36]"></div>
           </div>
   
           <p className="mt-6 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Talakadu trip offers many <Link href="/destinations" className='font-semibold text-blue-600 hover:text-blue-700 hover:underline'>destinations</Link> to visit in one go. After embarking at Bangalore junction or landing at Bangalore international airport. Beside temples, many of the natural scenic beauty is nature’s gift to Karnataka. Most of the nearby Karnataka tourist destination that falls on the way to the Talakadu can be explored in a day by opting private or government roadway services.
           </p>
   
           <p className="mt-6 text-gray-700 max-w-4xl mx-auto leading-relaxed">
           <Link href="https://en.wikipedia.org/wiki/Biligiriranga_Hills" target='_blank' rel='noopener noreferrer' className='font-semibold text-blue-600 hover:text-blue-700 hover:underline'>BR hills</Link>, the Tiger Reserve can be reached by nearest railway station Chamarajanagar that is 40 km away. <Link href=""></Link>Shivanasamudra Falls, the nearest railway station, and airport is Mysore, and 3 hours journey from Bangalore.
           </p>

           <p className="mt-6 text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Brindavan Garden is 24 km away from city Mysore by road.
           </p>

         </div>
       </section>

 {/*================ Travel Cards =================*/}
 <section className="pb-14 pt-2 px-5 md:px-10 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#b05b36]">How To Reach Talakadu?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white shadow-md rounded-xl p-6 flex flex-col items-center text-center 
              transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-28 h-28 mb-4">
                <Image
                  src={card.img}
                  alt={card.title}
                  width={200}
                  height={200}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>

              <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 text-[#c6957d] group-hover:text-[#856046]">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default reachThere