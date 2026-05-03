"use client";
import React, { use } from 'react';

// የቤቶቹ መረጃ ዝርዝር
const propertyData = {
  "ayat-house": {
    title: "Modern Villa in Ayat",
    price: "45,000,000 ETB",
    location: "Ayat, Addis Ababa",
    details: "This luxury villa features 5 bedrooms, 4 bathrooms, and a spacious garden. Built with modern aesthetics and high-quality materials.",
    specs: ["5 Bedrooms", "4 Bathrooms", "2 Parking Spaces", "350 sqm Area"],
    image: "/ayat_house.jpg"
  },
  "bulgaria-house": {
    title: "Luxury Apartment near Bulgaria Mazoria",
    price: "12,500,000 ETB",
    location: "Bulgaria, Addis Ababa",
    details: "Spacious 3-bedroom apartment located in the heart of the city. Close to international organizations and shopping malls.",
    specs: ["3 Bedrooms", "2 Bathrooms", "Gym Access", "Elevator"],
    image: "/bulgariya_house1.jpg"
  },
  "piassa-house": {
    title: "Commercial Building in Piassa",
    price: "80,000,000 ETB",
    location: "Piassa, Addis Ababa",
    details: "Prime location for business. A historical yet renovated building perfect for offices or a boutique hotel.",
    specs: ["Commercial Space", "Prime Location", "Historical Area", "Easy Access"],
    image: "/piyassa_house.jpg"
  }
};

export default function PropertyDetails({ params }) {
  const { id } = use(params);
  const house = propertyData[id];

  if (!house) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Property not found!</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Navigation Dummy */}
      <div className="bg-white p-6 shadow-sm mb-10">
        <div className="max-w-6xl mx-auto">
          <a href="/" className="text-blue-900 font-bold">← AK PROPERTY</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 bg-white p-8 rounded-[40px] shadow-xl border border-gray-100">
          
          {/* Image Section */}
          <div className="rounded-3xl overflow-hidden h-[400px] bg-gray-100 shadow-lg">
             <img 
               src={house.image} 
               alt={house.title} 
               className="w-full h-full object-cover"
               onError={(e) => { e.target.src = "https://via.placeholder.com/600x400?text=Property+Image"; }}
             />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2">Available for Sale</span>
            <h1 className="text-4xl font-black text-blue-900 mb-4">{house.title}</h1>
            <p className="text-gray-500 mb-6 flex items-center italic">📍 {house.location}</p>
            
            <div className="text-3xl font-black text-blue-600 mb-8">{house.price}</div>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {house.specs.map((spec, index) => (
                <div key={index} className="bg-blue-50 p-3 rounded-xl text-blue-900 text-sm font-bold flex items-center">
                  ✅ {spec}
                </div>
              ))}
            </div>

            <p className="text-gray-600 leading-relaxed mb-10">
              {house.details}
            </p>

            <div className="flex gap-4">
              <a href="https://wa.me/251913739983" className="flex-1 bg-green-500 text-white text-center py-4 rounded-2xl font-bold hover:bg-green-600 transition">
                WhatsApp
              </a>
              <a href="tel:+251913739983" className="flex-1 bg-blue-900 text-white text-center py-4 rounded-2xl font-bold hover:bg-blue-800 transition">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}