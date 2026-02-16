import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
 

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
  glowColor?: string;
}



export function BentoCard({
  children,
  className,
  delay = 0,
  hover = true,
  glowColor = 'rgba(59,130,246,0.15)'
}: BentoCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.5,
        delay,
        ease: 'easeOut'
      }}
      whileHover={
      hover ?
      {
        y: -4,
        boxShadow: `0 0 20px ${glowColor}`,
        borderColor: 'rgba(59,130,246,0.5)'
      } :
      undefined
      }
      className={cn(
        'bg-[#111113] border border-[#1f1f23] rounded-2xl overflow-hidden relative',
        'transition-colors duration-300',
        className
      )}>

      {children}
    </motion.div>);

}