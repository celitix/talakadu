import { MdTour } from "react-icons/md";
import Image from "next/image";
import { FaRegCompass } from "react-icons/fa";
import Link from "next/link";


export default function DestinationsSection() {
return (
    <>
    {/*========== Come Down from the Tourist Sights Section =========*/}
<section className="w-full px-4 py-12 md:py-20 bg-white flex justify-center">
<div className="max-w-5xl text-center">
{/* Heading */}
<h2 className="text-3xl md:text-4xl font-bold text-[#b05b36] mt-10">
Come Down from the Tourist Sights
</h2>


{/* Subheading */}
<p className="mt-2 text-sm md:text-base text-gray-600">Drive to dive in</p>


{/* Icon divider */}
<div className="flex items-center justify-center gap-4 my-4">
<span className="h-px w-16 bg-[#b05b36]"></span>
<MdTour className="text-[#b05b36] text-3xl" />
<span className="h-px w-16 bg-[#b05b36]"></span>
</div>


{/* Paragraph */}
<p className="text-gray-600 text-sm md:text-base leading-relaxed px-2 md:px-10">
Karnataka tourism is offering a delight in a plate. This deserted town Talakadu is not really deserted when comes to explore and more. With each drive to few kilometers, Talakadu place gives another stop to step out and step into a new destination. Karnataka Tourism has many destinations to see and get to know more about the places with really unfurling surprises.
<Link href="/temples" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">Temples,</Link> Reserves, Hills, and Waterfalls 
the place is offering everything to make the trip to Talakadu places worth to visit. Curse of queen and river Kaveri, Talakadu is blessed with tourist places to see.
</p>
</div>
</section>

{/*============== Dual image section =============*/}
<section className="w-full px-4 py-6 md:py-6 bg-white flex justify-center">
<div className="max-w-5xl text-center">
{/* Heading */}
<h2 className="text-3xl md:text-4xl font-bold text-[#b05b36]">
Explore Tourist Attractions at Talakadu
</h2>


{/* Subheading */}
<p className="mt-2 text-sm md:text-base text-gray-600">Yes!! Still, lot to explore</p>


{/* Icon divider */}
<div className="flex items-center justify-center gap-4 my-4">
<span className="h-px w-16 bg-[#b05b36]"></span>
<FaRegCompass className="text-[#b05b36] text-3xl" />
<span className="h-px w-16 bg-[#b05b36]"></span>
</div>


{/* Paragraph */}
<p className="text-gray-600 text-sm md:text-base leading-relaxed px-2 md:px-10">
Talakadu will never disappoint you when it comes to ‘we want more’. The Place is having many much one-stop destinations to visit and make the trip worth. Karnataka Tourism offers many on the way and off the way places to explore and enjoy.
</p>
</div>
</section>

 <section className="max-w-5xl mx-auto py-18 px-4 md:px-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Card */}
        <div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/Srirangapatna.jpg"
              alt="Srirangapatna"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-xl font-semibold mt-5 lg:text-left md:text-center text-[#8B4513]">Srirangapatna</h2>
          <p className="text-sm text-gray-500 font-medium mt-1 text-left">
            River Island
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-sm">
            Seringapatna, which was known as Seringapatam during the British era, 
            is in Karnataka, 15 km away from Mysore. The place has many of its 
            monuments nominated in <Link href="https://en.wikipedia.org/wiki/UNESCO" target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">UNESCO</Link>. 
            The place is a must explore if you are a wanderer and also an admirer 
            of rich culture and heritage. The place is interesting forms an island 
            because of Kaveri river enclosing the place.
          </p>
        </div>

        {/* Right Card */}
        <div>
          <div className="relative w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/shivanasamudra.jpg"
              alt="Shivanasamudra Falls"
              fill
              className="object-cover"
            />
          </div>

          <h2
            className="text-xl font-semibold mt-5 
                       text-center md:text-center lg:text-right 
                       text-[#8B4513]"
          >
            Shivanasamudra Falls
          </h2>

          <p
            className="text-sm text-gray-500 font-medium mt-1
                       text-center md:text-center lg:text-right"
          >
            Water Twin
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-sm lg:text-right text-center md:text-center">
            Shivanasamudra fall is 139 km away from Bangalore and is a twin 
            waterfall in Shivanasamudra city that is a delight to an eye. 
            The river Kaveri is been divided into two segments by the city 
            Shivanasamudra. The misconception has named the twins as Gaganachukki 
            and Barachukki falls. The twin waterfall is also a blessing to us by 
            Asia’s first hydroelectricity power station.
          </p>
        </div>

      </div>
    </section>

  {/*============ Triple Image Section ===========*/}  
    <section className="max-w-5xl mx-auto py-12 px-4 md:px-12 lg:px-10">
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-12">

        {/* ------- LEFT CARD ------- */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/somnathpur.jpg"
              alt="Somnathapura"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5 text-[#8B4513]
                         text-center lg:text-left">
            Somnathapura
          </h2>

          <p className="text-sm text-gray-500 font-medium mt-1
                        text-center lg:text-left">
            Kesava Temple
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-sm text-center lg:text-left">
Somanathapura has located at 38 km away from the city of Mysore. The temples are a dedication to Vaishnava Hindu. Chennakesava temple also known as Kesava temple is carved intricately in Hoysala reign and portraying rich Hoysala architecture. Temple also has glimpses of Hindu’s important spiritual scenes on the walls clearly depicting the Hindu mythology.          </p>
        </div>

        {/* ------- CENTER CARD ------- */}
        <div className="flex flex-col items-center text-center">
          <div className="relative w-full lg:w-[350px] h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/bhill.jpg"
              alt="Biligiriranga Hills"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5 text-[#8B4513] text-center">
            Biligiriranga Hills
          </h2>

          <p className="text-sm text-gray-500 font-medium mt-1 text-center">
            Tiger Hill
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-sm text-center">
            Famous and Important BR HILLS has situated 80 km away from Mysore. The hills might give you the experience to encounter tiger. The Biligiriranga Hills site is a protected tiger reserve. This rich flora and fauna hills is a home to Asian elephants and tigers. BR hills offer you a breathtaking and eye-catching scenes from the top.
          </p>
        </div>

        {/* ------- RIGHT CARD ------- */}
        <div className="flex flex-col items-center text-center lg:items-end lg:text-right">
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-md">
            <Image
              src="/assets/brindavangarden.jpg"
              alt="Brindavan Garden"
              fill
              className="object-cover"
            />
          </div>

          <h2 className="text-lg font-semibold mt-5 text-[#8B4513]
                         text-center lg:text-right">
            Brindavan Garden
          </h2>

          <p className="text-sm text-gray-500 font-medium mt-1
                        text-center lg:text-right">
            Terrace Garden
          </p>

          <p className="text-gray-700 mt-3 leading-relaxed text-sm text-center lg:text-right">
            Brindavan Garden is located in Karnataka. The garden is a gift of a dam. Krishnarajasagara dam is adjoined to the garden. Garden is a 3 terrace garden with musical mesmerizing fountains. The large lush green garden is a famous tourist attraction to millions of tourist in a year.
          </p>
        </div>

      </div>
    </section>

  {/*========== Overview Section =========*/}
    <section className="relative w-full h-[400px] md:h-[300px] lg:h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/assets/Sand.jpg"
        alt="Talakadu background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Content Container */}
      <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Glass Background Container */}
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl px-6 py-8 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-8 border border-white/20 shadow-2xl">
            {/* Main Heading */}
            <h1 className="text-3xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Nearby Talakadu tourist places, every stop is a delight Destination
            </h1>
            
            {/* Subheading */}
            <p className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed">
              Karnataka tourist places welcoming the guests to its hidden unknown territories to unfold surprises.
            </p>
          </div>
        </div>
      </div>
    </section>  
</>
);
}