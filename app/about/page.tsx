"use client";

import { useEffect, useState } from "react";
import LeftSidebar from "@/components/left-sidebar";
import RightSidebar from "@/components/right-sidebar";
import TopNav from "@/components/top-nav";
import VideoBackground from "@/components/video-background";
import Footer from "@/components/footer";
import Image from "next/image";

const stats = [
  {
    title: "20+ Years",
    description: "Established in 2001, inspiring innovation since day one."
  },
  {
    title: "10+ Events",
    description: "Competitions, workshops, and exhibitions across various domains."
  },
  {
    title: "3000+ Participants",
    description: "A vibrant community of students, creators, and innovators."
  }
];

const guests = [
  {
    name: "Shri. Nitin Gadkari",
    title: "Minister of Road Transport and Highways of India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    quote: "Very good institution, giving good education to the students."
  },
  {
    name: "Dr. Vishnu Vardhan",
    title: "Founder & CEO, Vizzy Multiomics, Bengaluru",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    quote: "Great honoured to be here in the 20th anniversary celebration of an engineering college for a to be felicitated on engineers day so its very interesting. I am very impressed by labs saw here from yesterday and I feel that Pallotti College should also have generative lab, still there is no such lab in India and I offer Fr. Roy and other management that if they are interested then Hanuman is very happy to set 1st generative AI in this college as Nagpur is center of India."
  },
  {
    name: "Dr. Ravinder Singhal",
    title: "Commissioner of Police, Nagpur",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    quote: "TECHNEX will be impacting not the individuals but also the future of our country. What we innovate, what we do that impacts to whole society. Change can be brought with those who think differently."
  },
  {
    name: "Dr. Kavi Arya",
    title: "Founder, Principal Investigator of E-Yantra & Professor at IIT Bombay",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
    quote: "I perceive exceptional talent among the young students at the Pallotti College during Technex event. I am happy that Pallotti College's E-Yantra lab ranks among the top 13 labs out of 520 labs across India. The trajectory of Pallotti College appears very promising to me."
  },
  {
    name: "Dr. Ritu Jain Gaurav",
    title: "CTO, U2U Systems, Singapore",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    quote: "I liked the Discipline of St. Vincent Pallotti College and it's my pleasure that I am invited here on this auspicious day."
  },
  {
    name: "Dr. Pratap Khanwilkar",
    title: "CEO Ignition Key, USA",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
    quote: "Dream big, execute make real things and help people. We are all here on this earth to help each other get better and healthier."
  },
  {
    name: "Mr. Shrikant Sarda",
    title: "Managing Director, Accenture Technology, Pune",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=400&q=80",
    quote: "It is my honour to be standing here at the 57th Engineers Day celebration in St. Vincent College. I am also impressed a lot by this college and their management and discipline."
  }
];

const sponsors = [
  "https://logo.clearbit.com/google.com",
  "https://logo.clearbit.com/microsoft.com",
  "https://logo.clearbit.com/amazon.com",
  "https://logo.clearbit.com/apple.com",
  "https://logo.clearbit.com/meta.com",
  "https://logo.clearbit.com/ibm.com",
  "https://logo.clearbit.com/oracle.com",
  "https://logo.clearbit.com/intel.com",
];

const About = () => {
  const [currentGuest, setCurrentGuest] = useState(0);
  const [prevGuest, setPrevGuest] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevGuest(currentGuest);
      setCurrentGuest((prev) => (prev + 1) % guests.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentGuest]);

  const cardClass = "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl";

  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <VideoBackground />
      <LeftSidebar />
      <RightSidebar />
      <TopNav />

      <main className="relative z-0 pt-20 sm:pt-24 md:pt-28 pb-16 px-4 sm:px-6 md:pl-20 md:pr-20 lg:pl-24 lg:pr-24 xl:pl-32 xl:pr-32">
        
        {/* HERO */}
        <section className={`${cardClass} mb-12 mt-6 md:mt-8`}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center">About Technex</h1>
          <p className="text-gray-200 mt-3 text-center max-w-2xl mx-auto text-sm sm:text-base">
            Unleashing innovation, fostering talent, and transforming ideas into reality.
          </p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-center mt-6 sm:mt-8">
            {stats.map((item, i) => (
              <div 
                key={i} 
                className="p-4 sm:p-6 bg-white/5 rounded-xl shadow-md border border-white/10"
              >
                <h3 className="text-xl sm:text-2xl font-bold">{item.title}</h3>
                <p className="text-gray-200 mt-2 text-sm sm:text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* WELCOME TO PALLOTTI */}
        <section className={`${cardClass} my-12`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center">Welcome to Pallotti !!</h2>
          <div className="grid md:grid-cols-2 gap-6 items-start">
            {/* Campus Image */}
            <div className="w-full">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/5">
                <Image
                  src="/pallotti.webp"
                  alt="St. Vincent Pallotti College Campus"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-200 text-sm sm:text-base">
              <p>
                St. Vincent Pallotti College of Engineering and Technology was established in 2004 by the Nagpur Pallottine Society. The College is accredited by NAAC with A grade. The College is affiliated to Nagpur University approved by Director of Technical Education, Mumbai and AICTE, Government of India.
              </p>
              <p>
                <span className="font-semibold">Vision :</span> To develop a knowledge based society with clarity of thoughts and charity at hearts to serve humanity with integrity.
              </p>
              <p>
                <span className="font-semibold">Mission :</span> To empower youth to be technocrats of tomorrow with absolute discipline, quest for knowledge and strong ethos to uphold the spirit of professionalism.
              </p>
            </div>
          </div>
        </section>

        {/* PRINCIPAL */}
        <section className={`${cardClass} my-12`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Our Principal</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <Image
                src="/Principal.webp"
                width={400}
                height={500}
                alt="Dr. Vijay Wadhai"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
              />
              <p className="font-semibold text-base sm:text-lg mt-3 text-center">Dr. Vijay Wadhai</p>
              <p className="text-gray-300 text-center text-sm sm:text-base">Principal, SVPCET</p>
            </div>
            <div className="flex-1 space-y-3 text-gray-200 text-sm sm:text-base">
              <p>
                Technex, our annual technical festival, is a testament to the spirit of innovation and ingenuity that thrives within the walls of St. Vincent Pallotti College of Engineering and Technology. It serves as a vital platform for our student community to showcase their technical brilliance and gain valuable experience. It is a flagship Technical event held annually and attracts hundreds of engineering students from different parts of the country, driven, organized by a team of students & mentored by a team of faculties.
              </p>
              <p>
                The event provides a unique opportunity for our students to showcase their technical prowess, engage in rigorous competitions, and learn from industry experts. Technex 2025 promises to be an exhilarating journey of intellectual exploration and collaborative learning. I encourage all participants to embrace the spirit of competition, learn, and grow.
              </p>
              <p>
                It is my aspiration that, similar to previous years, this year's TECHNEX will also present greater challenges and intrigue, thereby augmenting the prospects for emerging technocrats.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT TECHNEX */}
        <section className={`${cardClass} my-12`}>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">About Technex</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-1 space-y-3 text-gray-200 text-sm sm:text-base order-2 md:order-1">
              <p>
                Technex is the National Level Annual Technical Fest of the St. Vincent Pallotti College Of Engineering and Technology, Nagpur. Today, Technex proudly stands as Central India's largest Science and Technology Fest, bringing together over 2,500+ technology enthusiasts every year for an electrifying celebration of creativity, competition, and collaboration.
              </p>
              <p>
                Organized and driven by a passionate team of students under the guidance of esteemed faculty mentors, Technex has been fostering innovation and technological excellence since its inception in 2007.
              </p>
            </div>
            <div className="w-full md:w-1/2 flex-shrink-0 order-1 md:order-2">
              <div className="relative rounded-xl overflow-hidden shadow-lg bg-white/5">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover"
                >
                  <source src="/Aftermovie.webm" type="video/webm" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </section>

        {/* CHIEF GUESTS CAROUSEL */}
        <section className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-6 px-4">Chief Guests</h2>
          
          <div className="relative w-full h-[500px] sm:h-[480px] md:h-[450px] overflow-hidden">
            <div 
              className="flex h-full carousel-wrapper"
              style={{ 
                transform: `translateX(-${currentGuest * 100}%)`,
                transition: 'transform 700ms ease-in-out'
              }}
            >
              {guests.map((guest, idx) => (
                <div 
                  key={idx} 
                  className={`w-full flex-shrink-0 h-full transition-opacity duration-300 ${
                    idx === prevGuest ? 'opacity-0' : 'opacity-100'
                  }`}
                >
                  <div className="h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-4">
                    <div className="flex flex-col items-center flex-shrink-0 mb-3 sm:mb-4">
                      <Image
                        src={guest.image}
                        width={200}
                        height={200}
                        alt={guest.name}
                        className="rounded-full object-cover w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 flex-shrink-0 border-2 border-white/20"
                      />
                      <h3 className="font-bold text-sm sm:text-base md:text-lg lg:text-xl mt-2 sm:mt-3 text-center px-2">{guest.name}</h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-300 mt-1 text-center px-2">{guest.title}</p>
                    </div>
                    <div className="flex-1 w-full max-w-3xl overflow-y-auto px-2 pb-8">
                      <p className="italic text-gray-200 text-xs sm:text-sm md:text-base leading-relaxed text-center">
                        "{guest.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SPONSORS MARQUEE */}
        <section className={`${cardClass} my-12`}>
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Sponsored By</h2>
          
          <div className="relative overflow-hidden">
            <div className="flex gap-6 sm:gap-8 md:gap-10 animate-marquee">
              {[...sponsors, ...sponsors].map((logo, idx) => (
                <div
                  key={`sponsor-${idx}`}
                  className="flex-shrink-0 h-16 w-32 sm:h-20 sm:w-36 md:h-24 md:w-44 flex items-center justify-center bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4"
                >
                  <Image
                    src={logo}
                    width={180}
                    height={80}
                    alt={`Sponsor ${idx % sponsors.length}`}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 15s linear infinite;
          display: flex;
          width: max-content;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
