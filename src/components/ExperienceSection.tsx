import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      title: 'Senior Software Executive',
      company: 'Pacific Jeans Limited, Bangladesh',
      period: '2025 - Present',
      description:
        'Working in In-house projects, Oracle SQL, Oracle report, Oracle EBS',
      icon: <Briefcase size={18} />
    },
    {
      title: 'Research Helper & Web Developer',
      company: 'Taylor\'s University, Malaysia',
      period: '2023 - 2025',
      description:
        'Developed and maintained the APCPCTaylors conference website (apcpctaylors.com) using WordPress and Elementor, including custom forms. Built UI and Android app with Kotlin for Impact Lab Taylors, with experience in machine learning and deep learning.',
      icon: <Briefcase size={18} />
    },
    {
      title: 'Software Executive',
      company: 'Pacific Jeans Limited, Bangladesh',
      period: '2022-2023',
      description:
        'Built and maintained in-house web applications using ASP.NET Core, Web API, MVC, EF, C#, Web Forms, Angular, Node.js, PHP, and MySQL. Developed Oracle reports with Report Builder and SQL, while providing bug fixes and technical support.',
      icon: <Briefcase size={18} /> 
    },
    {
      title: 'Software Engineer',
      company: 'Global Tech Information Systems, Bangladesh',
      period: '2021',
      description:
        'Built full-stack web apps with ASP.NET, Web API, MVC, EF, PHP, and MySQL, featuring responsive UI/UX and custom templates.',
      icon: <Briefcase size={18} /> 
    }
  ];

  return (
    <section className="py-24 relative" id="experience">
      
      {/* Section Header */}
      <div className="flex items-center gap-2 mb-16">
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <h2 className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
          Experience
        </h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* Animated Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/30 to-transparent 
                        -translate-x-1/2 hidden md:block" />

        <div className="space-y-20 md:space-y-32">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                style={{}}
                className={`relative flex flex-col md:flex-row items-center ${
                  isLeft ? 'md:justify-start' : 'md:justify-end'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full 
                                bg-blue-600 flex items-center justify-center text-white 
                                shadow-[0_0_30px_rgba(37,99,235,0.6)] z-10">
                  {exp.icon}
                </div>

                {/* Card */}
                <div
                  className={`w-full md:w-[45%] mt-12 md:mt-0 ${
                    isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="group bg-[#111113]/60 backdrop-blur-md 
                                  border border-[#1f1f23] rounded-2xl p-8
                                  transition-all duration-300
                                  hover:border-blue-500/40
                                  hover:shadow-[0_0_40px_rgba(37,99,235,0.15)]">

                    <div className="flex justify-between items-start flex-wrap gap-3">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.title}
                      </h3>

                      <span className="text-xs text-zinc-400 bg-zinc-800 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-blue-400 text-sm mt-2">
                      {exp.company}
                    </p>

                    <p className="text-zinc-400 mt-5 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
