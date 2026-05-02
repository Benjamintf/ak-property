import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* 1. Header - ስም እና አድራሻ */}
      <nav className="flex justify-between items-center py-5 px-10 border-b sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="text-3xl font-black text-blue-900 tracking-tighter">
          AK <span className="text-blue-500 font-light text-2xl">PROPERTY</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#projects" className="hover:text-blue-600 transition">ፕሮጀክቶች</a>
          <a href="#about" className="hover:text-blue-600 transition">ስለ እኔ</a>
        </div>
        <a href="https://wa.me/251923273175" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition shadow-lg">
          ያግኙኝ
        </a>
      </nav>

      {/* 2. Hero Section - የመጀመሪያ እይታ */}
      <section className="relative py-24 px-10 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              የህልምዎን ቤት <br /> በታማኝነት ያግኙ!
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-lg">
              እኔ ተስፋዬ (AK) እባላለሁ። ከአዲስ አበባ ታላላቅ ሪል እስቴቶች ጋር በመሆን፣ ለፍላጎትዎ የሚስማማውን ምርጥ ቤት በታማኝነት እና በቅንነት አቀርብልዎታለሁ።
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:scale-105 transition">
                አሁኑኑ ይደውሉ
              </button>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="w-full h-80 bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl">
              <span className="text-white/50 text-xl font-bold italic">የባለሙያው ፎቶ እዚህ ይገባል</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services - ለምን እሱን ይመርጣሉ? */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900">አገልግሎቶቻችን</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-xl transition">
            <div className="text-5xl mb-6">🏘️</div>
            <h3 className="text-2xl font-bold mb-4">ምርጥ ቤቶች</h3>
            <p className="text-gray-600 leading-relaxed">ከታመኑ የሪል እስቴት ድርጅቶች ጋር ብቻ በመስራት የደንበኞችን ደህንነት እናረጋግጣለን።</p>
          </div>
          <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition">
            <div className="text-5xl mb-6">✈️</div>
            <h3 className="text-2xl font-bold mb-4">ለዲያስፖራዎች</h3>
            <p className="text-gray-600 leading-relaxed">በውጭ ሀገር ለምትኖሩ ኢትዮጵያውያን በታማኝነት እና በቅንነት የቤት ግዢን እናሳልጣለን።</p>
          </div>
          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-xl transition">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-2xl font-bold mb-4">ሙያዊ ምክር</h3>
            <p className="text-gray-600 leading-relaxed">የትኛው ቦታ ለኢንቨስትመንት አትራፊ እንደሆነ በቂ መረጃ እንሰጥዎታለን።</p>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-blue-900 text-white py-16 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 italic">AK PROPERTY</h2>
          <p className="text-blue-200 mb-8">አዲስ አበባ፣ ኢትዮጵያ | ስልክ፦ +251 923273175</p>
          <div className="flex justify-center space-x-8 mb-10">
            <span className="font-bold cursor-pointer hover:text-blue-400">Telegram</span>
            <span className="font-bold cursor-pointer hover:text-blue-400">WhatsApp</span>
            <span className="font-bold cursor-pointer hover:text-blue-400">Facebook</span>
          </div>
          <p className="text-sm opacity-40">© 2026 AK PROPERTY. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}