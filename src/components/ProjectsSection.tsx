import React from "react";
import { BentoCard } from "./ui/BentoCard";
import { ArrowUpRightIcon, GithubIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom"; 

// ✅ Export projects array so it can be used in ProjectDetails
export const featuredProjects = [
  {
    title: "Quantum Dashboard",
    description:
      "Real-time analytics platform for high-frequency trading data visualization.",
    details:
      "Built a dashboard to visualize trading data with real-time charts and analytics. Supports live data streams and interactive charts for decision making.",
    tags: ["ASP.NET", "MSSQL", "Session", "EntityFramework"],
    color: "from-blue-500/20 to-cyan-500/20",
    large: true,
    github: "http://sayem-qrcodegenerator.vercel.app/",
    images: ["/images/quantum1.png", "/images/quantum2.png"],
  },
  {
    title: "QR Code Generator",
    description:
      "AI-powered API gateway with automated rate limiting and threat detection.",
    details:
      "Implemented secure API gateway with automated rate limiting, monitoring, and threat detection using gRPC and Redis caching.",
    tags: ["HTML", "CSS", "Redis"],
    color: "from-purple-500/20 to-pink-500/20",
    large: true,
    github: "http://sayem-qrcodegenerator.vercel.app/",
    images: ["/images/qr_code_generator1.png"],
  },
  {
    title: "Vortex UI Kit",
    description: "Component library for building spatial interfaces.",
    details:
      "Created reusable UI components in TypeScript and TailwindCSS for faster front-end development and consistent design.",
    tags: ["TypeScript", "Tailwind"],
    large: false,
    github: "#",
    images: ["/images/vortex1.png"],
  },
  {
    title: "Echo Chat",
    description: "E2E encrypted messaging for enterprise teams.",
    details:
      "Developed a real-time messaging app with end-to-end encryption, group chats, and notifications using Node.js and Socket.io.",
    tags: ["Node.js", "Socket.io"],
    large: false,
    github: "#",
    images: ["/images/echo1.png"],
  },
  {
    title: "Prisma Cloud",
    description: "Serverless database management tool.",
    details:
      "Built a serverless platform for managing databases with Rust and WebAssembly, supporting scalable and fast queries.",
    tags: ["Rust", "WASM"],
    large: false,
    github: "#",
    images: ["/images/prisma1.png"],
  },
  {
    title: "Zenith Notes",
    description: "Markdown editor with bi-directional linking.",
    details:
      "Created a desktop note-taking app using Electron and React, supporting Markdown, links between notes, and offline storage.",
    tags: ["Electron", "React"],
    large: false,
    github: "#",
    images: ["/images/zenith1.png"],
  },
];

export function ProjectsSection() {
  return (
    <section className="py-16" id="projects">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {featuredProjects.map((project, index) => (
          <BentoCard
            key={project.title}
            delay={index * 0.1}
            className={`group relative flex flex-col justify-between p-6 md:p-8 ${
              project.large
                ? "md:col-span-2 min-h-[300px]"
                : "col-span-1 min-h-[240px]"
            }`}
          >
            {/* 🖼️ NEW: Background Image Preview on Hover */}
            {project.images && project.images[0] && (
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-700 ease-in-out grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/60 to-transparent" />
              </div>
            )}
            {project.large && (
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              />
            )}

            <div className="relative z-10 flex flex-col justify-between h-full">
              {/* Top Icons */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                    title="View Source Code"
                  >
                    <GithubIcon size={18} />
                  </a>
                  {/* ✨ ADDED: Live Link Icon if available */}
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-blue-400 hover:bg-white/10 transition-all"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                <Link
                  to={`/project/${encodeURIComponent(project.title)}`}
                  className="text-zinc-500 group-hover:text-white transition-colors"
                >
                  <ArrowUpRightIcon size={20} />
                </Link>
              </div>

              <Link to={`/project/${encodeURIComponent(project.title)}`}>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
              </Link>

              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-full transition-colors hover:bg-blue-500 hover:text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </BentoCard>
        ))}
      </div>
      <Link to="/moreproducts" target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
        style={{ margin: "auto", marginTop: "2em", width: "9em" }}>
          <ExternalLink size={20} /> View More
      </Link> 
    </section>
  );
}
