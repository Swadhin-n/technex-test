"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Terminal, 
  LayoutDashboard, // For Overview
  Clock,           // For Duration
  Mic2,            // For Speaker
  Phone, 
  MapPin, 
  ChevronRight,
  Mail,
  Users,
  HelpCircle, 
  ChevronDown,
  Code,
  Database, // Data specific icon
  BarChart3, // Data specific icon
  BrainCircuit // AI/ML specific icon
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Workshop Data ---
type TabType = 'overview' | 'duration' | 'speaker' | 'contact'

const WORKSHOP_DATA = {
  title: "ENVISION WORKSHOP",
  tagline: "Data. Insights. Intelligence.",
  price: "Free for All Participants",
  venue: "2nd Floor Auditorium",
  date: "To Be Announced",
  duration: "Not Given",
  poster: "/images/workshop-envision-bg.jpeg", // Placeholder path
  description: "A specialized session designed to prepare participants for the Envision Datathon. Learn the end-to-end process of handling real-world data, from collection and preprocessing to building predictive models.",
  topics: [
    "Data Collection Techniques",
    "Data Preprocessing & Cleaning",
    "Exploratory Data Analysis (EDA)",
    "Model Building Fundamentals",
    "Real-world Dataset Handling",
    "Visualization Best Practices"
  ],
  speaker: {
    name: "To Be Announced",
    role: "Industry Expert",
    bio: "Details regarding the speaker profile will be updated soon."
  },
  meta: {
    audience: "Open to all participants",
    mode: "In-person"
  },
  email: "technex@stvincentngp.edu.in",
  contacts: [
    { name: "Workshop Team", role: "Coordinator", phone: "Not Given" },
  ]
}

// --- Placeholder FAQ Data ---
const FAQS = [
  { question: "Is this workshop mandatory for Envision participants?", answer: "It is highly recommended as it covers the foundational skills required for the Datathon." },
  { question: "Do I need to pay separately for this?", answer: "No, this workshop is free for all registered participants." },
  { question: "What software/tools will be used?", answer: "We will likely cover Python, Pandas, Scikit-Learn, and standard visualization libraries." },
  { question: "Will recording be available?", answer: "This is an in-person workshop; recording availability is not guaranteed." }
];

export default function EnvisionWorkshopPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'overview', label: 'Curriculum', icon: LayoutDashboard },
    { id: 'duration', label: 'Schedule', icon: Clock }, 
    { id: 'speaker', label: 'Instructor', icon: Mic2 },
    { id: 'contact', label: 'Support', icon: Phone },
  ] as const

  return (
    <div className="relative min-h-screen transparent text-white selection:bg-cyan-500 selection:text-black overflow-x-hidden">
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
            
            {/* Holographic Poster Container - Cyan/Purple Theme */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-cyan-600 via-purple-600 to-cyan-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-cyan-400 px-3 py-1 rounded text-cyan-400 font-mono text-xs flex items-center gap-2">
                  <Terminal size={12} /> DATA SCIENCE
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                   <Image 
                    src={WORKSHOP_DATA.poster} 
                    alt="Envision Workshop Poster" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                   />
                   {/* Gradient Overlay */}
                   <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>

            {/* Registration & Price Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative w-full overflow-hidden rounded-md bg-cyan-950 p-4 text-center font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Register Now
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-600 to-purple-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Quick Info */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-purple-400"/>
                    <span>Free Entry</span> 
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-cyan-400 uppercase">Workshop Fee</span>
                    <span className="text-sm font-bold text-white uppercase">{WORKSHOP_DATA.price}</span>
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
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-purple-500 uppercase drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]">
                {WORKSHOP_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-cyan-300 font-medium mt-2 tracking-wide font-mono flex items-center gap-2">
                 <BrainCircuit size={20}/> {WORKSHOP_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-cyan-600 to-purple-600 mt-4 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8">
              
              {/* HUD Decorative Corners - Cyan & Purple */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-cyan-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,1)]">
                             <Database size={16} className="fill-current" />
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
                    {/* --- OVERVIEW TAB --- */}
                    {activeTab === 'overview' && (
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-cyan-500 pl-4">Overview</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {WORKSHOP_DATA.description}
                         </p>

                         {/* Topics Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                             {WORKSHOP_DATA.topics.map((topic, i) => (
                                 <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-cyan-500/40 transition-colors">
                                     <div className="p-1.5 bg-cyan-900/50 rounded text-cyan-400">
                                         {i % 2 === 0 ? <BarChart3 size={16}/> : <Code size={16}/>}
                                     </div>
                                     <span className="text-gray-200 text-sm font-medium">{topic}</span>
                                 </div>
                             ))}
                         </div>
                         
                         {/* Audience & Mode */}
                         <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-purple-900/20 border border-purple-500/30 p-3 rounded">
                                <div className="text-xs text-purple-300 uppercase tracking-widest mb-1">Audience</div>
                                <div className="text-white font-medium text-sm">{WORKSHOP_DATA.meta.audience}</div>
                            </div>
                            <div className="bg-cyan-900/20 border border-cyan-500/30 p-3 rounded">
                                <div className="text-xs text-cyan-300 uppercase tracking-widest mb-1">Mode</div>
                                <div className="text-white font-medium text-sm">{WORKSHOP_DATA.meta.mode}</div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- DURATION TAB --- */}
                    {activeTab === 'duration' && (
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">Time & Schedule</h3>
                         
                         <div className="flex flex-col gap-4">
                             <div className="bg-gradient-to-r from-purple-900/40 to-transparent p-6 rounded-xl border-l-4 border-purple-500 flex items-center justify-between">
                                 <div>
                                     <div className="text-purple-400 text-sm uppercase tracking-widest mb-1">Total Duration</div>
                                     <div className="text-3xl font-bold text-white">{WORKSHOP_DATA.duration}</div>
                                 </div>
                                 <Clock size={40} className="text-purple-500/50" />
                             </div>

                             <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                 <div className="flex items-center gap-3 mb-2">
                                     <Clock className="text-cyan-400" size={24} />
                                     <div className="text-xl font-bold text-white">Date</div>
                                 </div>
                                 <div className="text-gray-300 text-lg">{WORKSHOP_DATA.date}</div>
                             </div>

                             <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                 <div className="flex items-center gap-3 mb-2">
                                     <MapPin className="text-cyan-400" size={24} />
                                     <div className="text-xl font-bold text-white">Venue</div>
                                 </div>
                                 <div className="text-gray-300 text-lg">{WORKSHOP_DATA.venue}</div>
                             </div>
                         </div>
                      </div>
                    )}

                    {/* --- SPEAKER TAB --- */}
                    {activeTab === 'speaker' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Instructor Profile</h3>
                         
                         <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors group">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-20 h-20 rounded-full bg-cyan-900/50 flex items-center justify-center border-2 border-cyan-500 shrink-0">
                                    <Mic2 size={32} className="text-cyan-400" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                        {WORKSHOP_DATA.speaker.name}
                                    </h4>
                                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-900/30 text-cyan-300 text-xs font-mono mb-4 border border-cyan-500/30">
                                        {WORKSHOP_DATA.speaker.role}
                                    </span>
                                    <p className="text-gray-300 leading-relaxed">
                                        {WORKSHOP_DATA.speaker.bio}
                                    </p>
                                </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Helpdesk</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${WORKSHOP_DATA.email}`} className="block bg-gradient-to-r from-cyan-900/40 to-purple-900/40 p-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-cyan-300 transition-colors">{WORKSHOP_DATA.email}</div>
                                 </div>
                             </div>
                         </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {WORKSHOP_DATA.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-cyan-500 transition-colors group">
                               <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-900 transition-colors">
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
            {/* FAQ SECTION */}
            {/* ============================================== */}
            <div className="relative mt-8">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-cyan-400"/>
                 Common Queries
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
                           ? "bg-cyan-950/40 border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)]" 
                           : "bg-black/40 border-white/10"
                       }`}
                     >
                        <motion.div layout className="p-4 flex items-center justify-between">
                            <h4 className={`font-semibold text-lg transition-colors ${isHovered ? "text-cyan-300" : "text-gray-200"}`}>
                                {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              className="text-cyan-500"
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