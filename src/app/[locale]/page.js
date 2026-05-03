"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';

export default function Home() {
  const t = useTranslations('HomePage');
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* 1. Header */}
      <nav className="flex justify-between items-center py-5 px-10 border-b">
        <div className="text-3xl font-black text-blue-900 tracking-tighter">
          AK <span className="text-blue-500 font-light text-2xl">PROPERTY</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#projects" className="hover:text-blue-600 transition text-blue-900">{t('navProjects')}</a>
          <a href="#about" className="hover:text-blue-600 transition text-blue-900">{t('navAbout')}</a>
        </div>
        <div className="flex items-center">
          <a href="https://wa.me/251913739983" className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold hover:bg-blue-800 transition shadow-lg">
            {t('contactBtn')}
          </a>
          
          {/* የቋንቋ መቀያየሪያ */}
          <div className="flex space-x-3 items-center ml-4 border-l pl-4 border-gray-200">
            <a href="/am" className="text-xs font-bold text-blue-900 hover:text-blue-500 transition">አማርኛ</a>
            <span className="text-gray-300">|</span>
            <a href="/en" className="text-xs font-bold text-blue-900 hover:text-blue-500 transition">EN</a>
          </div>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section id="about" className="relative py-24 px-10 bg-gradient-to-br from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              {t('heroTitleLine1')} <br /> {t('heroTitleLine2')}
            </h1>
            <p className="text-xl text-blue-100 mb-10 max-w-lg">
               (AK Property) {t('heroSubtitle')}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+251913739983" className="bg-white text-blue-900 px-8 py-4 rounded-xl font-black text-lg shadow-2xl hover:scale-105 transition inline-block">
                {t('callNow')}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-12 md:mt-0 relative">
            <div className="w-full h-[450px] bg-white/10 rounded-3xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-2xl overflow-hidden">
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

      {/* Search Bar */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-2xl -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">{t('searchLocation')}</label>
            <input type="text" placeholder="e.g., BOLE" className="border p-2 rounded-lg outline-none focus:border-blue-500" />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">{t('searchHouseType')}</label>
            <select className="border p-2 rounded-lg outline-none focus:border-blue-500">
              <option>{t('apt')}</option>
              <option>{t('villa')}</option>
              <option>{t('condo')}</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-semibold text-gray-600 mb-1">{t('searchPrice')}</label>
            <select className="border p-2 rounded-lg outline-none focus:border-blue-500">
              <option>{t('price1')}</option>
              <option>{t('price2')}</option>
              <option>{t('price3')}</option>
            </select>
          </div>
          <button 
            onClick={() => {
              const locale = window.location.pathname.split('/')[1] || 'en';
              router.push(`/${locale}/properties`);
            }}
            className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition h-[42px]"
          >
            {t('search_button')}
          </button>
        </div>
      </div>

      {/* 3. Services */}
      <section className="py-24 px-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900">{t('servicesTitle')}</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-xl transition">
            <div className="text-5xl mb-6">🏘️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service1Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('service1Desc')}</p>
          </div>
          <div className="p-10 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition border-t-4 border-t-blue-500">
            <div className="text-5xl mb-6">✈️</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service2Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('service2Desc')}</p>
          </div>
          <div className="p-10 bg-blue-50 rounded-3xl border border-blue-100 hover:shadow-xl transition">
            <div className="text-5xl mb-6">💡</div>
            <h3 className="text-2xl font-bold mb-4 text-blue-900">{t('service3Title')}</h3>
            <p className="text-gray-600 leading-relaxed">{t('service3Desc')}</p>
          </div>
        </div>
      </section>

      {/* 5. Properties List */}
      <section id="projects" className="py-24 px-10 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold text-blue-900">{t('projectsTitle')}</h2>
              <div className="w-20 h-1 bg-blue-500 mt-4"></div>
            </div>
            <p className="text-gray-500 hidden md:block text-lg font-medium">{t('projectsSubtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* ቤት 1 */}
            <div className="group cursor-pointer bg-white overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/ayat_house.jpg" alt="AYAT HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" onError={(e) => {e.target.src="https://via.placeholder.com/400x300?text=House+Photo"}} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">{t('forSale')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t('house1Title')}</h3>
                <p className="text-gray-500 text-sm mb-4">📍 {t('house1Loc')}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-black text-xl">{t('house1Price')}</span>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition">{t('moreBtn')}</button>
                </div>
              </div>
            </div>

            {/* ቤት 2 */}
            <div className="group cursor-pointer bg-white overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/bulgariya_house1.jpg" alt="BULGARIYA HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" onError={(e) => {e.target.src="https://via.placeholder.com/400x300?text=House+Photo"}} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">{t('forSale')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t('house2Title')}</h3>
                <p className="text-gray-500 text-sm mb-4">📍 {t('house2Loc')}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-black text-xl">{t('house2Price')}</span>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition">{t('moreBtn')}</button>
                </div>
              </div>
            </div>

            {/* ቤት 3 */}
            <div className="group cursor-pointer bg-white overflow-hidden rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="h-64 bg-gray-200 relative overflow-hidden">
                <img src="/piyassa_house.jpg" alt="PIYASA HOUSE" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" onError={(e) => {e.target.src="https://via.placeholder.com/400x300?text=House+Photo"}} />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">{t('forSale')}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-900 mb-2">{t('house3Title')}</h3>
                <p className="text-gray-500 text-sm mb-4">📍 {t('house3Loc')}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-blue-600 font-black text-xl">{t('house3Price')}</span>
                  <button className="bg-blue-50 text-blue-600 px-4 py-2 rounded-lg font-bold text-sm hover:bg-blue-600 hover:text-white transition">{t('moreBtn')}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <footer className="bg-blue-900 text-white py-16 px-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 italic">AK PROPERTY</h2>
          <p className="text-blue-200 mb-4">ADDIS ABABA / ETHIOPIA</p>
          <p className="text-blue-100 mb-8 font-mono">PHONE NUMBER +251 923273175 / +251 913739983</p>
          <div className="flex justify-center space-x-8 mb-10">
            <a href="https://t.me/PropertiesInEthiopia" className="font-bold hover:text-blue-400">Telegram</a>
            <a href="https://wa.me/251913739983" className="font-bold hover:text-blue-400">WhatsApp</a>
            <a href="https://www.facebook.com/profile.php?id=61553712802326" className="font-bold hover:text-blue-400">Facebook</a>
          </div>
          <p className="text-sm opacity-40">© 2026 AK PROPERTY. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}