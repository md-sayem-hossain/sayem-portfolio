import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { ProjectDetails } from './components/ProjectDetails';
import { ExperienceSection } from './components/ExperienceSection';
import { Footer } from './components/Footer';
import {MoreProjects} from './components/MoreProjects';


export function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#09090b] text-white selection:bg-blue-500/30">
        <Navigation />

        <main className="max-w-6xl mx-auto px-6 relative z-10">
          <Routes>
            {/* Main Portfolio Page */}
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <ExperienceSection /> 
                  <ProjectsSection />
                  <SkillsSection />
                  <ContactSection />
                  <Footer />
                </>
              }
            />

            {/* Single Project Details Page */}
            <Route path="/project/:title" element={<ProjectDetails />} />
          </Routes>
        </main>

        {/* Background Noise/Texture (Optional subtle grain) */}
        <div
          className="fixed inset-0 pointer-events-none opacity-[0.02] z-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>
    </Router>
  );
}
