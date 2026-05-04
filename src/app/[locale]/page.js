"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter, useParams } from 'next/navigation';
import { 
  MessageCircle, Send, Globe, Phone, Search, MapPin, 
  Home as HomeIcon, Tag, ShieldCheck, Star, Users 
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
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100">
      
      {/* --- NAVIGATION --- */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-xl z-[100] border-b border-gray-100 py-4 px-6 md:px-10 flex justify-between items-center shadow-sm">
        <div className="flex flex-col leading-none group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <span className="text-2xl font-black text-blue-900 tracking-tighter">AK</span>
          <span className="text-blue-500 font-bold text-[10px] tracking-[0.3em]">PROPERTY</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="hidden md:flex space-x-8 mr-6 font-bold text-xs uppercase tracking-widest text-blue-900">
            <a href="#projects" className="hover:text-blue-600 transition">{t('navProjects')}</a>
            <a href="#about" className="hover:text-blue-600 transition">{t('navAbout')}</a>
            <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
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
      <section className="relative h-screen min-h-[800px] flex items-center overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-40">
            <source src="/videos/hero-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="inline-block px-4 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              Premium Real Estate Addis Ababa
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase">
              {t('heroTitleLine1')} <br/> <span className="text-blue-500 italic">{t('heroTitleLine2')}</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-gray-400 mb-12 max-w-xl font-medium italic leading-relaxed">
              "{t('heroSubtitle')}"
            </motion.p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 items-center">
              <a href="tel:+251913739983" className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-5 rounded-2xl font-black text-lg transition-all hover:scale-105 shadow-xl shadow-blue-900/40 uppercase tracking-tighter">
                {t('callNow')}
              </a>
              <div className="flex -space-x-3 items-center group cursor-pointer">
                 <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-gray-300 overflow-hidden shadow-2xl transition group-hover:scale-110">
                    <img src="/me.jpg" className="w-full h-full object-cover" alt="Tesfaye Kifle" />
                 </div>
                 <div className="bg-white/10 backdrop-blur-md border border-white/10 py-2.5 px-5 rounded-full text-[10px] font-black text-white uppercase tracking-widest">
                    Founder Support
                 </div>
              </div>
            </div>
          </div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="lg:w-1/2 relative hidden lg:block">
            <div className="relative w-full aspect-[4/5] md:w-[480px] md:h-[600px] bg-slate-900 rounded-[50px] border border-white/10 shadow-2xl overflow-hidden group">
              <img src="/me.jpg" alt="Tesfaye Kifle" className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10">
                <p className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-2">Founder & CEO</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">Tesfaye Kifle Abera</h3>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ADVANCED SEARCH --- */}
      <section className="px-6 -mt-20 relative z-30">
        <motion.div initial={{ y: 50, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} className="max-w-6xl mx-auto bg-white p-5 md:p-10 rounded-[40px] shadow-[0_50px_100px_rgba(0,0,0,0.15)] border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            <SearchField label={t('searchLocation')} icon={<MapPin size={16}/>} value={filters.location} onChange={(v)=>setFilters({...filters, location:v})} placeholder="Ayat, Bulgaria..." />
            <SelectField label={t('searchHouseType')} icon={<HomeIcon size={16}/>} options={[t('apt'), t('villa'), t('condo')]} onChange={(v)=>setFilters({...filters, type:v})} />
            <SelectField label={t('searchPrice')} icon={<Tag size={16}/>} options={[t('price1'), t('price2'), t('price3')]} onChange={(v)=>setFilters({...filters, price:v})} />
            <button onClick={handleSearch} className="bg-blue-600 text-white h-[70px] rounded-2xl hover:bg-blue-800 transition-all font-black uppercase tracking-widest shadow-lg shadow-blue-200 flex items-center justify-center gap-3">
              <Search size={20} /> {locale === 'am' ? 'ፈልግ' : 'SEARCH'}
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- FEATURES SECTION (Why Choose Us) --- */}
      <section id="about" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-blue-600 font-black text-xs uppercase tracking-[0.5em] mb-4 block">Our Excellence</motion.span>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black text-blue-950 mb-20 uppercase tracking-tighter italic">Why Choose Us</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard icon={<MapPin/>} title="Prime Location" desc="Discover thoughtfully designed properties in Addis's most sought-after neighborhoods." />
            <FeatureCard icon={<Tag/>} title="Fair Pricing" desc="We provide luxury living spaces with transparent pricing that matches your budget." />
            <FeatureCard icon={<ShieldCheck/>} title="Secure Assets" desc="Every property undergoes a 100% legal and structural verification process." />
            <FeatureCard icon={<Star/>} title="Expert Guidance" desc="Professional support from the first visit to the final contract signature." />
          </div>
        </div>
      </section>

      {/* --- PROJECTS LIST --- */}
      <section id="projects" className="py-32 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-black text-xs uppercase tracking-[0.4em] mb-4 block">{t('projectsSubtitle')}</span>
              <h2 className="text-5xl md:text-7xl font-black text-blue-950 uppercase italic leading-[0.8] tracking-tighter">{t('projectsTitle')}</h2>
            </div>
            <div className="bg-white px-8 py-4 border border-gray-200 rounded-full text-[11px] font-black uppercase tracking-widest shadow-sm">Explore Collection</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <PropertyCard img="/ayat_house.jpg" title={t('house1Title')} loc={t('house1Loc')} price={t('house1Price')} onClick={() => router.push(`/${locale}/property/ayat-house`)} />
            <PropertyCard img="/bulgariya_house1.jpg" title={t('house2Title')} loc={t('house2Loc')} price={t('house2Price')} onClick={() => router.push(`/${locale}/property/bulgaria-house`)} />
            <PropertyCard img="/piyassa_house.jpg" title={t('house3Title')} loc={t('house3Loc')} price={t('house3Price')} onClick={() => router.push(`/${locale}/property/piassa-house`)} />
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-32 bg-blue-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[200px] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-6xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.8] uppercase">
              READY TO <br/> <span className="text-blue-500 italic text-5xl md:text-7xl">MOVE IN?</span>
            </h2>
            <p className="text-blue-200/60 text-xl font-medium mb-12 max-w-md">Our team is ready to help you find your dream home in Addis Ababa. Contact us today for a private tour.</p>
            <div className="space-y-8">
              <ContactInfo icon={<Phone/>} text="+251 913 73 99 83" label="Direct Line" />
              <ContactInfo icon={<Send/>} text="info@akproperties.com" label="Official Email" />
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl">
              <h3 className="text-3xl font-black text-blue-950 mb-10 uppercase tracking-tighter italic text-center">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput placeholder="First Name" />
                  <FormInput placeholder="Last Name" />
                </div>
                <FormInput placeholder="Email Address" type="email" />
                <textarea placeholder="How can we help you?" rows="4" className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 placeholder:text-gray-300"></textarea>
                <button className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 uppercase tracking-widest">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 text-white pt-32 pb-16 px-10 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col leading-none mb-8">
                <span className="text-4xl font-black text-white tracking-tighter">AK PROPERTY</span>
                <span className="text-blue-500 font-bold text-xs tracking-[0.5em] mt-1 italic uppercase">Excellence in Realty</span>
              </div>
              <p className="text-gray-500 max-w-sm mb-12 font-medium leading-relaxed">
                Redefining the luxury real estate market in Ethiopia with a commitment to integrity and client satisfaction.
              </p>
              <div className="flex gap-4">
                <SocialIcon href="https://t.me/PropertiesInEthiopia" icon={<Send size={24} />} />
                <SocialIcon href="https://wa.me/251913739983" icon={<MessageCircle size={24} />} />
              </div>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Quick Links</h4>
              <ul className="space-y-5 text-gray-400 font-black text-xs uppercase tracking-widest">
                <li><a href="#projects" className="hover:text-blue-500 transition transition-all">Properties</a></li>
                <li><a href="#about" className="hover:text-blue-500 transition transition-all">About Us</a></li>
                <li><a href="#contact" className="hover:text-blue-500 transition transition-all">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-10">Headquarters</h4>
              <p className="text-gray-400 font-bold text-sm leading-relaxed">
                Bole, Addis Ababa <br/> 
                Ethiopia <br/>
                <span className="text-white mt-4 block">+251 913 73 99 83</span>
              </p>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 opacity-40">
            <p className="text-[10px] uppercase font-black tracking-[0.5em]">© 2026 AK PROPERTY. All Rights Reserved.</p>
            <div className="flex gap-10 text-[9px] font-black uppercase tracking-widest">
               <span>Privacy Policy</span>
               <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SearchField({ label, icon, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-3">
      <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
        {icon} {label}
      </label>
      <input type="text" value={value} onChange={(e)=>onChange(e.target.value)} placeholder={placeholder} className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 placeholder:text-gray-300" />
    </div>
  );
}

function SelectField({ label, icon, options, onChange }) {
  return (
    <div className="flex flex-col gap-3 md:border-l border-gray-100 md:pl-6">
      <label className="flex items-center gap-2 text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-1">
        {icon} {label}
      </label>
      <select onChange={(e)=>onChange(e.target.value)} className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 appearance-none cursor-pointer">
        {options.map((opt, i)=><option key={i} value={opt}>{opt}</option>)}
      </select>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -10 }} className="p-10 bg-white rounded-[40px] border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 group text-left">
      <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h3 className="text-xl font-black text-blue-950 mb-4 uppercase tracking-tighter">{title}</h3>
      <p className="text-gray-500 text-sm font-medium leading-relaxed">{desc}</p>
    </motion.div>
  );
}

function PropertyCard({ img, title, loc, price, onClick }) {
  return (
    <motion.div whileHover={{ y: -15 }} onClick={onClick} className="group bg-white rounded-[50px] border border-gray-100 shadow-xl hover:shadow-[0_50px_100px_rgba(0,0,0,0.12)] transition-all duration-700 overflow-hidden cursor-pointer">
      <div className="h-[380px] relative overflow-hidden p-5">
        <div className="absolute top-10 left-10 z-10 bg-blue-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-2xl italic">Exclusive</div>
        <img src={img} alt={title} className="w-full h-full object-cover rounded-[40px] transition duration-1000 group-hover:scale-110" />
      </div>
      <div className="p-10 pt-2">
        <div className="flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-widest mb-4">
          <MapPin size={14} /> {loc}
        </div>
        <h3 className="text-2xl font-black text-blue-950 mb-8 uppercase tracking-tighter group-hover:text-blue-600 transition leading-tight">{title}</h3>
        <div className="flex justify-between items-center pt-8 border-t border-gray-50">
          <div className="flex flex-col">
             <span className="text-[9px] font-black text-gray-300 uppercase tracking-widest mb-1">Market Price</span>
             <span className="text-blue-600 font-black text-3xl tracking-tighter">{price}</span>
          </div>
          <button className="bg-slate-950 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-600 transition-all hover:translate-x-2">View Details</button>
        </div>
      </div>
    </motion.div>
  );
}

function ContactInfo({ icon, text, label }) {
  return (
    <div className="flex items-center gap-6 group cursor-pointer">
      <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-2xl">
        {React.cloneElement(icon, { size: 24 })}
      </div>
      <div>
        <p className="text-[10px] font-black text-blue-500/50 uppercase tracking-[0.3em] mb-1">{label}</p>
        <p className="text-xl font-black text-white tracking-tight">{text}</p>
      </div>
    </div>
  );
}

function FormInput({ placeholder, type = "text" }) {
  return (
    <input type={type} placeholder={placeholder} className="w-full bg-gray-50 border-none p-5 rounded-2xl outline-none focus:ring-2 ring-blue-500/20 font-bold text-gray-800 placeholder:text-gray-300 transition-all" />
  );
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank" className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-blue-600 transition-all duration-500 hover:-translate-y-2 shadow-2xl">
      {icon}
    </a>
  );
}