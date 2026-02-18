import React from "react";
import { BentoCard } from "./ui/BentoCard";
import {
  MapPinIcon,
  CalendarIcon,
  RocketIcon,
  Code2Icon,
  TerminalIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "lucide-react";
import { BsDatabase  } from "react-icons/bs"; 

import { SiReact, SiNodedotjs, SiTypescript, SiPython, SiDotnet, SiAngular } from "react-icons/si";
const techStack = [
  { name: "React", icon: <SiReact className="text-cyan-400" size={20} /> },
  { name: "Node", icon: <SiNodedotjs className="text-green-500" size={20} /> },
  { name: "TS", icon: <SiTypescript className="text-blue-500" size={20} /> },
  { name: "Python", icon: <SiPython className="text-yellow-400" size={20} /> },
  { name: "Dotnet", icon: <SiDotnet className="text-purple-400" size={20} /> },
  { name: "Angular", icon: <SiAngular className="text-red-400" size={20} /> }, 
  { name: "MSSQL", icon: <BsDatabase className="text-purple-400" size={20} /> },
];

export function HeroSection() {
  return (
    <section className="pt-32 pb-16" id="home">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 h-auto md:h-[500px]">
        {/* Main Profile Card - Spans 2 cols, 2 rows on desktop */}
        <BentoCard className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 flex flex-col justify-between p-8 md:p-10 bg-gradient-to-br from-[#111113] to-[#16161a]">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Available for work
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-4">
              Md Sayem Hossain
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light mb-8 max-w-md">
              Full-Stack Developer crafting digital experiences with{" "}
              <span className="text-blue-400 font-medium">precision</span> and{" "}
              <span className="text-purple-400 font-medium">passion</span>.
            </p>
            <div className="flex gap-4">
              <a
                href="http://github.com/md-sayem-hossain" target="blank"
                className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href="https://linkedin.com/in/md-sayem-hossain" target="blank"
                className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <LinkedinIcon size={20} />
              </a>
              <a
                href="mailto:md.sayemhossain.25@gmail.com?subject=Hello%20Sayem&body=I%20found%20your%20portfolio%20and%20want%20to%20connect"
                className="p-2 text-zinc-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
              >
                <MailIcon size={20} />
              </a>
            </div>
          </div>

          {/* Decorative Gradient Orb */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        </BentoCard>

        {/* Stats Card 1 */}
        <BentoCard
          delay={0.1}
          className="col-span-1 p-6 flex flex-col justify-center items-center text-center group"
        >
          <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <CalendarIcon className="text-blue-400" size={24} />
          </div>
          <span className="text-4xl font-bold text-white mb-1">5+</span>
          <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
            Years Experience
          </span>
        </BentoCard>

        {/* Stats Card 2 */}
        <BentoCard
          delay={0.2}
          className="col-span-1 p-6 flex flex-col justify-center items-center text-center group"
        >
          <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <RocketIcon className="text-purple-400" size={24} />
          </div>
          <span className="text-4xl font-bold text-white mb-1">100+</span>
          <span className="text-sm text-zinc-500 uppercase tracking-wider font-medium">
            Projects Shipped
          </span>
        </BentoCard>

        {/* Tech Stack Mini Grid */}
        <BentoCard
          delay={0.3}
          className="col-span-1 md:col-span-2 p-6 flex flex-col justify-center"
        >
          <h3 className="text-zinc-500 text-sm font-medium uppercase tracking-wider mb-6 flex items-center gap-2">
            <Code2Icon size={16} />
            Core Stack
          </h3>
          <div className="grid grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-zinc-700 transition-colors">
                  {tech.icon}
                </div>
                <span className="text-xs text-zinc-500 font-mono">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>
      </div>
    </section>
  );
}
