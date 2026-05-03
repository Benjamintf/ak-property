"use client";
import React, { use, useState } from 'react';

// ሦስቱም ቤቶች መረጃ በአንድ ላይ (ለአማርኛ እና ለእንግሊዝኛ)
const propertyData = {
  "en": {
    "ayat-house": {
      title: "Modern Villa in Ayat",
      price: "45,000,000 ETB",
      location: "Ayat, Addis Ababa",
      details: "This luxury villa features 5 bedrooms, a modern kitchen, and a spacious garden. Perfect for families looking for comfort and style.",
      specs: ["5 Bedrooms", "4 Bathrooms", "2 Parking", "350 sqm"],
      images: ["/ayat_house.jpg", "/ayat_house.jpg"] // እዚህ ጋር ሁለተኛ ፎቶ ካለህ ስሙን ቀይር
    },
    "bulgaria-house": {
      title: "Luxury Apartment near Bulgaria",
      price: "12,500,000 ETB",
      location: "Bulgaria, Addis Ababa",
      details: "High-end apartment located in a prime area. Close to everything you need in the city center.",
      specs: ["3 Bedrooms", "2 Bathrooms", "Gym Access", "Elevator"],
      images: ["/bulgariya_house1.jpg", "/bulgariya_house1.jpg"]
    },
    "piassa-house": {
      title: "Commercial Building in Piassa",
      price: "80,000,000 ETB",
      location: "Piassa, Addis Ababa",
      details: "A great investment opportunity in the historical center of Addis Ababa. Ideal for business or office use.",
      specs: ["Commercial Use", "Prime Location", "Large Space", "Historical Area"],
      images: ["/piyassa_house.jpg", "/piyassa_house.jpg"]
    }
  },
  "am": {
    "ayat-house": {
      title: "ዘመናዊ ቪላ በአያት",
      price: "45,000,000 ብር",
      location: "አያት፣ አዲስ አበባ",
      details: "ይህ ቅንጡ ቪላ 5 መኝታ ቤቶች፣ ዘመናዊ ወጥ ቤት እና ሰፊ ግቢ ያለው ነው። ለቤተሰብ ምቹ እና ማራኪ ዲዛይን አለው።",
      specs: ["5 መኝታ ቤት", "4 መታጠቢያ", "2 መኪና ማቆሚያ", "350 ካሬ"],
      images: ["/ayat_house.jpg", "/ayat_house.jpg"]
    },
    "bulgaria-house": {
      title: "ቅንጡ አፓርታማ በቡልጋሪያ",
      price: "12,500,000 ብር",
      location: "ቡልጋሪያ፣ አዲስ አበባ",
      details: "በከተማው እምብርት ላይ የሚገኝ ምርጥ አፓርታማ። ለሁሉም ነገሮች ቅርብ የሆነ አመቺ ቦታ።",
      specs: ["3 መኝታ ቤት", "2 መታጠቢያ", "ጂም ያለው", "አሳንሰር ያለው"],
      images: ["/bulgariya_house1.jpg", "/bulgariya_house1.jpg"]
    },
    "piassa-house": {
      title: "የንግድ ህንፃ በፒያሳ",
      price: "80,000,000 ብር",
      location: "ፒያሳ፣ አዲስ አበባ",
      details: "በታሪካዊው የፒያሳ እምብርት ላይ የሚገኝ ታላቅ የኢንቨስትመንት ዕድል። ለንግድ ድርጅት ወይም ለቢሮ የሚሆን።",
      specs: ["ለንግድ የሚሆን", "ዋና መንገድ ላይ", "ሰፊ ቦታ", "ታሪካዊ ቦታ"],
      images: ["/piyassa_house.jpg", "/piyassa_house.jpg"]
    }
  }
};

export default function PropertyDetails({ params }) {
  const { id, locale } = use(params);
  
  // ቋንቋውን መርጦ መረጃውን መውሰድ
  const data = propertyData[locale] || propertyData["en"];
  const house = data[id];
  
  const [activeImg, setActiveImg] = useState(0);

  if (!house) return <div className="p-20 text-center font-bold">Property Not Found!</div>;

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Bar */}
      <nav className="bg-white p-6 shadow-md mb-10 flex justify-between items-center px-10">
        <a href={`/${locale}`} className="text-blue-900 font-black text-xl italic hover:scale-105 transition">
          ← AK PROPERTY
        </a>
        <div className="flex items-center gap-4">
          <a href={`/am/property/${id}`} className={`text-sm font-bold ${locale === 'am' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}>አማርኛ</a>
          <span className="text-gray-300">|</span>
          <a href={`/en/property/${id}`} className={`text-sm font-bold ${locale === 'en' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}>English</a>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-[40px] shadow-2xl border border-gray-50">
          
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl overflow-hidden h-[450px] bg-gray-100 shadow-inner">
               <img 
                 src={house.images[activeImg]} 
                 alt={house.title} 
                 className="w-full h-full object-cover transition-opacity duration-500"
               />
            </div>
            <div className="flex gap-4 overflow-x-auto py-2">
              {house.images.map((img, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveImg(index)}
                  className={`cursor-pointer w-24 h-20 flex-shrink-0 rounded-xl overflow-hidden border-4 transition ${activeImg === index ? 'border-blue-600' : 'border-transparent opacity-50'}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info Content */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-black text-blue-900 mb-2 leading-tight">{house.title}</h1>
            <p className="text-gray-400 mb-6 font-medium flex items-center gap-2">
               <span className="text-red-500 text-lg">📍</span> {house.location}
            </p>
            
            <div className="text-4xl font-black text-blue-600 mb-8 tracking-tighter">
              {house.price}
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-10">
              {house.specs.map((spec, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-2xl text-blue-900 text-xs font-bold border border-blue-100 flex items-center gap-2">
                  <span className="bg-blue-200 w-2 h-2 rounded-full"></span> {spec}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-800 mb-3 text-lg">{locale === 'am' ? 'ዝርዝር መግለጫ' : 'Description'}</h3>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg italic bg-gray-50 p-4 rounded-xl border-l-4 border-blue-900">
              "{house.details}"
            </p>

            <div className="flex gap-4 mt-auto">
              <a href="https://wa.me/251913739983" className="flex-1 bg-[#25D366] text-white text-center py-4 rounded-2xl font-bold shadow-lg hover:opacity-90 transition">
                WhatsApp
              </a>
              <a href="tel:+251913739983" className="flex-1 bg-blue-900 text-white text-center py-4 rounded-2xl font-bold shadow-lg hover:bg-blue-800 transition">
                {locale === 'am' ? 'ደውሉ' : 'Call Now'}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}