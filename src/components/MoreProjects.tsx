import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon, GithubIcon, ExternalLink } from "lucide-react";

/* =========================
   TYPES
========================= */ 
interface ProjectStats {
  accuracy: string;
  speed: string;
  scale: string;
}

interface Project {
  title: string;
  description: string;
  category: string;
  tags: string[];
  stats: ProjectStats;
  fullDescription: string;
  languages?: string[];
  features?: string[];
  images?: string[];
  github?: string;
  liveLink?: string;
}

/* =========================
   COMPONENT
========================= */

export default function MoreProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  // 🔥 Load projects from JSON
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("projects/projects.json");
        const data: Project[] = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Failed to load projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // 🔥 Auto-detect categories
  const tabs = useMemo<string[]>(() => {
    const categories = new Set<string>();
    projects.forEach((project) => {
      if (project.category) categories.add(project.category);
    });
    return ["All", ...Array.from(categories)];
  }, [projects]);

  // 🔥 Dynamic filtering
  const filteredProjects = useMemo<Project[]>(() => {
    if (activeTab === "All") return projects;
    return projects.filter((project) => project.category === activeTab);
  }, [activeTab, projects]);

  // Close modal with ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden px-6 md:px-20 py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section
        className="text-center mb-28 relative z-10"
        style={{ marginTop: "5em" }}
      >
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          AI Systems & Intelligent Products
        </h1>
        <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-lg">
          Building high-performance AI solutions and scalable web systems.
        </p>
      </section>

      {/* Loading Spinner */}
      {loading ? (
        <div className="flex justify-center items-center py-32">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-10 h-10 border-2 border-blue-500 border-t-transparent rounded-full"
          />
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="relative flex justify-center gap-12 mb-8 border-b border-white/[0.08] z-10">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative pb-4 text-sm text-zinc-500 hover:text-white"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-[1px] h-[2px] bg-gradient-to-r from-blue-500 to-purple-500"
                  />
                )}
                <span className={activeTab === tab ? "text-white" : ""}>
                  {tab}
                </span>
              </button>
            ))}
          </div>
          {/* Project Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-12 relative z-10"
            >
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6 }}
                  onClick={() => setSelectedProject(project)}
                  className="group p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-2xl transition-all hover:border-white/[0.2] cursor-pointer"
                >
                  {/* Title + Icons */}
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl font-medium tracking-tight">
                      {project.title}
                    </h3>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-500 hover:text-white transition"
                        >
                          <GithubIcon size={18} />
                        </a>
                      )}
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-500 hover:text-blue-400 transition"
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <ArrowUpRightIcon className="text-zinc-600 group-hover:text-white transition" />
                    </div>
                  </div>

                  <p className="text-zinc-500 mb-8 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 text-sm mb-8">
                    <div>
                      <p className="text-blue-400 font-medium">
                        {project.stats.accuracy}
                      </p>
                      <p className="text-zinc-600">Accuracy</p>
                    </div>
                    <div>
                      <p className="text-purple-400 font-medium">
                        {project.stats.speed}
                      </p>
                      <p className="text-zinc-600">Speed</p>
                    </div>
                    <div>
                      <p className="text-emerald-400 font-medium">
                        {project.stats.scale}
                      </p>
                      <p className="text-zinc-600">Scale</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </>
      )}

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-start justify-center z-50 p-6 pt-20 overflow-y-auto"
            >
              <div
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-3xl p-10 relative"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-zinc-500 hover:text-white transition"
                >
                  ✕
                </button>

                <h2 className="text-3xl font-semibold mb-6 tracking-tight">
                  {selectedProject.title}
                </h2>

                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div>
                    <p className="text-blue-400 font-medium text-lg">
                      {selectedProject.stats?.accuracy}
                    </p>
                    <p className="text-zinc-600 text-sm">Accuracy</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-medium text-lg">
                      {selectedProject.stats?.speed}
                    </p>
                    <p className="text-zinc-600 text-sm">Performance</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-medium text-lg">
                      {selectedProject.stats?.scale}
                    </p>
                    <p className="text-zinc-600 text-sm">Scale</p>
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-sm uppercase text-zinc-500 mb-4">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.languages?.map((lang: string) => (
                      <span
                        key={lang}
                        className="px-3 py-1 text-sm rounded-full bg-white/[0.05] border border-white/[0.08] text-zinc-300"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h3 className="text-sm uppercase text-zinc-500 mb-4">
                    Key Features
                  </h3>
                  <ul className="space-y-3 text-zinc-400">
                    {selectedProject.features?.map((feature: string) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {selectedProject.images?.map((img: string, index: number) => (
                    <img
                      key={index}
                      src={img}
                      alt={`project-${index}`}
                      className="rounded-xl border border-white/[0.08]"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
