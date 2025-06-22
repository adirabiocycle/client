"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function CommunityEngagement() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const programs = [
    "Educational workshops in schools and colleges",
    "Community awareness campaigns about waste segregation",
    "Training for waste collectors on safe handling practices",
    "Corporate sustainability programs and workshops",
    "Public events and awareness drives",
    "Collaboration with local NGOs for wider reach"
  ];
  
  return (
    <section ref={ref} id="community" className="py-16 bg-muted">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Community Engagement</h3>
          <p className="text-muted-foreground mb-8">
            We conduct awareness programs and training sessions to educate communities 
            about waste segregation and the importance of recycling.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h4 className="font-semibold text-lg mb-4">Our Community Programs</h4>
            
            <div className="space-y-3">
              {programs.map((program, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#86bc40] flex-shrink-0 mt-0.5" />
                  <p>{program}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image 
              src="https://images.pexels.com/photos/3184396/pexels-photo-3184396.jpeg" 
              alt="Community engagement workshop"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}