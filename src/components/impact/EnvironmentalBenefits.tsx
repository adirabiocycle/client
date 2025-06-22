"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export default function EnvironmentalBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const benefits = [
    {
      label: "Plastic Pollution Reduction",
      value: 75,
      color: "bg-[#f26226]"
    },
    {
      label: "CO₂ Emissions Saved",
      value: 60,
      color: "bg-[#86bc40]"
    },
    {
      label: "Water Bodies Protected",
      value: 80,
      color: "bg-[#099fda]"
    }
  ];
  
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold mb-4">Environmental Benefits</h2>
        <p className="text-muted-foreground mb-6">
          Our waste recovery and recycling efforts create significant positive impacts 
          on the environment, contributing to cleaner communities and ecosystems in Bihar.
        </p>
        
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span>{benefit.label}</span>
                <span className="font-medium">{benefit.value}%</span>
              </div>
              <Progress 
                value={benefit.value} 
                className={`h-2 bg-muted ${benefit.color}`} 
              />
            </motion.div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground">
          These metrics represent our progress toward our environmental goals 
          in our operational areas, compared to baseline measurements before our intervention.
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl"
      >
        <Image 
          src="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Environmental impact of waste management"
          className="object-cover"
        />
      </motion.div>
    </div>
  );
}