import React, { useEffect, useState } from "react";
import { BentoCard } from "./ui/BentoCard";
import { ArrowUpRightIcon, GithubIcon, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// ✅ Export so ProjectDetails can still use it
export let featuredProjects: any[] = [];

export function ProjectsSection() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("projects/projects.json")
      .then((res) => res.json())
      .then((data) => {
        // Only pick required fields + map fullDescription → details data .slice(0, 6)
        const filtered = data.slice(0, 6).map((project: any) => ({
          title: project.title,
          description: project.description,
          details: project.fullDescription,
          tags: project.tags,
          color: project.color,
          large: project.large,
          github: project.github,
          liveLink: project.liveLink,
          images: project.images,
        }));

        featuredProjects = filtered;
        setProjects(filtered);
      })
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section className="py-16" id="projects">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Featured Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {projects.map((project, index) => (
          <BentoCard
            key={project.title}
            delay={index * 0.1}
            className={`group relative flex flex-col justify-between p-6 md:p-8 ${
              project.large
                ? "md:col-span-2 min-h-[300px]"
                : "col-span-1 min-h-[240px]"
            }`}
          >
            {/* Background Image */}
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
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                      title="View Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                  )}

                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
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
                {project.tags?.map((tag: string) => (
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

      <Link
        to="/MoreProjects"
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
        style={{ margin: "auto", marginTop: "2em", width: "9em" }}
      >
        <ExternalLink size={20} />
        View More
      </Link>
    </section>
  );
}
