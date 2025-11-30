// app/events/page.tsx
"use client"
import { useState } from "react"
import EventVideoBackground from "@/components/event-video-background"
import TopNav from "@/components/top-nav";
import RightSidebar from "@/components/right-sidebar";
import LeftSidebar from "@/components/left-sidebar";

const cards = [
  {
    id: 1,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Code Quest",
    description: "Solve challenging coding problems and compete with the best programmers.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 2,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Web Development Challenge",
    description: "Build amazing web applications with modern technologies and frameworks.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 3,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "AI Innovation Hackathon",
    description: "Develop innovative AI solutions to real-world problems.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 4,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Data Science Summit",
    description: "Explore data science and analytics with hands-on workshops.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 5,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Mobile App Blitz",
    description: "Create cutting-edge mobile applications in a competitive environment.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 6,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Cyber Security Challenge",
    description: "Test your security skills and learn to protect systems from threats.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 7,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Cloud Computing Workshop",
    description: "Master cloud platforms and build scalable applications.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 8,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Game Development Jam",
    description: "Create exciting games using game engines and creative storytelling.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 9,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "IoT Innovation Lab",
    description: "Build IoT projects connecting the digital and physical worlds.",
    unstopUrl: "https://unstop.com",
  },
  {
    id: 10,
    poster: "/d.cover.png",
    character: "/d.character.png",
    name: "Blockchain Bootcamp",
    description: "Learn blockchain technology and develop decentralized applications.",
    unstopUrl: "https://unstop.com",
  },
];

export default function EventsPage() {
  const [selectedCard, setSelectedCard] = useState<(typeof cards)[0] | null>(null)

  return (
    <>
      <EventVideoBackground />
      <LeftSidebar />
            <RightSidebar />
            <TopNav />
      <main className="card-page">
        <div className="cards-container">
          <div className="card-grid">
            {cards.map((card) => (
              <div 
                key={card.id} 
                className="card cursor-pointer"
                onClick={() => setSelectedCard(card)}
              >
                <div className="wrapper">
                  <img
                    src={card.poster}
                    alt={`Event ${card.id} poster`}
                    className="cover-image"
                  />
                </div>

                <img
                  src={card.character}
                  alt={`Event ${card.id} character`}
                  className="character"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Modal Overlay */}
      {selectedCard && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCard(null)}
        >
          <div 
            className="bg-gradient-to-b from-[#222] to-[#101c30] rounded-3xl p-8 max-w-md w-full shadow-2xl border border-[#0075ff] border-opacity-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-orbitron">
                {selectedCard.name}
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {selectedCard.description}
              </p>

              <a
                href={selectedCard.unstopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-[#0075ff] to-[#0055dd] hover:from-[#0088ff] hover:to-[#0066ee] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#0075ff]/50"
              >
                Register with Unstop
              </a>

              <button
                onClick={() => setSelectedCard(null)}
                className="mt-4 block w-full text-center text-gray-400 hover:text-gray-200 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
