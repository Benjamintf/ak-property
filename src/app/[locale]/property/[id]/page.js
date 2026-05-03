"use client";
import React, { use } from 'react';

const propertyData = {
  "en": {
    "ayat-house": {
      title: "AYAT LUXURY VILLA",
      subTitle: "B+G+2 | 350 sqm",
      description: "Strategically located in the quiet and secure neighborhood of Ayat. This modern villa offers premium living with excellent connectivity to hospitals and schools.",
      amenities: ["Spacious Garden", "Modern Kitchen", "Security System", "4 Car Parking"],
      images: {
        main: "/ayat_house.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    },
    "bulgaria-house": {
      title: "BULGARIA APARTMENT",
      subTitle: "3 Bedroom | 140 sqm",
      description: "A stunning high-rise apartment near Bulgaria Mazoria. Features a panoramic city view, high-end finishing, and proximity to the city center.",
      amenities: ["City View", "Elevator", "Backup Generator", "Gym Access"],
      images: {
        main: "/bulgariya_house1.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    },
    "piassa-house": {
      title: "PIASSA COMMERCIAL HUB",
      subTitle: "Office & Retail Space",
      description: "Prime commercial building in the heart of historical Piassa. Ideal for corporate offices, banks, or upscale retail outlets.",
      amenities: ["Main Road Access", "High Visibility", "Ample Parking", "Modern Lift"],
      images: {
        main: "/piyassa_house.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    }
  },
  "am": {
    "ayat-house": {
      title: "አያት ዘመናዊ ቪላ",
      subTitle: "ቢ+ጂ+2 | 350 ካሬ",
      description: "በአያት ሰፈር የሚገኝ ሰላማዊ እና አስተማማኝ የመኖሪያ ቤት። ይህ ቪላ ለትልቅ ቤተሰብ ምቾትን እና ዘመናዊ አኗኗርን ታሳቢ አድርጎ የተገነባ ነው።",
      amenities: ["ሰፊ ግቢ", "ዘመናዊ ወጥ ቤት", "አስተማማኝ ጥበቃ", "4 መኪና ማቆሚያ"],
      images: {
        main: "/ayat_house.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    },
    "bulgaria-house": {
      title: "ቡልጋሪያ አፓርታማ",
      subTitle: "3 መኝታ ቤት | 140 ካሬ",
      description: "በቡልጋሪያ ማዞሪያ አቅራቢያ የሚገኝ ቅንጡ አፓርታማ። ውብ የከተማ እይታ ያለው እና ለሁሉም አገልግሎቶች ቅርብ የሆነ።",
      amenities: ["የከተማ እይታ", "አሳንሰር", "ተጠባባቂ ጄኔሬተር", "ጂም ያለው"],
      images: {
        main: "/bulgariya_house1.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    },
    "piassa-house": {
      title: "የፒያሳ የንግድ ማዕከል",
      subTitle: "ቢሮ እና የንግድ ቦታ",
      description: "በታሪካዊቷ ፒያሳ እምብርት ላይ የሚገኝ የንግድ ህንፃ። ለባንኮች፣ ለትላልቅ ቢሮዎች እና ለገበያ ማዕከላት ተስማሚ።",
      amenities: ["ዋና መንገድ ላይ", "በቀላሉ የሚታይ", "ሰፊ የመኪና ማቆሚያ", "ዘመናዊ ሊፍት"],
      images: {
        main: "/piyassa_house.jpg",
        map: "/location_map.jpg",
        floorPlan: "/floor_plan.jpg"
      }
    }
  }
};

export default function PropertyDetails({ params }) {
  const decodedParams = use(params);
  const locale = decodedParams.locale;
  const id = decodedParams.id;

  const data = propertyData[locale] || propertyData["en"];
  const house = data[id];

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Property Not Found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans pb-40">
      {/* Header - ቋንቋ መቀያየሪያ */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b p-4 px-10 flex justify-between items-center shadow-sm">
        <a href={`/${locale}`} className="text-blue-900 font-black text-xl italic uppercase">AK PROPERTY</a>
        <div className="flex gap-6 items-center">
          <a href={`/am/property/${id}`} className={`text-sm font-black transition ${locale === 'am' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-400 hover:text-gray-600'}`}>አማርኛ</a>
          <a href={`/en/property/${id}`} className={`text-sm font-black transition ${locale === 'en' ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-400 hover:text-gray-600'}`}>ENGLISH</a>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[65vh] mt-16 overflow-hidden">
        <img src={house.images.main} className="w-full h-full object-cover" alt="Main" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-12">
          <h1 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter">{house.title}</h1>
          <p className="text-white text-xl md:text-2xl font-bold bg-green-600 self-start px-6 py-2 mt-4 shadow-2xl">{house.subTitle}</p>
        </div>
      </div>

      {/* Info & Map Section */}
      <div className="max-w-7xl mx-auto py-24 px-8 grid lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-center">
          <span className="text-green-700 font-black uppercase tracking-[0.3em] text-xs mb-4">Location & Amenities</span>
          <h2 className="text-4xl font-bold text-blue-900 mb-8 border-l-8 border-green-600 pl-6 italic">Descriptive Information</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-12 italic bg-gray-50 p-6 rounded-2xl border border-gray-100">
             "{house.description}"
          </p>
          <div className="grid grid-cols-2 gap-4">
            {house.amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-5 rounded-2xl border border-gray-200 shadow-sm hover:border-green-300 transition">
                <span className="bg-green-100 text-green-600 w-8 h-8 flex items-center justify-center rounded-full font-bold">✓</span>
                <span className="font-bold text-gray-700 text-sm uppercase">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Map - Image Rendering Fix */}
        <div className="relative h-[450px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white group">
          <img 
            src={house.images.map} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            alt="Map"
            onError={(e) => { e.target.src = "https://via.placeholder.com/800x600?text=Map+Image+Not+Found+Check+Public+Folder"; }}
          />
          <div className="absolute top-6 right-6 bg-white/90 backdrop-blur px-6 py-2 rounded-full text-xs font-black shadow-lg">GOOGLE MAPS VIEW</div>
        </div>
      </div>

      {/* Floor Plan Section */}
      <div className="bg-gray-100 py-24 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="text-green-700 font-black uppercase tracking-[0.3em] text-xs">Building Layout</span>
          <h2 className="text-4xl font-black text-blue-900 mt-4 mb-12 uppercase italic">Typical Floor Plan</h2>
          <div className="bg-white p-12 rounded-[60px] shadow-2xl inline-block w-full border border-gray-200">
            <img 
              src={house.images.floorPlan} 
              className="w-full h-auto mx-auto" 
              alt="Floor Plan"
              onError={(e) => { e.target.src = "https://via.placeholder.com/1000x800?text=Floor+Plan+Not+Found+Check+Public+Folder"; }}
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 flex gap-4 w-[90%] max-w-md z-50">
        <a href="https://wa.me/251913739983" className="flex-1 bg-[#25D366] text-white py-5 rounded-[20px] font-black text-center shadow-2xl hover:scale-105 transition active:scale-95 tracking-widest">WHATSAPP</a>
        <a href="tel:+251913739983" className="flex-1 bg-blue-900 text-white py-5 rounded-[20px] font-black text-center shadow-2xl hover:scale-105 transition active:scale-95 tracking-widest">CALL NOW</a>
      </div>
    </div>
  );
}