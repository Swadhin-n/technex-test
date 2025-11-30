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
  HelpCircle, // Added for FAQ
  ChevronDown // Added for FAQ
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Updated Data ---
type TabType = 'about' | 'timeline' | 'rules' | 'contact'

const EVENT_DATA = {
  title: "Mind2Market 2k26", // [cite: 3]
  tagline: "Think. Build. Scale.", // [cite: 83]
  priceRange: "Register via Unstop", // [cite: 1]
  venue: "SVPCET (Offline)", // [cite: 6, 7]
  duration: "18-19 Dec 2025", // [cite: 12, 13]
  poster: "/images/mind2market-bg.jpeg",
  description: "Mind2Market 2k26 is a practical entrepreneurship and business competition focused on experiential learning, startup fundamentals, and real-world business simulations. It gives participants a platform to think like entrepreneurs, pitch ideas, and experience how real businesses function through trading challenges, negotiation, and financial decision-making.", // [cite: 17, 18, 19]
  timeline: [
    { title: "Day 1: Idea Pitching", details: "Idea pitching & shortlisting."}, // [cite: 46]
    { title: "Day 2: Business Simulation", details: "Business simulation, trading challenge, results & prize distribution."}, // [cite: 47]
    { title: "Registration", details: "Opens 1 December 2025." } // [cite: 44]
  ],
  rules: [
    "Team Size: 1-2 members.", // [cite: 36]
    "Eligibility: Students.", // [cite: 35]
    "Submission Format: PPT or PDF is required.", // [cite: 62]
    "Tools/Technologies: Not required.", // [cite: 37]
    "Code Originality: Not required.", // [cite: 38]
    "Sponsor: TIE GOODIES.", // [cite: 86]
  ],
  email: "Not available yet", // [cite: 9]
  contacts: [
    { name: "Devansh Dubey", role: "Event Coordinator", phone: "8275377648" }, // [cite: 10, 11]
  ],
  prizes: {
    winner: "₹50,000", // [cite: 72]
    runnerUp: "₹30,000", // [cite: 73]
    special: "₹20,000 (3rd Prize)" // [cite: 74]
  }
}

// --- Blank FAQ Data ---
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
    { id: 'about', label: 'About', icon: Info },
    { id: 'timeline', label: 'Rounds', icon: CalendarClock }, 
    { id: 'rules', label: 'Rule Book', icon: ScrollText },
    { id: 'contact', label: 'Contact', icon: Phone },
  ] as const

  return (
    <div className="relative min-h-screen transparent text-white selection:bg-blue-500 selection:text-black overflow-x-hidden">
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
            
            {/* Holographic Poster Container - Updated to Blue/Amber Theme */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-blue-600 via-amber-500 to-blue-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-blue-400 px-3 py-1 rounded text-blue-400 font-mono text-xs">
                  ENTREPRENEURSHIP
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full">
                   <Image 
                    src={EVENT_DATA.poster} 
                    alt="Mind2Market Poster" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                   />
                </div>
              </div>
            </motion.div>

            {/* Registration & Price Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative w-full overflow-hidden rounded-md bg-blue-950 p-4 text-center font-bold uppercase tracking-widest text-blue-400 border border-blue-500/50 shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Register Now
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-blue-600 to-amber-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Updated Price display */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-amber-400"/>
                    <span>Team Size: 1-2</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-blue-400 uppercase">Registration Status</span>
                    <span className="text-xl font-bold text-white">OPEN</span>
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
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-500 uppercase drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
                {EVENT_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-amber-400 font-medium mt-2 tracking-wide">
                {EVENT_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-amber-600 to-blue-600 mt-4 rounded-full shadow-[0_0_10px_rgba(245,158,11,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* HUD Decorative Corners - Blue & Amber */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-amber-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-amber-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-blue-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-amber-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,1)]">
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
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">Event Briefing</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {EVENT_DATA.description}
                         </p>
                         
                         {/* Prize Pool Section - Total 1 Lakh */}
                         <div className="mt-6 p-4 bg-gradient-to-r from-blue-900/30 to-amber-900/30 rounded-lg border border-blue-500/30">
                            <div className="flex items-center gap-2 mb-3 text-blue-300">
                                <Trophy size={20} />
                                <h4 className="font-bold uppercase tracking-wider">Total Prize Pool: ₹1,00,000</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                <div className="bg-black/40 p-3 rounded border border-amber-500/20">
                                    <div className="text-amber-400 font-bold text-xl">{EVENT_DATA.prizes.winner}</div>
                                    <div className="text-xs text-gray-400 uppercase">1st Prize</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded">
                                    <div className="text-gray-300 font-bold text-xl">{EVENT_DATA.prizes.runnerUp}</div>
                                    <div className="text-xs text-gray-400 uppercase">2nd Prize</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded">
                                    <div className="text-blue-400 font-bold text-lg">{EVENT_DATA.prizes.special}</div>
                                    <div className="text-xs text-gray-400 uppercase">3rd Prize</div>
                                </div>
                            </div>
                         </div>

                         <div className="grid grid-cols-2 gap-4 mt-4">
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-center gap-3">
                               <Clock className="text-blue-400" size={24} />
                               <div>
                                 <div className="text-blue-400 text-xs uppercase">Dates</div>
                                 <div className="text-lg font-bold leading-tight">{EVENT_DATA.duration}</div>
                               </div>
                            </div>
                            <div className="bg-white/5 p-4 rounded border border-white/10 flex items-start gap-3">
                               <MapPin className="text-amber-400 shrink-0" size={24} />
                               <div>
                                  <div className="text-amber-400 text-xs uppercase">Venue</div>
                                  <div className="text-sm font-bold leading-tight">{EVENT_DATA.venue}</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- TIMELINE (ROUNDS) TAB --- */}
                    {activeTab === 'timeline' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-blue-500 pl-4">Event Flow</h3>
                         <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500 before:to-transparent">
                           {EVENT_DATA.timeline.map((item, idx) => (
                             <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500 bg-blue-950 group-[.is-active]:bg-blue-500 text-blue-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                 <Zap size={18} />
                               </div>
                               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-blue-500/50 transition-colors shadow">
                                 <div className="text-lg font-bold text-blue-300 mb-1">{item.title}</div>
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
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4">Protocols</h3>
                         <ul className="space-y-3 bg-black/30 p-4 rounded-lg border border-amber-500/20">
                           {EVENT_DATA.rules.map((rule, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-gray-300 group">
                               <span className="text-amber-500 mt-1 group-hover:text-amber-300 transition-colors">❖</span>
                               <span className="group-hover:text-white transition-colors">{rule}</span>
                             </li>
                           ))}
                         </ul>
                         <div className="text-xs text-gray-500 mt-4 italic">
                            * Decision of judges and organizers is final.
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Comms Link</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${EVENT_DATA.email}`} className="block bg-gradient-to-r from-blue-900/40 to-amber-900/40 p-4 rounded-xl border border-blue-500/30 hover:border-blue-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-blue-950 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-blue-300 transition-colors">{EVENT_DATA.email}</div>
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
            <div className="relative mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-amber-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-amber-400"/>
                 Frequently Asked Questions
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
                           ? "bg-blue-950/40 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.15)]" 
                           : "bg-black/40 border-white/10"
                       }`}
                     >
                        <motion.div layout className="p-4 flex items-center justify-between">
                            <h4 className={`font-semibold text-lg transition-colors ${isHovered ? "text-amber-300" : "text-gray-200"}`}>
                                {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              className="text-blue-500"
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