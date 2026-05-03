"use client";
import React, { use, useState } from 'react';

// የቤቶቹ መረጃ ከብዙ ፎቶዎች ጋር
const propertyData = {
  "ayat-house": {
    title: "Modern Villa in Ayat",
    price: "4,000,000 ETB",
    location: "Ayat, Addis Ababa",
    details: "This luxury villa features 5 bedrooms, 4 bathrooms, and a spacious garden. Built with modern aesthetics and high-quality materials.",
    specs: ["5 Bedrooms", "4 Bathrooms", "2 Parking Spaces", "350 sqm Area"],
    images: ["/ayat_house.jpg", "/ayat_house2.jpg", "/ayat_house3.jpg"] // እዚህ ጋር ተጨማሪ ፎቶዎችን ጨምር
  },
  "bulgaria-house": {
    title: "Luxury Apartment near Bulgaria",
    price: "2,500,000 ETB",
    location: "Bulgaria, Addis Ababa",
    details: "Spacious 3-bedroom apartment located in the heart of the city. Close to international organizations and shopping malls.",
    specs: ["3 Bedrooms", "2 Bathrooms", "Gym Access", "Elevator"],
    images: ["/bulgariya_house1.jpg", "/bulgariya_house2.jpg", "/bulgariya_house3.jpg"] 
  },
  "piassa-house": {
    title: "Commercial Building in Piassa",
    price: "5,000,000 ETB",
    location: "Piassa, Addis Ababa",
    details: "Prime location for business. A historical yet renovated building perfect for offices or a boutique hotel.",
    specs: ["Commercial Space", "Prime Location", "Historical Area", "Easy Access"],
    images: ["/piyassa_house.jpg", "/piyassa_house2.jpg", "/piyassa_house3.jpg"]
  }
};

export default function PropertyDetails({ params }) {
  const { id } = use(params);
  const house = propertyData[id];
  
  // ለጋለሪው (Main image state)
  const [activeImg, setActiveImg] = useState(0);

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold font-sans">Property not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20 font-sans">
      <div className="bg-white p-6 shadow-sm mb-10">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="text-blue-900 font-bold flex items-center gap-2">
            <span className="text-xl">←</span> AK PROPERTY
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
          
          {/* Image Gallery Section */}
          <div className="flex flex-col gap-4">
            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden h-[450px] bg-gray-100 shadow-md">
               <img 
                 src={house.images[activeImg]} 
                 alt={house.title} 
                 className="w-full h-full object-cover transition-all duration-500"
                 onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Property+Photo"; }}
               />
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {house.images.map((img, index) => (
                <div 
                  key={index} 
                  onClick={() => setActiveImg(index)}
                  className={`cursor-pointer h-24 rounded-xl overflow-hidden border-4 transition-all ${activeImg === index ? 'border-blue-600 scale-95' : 'border-transparent opacity-60 hover:opacity-100'}`}
                >
                  <img src={img} className="w-full h-full object-cover" onError={(e) => { e.target.src = "https://via.placeholder.com/150"; }} />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-start py-4">
            <div className="flex items-center gap-2 mb-4">
               <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">For Sale</span>
               <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Verified</span>
            </div>
            
            <h1 className="text-4xl font-black text-blue-900 mb-2 leading-tight">{house.title}</h1>
            <p className="text-gray-500 mb-6 flex items-center gap-1 font-medium">
              <span className="text-red-500">📍</span> {house.location}
            </p>
            
            <div className="text-4xl font-black text-blue-600 mb-8 tracking-tight">{house.price}</div>
            
            <h3 className="font-bold text-gray-800 mb-4">Key Features:</h3>
            <div className="grid grid-cols-2 gap-3 mb-10">
              {house.specs.map((spec, index) => (
                <div key={index} className="bg-gray-50 p-4 rounded-2xl text-gray-700 text-sm font-bold border border-gray-100 flex items-center gap-2">
                  <span className="text-blue-500">✓</span> {spec}
                </div>
              ))}
            </div>

            <h3 className="font-bold text-gray-800 mb-2">Description:</h3>
            <p className="text-gray-600 leading-relaxed mb-10 text-lg">
              {house.details}
            </p>

            <div className="flex gap-4 mt-auto">
              <a href="https://wa.me/251913739983" className="flex-1 bg-[#25D366] text-white text-center py-4 rounded-2xl font-bold hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2">
                 WhatsApp
              </a>
              <a href="tel:+251913739983" className="flex-1 bg-blue-900 text-white text-center py-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg flex items-center justify-center gap-2">
                 Call Agent
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}