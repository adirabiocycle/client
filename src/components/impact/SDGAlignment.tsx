"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SDGCardProps {
  number: string;
  title: string;
  description: string;
  color: string;
}

function SDGCard({ number, title, description, color }: SDGCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm border-l-4" style={{ borderColor: color }}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm" style={{ backgroundColor: color }}>
          {number}
        </div>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

export default function SDGAlignment() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const sdgs = [
    {
      number: "8",
      title: "Decent Work and Economic Growth",
      description: "Creating dignified employment for waste collectors and developing the waste management sector.",
      color: "#8F1838"
    },
    {
      number: "11",
      title: "Sustainable Cities and Communities",
      description: "Building cleaner, healthier urban environments through effective waste management systems.",
      color: "#F99D26"
    },
    {
      number: "12",
      title: "Responsible Consumption and Production",
      description: "Promoting circular economy principles and sustainable resource management.",
      color: "#CF8D2A"
    },
    {
      number: "13",
      title: "Climate Action",
      description: "Reducing greenhouse gas emissions associated with improper waste disposal and landfilling.",
      color: "#48773E"
    },
    {
      number: "14",
      title: "Life Below Water",
      description: "Preventing plastic pollution in waterways and protecting aquatic ecosystems.",
      color: "#007DBC"
    },
    {
      number: "17",
      title: "Partnerships for the Goals",
      description: "Collaborating with stakeholders across sectors to create sustainable waste management solutions.",
      color: "#183668"
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">SDG Alignment</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto">
          Our work directly contributes to multiple Sustainable Development Goals (SDGs), 
          supporting global efforts for a more sustainable and equitable world.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sdgs.map((sdg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
          >
            <SDGCard {...sdg} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}