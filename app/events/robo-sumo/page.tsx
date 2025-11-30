"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  Info, 
  Swords, 
  ScrollText, 
  Phone, 
  MapPin, 
  Clock,
  Hammer,
  ChevronRight,
  Mail,
  Users,
  Trophy,
  Scale,
  Zap
} from 'lucide-react'

// --- Mock Components ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Updated Data ---
type TabType = 'about' | 'timeline' | 'rules' | 'contact'

const EVENT_DATA = {
  title: "Robo Sumo",
  tagline: "Where Metal Meets Madness.",
  priceRange: "Register via Unstop",
  venue: "St. Vincent Pallotti College (Offline)",
  duration: "18-19 Dec 2025",
  poster: "/images/robo-sumo-bg.jpeg", // Placeholder
  description: "Robo Sumo is a test of raw power and engineering stability. In this competitive event, two robots enter a circular arena with a single goal: push the opponent out of the ring. Similar to traditional Sumo wrestling, participants must design bots focused on traction, torque, and strategic movement to overpower their rivals and dominate the circle.",
  timeline: [
    { title: "Day 1: The Weigh-In", details: "Strict robot inspection (weight, dimensions) followed by qualifier rounds to determine the strongest contenders." },
    { title: "Day 2: The Arena", details: "Shortlisted teams face off in elimination rounds, culminating in the Grand Final showdown." },
    { title: "Registration", details: "Open from 29 Nov to 18 Dec 2025. Teams must submit specs before the event." }
  ],
  rules: [
    "Team Size: 1-4 Members.",
    "Objective: Push opponent out of the ring.",
    "Restriction: No deliberate damage to the arena.",
    "Inspection: Weight/Size compliance is mandatory.",
    "Conduct: Unsportsmanlike behavior leads to disqualification.",
  ],
  email: "Technex@stvincentngp.edu.in",
  contacts: [
    { name: "Manasvi Wagh", role: "Coordinator", phone: "7620161890" },
    { name: "Aryan Chakradhare", role: "Co-Coordinator", phone: "8149345288" },
  ],
  prizes: {
    pool: "₹50,000",
    first: "₹25,000",
    second: "₹15,000",
    special: "₹10,000 (3rd Place)"
  }
}

export default function EventDetailsPage() {
  const [activeTab, setActiveTab] = useState<TabType>('about')

  const tabs = [
    { id: 'about', label: 'Briefing', icon: Info },
    { id: 'timeline', label: 'Schedule', icon: Clock }, 
    { id: 'rules', label: 'Regulations', icon: ScrollText },
    { id: 'contact', label: 'Support', icon: Phone },
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
            
            {/* Holographic Poster Container - Slate & Rust Orange (Industrial Theme) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-slate-600 via-orange-700 to-slate-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-orange-500/30 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-orange-500 px-3 py-1 rounded text-orange-500 font-mono text-xs flex items-center gap-2">
                  <Bot size={12} /> HEAVY METAL
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full">
                   <Image 
                    src={EVENT_DATA.poster} 
                    alt="Robo Sumo Poster" 
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
              <button className="group relative w-full overflow-hidden rounded-md bg-slate-800 p-4 text-center font-bold uppercase tracking-widest text-orange-500 border border-orange-500/50 shadow-[0_0_20px_rgba(249,115,22,0.2)] hover:shadow-[0_0_40px_rgba(249,115,22,0.5)] transition-all">
                <span className="relative z-10 group-hover:text-white transition-colors duration-300 flex items-center justify-center gap-2">
                  Enter Arena
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-orange-700 to-slate-700 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Updated Price display */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-orange-400"/>
                    <span>Team: 1-4</span> 
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-slate-400 uppercase">Registration</span>
                    <span className="text-lg font-bold text-white">OPEN</span>
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
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500 uppercase drop-shadow-[0_0_10px_rgba(148,163,184,0.5)]">
                {EVENT_DATA.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-orange-500 font-medium mt-2 tracking-wide">
                {EVENT_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-slate-600 to-orange-600 mt-4 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
              
              {/* HUD Decorative Corners - Slate & Orange */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-slate-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-slate-500 rounded-br-lg" />

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 bg-black/40 relative">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative flex-1 py-4 px-2 text-sm md:text-base font-medium transition-colors duration-300 flex flex-col items-center gap-2 ${
                        isActive ? "text-orange-500" : "text-gray-400 hover:text-white"
                      }`}
                    >
                      <tab.icon size={18} />
                      <span className="uppercase tracking-wider text-xs md:text-sm">{tab.label}</span>
                      
                      {isActive && (
                        <motion.div
                          layoutId="active-tab-indicator"
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-600 to-slate-600"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-orange-500 drop-shadow-[0_0_8px_rgba(249,115,22,1)]">
                             <Swords size={16} className="fill-current" />
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
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-4">Combat Overview</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">
                           {EVENT_DATA.description}
                         </p>
                         
                         {/* Prize Pool Section */}
                         <div className="mt-6 p-4 bg-gradient-to-r from-slate-800 to-orange-900/30 rounded-lg border border-orange-500/30">
                            <div className="flex items-center gap-2 mb-3 text-orange-400">
                                <Trophy size={20} />
                                <h4 className="font-bold uppercase tracking-wider">Total Prize Pool: {EVENT_DATA.prizes.pool}</h4>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                                <div className="bg-black/40 p-3 rounded border border-orange-500/20">
                                    <div className="text-orange-500 font-bold text-xl">{EVENT_DATA.prizes.first}</div>
                                    <div className="text-xs text-gray-400 uppercase">Champion</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded">
                                    <div className="text-gray-300 font-bold text-xl">{EVENT_DATA.prizes.second}</div>
                                    <div className="text-xs text-gray-400 uppercase">Runner-Up</div>
                                </div>
                                <div className="bg-black/40 p-3 rounded">
                                    <div className="text-slate-400 font-bold text-lg pt-1">{EVENT_DATA.prizes.special}</div>
                                    <div className="text-xs text-gray-400 uppercase mt-1">3rd Place</div>
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
                               <MapPin className="text-slate-400 shrink-0" size={24} />
                               <div>
                                  <div className="text-slate-400 text-xs uppercase">Venue</div>
                                  <div className="text-sm font-bold leading-tight">{EVENT_DATA.venue}</div>
                               </div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- TIMELINE (SCHEDULE) TAB --- */}
                    {activeTab === 'timeline' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-500 pl-4">Fight Schedule</h3>
                         <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-orange-500 before:to-transparent">
                           {EVENT_DATA.timeline.map((item, idx) => (
                             <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-orange-500 bg-orange-950 group-[.is-active]:bg-orange-500 text-orange-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                 <Zap size={18} />
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
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-slate-500 pl-4">Arena Rules</h3>
                         <ul className="space-y-3 bg-black/30 p-4 rounded-lg border border-slate-500/20">
                           {EVENT_DATA.rules.map((rule, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-gray-300 group">
                               <span className="text-slate-500 mt-1 group-hover:text-orange-400 transition-colors">❖</span>
                               <span className="group-hover:text-white transition-colors">{rule}</span>
                             </li>
                           ))}
                         </ul>
                         
                         <div className="grid grid-cols-2 gap-2 mt-4">
                            <div className="bg-orange-900/20 border border-orange-500/30 p-3 rounded flex items-center gap-2">
                                <Scale className="text-orange-500" size={20} />
                                <span className="text-xs text-orange-200">Weight Check Mandatory</span>
                            </div>
                            <div className="bg-slate-900/20 border border-slate-500/30 p-3 rounded flex items-center gap-2">
                                <Hammer className="text-slate-400" size={20} />
                                <span className="text-xs text-slate-300">No Major Repairs</span>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Tech Support</h3>
                        
                        {/* Email Link */}
                        <a href={`mailto:${EVENT_DATA.email}`} className="block bg-gradient-to-r from-slate-900/40 to-orange-900/40 p-4 rounded-xl border border-slate-500/30 hover:border-slate-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-slate-300 transition-colors">{EVENT_DATA.email}</div>
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
          </div>
        </div>
      </main>
    </div>
  )
}