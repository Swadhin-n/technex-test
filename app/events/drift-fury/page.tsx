"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Rocket, 
  Info, 
  CalendarClock, 
  ScrollText, 
  Phone, 
  MapPin, 
  Clock,
  Zap,
  ChevronRight,
  Mail,
  Users,
  Trophy,
  Flag,
  Gauge,
  Flame,
  Wrench,
  HelpCircle, // Added for FAQ
  ChevronDown, // Added for FAQ
  Ticket // Added for Fees
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Updated Data ---
type TabType = 'about' | 'timeline' | 'rules' | 'contact'

const EVENT_DATA = {
  title: "Drift-Fury", 
  tagline: "Race Beyond Limits Where Speed Meets Precision.", 
  priceRange: "View Category Fees", // Updated text to point to section
  venue: "St. Vincent Pallotti College (Offline)", 
  duration: "18-19 Dec (10:30 AM - 3:30 PM)", 
  poster: "/images/drift-fury-bg.jpeg", 
  description: "Drift Fury is an intense RC car racing event where drivers navigate a challenging obstacle-filled track featuring sharp turns, drift zones, ramps, and speed breakers. It tests precision, control, and speed as racers battle the clock to complete the course with the cleanest and fastest run. Only the most skilled driver will conquer the track and win the Drift Fury title.", 
  timeline: [
    { title: "Round 1: Technical Inspection", details: "Officials check vehicle size, weight, engine/motor specs, and safety systems. Cars must clear this to race." }, 
    { title: "Round 2: Qualifying Heats", details: "Drivers race in timed slots on a dirt track. Rankings are based on the fastest 3 consecutive laps." }, 
    { title: "Round 3: Grand Finals", details: "Top qualifiers compete in a longer main race (15-25 mins) featuring pit stops (Nitro) or battery changes (Electric)." } 
  ],
  rules: [
    "Team Size: 1-5 Members.", 
    "Categories: 1:8 Nitro (4WD) & 1:16 Electric (4WD).", 
    "Custom-built or modified cars are allowed.", 
    "Disqualification: Absence at slot, intentional crashing, or abusive behavior.", 
    "Track discipline is mandatory; loose parts on track lead to disqualification.", 
  ],
  email: "Technex@stvincentngp.edu.in", 
  contacts: [
    { name: "Yash Raghorte", role: "Coordinator", phone: "7666873794" }, 
    { name: "Ayush Shende", role: "Coordinator", phone: "8208686073" }, 
  ],
  prizes: {
    pool: "₹90,000",
    nitro: {
      first: "₹25,000",
      second: "₹15,000",
      third: "₹10,000"
    },
    electric: {
      first: "₹17,500",
      second: "₹12,500",
      third: "₹10,000"
    }
  },
  // Added Fees Data
  fees: {
    nitro: "₹1500 (Rental + Registration)",
    electric: "₹1000"
  }
}

// --- Placeholder FAQ Data ---
const FAQS = [
  { question: "Question Placeholder 1?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 2?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 3?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 4?", answer: "Answer placeholder text goes here." }
];

export default function EventDetailsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('about')
  // State for FAQ Interaction
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'about', label: 'Briefing', icon: Info },
    { id: 'timeline', label: 'Race Flow', icon: Flag }, 
    { id: 'rules', label: 'Rulebook', icon: ScrollText },
    { id: 'contact', label: 'Pit Crew', icon: Phone },
  ] as const

  return (
    <div className="relative min-h-screen transparent text-white selection:bg-orange-500 selection:text-black overflow-x-hidden">
      {/* Background (Fixed) */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none"
        style={{ backgroundImage: "url('/background.webp')" }}
      />
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <TopNav />
      <LeftSidebar />
      <RightSidebar />
      <div className="w-full h-[5vh] flex flex-col items-center justify-end pb-8 pointer-events-none z-20"></div>
      
      {/* Main Content Area */}
      <main className="relative z-10 pt-24 pb-12 px-4 md:px-24 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* --- LEFT COLUMN: Visuals & Action --- */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Holographic Poster Container */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-orange-600 via-red-600 to-orange-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-orange-400 px-3 py-1 rounded text-orange-400 font-mono text-xs flex items-center gap-2">
                  <Flame size={12} /> RC RACING
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full">
                   <Image 
                    src={EVENT_DATA.poster} 
                    alt="Drift Fury Poster" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </motion.div>

            {/* Registration Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative w-full overflow-hidden rounded-md bg-orange-950 p-4 text-center font-bold uppercase tracking-widest text-orange-400 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Enter Race
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-600 to-red-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Quick Info */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-red-400"/>
                    <span>Team: 1-5</span> 
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-orange-400 uppercase">Registration</span>
                    <span className="text-sm font-bold text-white">{EVENT_DATA.priceRange}</span>
                 </div>
              </div>
            </motion.div>
          </div>

          {/* --- RIGHT COLUMN: The Command Board --- */}
          <div className="lg:col-span-7 flex flex-col h-full">
            
            {/* HUD Header */}
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-200 to-orange-500 uppercase drop-shadow-[0_0_10px_rgba(249,115,22,0.5)]">
                {EVENT_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-red-400 font-medium mt-2 tracking-wide">
                {EVENT_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-red-600 to-orange-600 mt-4 rounded-full shadow-[0_0_10px_rgba(220,38,38,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8">
              
              {/* HUD Decorative Corners - Orange & Red */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-red-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-orange-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-red-400 drop-shadow-[0_0_8px_rgba(220,38,38,1)]">
                             <Rocket size={16} className="-rotate-45 fill-current" />
                           </div>
                        </motion.div>
                      )}
                    </button>
                  )
                })}
              </div>

              {/* Content Area */}
              <div className="p-6 md:p-8 relative h-full">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                    exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full overflow-y-auto custom-scrollbar"
                  >
                    {/* --- ABOUT TAB --- */}
                    {activeTab === 'about' && (
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-4">Mission Brief</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {EVENT_DATA.description}
                         </p>

                         {/* --- NEW CATEGORY FEES SECTION --- */}
                         <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                            <h4 className="flex items-center gap-2 text-white font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">
                                <Ticket size={18} className="text-orange-400"/> 
                                Category Registration Fees
                            </h4>
                            <div className="grid grid-cols-1 gap-3">
                                <div className="flex items-center justify-between p-3 rounded bg-gradient-to-r from-red-900/40 to-transparent border-l-4 border-red-500">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-red-950 rounded text-red-400"><Flame size={16}/></div>
                                        <span className="font-bold text-gray-200">RC Nitro</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">{EVENT_DATA.fees.nitro}</span>
                                </div>
                                <div className="flex items-center justify-between p-3 rounded bg-gradient-to-r from-yellow-900/40 to-transparent border-l-4 border-yellow-500">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-yellow-950 rounded text-yellow-400"><Zap size={16}/></div>
                                        <span className="font-bold text-gray-200">RC Electric</span>
                                    </div>
                                    <span className="text-xl font-bold text-white">{EVENT_DATA.fees.electric}</span>
                                </div>
                            </div>
                         </div>
                         
                         {/* Prize Pool Section */}
                         <div className="mt-6 p-4 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
                            <div className="flex items-center gap-2 mb-4 text-orange-300 border-b border-orange-500/20 pb-2">
                                <Trophy size={20} />
                                <h4 className="font-bold uppercase tracking-wider">Total Prize Pool: {EVENT_DATA.prizes.pool}</h4>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Nitro Prizes */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-red-400 font-bold uppercase text-sm">
                                        <Flame size={14} /> Nitro Class
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-red-500">
                                            <span className="text-gray-400 text-sm">1st Place</span>
                                            <span className="text-white font-bold">{EVENT_DATA.prizes.nitro.first}</span>
                                        </div>
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-red-500/50">
                                            <span className="text-gray-400 text-sm">2nd Place</span>
                                            <span className="text-gray-200">{EVENT_DATA.prizes.nitro.second}</span>
                                        </div>
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-red-500/30">
                                            <span className="text-gray-400 text-sm">3rd Place</span>
                                            <span className="text-gray-400">{EVENT_DATA.prizes.nitro.third}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Electric Prizes */}
                                <div>
                                    <div className="flex items-center gap-2 mb-2 text-yellow-400 font-bold uppercase text-sm">
                                        <Zap size={14} /> Electric Class
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-yellow-500">
                                            <span className="text-gray-400 text-sm">1st Place</span>
                                            <span className="text-white font-bold">{EVENT_DATA.prizes.electric.first}</span>
                                        </div>
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-yellow-500/50">
                                            <span className="text-gray-400 text-sm">2nd Place</span>
                                            <span className="text-gray-200">{EVENT_DATA.prizes.electric.second}</span>
                                        </div>
                                        <div className="flex justify-between bg-black/40 p-2 rounded border-l-2 border-yellow-500/30">
                                            <span className="text-gray-400 text-sm">3rd Place</span>
                                            <span className="text-gray-400">{EVENT_DATA.prizes.electric.third}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center gap-3">
                               <Clock className="text-orange-400" size={24} />
                               <div>
                                 <div className="text-orange-400 text-xs uppercase">Dates</div>
                                 <div className="text-lg font-bold leading-tight">{EVENT_DATA.duration}</div>
                               </div>
                            </div>
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-start gap-3">
                               <MapPin className="text-red-400 shrink-0" size={24} />
                               <div>
                                  <div className="text-red-400 text-xs uppercase">Venue</div>
                                  <div className="text-sm font-bold leading-tight">{EVENT_DATA.venue}</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- TIMELINE (ROUNDS) TAB --- */}
                    {activeTab === 'timeline' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">Race Schedule</h3>
                         <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-500 before:to-transparent">
                           {EVENT_DATA.timeline.map((item, idx) => (
                             <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-orange-500 bg-orange-950 group-[.is-active]:bg-orange-500 text-orange-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                 <Gauge size={18} />
                               </div>
                               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-orange-500/50 transition-colors shadow">
                                 <div className="text-lg font-bold text-orange-300 mb-1">{item.title}</div>
                                 <div className="text-gray-300 text-sm leading-snug">{item.details}</div>
                               </div>
                             </div>
                           ))}
                         </div>
                      </div>
                    )}

                    {/* --- RULES TAB --- */}
                    {activeTab === 'rules' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4">Race Regulations</h3>
                         <ul className="space-y-3 bg-black/30 p-4 rounded-lg border border-red-500/20">
                           {EVENT_DATA.rules.map((rule, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-gray-300 group">
                               <span className="text-red-500 mt-1 group-hover:text-red-300 transition-colors">❖</span>
                               <span className="group-hover:text-white transition-colors">{rule}</span>
                             </li>
                           ))}
                         </ul>
                         <div className="text-xs text-gray-500 mt-4 italic">
                            * Technical inspection is mandatory. Disintegrating cars will be disqualified.
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Pit Crew Comms</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${EVENT_DATA.email}`} className="block bg-gradient-to-r from-orange-900/40 to-red-900/40 p-4 rounded-xl border border-orange-500/30 hover:border-orange-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-orange-950 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-orange-300 transition-colors">{EVENT_DATA.email}</div>
                                 </div>
                             </div>
                         </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {EVENT_DATA.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
                               <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-green-400 group-hover:bg-green-900 transition-colors">
                                     <Phone size={20} />
                                  </div>
                                  <div>
                                    <div className="text-white font-bold text-lg">{contact.name}</div>
                                    <div className="text-gray-500 text-xs uppercase tracking-widest">{contact.role}</div>
                                  </div>
                               </div>
                               <div className="text-xl font-mono text-gray-300 group-hover:text-white transition-colors">
                                  {contact.phone}
                               </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ============================================== */}
            {/* NEW FAQ SECTION */}
            {/* ============================================== */}
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-orange-400"/>
                 Pit Stop FAQs
              </h3>
              
              <div className="flex flex-col gap-3 pb-12">
                 {FAQS.map((faq, index) => {
                   const isHovered = hoveredFaq === index;
                   
                   return (
                     <motion.div
                       key={index}
                       layout 
                       onMouseEnter={() => setHoveredFaq(index)}
                       onMouseLeave={() => setHoveredFaq(null)}
                       className={`relative overflow-hidden rounded-xl border transition-colors duration-300 cursor-default ${
                         isHovered 
                           ? "bg-orange-950/40 border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]" 
                           : "bg-black/40 border-white/10"
                       }`}
                     >
                        <motion.div layout className="p-4 flex items-center justify-between">
                            <h4 className={`font-semibold text-lg transition-colors ${isHovered ? "text-orange-300" : "text-gray-200"}`}>
                                {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              className="text-orange-500"
                            >
                                <ChevronDown size={20} />
                            </motion.div>
                        </motion.div>

                        <AnimatePresence>
                           {isHovered && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                              >
                                  <div className="px-4 pb-4 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-2 mt-0">
                                     {faq.answer}
                                  </div>
                              </motion.div>
                           )}
                        </AnimatePresence>
                     </motion.div>
                   )
                 })}
              </div>
            </div>
            {/* ============================================== */}

          </div>
        </div>
      </main>
    </div>
  )
}