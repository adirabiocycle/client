"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Check } from 'lucide-react';

export default function SocialBenefits() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const benefits = [
    "Dignified livelihoods for waste collectors with fair wages and better working conditions",
    "Improved health outcomes through reduced waste-related diseases in communities",
    "Skill development and training for waste sector workers",
    "Increased awareness about waste management and environmental issues",
    "Community empowerment through participation in waste management initiatives",
    "Creation of green jobs in the recycling and waste management sector"
  ];
  
  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl lg:order-1 order-2"
      >
        <Image 
          src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg" 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          alt="Social impact of waste management"
          className="object-cover"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="space-y-6 lg:order-2 order-1"
      >
        <h2 className="text-3xl font-bold mb-4">Social Benefits</h2>
        <p className="text-muted-foreground mb-6">
          Our work creates positive social impacts for waste collectors, communities, 
          and stakeholders across the waste management value chain.
        </p>
        
        <div className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="flex items-start gap-3"
            >
              <Check className="h-5 w-5 text-[#86bc40] mt-0.5 flex-shrink-0" />
              <p>{benefit}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}