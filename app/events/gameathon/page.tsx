"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Gamepad2, // Gaming icon
  Info, 
  CalendarClock, 
  ScrollText, 
  Phone, 
  MapPin, 
  Clock,
  ChevronRight,
  Mail,
  Users,
  Trophy,
  HelpCircle, 
  ChevronDown,
  Code2,      // Coding
  Cpu,        // Tech
  Joystick,   // Gaming
  Laptop      // Dev
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Updated Data for GAMEATHON ---
type TabType = 'about' | 'timeline' | 'rules' | 'contact'

const EVENT_DATA = {
  title: "GAMEATHON 2026", // [cite: 1]
  tagline: "Build. Play. Compete.", // [cite: 69]
  priceRange: "₹350 / Team", // [cite: 33]
  venue: "BS18 (B-Block 2nd Floor Lab)", // [cite: 67]
  duration: "18-19 Dec (24 Hours)", // [cite: 4]
  poster: "/images/gameathon-bg.jpeg", // Placeholder
  description: "Gameathon 2026 is a 24-hour game development challenge that brings together creative minds, developers, and designers to build innovative, playable game prototypes within a limited timeframe. Participants will experience the complete journey of game creation — from ideation to development and presentation — while showcasing creativity, teamwork, and technical excellence.", // [cite: 4, 5]
  highlights: [
    "24-Hour Challenge", // [cite: 4]
    "Game Ideation & Pitching", // [cite: 7]
    "Prototype Development", // [cite: 9]
    "Industry Jury Presentation" // [cite: 10]
  ],
  timeline: [
    { title: "Round 1: Idea Pitch", details: "Submit a 1-minute video pitch and abstract. Show initial proof (prototype, wireframes, or concept art) to qualify." }, // [cite: 14, 16, 17, 18]
    { title: "Development Sprint", details: "18-24 hours of intense game building using Unity, Unreal, Godot, or engine of choice." }, // [cite: 41, 28]
    { title: "Round 2: Demo Day", details: "Final showcase of working prototypes. Evaluation based on design, mechanics, and gameplay experience." } // [cite: 27, 29]
  ],
  rules: [
    "Team Size: 3-5 Members.", // [cite: 34]
    "Engines Allowed: Unity, Unreal Engine, Godot, etc.", // [cite: 28]
    "Asset Creation: Tools like Blender and Canva are allowed.", // [cite: 56]
    "Submission: Must include a playable prototype/demo.", // [cite: 31]
    "Evaluation: Based on creativity, feasibility, and technical execution.", // [cite: 25]
  ],
  email: "technex@stvincentngp.edu.in", 
  contacts: [
    { name: "Manjosh Lihare", role: "Event Coordinator", phone: "Not Given" }, // [cite: 97]
    { name: "Kripa Badge", role: "Co-Coordinator", phone: "Not Given" }, // [cite: 98]
  ],
  prizes: {
    pool: "₹50,000", // 
    details: "Cash prizes for Top Performing Teams"
  }
}

// --- Blank FAQ Data ---
const FAQS = [
  { question: "Question Placeholder 1?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 2?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 3?", answer: "Answer placeholder text goes here." },
  { question: "Question Placeholder 4?", answer: "Answer placeholder text goes here." }
];

export default function GameathonPage() {
  const [activeTab, setActiveTab] = useState<TabType>('about')
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'about', label: 'Quest Info', icon: Info },
    { id: 'timeline', label: 'Levels', icon: CalendarClock }, 
    { id: 'rules', label: 'Guidelines', icon: ScrollText },
    { id: 'contact', label: 'Admins', icon: Phone },
  ] as const

  return (
    <div className="relative min-h-screen transparent text-white selection:bg-purple-500 selection:text-black overflow-x-hidden">
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
            
            {/* Holographic Poster Container - Neon Purple/Pink Theme */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-purple-500/30 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-pink-500 px-3 py-1 rounded text-pink-400 font-mono text-xs flex items-center gap-2">
                  <Joystick size={12} /> GAME DEV
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
                   <Image 
                    src={EVENT_DATA.poster} 
                    alt="Gameathon Poster" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                   />
                   <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>

            {/* Registration & Price Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative w-full overflow-hidden rounded-md bg-purple-950 p-4 text-center font-bold uppercase tracking-widest text-purple-400 border border-purple-500/50 shadow-[0_0_20px_rgba(168,85,247,0.2)] hover:shadow-[0_0_40px_rgba(168,85,247,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Press Start
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-purple-600 to-pink-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Quick Info */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-pink-400"/>
                    <span>3-5 Members</span> 
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-purple-400 uppercase">Entry Fee</span>
                    <span className="text-lg font-bold text-white">{EVENT_DATA.priceRange}</span>
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
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-pink-500 uppercase drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                {EVENT_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-purple-300 font-medium mt-2 tracking-wide font-mono flex items-center gap-2">
                 <Gamepad2 size={20}/> {EVENT_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-purple-600 to-pink-600 mt-4 rounded-full shadow-[0_0_10px_rgba(236,72,153,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8">
              
              {/* HUD Decorative Corners - Purple & Pink */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-pink-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-purple-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-pink-400 drop-shadow-[0_0_8px_rgba(236,72,153,1)]">
                             <Cpu size={16} className="fill-current" />
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
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-purple-500 pl-4">Game Description</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {EVENT_DATA.description}
                         </p>

                         {/* Highlights Grid */}
                         <div className="grid grid-cols-2 gap-3 mt-4">
                             {EVENT_DATA.highlights.map((tag, i) => (
                                 <div key={i} className="flex items-center gap-2 p-2 bg-purple-900/30 border border-purple-500/30 rounded">
                                     <div className="w-2 h-2 rounded-full bg-pink-500" />
                                     <span className="text-xs text-purple-200 uppercase tracking-wider">{tag}</span>
                                 </div>
                             ))}
                         </div>
                         
                         {/* Prize Pool Section */}
                         <div className="mt-6 p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
                            <div className="flex items-center gap-2 mb-2 text-purple-300">
                                <Trophy size={20} />
                                <h4 className="font-bold uppercase tracking-wider">Prize Pool</h4>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                                    {EVENT_DATA.prizes.pool}
                                </div>
                                <div className="text-sm text-gray-400 mt-2">{EVENT_DATA.prizes.details}</div>
                            </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center gap-3">
                               <Clock className="text-purple-400" size={24} />
                               <div>
                                 <div className="text-purple-400 text-xs uppercase">Dates</div>
                                 <div className="text-lg font-bold leading-tight">{EVENT_DATA.duration}</div>
                               </div>
                            </div>
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-start gap-3">
                               <MapPin className="text-pink-400 shrink-0" size={24} />
                               <div>
                                  <div className="text-pink-400 text-xs uppercase">Venue</div>
                                  <div className="text-sm font-bold leading-tight">{EVENT_DATA.venue}</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- TIMELINE TAB --- */}
                    {activeTab === 'timeline' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-4">Level Progression</h3>
                         <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-purple-500 before:to-transparent">
                           {EVENT_DATA.timeline.map((item, idx) => (
                             <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-purple-500 bg-purple-950 group-[.is-active]:bg-purple-500 text-purple-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                 <Code2 size={18} />
                               </div>
                               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-pink-500/50 transition-colors shadow">
                                 <div className="text-lg font-bold text-purple-300 mb-1">{item.title}</div>
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
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">Game Rules</h3>
                         <ul className="space-y-3 bg-black/30 p-4 rounded-lg border border-purple-500/20">
                           {EVENT_DATA.rules.map((rule, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-gray-300 group">
                               <span className="text-purple-500 mt-1 group-hover:text-purple-300 transition-colors">❖</span>
                               <span className="group-hover:text-white transition-colors">{rule}</span>
                             </li>
                           ))}
                         </ul>
                         
                         <div className="mt-4 p-3 bg-pink-900/20 border border-pink-500/30 rounded flex items-center gap-3">
                             <Laptop size={20} className="text-pink-400" />
                             <span className="text-xs text-pink-200">Bring your own laptops and chargers. High-speed Wi-Fi provided.</span>
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-pink-500 pl-4">Admins</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${EVENT_DATA.email}`} className="block bg-gradient-to-r from-purple-900/40 to-pink-900/40 p-4 rounded-xl border border-purple-500/30 hover:border-purple-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-purple-950 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-purple-300 transition-colors">{EVENT_DATA.email}</div>
                                 </div>
                             </div>
                         </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {EVENT_DATA.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-pink-500 transition-colors group">
                               <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-pink-400 group-hover:bg-pink-900 transition-colors">
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
            {/* FAQ SECTION (Blank Placeholder) */}
            {/* ============================================== */}
            <div className="relative mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-purple-400"/>
                 Player Support (FAQ)
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
                           ? "bg-purple-950/40 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.15)]" 
                           : "bg-black/40 border-white/10"
                       }`}
                     >
                        <motion.div layout className="p-4 flex items-center justify-between">
                            <h4 className={`font-semibold text-lg transition-colors ${isHovered ? "text-purple-300" : "text-gray-200"}`}>
                                {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              className="text-purple-500"
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