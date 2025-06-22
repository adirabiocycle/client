"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function SortingAndProcessing() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section ref={ref} id="sorting" className="py-16 bg-muted">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold mb-4">Sorting & Processing</h3>
          <p className="text-muted-foreground mb-8">
            Our Material Recovery Facility (MRF) uses a combination of manual and 
            mechanical processes to efficiently sort and process collected waste.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-80 rounded-lg overflow-hidden shadow-lg md:order-1 order-2"
          >
            <Image 
              src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg" 
              alt="Waste sorting and processing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6 md:order-2 order-1"
          >
            <div>
              <h4 className="font-semibold text-lg mb-2">Initial Segregation</h4>
              <p className="text-muted-foreground">
                Waste is initially segregated into main categories: different types of plastics, 
                paper, metal, glass, and other materials.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Quality Control</h4>
              <p className="text-muted-foreground">
                Our trained staff ensures proper classification and removes contaminants 
                to maintain high-quality recovered materials.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Processing</h4>
              <p className="text-muted-foreground">
                Materials are processed according to type - plastics are cleaned, shredded, 
                and prepared for recycling or upcycling.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Packaging for Recyclers</h4>
              <p className="text-muted-foreground">
                Processed materials are compacted and packaged to be sent to our recycling 
                partners for final processing.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}