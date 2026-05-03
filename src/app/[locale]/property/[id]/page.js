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
  const { id, locale } = use(params);
  const data = propertyData[locale] || propertyData["en"];
  const house = data[id];

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white text-blue-900">
        <div className="text-center">
          <h1 className="text-6xl font-black mb-4">404</h1>
          <p className="text-xl font-bold italic">ይህ ቤት አልተገኘም | Property Not Found</p>
          <a href={`/${locale}`} className="mt-8 inline-block bg-blue-900 text-white px-8 py-3 rounded-full font-bold shadow-lg">ወደ መነሻ ገጽ ተመለስ</a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Navigation Header */}
      <div className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b p-4 px-10 flex justify-between items-center">
        <a href={`/${locale}`} className="text-blue-900 font-black text-xl tracking-tighter italic">AK PROPERTY</a>
        <div className="flex gap-4">
          <a href={`/am/property/${id}`} className={`text-xs font-bold ${locale === 'am' ? 'text-green-600 underline' : 'text-gray-400'}`}>አማርኛ</a>
          <a href={`/en/property/${id}`} className={`text-xs font-bold ${locale === 'en' ? 'text-green-600 underline' : 'text-gray-400'}`}>ENGLISH</a>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[65vh] bg-gray-200 mt-16 overflow-hidden">
        <img src={house.images.main} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" alt="Main" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-2 uppercase">{house.title}</h1>
          <p className="text-white text-xl md:text-2xl font-bold bg-green-600 self-start px-6 py-2 rounded-sm shadow-xl">{house.subTitle}</p>
        </div>
      </div>

      {/* Detailed Info */}
      <div className="max-w-7xl mx-auto py-24 px-8 grid md:grid-cols-2 gap-20">
        <div>
          <span className="text-green-700 font-black uppercase tracking-[0.3em] text-xs">Location & Amenities</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-6 italic underline decoration-green-500 decoration-4">Descriptive Information</h2>
          <p className="text-gray-600 text-xl leading-relaxed mb-12 font-medium italic">"{house.description}"</p>
          
          <div className="grid grid-cols-2 gap-4">
            {house.amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-gray-50 p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
                <span className="text-green-600 font-bold text-xl">✓</span>
                <span className="font-bold text-gray-700 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-green-100 rounded-[40px] -z-10 group-hover:rotate-2 transition-transform"></div>
          <div className="rounded-[30px] overflow-hidden shadow-2xl h-[400px]">
            <img src={house.images.map} className="w-full h-full object-cover" alt="Map" />
          </div>
          <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full text-xs font-black shadow-lg">GOOGLE MAPS VIEW</div>
        </div>
      </div>

      {/* Floor Plan Section */}
      <div className="bg-gray-50 py-24 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-8 text-center">
          <span className="text-green-700 font-black uppercase tracking-[0.3em] text-xs">Building Layout</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-6 uppercase">Typical Floor Plan</h2>
          <div className="w-24 h-2 bg-blue-900 mx-auto mb-12 rounded-full"></div>
          <p className="text-gray-500 mb-16 text-lg">Each floor features thoughtfully designed residential units with optimal space utilization, cross ventilation, and stunning city views.</p>
          <div className="bg-white p-10 rounded-[60px] shadow-2xl border border-gray-200">
            <img src={house.images.floorPlan} className="w-full h-auto" alt="Floor Plan" />
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-4 w-[90%] max-w-md z-50">
        <a href="https://wa.me/251913739983" className="flex-1 bg-[#25D366] text-white py-4 rounded-2xl font-black text-center shadow-2xl hover:scale-105 transition active:scale-95">WHATSAPP</a>
        <a href="tel:+251913739983" className="flex-1 bg-blue-900 text-white py-4 rounded-2xl font-black text-center shadow-2xl hover:scale-105 transition active:scale-95">CALL NOW</a>
      </div>
    </div>
  );
}