"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { 
  MessageCircle, Send, Globe, Phone, Search, MapPin, 
  Home as HomeIcon, Tag, ShieldCheck, Star, Facebook 
} from 'lucide-react';

export default function Home() {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const params = useParams();
  const locale = params.locale || 'en';

  const [filters, setFilters] = useState({
    location: "",
    type: t('apt'),
    price: t('price1')
  });

  // የመፈለጊያ አመክንዮ (Search Logic)
  const handleSearch = (e) => {
    if (e) e.preventDefault();
    const locKey = filters.location.toLowerCase().trim();
    
    if (locKey.includes("ayat") || locKey.includes("አያት")) {
      router.push(`/${locale}/property/ayat-house`);
    } else if (locKey.includes("bulgaria") || locKey.includes("ቡልጋሪያ")) {
      router.push(`/${locale}/property/bulgaria-house`);
    } else if (locKey.includes("piassa") || locKey.includes("ፒያሳ")) {
      router.push(`/${locale}/property/piassa-house`);
    } else {
      // ቦታው ካልተገኘ ወደ ፕሮጀክቶች ዝርዝር ዝቅ እንዲል ያደርጋል
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-xl z-[100] border-b border-gray-100 py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
        <div className="flex flex-col leading-none cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-2xl font-black text-blue-900 tracking-tighter uppercase">AK PROPERTY</span>
          <span className="text-blue-500 font-bold text-[9px] tracking-[0.3em]">EXCELLENCE IN REALTY</span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex space-x-8 font-bold text-[11px] uppercase tracking-widest text-blue-900">
            <a href="#projects" className="hover:text-blue-600 transition">{t('navProjects')}</a>
            <a href="#about" className="hover:text-blue-600 transition">{t('navAbout')}</a>
            <a href="#contact" className="hover:text-blue-600 transition">{locale === 'am' ? 'አግኙን' : 'Contact'}</a>
          </div>

          <div className="flex bg-gray-100 p-1 rounded-full border border-gray-200">
            <button onClick={() => router.push('/am')} className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all ${locale === 'am' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-blue-600'}`}>አማርኛ</button>
            <button onClick={() => router.push('/en')} className={`px-4 py-1.5 text-[10px] font-black rounded-full transition-all ${locale === 'en' ? 'bg-blue-600 text-white shadow-md' : 'text-gray-500 hover:text-blue-600'}`}>EN</button>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-slate-950 text-white">
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} className="lg:w-1/2 text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
              {locale === 'am' ? 'ፕሪሚየም ሪል እስቴት አዲስ አበባ' : 'Premium Real Estate Addis Ababa'}
            </span>
            <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              {t('heroTitleLine1')} <br/> 
              <span className="text-blue-500 italic">{t('heroTitleLine2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl font-medium italic">
              "{t('heroSubtitle')}"
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6">
              <a href="tel:+251913739983" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-blue-900/40 uppercase tracking-tighter">
                {t('callNow')}
              </a>
            </div>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative">
            <div className="relative w-full aspect-[4/5] md:w-[450px] md:h-[550px] mx-auto bg-slate-900 rounded-[60px] border border-white/10 shadow-2xl overflow-hidden group">
              <img src="/me.jpg" alt="Tesfaye Kifle" className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-1000" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-2">Founder & CEO</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">AMARE Kifle Abera</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ADVANCED SEARCH --- */}
      <section className="px-6 -mt-20 relative z-30">
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto bg-white p-6 md:p-10 rounded-[40px] shadow-2xl border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t('searchLocation')}</label>
              <input 
                type="text" 
                placeholder="Ayat, Piassa..." 
                className="w-full bg-gray-50 p-5 rounded-2xl outline-none border border-transparent focus:border-blue-500 font-bold"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t('searchHouseType')}</label>
              <select className="w-full bg-gray-50 p-5 rounded-2xl outline-none font-bold appearance-none">
                <option>{t('apt')}</option>
                <option>{t('villa')}</option>
              </select>
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{t('searchPrice')}</label>
              <select className="w-full bg-gray-50 p-5 rounded-2xl outline-none font-bold appearance-none">
                <option>{t('price1')}</option>
                <option>{t('price2')}</option>
              </select>
            </div>
            <button onClick={handleSearch} className="bg-blue-600 text-white h-[65px] rounded-2xl hover:bg-blue-800 transition-all font-black uppercase tracking-widest flex items-center justify-center gap-3">
              <Search size={20} /> {locale === 'am' ? 'ፈልግ' : 'SEARCH'}
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-black text-blue-950 uppercase italic tracking-tighter">
              {locale === 'am' ? 'ለምን እኛን ይመርጣሉ?' : 'Why Choose Us'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<MapPin/>} title={locale === 'am' ? 'ምቹ ቦታ' : 'Prime Location'} desc="Properties in the most sought-after neighborhoods." />
            <FeatureCard icon={<Tag/>} title={locale === 'am' ? 'ተመጣጣኝ ዋጋ' : 'Fair Pricing'} desc="Luxury living spaces with transparent pricing." />
            <FeatureCard icon={<ShieldCheck/>} title={locale === 'am' ? 'ህጋዊ ዋስትና' : 'Secure Assets'} desc="100% legal and structural verification." />
            <FeatureCard icon={<Star/>} title={locale === 'am' ? 'ምርጥ አገልግሎት' : 'Expert Guidance'} desc="Professional support from start to finish." />
          </div>
        </div>
      </section>

      {/* --- PROJECTS --- */}
      <section id="projects" className="py-32 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-black text-blue-950 uppercase italic tracking-tighter mb-20">
            {t('projectsTitle')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <PropertyCard 
              img="/ayat_house.jpg" title={t('house1Title')} loc={t('house1Loc')} price={t('house1Price')} 
              onClick={() => router.push(`/${locale}/property/ayat-house`)} 
            />
            <PropertyCard 
              img="/bulgariya_house1.jpg" title={t('house2Title')} loc={t('house2Loc')} price={t('house2Price')} 
              onClick={() => router.push(`/${locale}/property/bulgaria-house`)} 
            />
            <PropertyCard 
              img="/piyassa_house.jpg" title={t('house3Title')} loc={t('house3Loc')} price={t('house3Price')} 
              onClick={() => router.push(`/${locale}/property/piassa-house`)} 
            />
          </div>
        </div>
      </section>

      {/* --- CONTACT --- */}
      <section id="contact" className="py-32 bg-blue-950 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-[0.8]">
              READY TO <br/> <span className="text-blue-500">MOVE IN?</span>
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"><Phone size={20}/></div>
                <span className="text-xl font-bold">+251 913 73 99 83</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center"><Send size={20}/></div>
                <span className="text-xl font-bold">infohttps://t.me/PropertiesInEthiopia</span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} className="bg-white p-10 rounded-[40px]">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input placeholder="First Name" className="w-full bg-gray-100 p-5 rounded-2xl outline-none text-gray-900 font-bold" />
                  <input placeholder="Last Name" className="w-full bg-gray-100 p-5 rounded-2xl outline-none text-gray-900 font-bold" />
                </div>
                <input placeholder="Email" className="w-full bg-gray-100 p-5 rounded-2xl outline-none text-gray-900 font-bold" />
                <textarea placeholder="Message" rows="4" className="w-full bg-gray-100 p-5 rounded-2xl outline-none text-gray-900 font-bold"></textarea>
                <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all uppercase tracking-widest shadow-xl shadow-blue-200">
                  {locale === 'am' ? 'መልዕክት ላክ' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-24 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
            {/* አጭር መግለጫ */}
            <div className="col-span-1">
              <h2 className="text-2xl font-black tracking-tighter mb-4">AK PROPERTY</h2>
              <p className="text-gray-500 text-sm font-medium leading-relaxed max-w-sm">
                {locale === 'am' 
                  ? 'በአዲስ አበባ ውስጥ ዘመናዊ እና ምቹ የመኖሪያ ቤቶችን ለደንበኞቻችን በታማኝነት እናቀርባለን። የእርስዎ ህልም ቤት የእኛ ቅድሚያ የሚሰጠው ጉዳይ ነው።' 
                  : 'We provide modern and comfortable residential homes in Addis Ababa with integrity. Your dream home is our top priority.'}
              </p>
            </div>

            {/* ሊንኮች */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2">Navigation</h4>
              <ul className="text-xs font-bold text-gray-400 space-y-3 uppercase tracking-widest">
                <li><a href="#projects" className="hover:text-blue-500 transition">Properties</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
              </ul>
            </div>

            {/* ሶሻል ሚዲያ */}
            <div className="flex flex-col gap-6 items-start md:items-end">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-500">Follow Us</h4>
              <div className="flex gap-4">
                <SocialIcon href="https://t.me/PropertiesInEthiopia" icon={<Send size={20} />} />
                <SocialIcon href="https://wa.me/251913739983" icon={<MessageCircle size={20} />} />
                <SocialIcon href="https://www.facebook.com/profile.php?id=61553712802326" icon={<Globe size={20} />} />
              </div>
            </div>
          </div>

          {/* የታችኛው መስመር (The Professional Bottom Line) */}
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[9px] uppercase font-black tracking-[0.4em] text-gray-600">
              © 2026 AK PROPERTY. All Rights Reserved.
            </p>
            
            {/* ይሄ ክፍል ፕሮፌሽናል ያደርገዋል */}
            <div className="flex items-center gap-2">
              <span className="h-px w-8 bg-blue-600/30"></span>
              <p className="text-[9px] uppercase font-black tracking-[0.2em] text-gray-500">
                Developed by <span className="text-blue-500">Amare Kifle Abera</span>
              </p>
              <span className="h-px w-8 bg-blue-600/30"></span>
            </div>

            <div className="flex gap-8 text-[9px] font-black uppercase tracking-widest text-gray-600">
              <span className="hover:text-gray-400 cursor-pointer transition">Privacy Policy</span>
              <span className="hover:text-gray-400 cursor-pointer transition">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB COMPONENTS ---

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="p-8 bg-white rounded-[30px] border border-gray-100 shadow-sm hover:shadow-xl transition-all text-left">
      <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-lg font-black text-blue-950 mb-2 uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-sm font-medium">{desc}</p>
    </motion.div>
  );
}

function PropertyCard({ img, title, loc, price, onClick }) {
  return (
    <motion.div whileHover={{ y: -10 }} onClick={onClick} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-lg cursor-pointer group">
      <div className="h-64 relative overflow-hidden">
        <img src={img} className="w-full h-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute top-5 left-5 bg-blue-600 text-white px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest italic">Exclusive</div>
      </div>
      <div className="p-8">
        <div className="flex items-center gap-2 text-blue-500 font-bold text-[10px] uppercase mb-2"><MapPin size={12}/> {loc}</div>
        <h3 className="text-xl font-black text-blue-950 mb-6 uppercase tracking-tighter leading-tight group-hover:text-blue-600 transition">{title}</h3>
        <div className="pt-6 border-t flex justify-between items-center">
          <span className="text-blue-600 font-black text-2xl tracking-tighter">{price}</span>
          <span className="text-[10px] font-black uppercase tracking-widest bg-gray-100 px-4 py-2 rounded-lg">Details</span>
        </div>
      </div>
    </motion.div>
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all">
      {icon}
    </a>
  );
}