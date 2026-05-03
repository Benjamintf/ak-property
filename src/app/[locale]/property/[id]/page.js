"use client";
import React, { use } from 'react';

const propertyData = {
  "en": {
    "ayat-house": {
      title: "SARBET AU NO2",
      subTitle: "B+G+16+T",
      description: "Strategically located in the heart of Addis Ababa, with excellent connectivity to international hospitals, embassies, and shopping destinations.",
      amenities: ["Prime Location", "Luxury Amenities"],
      images: {
        main: "/ayat_house.jpg",
        map: "/location_map.jpg", // በ public ፎልደር ውስጥ ካርታ ካለህ
        floorPlan: "/floor_plan.jpg" // የቤቱ ፕላን ምስል
      }
    }
    // ሌሎቹ ቤቶችም በተመሳሳይ ይቀጥላሉ...
  },
  "am": {
    "ayat-house": {
      title: "ሳርቤት AU NO2",
      subTitle: "ወለል: B+G+16+T",
      description: "በአዲስ አበባ እምብርት ላይ የሚገኝ፣ ለሆስፒታሎች፣ ለኤምባሲዎች እና ለገበያ ማዕከላት ቅርብ የሆነ።",
      amenities: ["ምርጥ ቦታ", "ዘመናዊ መገልገያዎች"],
      images: {
        main: "/ayat_house.jpg",
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

  if (!house) return <div className="p-20 text-center">Not Found</div>;

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* 1. Hero Section (ትልቁ ምስል እና ርዕስ) */}
      <div className="relative h-[600px] bg-gray-100 overflow-hidden">
        <img src={house.images.main} className="w-full h-full object-cover" alt="Main" />
        <div className="absolute inset-0 bg-black/20 flex flex-col justify-center px-12">
          <h1 className="text-white text-6xl font-black mb-2">{house.title}</h1>
          <p className="text-white text-2xl font-bold bg-green-600 self-start px-4 py-1">{house.subTitle}</p>
        </div>
      </div>

      {/* 2. Descriptive Information (ዝርዝር መረጃ) */}
      <div className="max-w-6xl mx-auto py-20 px-6 grid md:grid-cols-2 gap-12">
        <div>
          <span className="text-green-700 font-bold uppercase tracking-widest text-sm">📍 Location & Amenities</span>
          <h2 className="text-4xl font-bold text-blue-900 mt-4 mb-6">Descriptive Information</h2>
          <div className="w-20 h-1 bg-green-600 mb-8"></div>
          <p className="text-gray-600 text-lg leading-relaxed mb-10">{house.description}</p>
          
          <div className="flex gap-4">
            {house.amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-2 border p-4 rounded-xl shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="font-bold text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
          <img src={house.images.map} className="w-full h-full object-cover" alt="Map" />
        </div>
      </div>

      {/* 3. Floor Plan Section (የቤቱ ፕላን) */}
      <div className="bg-gray-50 py-20 text-center">
        <span className="text-green-700 font-bold uppercase tracking-widest text-sm">Building Layout</span>
        <h2 className="text-4xl font-bold text-blue-900 mt-2 mb-4">Typical Floor Plan</h2>
        <p className="max-w-2xl mx-auto text-gray-500 mb-12 px-6">Each floor features thoughtfully designed residential units with optimal space utilization.</p>
        <div className="max-w-5xl mx-auto px-6">
          <img src={house.images.floorPlan} className="w-full rounded-[40px] shadow-lg" alt="Floor Plan" />
        </div>
      </div>
    </div>
  );
}