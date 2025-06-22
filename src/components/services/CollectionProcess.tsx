"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function CollectionProcess() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const steps = [
    {
      title: "Door-to-Door Collection",
      description: "Regular scheduled pickups from households and businesses with segregated waste collection."
    },
    {
      title: "Waste Picker Integration",
      description: "Partnerships with informal waste collectors, providing them fair compensation and proper equipment."
    },
    {
      title: "Collection Points",
      description: "Strategically placed collection points in communities for convenient drop-off."
    },
    {
      title: "Transport to MRF",
      description: "Efficient transportation to our Material Recovery Facility for processing."
    }
  ];
  
  return (
    <section ref={ref} id="collection" className="py-16">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Collection & Aggregation</h3>
          <p className="text-muted-foreground mb-8">
            Our comprehensive waste collection network operates across urban areas, 
            creating a reliable and efficient system for plastic and dry waste recovery.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-8 w-8 rounded-full bg-[#f26226] flex items-center justify-center text-white font-medium">
                    {index + 1}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">{step.title}</h4>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image 
              src="https://images.pexels.com/photos/2682683/pexels-photo-2682683.jpeg" 
              alt="Waste collection process"
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