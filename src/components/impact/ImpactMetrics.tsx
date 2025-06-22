"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '@/components/ui/count-up';
import { Trash2, Recycle, Users, ThumbsUp } from 'lucide-react';

interface MetricCardProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  label: string;
  description: string;
}

function MetricCard({ icon, value, suffix = '', label, description }: MetricCardProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary">
          {icon}
        </div>
        <div>
          <div className="text-3xl font-bold mb-1">
            <CountUp end={value} duration={2} suffix={suffix} />
          </div>
          <h3 className="font-semibold mb-2">{label}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function ImpactMetrics() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const metrics = [
    {
      icon: <Trash2 className="h-6 w-6" />,
      value: 500,
      suffix: '+',
      label: 'Tonnes of Waste Recovered',
      description: 'Plastic and dry waste diverted from landfills and waterways, preventing environmental pollution.'
    },
    {
      icon: <Recycle className="h-6 w-6" />,
      value: 300,
      suffix: '+',
      label: 'Tonnes Recycled',
      description: 'Waste materials successfully recycled and reintroduced into the circular economy.'
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: 100,
      suffix: '+',
      label: 'Waste Collectors Empowered',
      description: 'Informal waste collectors provided with fair compensation, equipment, and dignified working conditions.'
    },
    {
      icon: <ThumbsUp className="h-6 w-6" />,
      value: 20,
      suffix: '+',
      label: 'Community Programs',
      description: 'Educational workshops and awareness campaigns conducted to promote responsible waste management.'
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
          >
            <MetricCard {...metric} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}