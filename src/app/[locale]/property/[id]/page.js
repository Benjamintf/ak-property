"use client";
import React, { use } from 'react';

export default function PropertyDetails({ params }) {
  // params ን ለመቀበል use() መጠቀም አለብን
  const { id } = use(params);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10 text-center">
      <h1 className="text-4xl font-black text-blue-900 mb-4 capitalize">
        {id.replace(/-/g, ' ')}
      </h1>
      <p className="text-xl text-gray-500 mb-8">
        Property Details for: <span className="font-bold text-blue-600">{id}</span>
      </p>
      
      <div className="w-full max-w-2xl p-12 bg-blue-50 rounded-[40px] border border-blue-100 shadow-inner">
        <p className="text-blue-900 font-medium text-lg italic">
          "የቤቱ ዝርዝር መረጃ፣ ፎቶዎች እና ዋጋ እዚህ ጋር በቅርቡ ይጫናሉ..."
        </p>
      </div>

      <a href="/" className="mt-12 bg-blue-900 text-white px-8 py-3 rounded-full font-bold hover:bg-blue-700 transition shadow-lg">
        ← ወደ ዋናው ገጽ ተመለስ
      </a>
    </div>
  );
}