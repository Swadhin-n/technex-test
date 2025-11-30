"use client"

import EventVideoBackground from "@/components/event-video-background"
import Image from "next/image"

const workshops = [
  {
    id: 1,
    title: "Web Development Mastery",
    description: "Learn modern web development with React, TypeScript, and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Master data manipulation, visualization, and analysis with Python libraries.",
    image: "https://images.unsplash.com/photo-1526374965328-7f5ae4d5a65a?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Cloud Deployment Essentials",
    description: "Deploy applications on AWS, Google Cloud, and Azure platforms.",
    image: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Mobile App Development",
    description: "Build cross-platform mobile apps using Flutter and React Native.",
    image: "https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Cybersecurity Fundamentals",
    description: "Understand security protocols, encryption, and threat prevention.",
    image: "https://images.unsplash.com/photo-1550751827-4bd582f23d5d?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    title: "AI & Machine Learning Basics",
    description: "Introduction to ML algorithms, neural networks, and practical applications.",
    image: "https://images.unsplash.com/photo-1677442d019cecf482dfead4c41bebb4d4ef6360?w=400&h=300&fit=crop",
  },
]

export default function Workshops() {
  return (
    <>
      <EventVideoBackground />
      <main className="card-page">
        <div className="workshops-container">
          <h1 className="workshop-title">Workshops</h1>
          
          <div className="workshops-grid">
            {workshops.map((workshop) => (
              <div key={workshop.id} className="workshop-card">
                <div className="workshop-image-wrapper">
                  <Image
                    src={workshop.image}
                    alt={workshop.title}
                    width={260}
                    height={300}
                    className="workshop-image"
                  />
                </div>
                
                <div className="workshop-content">
                  <h3 className="workshop-name">{workshop.title}</h3>
                  <p className="workshop-description">{workshop.description}</p>
                  
                  <a
                    href="https://unstop.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="workshop-register-btn"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
