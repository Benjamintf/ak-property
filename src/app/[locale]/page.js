"use client";

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { MessageCircle, Send, FacebookIcon, Phone, Search, MapPin, Home as HomeIcon, Tag } from 'lucide-react';

export default function Home() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'en';

  // State for Search Filters
  const [filters, setFilters] = useState({
    location: "",
    type: t('apt'),
    price: t('price1')
  });

  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const locKey = filters.location.toLowerCase().trim();
    
    // የፍለጋ አመክንዮ (Logic) - ቦታን መሰረት ያደረገ
    if (locKey.includes("ayat") || locKey.includes("አያት")) {
      router.push(`/${locale}/property/ayat-house`);
    } 
    else if (locKey.includes("bulgaria") || locKey.includes("bulgariya") || locKey.includes("ቡልጋሪያ")) {
      router.push(`/${locale}/property/bulgaria-house`);
    } 
    else if (locKey.includes("piassa") || locKey.includes("piyasa") || locKey.includes("ፒያሳ")) {
      router.push(`/${locale}/property/piassa-house`);
    } 
    else {
      // ፍለጋው ካልተገኘ ወደ ፕሮጀክቶች ዝርዝር ዝቅ እንዲል
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-50 border-b border-gray-100 py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
        <div className="flex flex-col leading-none group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-2xl font-black text-blue-900 tracking-tighter">AK</span>
          <span className="text-blue-500 font-bold text-[10px] tracking-[0.3em]">PROPERTY</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-8 mr-6 font-bold text-xs uppercase tracking-widest text-blue-900">
            <a href="#projects" className="hover:text-blue-600 transition">{t('navProjects')}</a>
            <a href="#services" className="hover:text-blue-600 transition">{t('navAbout')}</a>
          </div>
          <a href="https://wa.me/251913739983" className="bg-blue-600 text-white px-5 py-2.5 rounded-full font-black text-[11px] uppercase hover:bg-blue-700 transition flex items-center gap-2 shadow-lg shadow-blue-200">
            <Phone size={14} /> {t('contactBtn')}
          </a>
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <a href="/am" className={`px-2 py-1 text-[10px] font-black rounded ${locale === 'am' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>አማርኛ</a>
            <a href="/en" className={`px-2 py-1 text-[10px] font-black rounded ${locale === 'en' ? 'bg-white text-blue-600 shadow-sm' : 'text-gray-400'}`}>EN</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-28 px-6 bg-[#0a192f] text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-700 rounded-full blur-[150px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Premium Real Estate Addis Ababa
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
              {t('heroTitleLine1')} <span className="text-blue-500 italic">{t('heroTitleLine2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl leading-relaxed font-medium">
              "{t('heroSubtitle')}"
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="tel:+251913739983" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-blue-900/20 uppercase tracking-tighter">
                {t('callNow')}
              </a>
              <div className="flex -space-x-3 items-center">
                 <div className="w-12 h-12 rounded-full border-4 border-[#0a192f] bg-gray-300 overflow-hidden shadow-xl">
                    <img src="/me.jpg" className="w-full h-full object-cover" />
                 </div>
                 <div className="bg-white/5 backdrop-blur-md border border-white/10 py-2 px-4 rounded-full text-[10px] font-bold">
                    Direct Agent Support
                 </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[50px] opacity-20 blur-2xl group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative w-full aspect-[4/5] md:w-[450px] md:h-[550px] bg-white/5 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden transform lg:rotate-3 hover:rotate-0 transition duration-700">
              <img src="/me.jpg" alt="Tesfaye Kifle" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition duration-700" />
              <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent text-left">
                <p className="text-xs font-black text-blue-400 uppercase tracking-widest mb-1">Founder & CEO</p>
                <h3 className="text-2xl font-black uppercase">Tesfaye Kifle Abera</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- ADVANCED SEARCH BAR --- */}
      <section className="px-6 -mt-16 relative z-30">
        <div className="max-w-6xl mx-auto bg-white p-4 md:p-8 rounded-[35px] shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 items-end">
            <div className="flex flex-col gap-2 p-3">
              <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                <MapPin size={12} className="text-blue-500" /> {t('searchLocation')}
              </label>
              <input 
                type="text" 
                placeholder="Ayat, Bulgaria..." 
                className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 placeholder:text-gray-300 transition" 
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              />
            </div>
            
            <div className="flex flex-col gap-2 p-3 border-l border-gray-100">
              <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                <HomeIcon size={12} className="text-blue-500" /> {t('searchHouseType')}
              </label>
              <select 
                className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 appearance-none cursor-pointer"
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option>{t('apt')}</option>
                <option>{t('villa')}</option>
                <option>{t('condo')}</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 p-3 border-l border-gray-100">
              <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">
                <Tag size={12} className="text-blue-500" /> {t('searchPrice')}
              </label>
              <select 
                className="w-full bg-gray-50 border-none p-4 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 appearance-none cursor-pointer"
                onChange={(e) => setFilters({...filters, price: e.target.value})}
              >
                <option>{t('price1')}</option>
                <option>{t('price2')}</option>
                <option>{t('price3')}</option>
              </select>
            </div>

            <button 
              onClick={handleSearch}
              className="bg-blue-600 text-white h-[60px] md:h-full rounded-2xl hover:bg-blue-800 transition-all font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-200 flex items-center justify-center gap-3 active:scale-95 mb-3"
            >
              <Search size={20} /> {locale === 'am' ? 'ፈልግ' : 'SEARCH'}
            </button>
          </div>
        </div>
      </section>

      {/* --- PROJECTS LIST --- */}
      <section id="projects" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">{t('projectsSubtitle')}</span>
              <h2 className="text-4xl md:text-6xl font-black text-blue-950 uppercase italic leading-none">{t('projectsTitle')}</h2>
            </div>
            <div className="flex gap-4">
               <div className="px-6 py-3 bg-white border border-gray-200 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">All Properties</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* PROPERTY CARD - AYAT */}
            <PropertyCard 
              img="/ayat_house.jpg"
              title={t('house1Title')}
              loc={t('house1Loc')}
              price={t('house1Price')}
              btnText={t('moreBtn')}
              onClick={() => router.push(`/${locale}/property/ayat-house`)}
            />

            {/* PROPERTY CARD - BULGARIA */}
            <PropertyCard 
              img="/bulgariya_house1.jpg"
              title={t('house2Title')}
              loc={t('house2Loc')}
              price={t('house2Price')}
              btnText={t('moreBtn')}
              onClick={() => router.push(`/${locale}/property/bulgaria-house`)}
            />

            {/* PROPERTY CARD - PIASSA */}
            <PropertyCard 
              img="/piyassa_house.jpg"
              title={t('house3Title')}
              loc={t('house3Loc')}
              price={t('house3Price')}
              btnText={t('moreBtn')}
              onClick={() => router.push(`/${locale}/property/piassa-house`)}
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-blue-950 text-white pt-24 pb-12 px-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20 text-center md:text-left">
            <div className="col-span-1 md:col-span-2">
              <h2 className="text-5xl font-black mb-8 italic tracking-tighter uppercase">AK PROPERTY</h2>
              <p className="text-blue-300/60 max-w-sm mb-10 font-medium leading-relaxed">
                Elevating the real estate experience in Addis Ababa through trust, luxury, and professional guidance.
              </p>
              <div className="flex justify-center md:justify-start gap-6">
                <SocialIcon href="https://t.me/PropertiesInEthiopia" icon={<Send size={20} />} label="Telegram" />
                <SocialIcon href="https://wa.me/251913739983" icon={<MessageCircle size={20} />} label="WhatsApp" />
                <SocialIcon href="https://www.facebook.com/..." icon={<FacebookIcon size={20} />} label="Facebook" />
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Contact Info</h4>
              <ul className="space-y-4 text-blue-100/80 font-bold text-sm">
                <li className="flex items-center justify-center md:justify-start gap-3 opacity-80 hover:opacity-100 transition cursor-pointer">
                   <Phone size={16} className="text-blue-500" /> +251 913 73 99 83
                </li>
                <li className="flex items-center justify-center md:justify-start gap-3 opacity-80 hover:opacity-100 transition cursor-pointer">
                   <MapPin size={16} className="text-blue-500" /> Addis Ababa, Ethiopia
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-blue-400 mb-8">Quick Navigation</h4>
              <ul className="space-y-4 text-blue-100/80 font-bold text-sm uppercase">
                <li><a href="#projects" className="hover:text-blue-400 transition tracking-widest">Properties</a></li>
                <li><a href="#services" className="hover:text-blue-400 transition tracking-widest">About Us</a></li>
                <li><a href="tel:+251913739983" className="hover:text-blue-400 transition tracking-widest">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase font-bold opacity-30 tracking-[0.4em]">© 2026 AK PROPERTY. EXCELLENCE IN REALTY.</p>
            <div className="flex gap-8 opacity-30 text-[9px] font-black uppercase tracking-[0.2em]">
               <span>Privacy Policy</span>
               <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- REUSABLE COMPONENTS ---

function PropertyCard({ img, title, loc, price, btnText, onClick }) {
  return (
    <div className="group bg-white rounded-[40px] border border-gray-100 shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] transition-all duration-700 overflow-hidden cursor-pointer" onClick={onClick}>
      <div className="h-[340px] relative overflow-hidden p-4">
        <div className="absolute top-8 left-8 z-10 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl italic">FOR SALE</div>
        <img src={img} alt={title} className="w-full h-full object-cover rounded-[32px] group-hover:scale-110 transition duration-1000" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>
      <div className="p-10 pt-4">
        <span className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-[0.2em] mb-3">
          <MapPin size={12} /> {loc}
        </span>
        <h3 className="text-2xl font-black text-blue-950 mb-6 uppercase leading-tight group-hover:text-blue-600 transition tracking-tighter">{title}</h3>
        <div className="flex justify-between items-center pt-8 border-t border-gray-50">
          <div className="flex flex-col">
             <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Asking Price</span>
             <span className="text-blue-600 font-black text-2xl tracking-tighter">{price}</span>
          </div>
          <button className="bg-gray-950 text-white px-7 py-3.5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all hover:translate-x-2">
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon, label }) {
  return (
    <a href={href} target="_blank" className="bg-white/5 p-4 rounded-2xl hover:bg-blue-600 transition-all group shadow-xl border border-white/5">
      <div className="group-hover:scale-110 transition duration-300">
        {icon}
      </div>
    </a>
  );
}