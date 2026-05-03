"use client";
import React from 'react';

export default function PropertyDetails({ params }) {
  const { id } = params;

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-4">Property Details</h1>
      <p className="text-xl text-gray-600">Property ID: <span className="font-bold text-blue-600">{id}</span></p>
      <div className="mt-10 p-10 bg-blue-50 rounded-3xl border border-blue-100">
        <p className="text-gray-500">የቤቱ ዝርዝር መረጃ እዚህ ጋር ይታያል...</p>
      </div>
      <a href="/" className="mt-8 text-blue-600 font-bold hover:underline">← ወደ ዋናው ገጽ ተመለስ</a>
    </div>
  );
}