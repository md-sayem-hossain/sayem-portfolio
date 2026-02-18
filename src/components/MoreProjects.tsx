import React, { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRightIcon, Search } from "lucide-react";

/* =========================
   PROJECT DATA
========================= */

const projects = [
  {
    title: "Plant Leaf Disease AI",
    description:
      "Deep learning system detecting plant diseases in real-time for smart agriculture.",
    category: "AI",
    tags: ["Python", "TensorFlow", "OpenCV"],
    stats: {
      accuracy: "94%",
      speed: "120ms",
      scale: "2K+ samples",
    },
    fullDescription:
      "This AI model uses CNN architectures trained on augmented agricultural datasets to detect leaf diseases with high precision. The system is optimized for mobile deployment and edge devices.",
    languages: ["Python", "TensorFlow", "Keras", "OpenCV"],
    features: [
      "Real-time inference",
      "Edge device optimized",
      "Data augmentation pipeline",
      "Transfer learning (ResNet)",
    ],
    images: [
      "https://via.placeholder.com/800x400",
      "https://via.placeholder.com/800x400",
    ],
  },
  {
    title: "Sign Language Recognition",
    description:
      "Lightweight ML-based Malaysian Sign Language recognition using MediaPipe keypoints.",
    category: "AI",
    tags: ["MediaPipe", "SVM", "OpenCV"],
    stats: {
      accuracy: "91%",
      speed: "Real-time",
      scale: "50+ words",
    },
    fullDescription:
      "Extracts hand keypoints using MediaPipe and applies machine learning classifiers (SVM/Random Forest) for efficient real-time recognition. Designed for low-resource deployment.",
    languages: ["MediaPipe", "SVM", "OpenCV"],
    features: [
      "Real-time recognition",
      "Low-latency",
      "Custom dataset support",
    ],
    images: ["https://via.placeholder.com/800x400"],
  },
  {
    title: "Hospital Management System",
    description:
      "Scalable web system managing patients, billing, and appointments.",
    category: "Web",
    tags: ["ASP.NET", "MSSQL"],
    stats: {
      accuracy: "Production",
      speed: "Optimized",
      scale: "Multi-role",
    },
    fullDescription:
      "Multi-role ASP.NET system with authentication, appointment scheduling, billing modules, and optimized database queries using Entity Framework.",
    languages: ["ASP.NET", "MSSQL", "EntityFramework"],
    features: ["Multi-role system", "Appointment scheduling", "Billing module"],
    images: ["https://via.placeholder.com/800x400"],
  },
];

const tabs = ["All", "AI", "Web"];

/* =========================
   COMPONENT
========================= */

export default function MoreProjects() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  // Close modal with ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchTab = activeTab === "All" || project.category === activeTab;

      const matchSearch =
        search === "" ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(search.toLowerCase()),
        );

      return matchTab && matchSearch;
    });
  }, [activeTab, search]);

  return (
    <div className="relative min-h-screen bg-[#0a0a0f] text-white overflow-hidden px-6 md:px-20 py-24">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-blue-500/20 blur-[160px] rounded-full -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[160px] rounded-full pointer-events-none" />

      {/* HERO */}
      <section className="text-center mb-28 relative z-10">
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
          AI Systems & Intelligent Products
        </h1>
        <p className="text-zinc-500 mt-6 max-w-2xl mx-auto text-lg">
          Building high-performance AI solutions and scalable web systems.
        </p>
      </section>

      {/* SEARCH */}
      <div className="max-w-md mx-auto mb-20 relative z-10">
        <Search className="absolute left-4 top-4 text-zinc-600" size={18} />
        <input
          type="text"
          placeholder="Search tech..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl focus:outline-none focus:ring-1 focus:ring-blue-500"
        />
      </div>

      {/* TABS */}
      <div className="relative flex justify-center gap-12 mb-24 border-b border-white/[0.08] z-10">
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
            <span className={activeTab === tab ? "text-white" : ""}>{tab}</span>
          </button>
        ))}
      </div>

      {/* PROJECT GRID (Cards Unchanged) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab + search}
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
              {/* Title */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-medium tracking-tight">
                  {project.title}
                </h3>
                <ArrowUpRightIcon className="text-zinc-600 group-hover:text-white transition" />
              </div>

              {/* Description */}
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

      {/* ================= MODAL ================= */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
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
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 text-zinc-500 hover:text-white transition"
                >
                  ✕
                </button>

                {/* Title */}
                <h2 className="text-3xl font-semibold mb-6 tracking-tight">
                  {selectedProject.title}
                </h2>

                {/* Extended Description */}
                <p className="text-zinc-400 mb-8 leading-relaxed">
                  {selectedProject.fullDescription}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-10">
                  <div>
                    <p className="text-blue-400 font-medium text-lg">
                      {selectedProject.stats.accuracy}
                    </p>
                    <p className="text-zinc-600 text-sm">Accuracy</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-medium text-lg">
                      {selectedProject.stats.speed}
                    </p>
                    <p className="text-zinc-600 text-sm">Performance</p>
                  </div>
                  <div>
                    <p className="text-emerald-400 font-medium text-lg">
                      {selectedProject.stats.scale}
                    </p>
                    <p className="text-zinc-600 text-sm">Scale</p>
                  </div>
                </div>

                {/* Languages */}
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

                {/* Features */}
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

                {/* Images */}
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
