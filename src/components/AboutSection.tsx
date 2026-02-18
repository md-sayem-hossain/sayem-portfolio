import React from 'react';
import { BentoCard } from './ui/BentoCard';
export function AboutSection() {
  return (
    <section className="py-16" id="about">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-green-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          About Me
        </h2>
      </div>

      {/* Gradient Border Wrapper */}
      <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 blur-lg opacity-20" />

        <BentoCard
          className="h-full bg-[#09090b] border-none !m-0"
          hover={false}>

          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Building digital products, brands, and experiences.
              </h3>
              <div className="space-y-4 text-zinc-400 leading-relaxed">
                <p>
                  I'm a Full Stack Developer with over 5 years of experience in building scalable web applications. My journey started with simple HTML pages and evolved into complex distributed systems.
                </p>
                <p>
                  I specialize in Asp.Net, C#, MSSQL & Oracle. I'm always exploring new technologies. I
                  believe in writing clean, maintainable code and designing intuitive user interfaces that solve real problems.
                </p>
                <p>
                  When I'm not coding, you can find me exploring the outdoors, watchine sci-fi movies, or tinkering with new AI technologies.
                </p>
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-zinc-800 to-zinc-900 border border-zinc-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20" />
                <span className="text-6xl font-bold text-zinc-700 select-none">
                  AC
                </span>
              </div>

              {/* Decorative elements around avatar */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </BentoCard>
      </div>
    </section>);

}