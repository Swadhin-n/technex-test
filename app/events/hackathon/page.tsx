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
  Zap,
  ChevronRight,
  Mail,
  Users,
  Trophy,
  HelpCircle, 
  ChevronDown,
  Code,
  Cpu,
  Terminal
} from 'lucide-react'

// --- Mock Components (Preserved) ---
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

// --- Updated Data for HACKATHON ---
type TabType = 'about' | 'timeline' | 'rules' | 'contact'

const EVENT_DATA = {
  title: "HACKATHON",
  subtitle: "Technex 2026",
  tagline: "Complete Missions. Earn XP. Build the Future.",
  priceRange: "₹50 / Head", 
  venue: "St. Vincent Pallotti College of Eng. & Tech.", // Assumed based on context
  duration: "18-19 Dec (24 Hours)", // "Date - Same"
  poster: "/images/hackathon-bg.jpeg", // Placeholder path
  description: "The Hackathon under Technex 2026 is a national-level 24-hour innovation challenge where teams complete missions, earn XP, and build prototypes based on real-world problem statements. Guided by industry mentors and tracked on a live leaderboard, shortlisted teams present to an expert panel for awards and sponsorship opportunities.",
  domains: [
    "AI/ML", "Web & App Dev", "IoT", "HealthTech", 
    "FinTech", "EdTech", "Cybersecurity", "Blockchain & Web3", "Sustainability"
  ],
  timeline: [
    { title: "Round 1: Online Ideation", details: "Participants submit their Idea/Solution PPTs. (Virtual Selection)" },
    { title: "Round 2: The Launch (Day 1)", details: "Morning: Inauguration & Problem Statement Reveal. Afternoon: Missions 1 & 2 Launch." },
    { title: "Round 2: The Grind (Day 1 Evening)", details: "Mentorship sessions, Evaluation, Icebreakers, and Live Leaderboard updates." },
    { title: "Round 2: Midnight Mission", details: "High-stakes 'Final Mission' launch at Midnight." },
    { title: "Round 2: The Finale (Day 2)", details: "Noon: Final Submission. Evening: Presentations, Results, and Prize Distribution." }
  ],
  rules: [
    "Format: Hybrid Mode (Online Ideation + On-Campus Finale).",
    "Team Size: 2–4 members (Strict Adherence).",
    "Code Development: Must be completed entirely during the event.",
    "Submission: Teams must submit code via GitHub and a detailed presentation.",
    "Accommodation Fee: ₹300 for shortlisted teams.",
    "Plagiarism: Immediate disqualification for plagiarized code/reports."
  ],
  email: "technex@stvincentngp.edu.in", // Generic fallback if specific not given
  contacts: [
    { name: "Sanika Yerpude", role: "Event Coordinator", email: "sanikayerpude.23@stvincentngp.edu.in", phone: "Not Given" },
    { name: "Bhakti Hiwase", role: "Co-coordinator", email: "bhaktihiwase.24@stvincentngp.edu.in", phone: "Not Given" },
  ],
  prizes: {
    pool: "₹70,000 - ₹90,000",
    details: "Includes Cash Prizes & Scholarship Opportunities"
  }
}

// --- Combined FAQ Data ---
const FAQS = [
  // Round 1
  { question: "What are the criteria for Round 1 PPT evaluation?", answer: "Problem understanding, creativity, feasibility, clarity of presentation, and potential impact." },
  { question: "Can we modify our idea after submitting the PPT?", answer: "No, changes are not allowed after the Round 1 deadline." },
  { question: "Do we need a technical implementation plan in the PPT?", answer: "A high-level overview focusing on feasibility and practicality is sufficient; detailed specs are not required yet." },
  // Round 2 & Tech
  { question: "What tools/languages can we use in the coding round?", answer: "Any programming languages, tools, or frameworks are allowed, provided they align with feasibility." },
  { question: "Will internet access be provided?", answer: "Yes, internet is provided for research. However, plagiarism will lead to immediate disqualification." },
  { question: "What if our solution is only partially working?", answer: "Partially working solutions are acceptable. Judges value the problem-solving approach and effort, provided you explain how you plan to address issues." },
  // General
  { question: "What is the team size?", answer: "Teams can have 2-4 members." },
  { question: "How do we present the final solution?", answer: "A 5-10 minute demo or presentation followed by a Q&A session with the judges." }
];

export default function HackathonPage() {
  const [activeTab, setActiveTab] = useState<TabType>('about')
  const [hoveredFaq, setHoveredFaq] = useState<number | null>(null)

  const tabs = [
    { id: 'about', label: 'Briefing', icon: Info },
    { id: 'timeline', label: 'Missions', icon: CalendarClock }, 
    { id: 'rules', label: 'Protocol', icon: ScrollText },
    { id: 'contact', label: 'Comms', icon: Phone },
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
            
            {/* Holographic Poster Container */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative group rounded-xl p-1 bg-gradient-to-br from-green-500 via-cyan-600 to-purple-600"
            >
              <div className="relative rounded-lg overflow-hidden h-[500px] w-full bg-gray-900 border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <div className="absolute inset-0 z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                <div className="absolute top-4 right-4 z-20 bg-black/70 backdrop-blur border border-green-400 px-3 py-1 rounded text-green-400 font-mono text-xs flex items-center gap-2">
                  <Terminal size={12} />
                  24 HR CHALLENGE
                </div>

                {/* Main Image */}
                <div className="relative w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for the user's poster */}
                    <Image 
                        src={EVENT_DATA.poster}
                        alt="Hackathon Theme"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                    />
                    {/* Fallback overlay if image fails or for style */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
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
                  Initialize Registration
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-cyan-600 to-green-600 transition-transform duration-300 group-hover:translate-x-0" />
              </button>
              
              {/* Updated Price display */}
              <div className="mt-4 flex justify-between items-center px-2 bg-black/50 p-2 rounded border border-white/10">
                 <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
                    <Users size={16} className="text-green-400"/>
                    <span>Team: 2-4 Members</span>
                 </div>
                 <div className="flex flex-col items-end">
                    <span className="text-sm text-cyan-400 uppercase">Entry Fee</span>
                    <span className="text-xl font-bold text-white">{EVENT_DATA.priceRange}</span>
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
              <div className="flex items-baseline gap-3">
                 <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-green-400 uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
                    {EVENT_DATA.title}
                 </h1>
                 <span className="text-gray-500 font-mono text-sm tracking-widest">{EVENT_DATA.subtitle}</span>
              </div>
              <h2 className="text-xl md:text-2xl text-green-300 font-medium mt-2 tracking-wide font-mono">
                {">"} {EVENT_DATA.tagline}
              </h2>
              <div className="h-1 w-32 bg-gradient-to-r from-green-600 to-cyan-600 mt-4 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
            </motion.div>

            {/* The Glassmorphism HUD Board */}
            <div className="relative flex-1 min-h-[500px] bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl mb-8">
              
              {/* HUD Decorative Corners */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-green-500 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 rounded-bl-lg" />
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
                          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-cyan-500"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                           <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,1)]">
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
                         <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-green-500 pl-4">Mission Brief</h3>
                         <p className="text-gray-300 leading-relaxed text-lg">{EVENT_DATA.description}</p>
                         
                         {/* Domains Grid */}
                         <div className="mt-4">
                            <h4 className="text-sm font-mono text-cyan-400 mb-3 uppercase tracking-wider">Active Domains</h4>
                            <div className="flex flex-wrap gap-2">
                                {EVENT_DATA.domains.map((domain, i) => (
                                    <span key={i} className="px-3 py-1 rounded bg-cyan-900/30 border border-cyan-500/30 text-xs text-cyan-200">
                                        {domain}
                                    </span>
                                ))}
                            </div>
                         </div>

                         <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-cyan-900/30 rounded-lg border border-green-500/30">
                            <div className="flex items-center gap-2 mb-3 text-green-300">
                                <Trophy size={20} />
                                <h4 className="font-bold uppercase tracking-wider">Prize Pool</h4>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                                    {EVENT_DATA.prizes.pool}
                                </div>
                                <div className="text-xs text-gray-400 uppercase mt-2">{EVENT_DATA.prizes.details}</div>
                            </div>
                         </div>
                      </div>
                    )}

                    {/* --- TIMELINE TAB --- */}
                    {activeTab === 'timeline' && (
                      <div className="space-y-4">
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Execution Roadmap</h3>
                         <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-cyan-500 before:to-transparent">
                           {EVENT_DATA.timeline.map((item, idx) => (
                             <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                               <div className="flex items-center justify-center w-10 h-10 rounded-full border border-cyan-500 bg-cyan-950 group-[.is-active]:bg-cyan-500 text-cyan-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                 <Cpu size={18} />
                               </div>
                               <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/5 p-4 rounded-lg border border-white/10 group-hover:border-green-500/50 transition-colors shadow">
                                 <div className="text-lg font-bold text-green-300 mb-1">{item.title}</div>
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
                         <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-purple-500 pl-4">System Protocols</h3>
                         <ul className="space-y-3 bg-black/30 p-4 rounded-lg border border-purple-500/20">
                           {EVENT_DATA.rules.map((rule, idx) => (
                             <li key={idx} className="flex items-start gap-3 text-gray-300 group">
                               <span className="text-purple-500 mt-1 group-hover:text-purple-300 transition-colors">❖</span>
                               <span className="group-hover:text-white transition-colors">{rule}</span>
                             </li>
                           ))}
                         </ul>
                      </div>
                    )}

                    {/* --- CONTACT TAB --- */}
                    {activeTab === 'contact' && (
                      <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4">Comms Link</h3>
                        <a href={`mailto:${EVENT_DATA.email}`} className="block bg-gradient-to-r from-cyan-900/40 to-green-900/40 p-4 rounded-xl border border-cyan-500/30 hover:border-cyan-400 transition-all group mb-6">
                             <div className="flex items-center gap-4">
                                 <div className="w-12 h-12 rounded-full bg-cyan-950 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                                     <Mail size={24} />
                                 </div>
                                 <div>
                                     <div className="text-gray-400 text-xs uppercase tracking-widest mb-1">Official Email</div>
                                     <div className="text-white font-mono text-lg break-all group-hover:text-cyan-300 transition-colors">{EVENT_DATA.email}</div>
                                 </div>
                             </div>
                         </a>

                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {EVENT_DATA.contacts.map((contact, i) => (
                                <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                                    <div className="text-green-400 font-bold">{contact.name}</div>
                                    <div className="text-xs text-gray-400 uppercase mb-2">{contact.role}</div>
                                    <div className="flex items-center gap-2 text-sm text-gray-300">
                                        <Mail size={14} className="text-cyan-500"/>
                                        <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors truncate w-full">{contact.email}</a>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                                        <Phone size={14} />
                                        <span>{contact.phone}</span>
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
            <div className="relative">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-green-500 pl-4 flex items-center gap-3">
                 <HelpCircle className="text-green-400"/>
                 Knowledge Base (FAQ)
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