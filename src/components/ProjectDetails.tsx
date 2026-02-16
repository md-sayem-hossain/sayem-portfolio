import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BentoCard } from './ui/BentoCard';
import { ArrowUpRightIcon , ChevronLeftIcon, GithubIcon } from 'lucide-react';
import { featuredProjects } from './ProjectsSection'; // import project list

export function ProjectDetails() {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  const project = featuredProjects.find(p => p.title === decodeURIComponent(title || ''));

  if (!project) {
    return (
      <div className="p-8 text-white">
        <h2 className="text-3xl font-bold mb-4">Project not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-colors"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <section className="py-32 max-w-5xl mx-auto relative">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

       <button
      onClick={() => navigate(-1)}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors" style={{marginBottom: '1em'}}
    >
      <ChevronLeftIcon size={20} />
      <span>Back</span>
    </button>

      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white">{project.title}</h1>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg bg-white/5 border border-white/10 text-zinc-400 hover:text-white transition-colors"
        >
          <GithubIcon size={20} />
        </a>
      </div>

      <p className="text-zinc-400 text-lg md:text-xl mb-6">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map(tag => (
          <span
            key={tag}
            className="px-3 py-1 text-xs font-medium text-zinc-400 bg-zinc-900/50 border border-zinc-800 rounded-full transition-colors hover:bg-blue-500 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Images */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {project.images.map((img, i) => (
          <BentoCard
            key={i}
            className="overflow-hidden p-0 relative group cursor-pointer"
          >
            <img
              src={img}
              alt={`${project.title} screenshot ${i + 1}`}
              className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity`}
            />
            <ArrowUpRightIcon className="absolute top-2 right-2 text-white opacity-70 group-hover:opacity-100 transition-opacity" size={20} />
          </BentoCard>
        ))}
      </div>

      {/* Detailed Description */}
      {project.details && (
        <div className="bg-zinc-900/30 p-6 rounded-lg border border-zinc-800">
          <h2 className="text-2xl font-bold text-white mb-2">Details</h2>
          <p className="text-zinc-400">{project.details}</p>
        </div>
      )}
      
    </section>
  );
}
