"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '@/components/ui/count-up';

interface StatProps {
  value: number;
  label: string;
  suffix?: string;
}

function Stat({ value, label, suffix = "" }: StatProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold mb-2">
        <CountUp end={value} duration={2} suffix={suffix} />
      </div>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
}

export default function CompanyStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Stat value={200} label="Tonnes of Waste Recovered" suffix="+" />
        <Stat value={20} label="Waste Collectors Empowered" suffix="+" />
        <Stat value={20} label="Community Programs" suffix="+" />
        <Stat value={5} label="Recycling Partnerships" />
      </div>
    </motion.div>
  );
}