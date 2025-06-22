"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from '@/components/ui/count-up';
import { Recycle } from 'lucide-react';

export default function WasteRecycledMeter() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const totalWaste = 500; // Total waste in tonnes
  const targetWaste = 1000; // Target waste in tonnes
  const percentage = (totalWaste / targetWaste) * 100;

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#86bc40]/10 mb-6">
            <Recycle className="h-10 w-10 text-[#86bc40]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Waste Recycled</h2>
          <p className="text-lg text-muted-foreground">
            Tracking our progress towards a cleaner Bihar
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-2xl mx-auto"
        >
          <div className="flex items-center justify-center mb-8">
            <div className="text-6xl md:text-7xl font-bold text-[#86bc40]">
              <CountUp end={totalWaste} duration={2} />
            </div>
            <div className="text-3xl md:text-4xl font-bold ml-2">
              tonnes
            </div>
          </div>

          <div className="h-8 bg-[#86bc40]/10 rounded-full overflow-hidden mb-4">
            <motion.div
              initial={{ width: 0 }}
              animate={inView ? { width: `${percentage}%` } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-full bg-[#86bc40] rounded-full"
            />
          </div>

          <div className="flex justify-between text-sm text-muted-foreground">
            <span>0 tonnes</span>
            <span>{targetWaste} tonnes (Target)</span>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUp end={300} duration={2} />+
              </div>
              <p className="text-muted-foreground">Tonnes Processed</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">
                <CountUp end={200} duration={2} />+
              </div>
              <p className="text-muted-foreground">Tonnes Recycled</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}