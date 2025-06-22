"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function Vision() {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">Our Vision & Mission</h2>
          
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-2">Vision</h3>
            <p className="text-muted-foreground">
              A Bihar where waste is viewed as a resource, creating environmental, social, 
              and economic value through circular economy principles.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2">Mission</h3>
            <p className="text-muted-foreground mb-4">
              To build an integrated plastic and dry waste recovery ecosystem in Bihar through 
              a scalable, tech-enabled, and decentralized model that:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>- Reduces plastic pollution in the environment</li>
              <li>- Creates dignified livelihoods for waste collectors</li>
              <li>- Promotes circular economy principles</li>
              <li>- Engages communities in responsible waste management</li>
              <li>- Provides transparent impact reporting for stakeholders</li>
            </ul>
          </div>
        </div>
        
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.pexels.com/photos/7299586/pexels-photo-7299586.jpeg" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="AdiRa BioCycle vision"
            className="object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}