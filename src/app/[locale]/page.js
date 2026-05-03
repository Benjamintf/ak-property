"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';

export default function Home() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'en';

  // የሰርች መረጃን ለመያዝ
  const [location, setLocation] = useState("");

  // ሰርች ሲደረግ ቀጥታ ወደ ቤቶቹ የሚወስድ ፋንክሽን
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const searchKey = location.toLowerCase().trim();
    
    if (searchKey.includes("ayat") || searchKey.includes("አያት")) {
      router.push(`/${locale}/property/ayat-house`);
    } else if (searchKey.includes("bulgaria") || searchKey.includes("ቡልጋሪያ")) {
      router.push(`/${locale}/property/bulgaria-house`);
    } else if (searchKey.includes("piassa") || searchKey.includes("ፒያሳ")) {
      router.push(`/${locale}/property/piassa-house`);
    } else {
      // ፍለጋው ካልተገኘ ወደ ፕሮጀክቶች ዝርዝር ዝቅ እንዲል ያደርጋል
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Header - መደራረብ እንዳይኖር የተስተካከለ */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
        <div className="flex flex-col leading-none">
          <span className="text-2xl font-black text-blue-900 tracking-tighter">AK</span>
          <span className="text-blue-500 font-light text-xs tracking-[0.2em]">PROPERTY</span>
        </div>
        
        <div className="flex items-center gap-3 md:gap-6">
          <div className="hidden lg:flex space-x-6 font-bold text-sm uppercase">
            <a href="#projects" className="hover:text-blue-600 transition text-blue-900">{t('navProjects')}</a>
            <a href="#about" className="hover:text-blue-600 transition text-blue-900">{t('navAbout')}</a>
          </div>
          
          <a href="https://wa.me/251913739983" className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full font-bold text-[10px] md:text-sm hover:bg-blue-800 transition shadow-lg whitespace-nowrap">
            {t('contactBtn')}
          </a>
          
          <div className="flex space-x-2 items-center border-l pl-3 border-gray-200">
            <a href="/am" className={`text-[10px] font-black ${locale === 'am' ? 'text-blue-600' : 'text-gray-400'}`}>አማርኛ</a>
            <span className="text-gray-300 text-[10px]">|</span>
            <a href="/en" className={`text-[10px] font-black ${locale === 'en' ? 'text-blue-600' : 'text-gray-400'}`}>EN</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="about" className="relative pt-32 pb-24 px-10 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t('heroTitleLine1')} <br /> {t('heroTitleLine2')}
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-lg mx-auto md:mx-0 italic opacity-90">
               "(AK Property) {t('heroSubtitle')}"
            </p>
            <a href="tel:+251913739983" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:scale-105 transition inline-block">
              {t('callNow')}
            </a>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative flex justify-center">
            <div className="w-64 h-80 md:w-[400px] md:h-[500px] bg-white/10 rounded-[40px] border-4 border-white/20 shadow-2xl overflow-hidden transform rotate-2">
              <img 
                src="/me.jpg" 
                alt="AMARE KIFLE" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src="https://via.placeholder.com/450?text=AMARE+KIFLE"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Search Bar - ስሙ እና ተግባሩ የተስተካከለ */}
      <div className="max-w-5xl mx-auto bg-white p-8 rounded-[30px] shadow-2xl -mt-12 relative z-20 border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          <div className="flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('searchLocation')}</label>
            <input 
              type="text" 
              placeholder="e.g., AYAT, BOLE" 
              className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500 font-bold text-gray-700" 
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('searchHouseType')}</label>
            <select className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500 font-bold text-gray-700">
              <option>{t('apt')}</option>
              <option>{t('villa')}</option>
              <option>{t('condo')}</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-black text-gray-400 uppercase tracking-widest mb-2">{t('searchPrice')}</label>
            <select className="bg-gray-50 border border-gray-200 p-4 rounded-xl outline-none focus:border-blue-500 font-bold text-gray-700">
              <option>{t('price1')}</option>
              <option>{t('price2')}</option>
              <option>{t('price3')}</option>
            </select>
          </div>
          <button 
            onClick={handleSearch}
            className="bg-blue-600 text-white p-4 rounded-xl hover:bg-blue-700 transition font-black uppercase tracking-widest shadow-lg active:scale-95"
          >
            {locale === 'am' ? 'ፈልግ' : 'SEARCH'}
          </button>
        </div>
      </div>

      {/* 4. Services */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-blue-900 uppercase italic leading-none">{t('servicesTitle')}</h2>
          <div className="w-20 h-2 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">🏘️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service1Title')}</h3>
            <p className="text-gray-600 leading-relaxed italic">{t('service1Desc')}</p>
          </div>
          <div className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-xl transition border-t-8 border-t-blue-500 group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">✈️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service2Title')}</h3>
            <p className="text-gray-600 leading-relaxed italic">{t('service2Desc')}</p>
          </div>
          <div className="p-10 bg-gray-50 rounded-[40px] border border-gray-100 hover:shadow-xl transition group">
            <div className="text-5xl mb-6 group-hover:scale-110 transition duration-300">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service3Title')}</h3>
            <p className="text-gray-600 leading-relaxed italic">{t('service3Desc')}</p>
          </div>
        </div>
      </section>

      {/* 5. Properties List */}
      <section id="projects" className="py-24 px-10 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 text-center md:text-left">
            <div>
              <h2 className="text-4xl font-black text-blue-900 uppercase italic">{t('projectsTitle')}</h2>
              <div className="w-20 h-2 bg-blue-500 mt-4 rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-gray-500 text-lg font-bold mt-4 md:mt-0 italic opacity-70">{t('projectsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* ቤት 1 */}
            <div className="group bg-white overflow-hidden rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <img src="/ayat_house.jpg" alt="AYAT HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase shadow-lg italic">{t('forSale')}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-900 mb-2 uppercase">{t('house1Title')}</h3>
                <p className="text-gray-400 font-bold text-sm mb-6 uppercase tracking-wider">📍 {t('house1Loc')}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <span className="text-blue-600 font-black text-2xl">{t('house1Price')}</span>
                  <button 
                    onClick={() => router.push(`/${locale}/property/ayat-house`)}
                    className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-xl font-black text-xs uppercase hover:bg-blue-600 hover:text-white transition shadow-sm"
                  >
                    {t('moreBtn')}
                  </button>
                </div>
              </div>
            </div>

            {/* ቤት 2 */}
            <div className="group bg-white overflow-hidden rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <img src="/bulgariya_house1.jpg" alt="BULGARIYA HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase shadow-lg italic">{t('forSale')}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-900 mb-2 uppercase">{t('house2Title')}</h3>
                <p className="text-gray-400 font-bold text-sm mb-6 uppercase tracking-wider">📍 {t('house2Loc')}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <span className="text-blue-600 font-black text-2xl">{t('house2Price')}</span>
                  <button 
                    onClick={() => router.push(`/${locale}/property/bulgaria-house`)}
                    className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-xl font-black text-xs uppercase hover:bg-blue-600 hover:text-white transition shadow-sm"
                  >
                    {t('moreBtn')}
                  </button>
                </div>
              </div>
            </div>

            {/* ቤት 3 */}
            <div className="group bg-white overflow-hidden rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-72 bg-gray-200 relative overflow-hidden">
                <img src="/piyassa_house.jpg" alt="PIYASA HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                <div className="absolute top-6 left-6 bg-blue-600 text-white px-5 py-1.5 rounded-full text-xs font-black uppercase shadow-lg italic">{t('forSale')}</div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-black text-blue-900 mb-2 uppercase">{t('house3Title')}</h3>
                <p className="text-gray-400 font-bold text-sm mb-6 uppercase tracking-wider">📍 {t('house3Loc')}</p>
                <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                  <span className="text-blue-600 font-black text-2xl">{t('house3Price')}</span>
                  <button 
                    onClick={() => router.push(`/${locale}/property/piassa-house`)}
                    className="bg-blue-50 text-blue-600 px-6 py-2.5 rounded-xl font-black text-xs uppercase hover:bg-blue-600 hover:text-white transition shadow-sm"
                  >
                    {t('moreBtn')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="bg-blue-950 text-white py-20 px-10 text-center border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black mb-6 italic tracking-tighter uppercase">AK PROPERTY</h2>
          <p className="text-blue-300 mb-2 font-bold tracking-widest">ADDIS ABABA / ETHIOPIA</p>
          <p className="text-blue-100 mb-10 font-mono opacity-80">+251 923273175 / +251 913739983</p>
          
          <div className="flex justify-center flex-wrap gap-8 mb-12">
            <a href="https://t.me/PropertiesInEthiopia" className="font-black text-xs uppercase hover:text-blue-400 transition tracking-widest border-b border-white/20 pb-1">Telegram</a>
            <a href="https://wa.me/251913739983" className="font-black text-xs uppercase hover:text-blue-400 transition tracking-widest border-b border-white/20 pb-1">WhatsApp</a>
            <a href="https://www.facebook.com/profile.php?id=61553712802326" className="font-black text-xs uppercase hover:text-blue-400 transition tracking-widest border-b border-white/20 pb-1">Facebook</a>
          </div>
          
          <div className="pt-10 border-t border-white/10">
            <p className="text-[10px] uppercase font-bold opacity-30 tracking-[0.3em]">© 2026 AK PROPERTY. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}