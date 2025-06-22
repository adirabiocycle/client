"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Server, BarChart3, Shield } from 'lucide-react';

interface TechFeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function TechFeature({ icon, title, description }: TechFeatureProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-sm">
      <div className="p-3 rounded-full bg-[#099fda]/10 mb-4">
        {icon}
      </div>
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

export default function TechnologySolutions() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const features = [
    {
      icon: <Smartphone className="h-6 w-6 text-[#099fda]" />,
      title: "Mobile App for Collectors",
      description: "Enables waste collectors to log collections, track their work, and receive payments efficiently."
    },
    {
      icon: <Server className="h-6 w-6 text-[#099fda]" />,
      title: "Waste Traceability System",
      description: "Tracks waste from collection to recycling, ensuring transparency and accountability."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-[#099fda]" />,
      title: "Analytics Dashboard",
      description: "Provides real-time insights into waste collection, processing, and environmental impact."
    },
    {
      icon: <Shield className="h-6 w-6 text-[#099fda]" />,
      title: "ESG Reporting System",
      description: "Generates detailed environmental impact reports for corporate partners and stakeholders."
    }
  ];
  
  return (
    <section ref={ref} id="technology" className="py-16">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Technology Solutions</h3>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Our tech-enabled waste management system ensures traceability, accountability, 
            and efficient operations throughout the waste value chain.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <TechFeature {...feature} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}