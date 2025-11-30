"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Terminal, 
  LayoutDashboard, 
  Clock,           
  Mic2,            
  Phone, 
  MapPin, 
  ChevronRight,
  Mail,
  Users,
  Trophy,
  HelpCircle, 
  ChevronDown,
  Code,
  Cpu,
  Globe,
  GitBranch,
  Cloud,
  CalendarClock // <--- Added this missing import
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Workshop Data ---
type TabType = 'overview' | 'duration' | 'speaker' | 'contact'

const WORKSHOP_DATA = {
  title: "HACKATHON WORKSHOP",
  tagline: "Master the Stack. Build the Future.",
  price: "₹120 / Head",
  venue: "To Be Announced",
  date: "11th December (Tentative)",
  duration: "1 Day",
  poster: "/images/workshop-hackathon-bg.jpeg", 
  description: "A comprehensive 1-day workshop designed to equip students with the essential tech stack required for hackathons. From version control to deploying AI models, this session covers the A-Z of modern prototyping.",
  topics: [
    "Blockchain Technology",
    "Cloud Computing", 
    "AI / ML Fundamentals",
    "Web Development (Full Stack)",
    "App Development",
    "Web3 & Decentralization",
    "AR / VR (Augmented & Virtual Reality)",
    "Version Control (Git/GitHub)",
    "APIs & Libraries",
    "Rapid Prototyping"
  ],
  speaker: {
    name: "GeeksforGeeks Trainers",
    role: "Industry Experts",
    bio: "Conducted by renowned trainers from GeeksforGeeks and seasoned industry experts with deep experience in competitive programming and product development."
  },
  meta: {
    audience: "Open to students of all branches",
    mode: "In-person, Instructor-led"
  },
  email: "technex@stvincentngp.edu.in",
  contacts: [
    { name: "Workshop Coord.", role: "Coordinator", phone: "Not Given" },
    { name: "Tech Team", role: "Support", phone: "Not Given" },
  ]
}

// --- Placeholder FAQ Data ---
const FAQS = [
  { question: "Do I need prior coding experience?", answer: "Basic understanding is helpful, but the workshop covers fundamentals to advanced topics." },
  { question: "Is a laptop required?", answer: "Yes, this is a hands-on workshop. Please bring your laptop with a charger." },
  { question: "Will certificates be provided?", answer: "Yes, participation certificates will be awarded to all attendees." },
  { question: "Can students from non-CS branches join?", answer: "Absolutely! The workshop is open to students of all branches." }
];

export default function WorkshopDetailsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview')
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'duration', label: 'Duration', icon: Clock }, 
    { id: 'speaker', label: 'Speaker', icon: Mic2 },
    { id: 'contact', label: 'Contact', icon: Phone },
  ] as const

  return (
    <div className="relative min-h-screen transparent text-white selection:bg-green-500 selection:text-black overflow-x-hidden">
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
            
            {/* Holographic Poster Container - Matrix Green Theme */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-green-600 via-emerald-500 to-green-800"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-green-500/30 shadow-[0_0_30px_rgba(16,185,129,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                {/* Badge */}
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-green-400 px-3 py-1 rounded text-green-400 font-mono text-xs flex items-center gap-2">
                  <Terminal size={12} /> SKILL DEV
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full bg-gray-800 flex items-center justify-center">
                   <Image 
                    src={WORKSHOP_DATA.poster} 
                    alt="Workshop Poster" 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                   />
                   {/* Matrix Overlay */}
                   <div className="absolute inset-0 bg-green-900/20 mix-blend-overlay" />
                </div>
              </div>
            </motion.div>

            {/* Registration & Price Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <button className="group relative w-full overflow-hidden rounded-md bg-green-950 p-4 text-center font-bold uppercase tracking-widest text-green-400 border border-green-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Enroll Now
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-green-600 to-emerald-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Quick Info */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-emerald-400"/>
                    <span>Instructor-Led</span> 
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-green-400 uppercase">Workshop Fee</span>
                    <span className="text-lg font-bold text-white">{WORKSHOP_DATA.price}</span>
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
              <h1 className="text-3xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-green-200 to-emerald-500 uppercase drop-shadow-[0_0_10px_rgba(16,185,129,0.5)]">
                {WORKSHOP_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-green-300 font-medium mt-2 tracking-wide font-mono flex items-center gap-2">
                 <Cpu size={20}/> {WORKSHOP_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-emerald-600 mt-4 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8">
              
              {/* HUD Decorative Corners - Green & Emerald */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-emerald-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-emerald-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-green-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-green-400" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,1)]">
                             <Code size={16} className="fill-current" />
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
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-green-500 pl-4">Curriculum</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {WORKSHOP_DATA.description}
                         </p>

                         {/* Topics Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                             {WORKSHOP_DATA.topics.map((topic, i) => (
                                 <div key={i} className="flex items-center gap-3 p-3 bg-white/5 border border-white/10 rounded-lg hover:border-green-500/40 transition-colors">
                                     <div className="p-1.5 bg-green-900/50 rounded text-green-400">
                                         {i % 2 === 0 ? <Globe size={16}/> : <GitBranch size={16}/>}
                                     </div>
                                     <span className="text-gray-200 text-sm font-medium">{topic}</span>
                                 </div>
                             ))}
                         </div>
                         
                         {/* Audience & Mode */}
                         <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-emerald-900/20 border border-emerald-500/30 p-3 rounded">
                                <div className="text-xs text-emerald-300 uppercase tracking-widest mb-1">Audience</div>
                                <div className="text-white font-medium text-sm">{WORKSHOP_DATA.meta.audience}</div>
                            </div>
                            <div className="bg-green-900/20 border border-green-500/30 p-3 rounded">
                                <div className="text-xs text-green-300 uppercase tracking-widest mb-1">Mode</div>
                                <div className="text-white font-medium text-sm">{WORKSHOP_DATA.meta.mode}</div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- DURATION TAB --- */}
                    {activeTab === 'duration' && (
                      <div className="space-y-6">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-4">Time & Schedule</h3>
                         
                         <div className="flex flex-col gap-4">
                             <div className="bg-gradient-to-r from-green-900/40 to-transparent p-6 rounded-xl border-l-4 border-green-500 flex items-center justify-between">
                                 <div>
                                     <div className="text-green-400 text-sm uppercase tracking-widest mb-1">Total Duration</div>
                                     <div className="text-3xl font-bold text-white">{WORKSHOP_DATA.duration}</div>
                                 </div>
                                 <Clock size={40} className="text-green-500/50" />
                             </div>

                             <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                 <div className="flex items-center gap-3 mb-2">
                                     <CalendarClock className="text-emerald-400" size={24} />
                                     <div className="text-xl font-bold text-white">Date</div>
                                 </div>
                                 <div className="text-gray-300 text-lg">{WORKSHOP_DATA.date}</div>
                             </div>

                             <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                                 <div className="flex items-center gap-3 mb-2">
                                     <MapPin className="text-emerald-400" size={24} />
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
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Instructor Profile</h3>
                         
                         <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-green-500 transition-colors group">
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                <div className="w-20 h-20 rounded-full bg-green-900/50 flex items-center justify-center border-2 border-green-500 shrink-0">
                                    <Mic2 size={32} className="text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors">
                                        {WORKSHOP_DATA.speaker.name}
                                    </h4>
                                    <span className="inline-block px-3 py-1 rounded-full bg-green-900/30 text-green-300 text-xs font-mono mb-4 border border-green-500/30">
                                        {WORKSHOP_DATA.speaker.role}
                                    </span>
                                    <p className="text-gray-300 leading-relaxed">
                                        {WORKSHOP_DATA.speaker.bio}
                                    </p>
                                </div>
                            </div>
                         </div>
                         
                         <div className="mt-4 p-4 bg-emerald-900/20 rounded border border-emerald-500/20 text-sm text-emerald-200">
                             <span className="font-bold">Note:</span> This workshop is conducted in collaboration with GeeksforGeeks to ensure industry-standard training.
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-emerald-500 pl-4">Helpdesk</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${WORKSHOP_DATA.email}`} className="block bg-gradient-to-r from-green-900/40 to-emerald-900/40 p-4 rounded-xl border border-green-500/30 hover:border-green-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-green-950 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-green-300 transition-colors">{WORKSHOP_DATA.email}</div>
                                 </div>
                             </div>
                         </a>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {WORKSHOP_DATA.contacts.map((contact, idx) => (
                            <div key={idx} className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 hover:border-emerald-500 transition-colors group">
                               <div className="flex items-center gap-3 mb-4">
                                  <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-900 transition-colors">
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
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-green-400"/>
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
                           ? "bg-green-950/40 border-green-500/50 shadow-[0_0_15px_rgba(16,185,129,0.15)]" 
                           : "bg-black/40 border-white/10"
                       }`}
                     >
                        <motion.div layout className="p-4 flex items-center justify-between">
                            <h4 className={`font-semibold text-lg transition-colors ${isHovered ? "text-green-300" : "text-gray-200"}`}>
                                {faq.question}
                            </h4>
                            <motion.div
                              animate={{ rotate: isHovered ? 180 : 0 }}
                              className="text-green-500"
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