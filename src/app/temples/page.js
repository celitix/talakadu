import Image from "next/image";
import { FaRegCompass } from "react-icons/fa";
import { MdTempleBuddhist } from "react-icons/md";
import Link from "next/link";

export default function TemplesSection() {
  return (
    <>

<div className="w-full max-w-5xl mx-auto px-4 py-12 md:py-20 bg-white">
  {/* TEXT SECTION */}
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-[#b05b36] mt-10">Temples</h2>

    <div className="flex items-center justify-center gap-4 my-4">
      <span className="h-px w-16 bg-[#b05b36]"></span>
      <MdTempleBuddhist className="text-[#b05b36] text-3xl" />
      <span className="h-px w-16 bg-[#b05b36]"></span>
    </div>

    <p className="mt-2 text-sm md:text-base text-gray-600">
     Temples are the most visiting and attracting places among the <Link href="/destinations" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Tourist places</Link> in Karnataka. Temple town Talakad is gaining popularity among the tourist places in Karnataka. Once having more than 30 temples stood, had now been swooshed by the sea of sand. Pancha linga temples of Talakadu, the historical places in Karnataka witnessed the changing dynasty of Talakadu and still surviving the curse, The few Talakad temples from tourist places in Karnataka stood still there to make you witness and experience the gone era.
    </p>
  </div>

  {/* IMAGE SECTION */}
  <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
      <Image 
        src="/assets/temple.jpg"
        alt=""
        fill
        className="object-cover"
      />
    </div>

    <div className="w-full h-64 md:h-80 relative rounded-lg overflow-hidden">
      <Image 
        src="/assets/temples1.png"
        alt=""
        fill
        className="object-cover"
      />
    </div>

  </div>
</div>


    <section className="w-full">

      {/* ---------- FIRST ROW ---------- */}
      <div className="relative w-full min-h-[310px] flex items-center">
        <Image
          src="/assets/Sand.jpg"
          alt="Temple Background"
          fill
          className="object-cover"
        />
        
         {/* Overlay */}
  <div className="absolute inset-0 bg-[#b05b36]/30"></div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
          
          {/* Card 1 */}
          <div className="border-l-4 border-[#A66A43] pl-5">
            <h2 className="text-[#b05b36] text-3xl font-bold mb-3">Keerthi Narayan Temple</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              This temple is one of the most famous temples dedicated to the Lord Vishnu. The temple has been excavated from sand but still, a major portion of the temple is still buried under the sand. The temple is having eight feet tall idol of God Vishnu on Garuda Peeta.Keerti Narayana temple also is the representation of Hoysala win over Chola dynasty.This is the only temple having Hoysala architecture till now in Talakad history.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border-l-4 border-[#A66A43] pl-5">
            <h2 className="text-[#b05b36] text-3xl font-bold mb-3">Pathaleshwara Cave Temple</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              This cave temple has been carved in the Rashtrkutas period. It is cut stone temple dedicated to Lord Shiva. A unique shiviling is installed in the cave temple. The shivling is known for its unique ability to change color. It is said that the Shiva linga appears red in morning, black in afternoon and white at night. The temple premises also have some different types of lingas. The way to temple goes downside for witnessing the main Shiva cave temple.
            </p>
          </div>

        </div>
      </div>

      {/* ---------- MIDDLE ROW (NO BACKGROUND IMAGE) ---------- */}
      <div className="w-full bg-white py-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Card 3 */}
          <div>
            <h2 className="text-3xl font-bold text-[#A66A43] text-center lg:text-left mb-3">
              Mallikarjuna Temple
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Temple is situated on the hill in Mudukothare. The Mallikarjuna temple is a temple with the idol of Lord Shiva and the Brahmaraambika goddess. The Lord Shiva idol has a footmark of Kamdhenu, the mother of all cows. According to the beliefs and stories, it is believed that the Kamdhenu itself comes up to the hilltop where the temple is built for Lord Shiva to give milk. The 100 step up walk to the temple, which is one of the panchlinga temples is worth to take to have a look to scenic beauty from the top.
            </p>
          </div>

          {/* Card 4 */}
          <div>
            <h2 className="text-3xl font-bold text-[#A66A43] text-center lg:text-left mb-3">
              Arkeshwara Temple
            </h2>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
             This temple is from one of the historical places of Talakadu and the most important tourist places in Karnataka, is slightly located in an isolated place. The Temple has the idol of Durga, Bhairavar and Abhayangara lingam along with Lord Shiva. A Vastu Yantra is at the front of the temple. According to locals and belief, it is said that the cows suffering from any disease can be cured in this temple. Temple has located in Vijaypura away from Talakadu of distance 15 to 20 km.
            </p>
          </div>

        </div>
      </div>

      {/* ---------- LAST ROW ---------- */}
      <div className="relative w-full min-h-[310px] flex items-center ">
        <Image
          src="/assets/Sand.jpg"
          alt="Temple Background"
          fill
          className="object-cover "
        />
       
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#b05b36]/30"></div>

        <div className="relative w-full max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 text-white">
          
          {/* Card 5 */}
          <div className="border-l-4 border-[#A66A43] pl-5">
            <h2 className="text-[#b05b36] text-3xl font-bold mb-3">Vaidhyanatheshwara Temple</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              The temple from one of the panchlinga places is a place of Hindu pilgrimage. Lord Shiva is worshipped in the temple. According to a local narration, the temple is a devotion to Vidhyanatheshwara also known as the Lord of doctors. According to the legend, about Vidhyanatheshwara of healing himself as in tree form when was axed by two brothers. The temple stood still since from the Chola dynasty reign having a Dravidian architectural design. A Bronze Gajasthamba also can be witnessed in the temple.
            </p>
          </div>

          {/* Card 6 */}
          <div className="border-l-4 border-[#A66A43] pl-5">
            <h2 className="text-[#b05b36] text-3xl font-bold mb-3">Maruleshwara Temple</h2>
            <p className="text-sm md:text-base leading-relaxed opacity-90">
              This temple has the largest linga among the Talakadu panchlinga’s temples. It is also one of the oldest in the history of Talakad built by Ganga kings. It has believed that Brahma himself has installed the shivaling here. Maruleshwara temple is nearby from Keerti Narayan Temple. To worship the deity, stairs of 20 to 30 is taken to walk down. The temple also has the idol of other god named Maheswara, Thirumal, Ambigai, Surya, Ganapathi, Shanmugar, Veerabadhrar, and Navagrahams.
            </p>
          </div>

        </div>
      </div>

    </section>
    </>
  );
}
