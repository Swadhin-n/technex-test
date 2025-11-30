import React from "react";
import LeftSidebar from "@/components/left-sidebar"
import RightSidebar from "@/components/right-sidebar"
import TopNav from "@/components/top-nav"

type Socials = {
  email?: string;
  instagram?: string;
  linkedin?: string;
};

type Member = {
  id: string | number;
  name: string;
  designation?: string;
  photo: string;
  socials?: Socials;
};

const FRAME_SRC = "/team_card.webp";

function normalizeUrl(url?: string, platform?: "instagram" | "linkedin") {
  if (!url) return undefined;
  if (url.startsWith("http")) return url;
  if (platform === "instagram") return `https://instagram.com/${url.replace(/^@/, "")}`;
  if (platform === "linkedin") return `https://linkedin.com/in/${url.replace(/^@/, "")}`;
  return url;
}

function IconMail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect x="2.5" y="5.5" width="19" height="13" rx="2" stroke="white" strokeWidth="1.6" />
      <path d="M3.5 7.5l8 6 8-6" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
       <rect x="2.5" y="2.5" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6" />
      <circle cx="12" cy="11.5" r="3.2" stroke="white" strokeWidth="1.6" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="white" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden className={className}>
      <rect x="2.5" y="2.5" width="18" height="18" rx="3" stroke="white" strokeWidth="1.6" />
      <path d="M7.5 10.5v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="7.5" cy="8" r="1" fill="white" />
      <path d="M11.5 10.5v6" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11.5 10.5c1.6 0 3.5-.1 3.5 2.2v3.8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function TeamCard({ member }: { member: Member }) {
  const emailLink = member.socials?.email ? `mailto:${member.socials.email}` : undefined;
  const insta = normalizeUrl(member.socials?.instagram, "instagram");
  const linked = normalizeUrl(member.socials?.linkedin, "linkedin");

  return (
    <div className="relative w-full" style={{ maxWidth: 320 }}>
      <div className="relative w-full pb-[140%] bg-transparent"> {/* reduced from 150% to 120% */}
        {/* member photo: reduced size and centered */}
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="absolute top-3 left-1/2 -translate-x-1/2 w-3/4 h-auto object-cover rounded-[10px] z-30"
          style={{ filter: "brightness(0.95) contrast(1.02)" }}
        />

        {/* subtle overlay behind the image */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.06), rgba(0,0,0,0.12))" }}
        />

        {/* frame stays behind the image */}
        <img src={FRAME_SRC} alt="team frame" className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10" />

        <div className="absolute left-1/2 -translate-x-1/2 bottom-14 px-3 py-1 rounded-md text-center backdrop-blur-sm z-40" style={{ background: "rgba(0,0,0,0.45)", color: "white", minWidth: "70%" }}>
          <div className="text-sm md:text-base font-small">{member.name}</div>
          {member.designation && <div className="text-xs md:text-xs opacity-80">{member.designation}</div>}
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 bottom-4 px-2 py-1 flex items-center gap-3 justify-center z-40">
          {insta ? (
            <a href={insta} aria-label={`${member.name} on Instagram`} target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-110 transition-transform">
              <IconInstagram className="w-6 h-6" />
            </a>
          ) : (
            <span className="p-1 opacity-30"><IconInstagram className="w-6 h-6" /></span>
          )}

          {emailLink ? (
            <a href={emailLink} aria-label={`Email ${member.name}`} target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-110 transition-transform">
              <IconMail className="w-6 h-6" />
            </a>
          ) : (
            <span className="p-1 opacity-30"><IconMail className="w-6 h-6" /></span>
          )}

          {linked ? (
            <a href={linked} aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noopener noreferrer" className="p-1 hover:scale-110 transition-transform">
              <IconLinkedin className="w-6 h-6" />
            </a>
          ) : (
            <span className="p-1 opacity-30"><IconLinkedin className="w-6 h-6" /></span>
          )}
        </div>
      </div>
    </div>
  );
}

export function TeamSection({ title, members }: { title: string; members: Member[] }) {
  return (
    <section className="w-full py-8">
      <div className="text-center mb-4">
        <h3 className="text-2xl md:text-3xl font-semibold">{title}</h3>
        <div className="text-sm text-muted-foreground">{members.length} member{members.length !== 1 ? "s" : ""}</div>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {members.map((m) => (
          <TeamCard key={m.id} member={m} />
        ))}
      </div>
    </section>
  );
}

const Mentor: Member[] = [
  { id: 1, name: "Mukul Potdar", designation: "Mentor", photo: "/member/mukul.jpg", socials: {instagram: "https://www.instagram.com/sachintendulkar/?hl=en", email: "aisha@example.com" , linkedin: "aisha_k" } },
  { id: 2, name: "Rohit Verma", designation: "Software Engineer", photo: "/members/rohit.jpg", socials: {instagram: "https://www.instagram.com/sachintendulkar/?hl=en", email: "aisha@example.com" , linkedin: "aisha_k" } },
  { id: 3, name: "Maya Patel", designation: "QA Engineer", photo: "/members/maya.jpg", socials: { instagram: "https://www.instagram.com/sachintendulkar/?hl=en", email: "aisha@example.com" , linkedin: "aisha_k"} },
  { id: 4, name: "Karan Singh", designation: "DevOps", photo: "/members/karan.jpg", socials: { instagram: "https://www.instagram.com/sachintendulkar/?hl=en", email: "aisha@example.com" , linkedin: "aisha_k" } },
];

const leadTeam: Member[] = [
  { id: 'd1', name: "Kartik Rao Barnala", designation: "Coordinator", photo: "/members/sneha.jpg", socials: { instagram: "sneha.design" } },
  { id: 'd2', name: "", designation: "Coordinator", photo: "/members/vikram.jpg" },
  { id: 'd3', name: "Ken Cherian", designation: "Co-coordinator", photo: "/members/priya.jpg", socials: { linkedin: "priya-nair" } },
];

const marketingTeam: Member[] = [
  { id: 'm1', name: "Devansh Mehta", designation: "Content Lead", photo: "/members/devansh.jpg", socials: { instagram: "devansh_mehta", linkedin: "devansh-mehta" } },
  { id: 'm2', name: "Nora Gupta", designation: "Social Media", photo: "/members/nora.jpg", socials: { email: "nora@example.com" } },
];

const developerTeam: Member[] = [
  { id: 'd1', name: "Swadhin Upadhyay", designation: "Website Member", photo: "/members/swadhin.webp", socials: { instagram: "https://www.instagram.com/swadhin.axe?igsh=cjZudG12cDAyNXpz", email:"swadhinupadhyay.24@stvincentngp.edu.in" ,linkedin: "https://www.linkedin.com/in/swadhin-upadhyay-9728a8303/?originalSubdomain=in" } },
  { id: 'd2', name: "Nora Gupta", designation: "Social Media", photo: "/members/nora.jpg", socials: { email: "nora@example.com" } },
];




export function TeamsPage() {
  return (
    <main className="max-w-7xl mx-auto mt-40 px-4 sm:px-6 lg:px-8">
      <TeamSection title="Engineering" members={Mentor}/>
      <TeamSection title="Design" members={leadTeam} />
      <TeamSection title="Marketing" members={marketingTeam} />
      <TeamSection title="Developers" members={developerTeam} />
    </main>
  );
}

export default function Team() {
  return (
    <div className="relative min-h-screen">
      <LeftSidebar />
      <RightSidebar />
      <TopNav />
      <TeamsPage />
    </div>
  );
}

/* Integration instructions:

To integrate into an existing page, import { TeamSection } and render it where you want team containers to appear:

import { TeamSection } from "./TeamGrid";

<TeamSection title="Engineering" members={engineeringTeam} />

Or wrap the full teams page into your layout by importing the default export and passing your layout wrapper:

import IntegratedTeams from "./TeamGrid";

function MyLayout({ children }) {
  return (<div className="my-layout">{children}</div>);
}

<IntegratedTeams Wrapper={MyLayout} />

*/
