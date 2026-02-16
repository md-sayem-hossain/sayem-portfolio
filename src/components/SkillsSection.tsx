import React from 'react';
import { BentoCard } from './ui/BentoCard';
import { LayersIcon, DatabaseIcon, CpuIcon, GlobeIcon } from 'lucide-react';
export function SkillsSection() {
  const skillCategories = [
  {
    name: 'Frontend',
    icon: <LayersIcon size={18} />,
    skills: [
    'React',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Framer Motion',
    'Three.js',
    'Redux'] 
  },
  {
    name: 'Backend',
    icon: <DatabaseIcon size={18} />,
    skills: [
    'Node.js',
    'Python',
    'Go',
    'PostgreSQL',
    'Redis',
    'GraphQL',
    'FastAPI']

  },
  {
    name: 'DevOps',
    icon: <CpuIcon size={18} />,
    skills: ['Docker', 'AWS', 'Kubernetes', 'CI/CD', 'Terraform', 'Linux']
  },
  {
    name: 'Design',
    icon: <GlobeIcon size={18} />,
    skills: [
    'Figma',
    'UI/UX',
    'Prototyping',
    'Design Systems',
    'Accessibility']

  }];

  return (
    <section className="py-16" id="skills">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-purple-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Skills & Technologies
        </h2>
      </div>

      <BentoCard className="p-8 md:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillCategories.map((category, idx) =>
          <div key={category.name} className="space-y-4">
              <div className="flex items-center gap-3 text-white mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) =>
              <span
                key={skill}
                className="px-4 py-2 text-sm text-zinc-300 bg-[#1a1a1f] border border-[#1f1f23] rounded-full hover:border-blue-500/50 hover:text-white hover:bg-blue-500/5 transition-all duration-300 cursor-default">

                    {skill}
                  </span>
              )}
              </div>
            </div>
          )}
        </div>
      </BentoCard>
    </section>);

}