"use client";
import React from 'react';
import { useTranslations } from 'next-intl';

export default function PropertyDetails({ params }) {
  const t = useTranslations('PropertyDetails');
  const { id } = params;

  return (
    <div className="min-h-screen bg-white p-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">Property Details</h1>
        <div className="bg-gray-200 h-96 rounded-3xl mb-8 flex items-center justify-center">
          <p className="text-gray-500">Image for Property ID: {id}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-800">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Detailed information about this specific property will be displayed here. 
              This is property number {id}.
            </p>
          </div>
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold mb-4 text-blue-900">Contact Agent</h3>
            <p className="mb-4">Call: +251 913739983</p>
            <a href="https://wa.me/251913739983" className="block text-center bg-blue-600 text-white py-3 rounded-xl font-bold">
              Message on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}