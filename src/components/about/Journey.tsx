"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface MilestoneProps {
  year: string;
  title: string;
  description: string;
}

function Milestone({ year, title, description }: MilestoneProps) {
  return (
    <div className="relative pl-8 pb-8 border-l border-border">
      <div className="absolute w-4 h-4 bg-primary rounded-full -left-2 mt-1.5"></div>
      <div className="text-sm font-medium text-muted-foreground mb-1">{year}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function Journey() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const milestones = [
    {
      year: "2023",
      title: "Concept Development",
      description: "Initial research and development of the AdiRa BioCycle concept, focusing on Bihar's waste management challenges."
    },
    {
      year: "2024",
      title: "Pre-operational Phase",
      description: "Building partnerships, developing technology solutions, and preparing for official registration and compliance."
    },
    {
      year: "2025",
      title: "Pilot Launch",
      description: "Setting up our first Material Recovery Facility (MRF) in Patna as a pilot and proof of concept."
    },
    {
      year: "2026",
      title: "Expansion Plans",
      description: "Planned expansion to other cities in Bihar, with a focus on creating a replicable model for underserved regions."
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
      
      <div className="max-w-3xl mx-auto">
        {milestones.map((milestone, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
          >
            <Milestone {...milestone} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}