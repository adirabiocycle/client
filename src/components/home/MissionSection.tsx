"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Separator } from '@/components/ui/separator';
import { RecycleIcon, RefreshCcw, Sparkles } from 'lucide-react';

export default function MissionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            Our Mission
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-muted-foreground mb-8">
            AdiRa BioCycle is committed to building an integrated plastic and dry waste recovery 
            ecosystem in Bihar through a scalable, tech-enabled, and decentralized model.
          </motion.p>
          
          <Separator className="my-12" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-[#f26226]/10 flex items-center justify-center mb-6">
                <RecycleIcon className="h-8 w-8 text-[#f26226]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Reduce Waste</h3>
              <p className="text-muted-foreground">
                Promoting circular economy principles by diverting waste from landfills and waterways.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-[#86bc40]/10 flex items-center justify-center mb-6">
                <RefreshCcw className="h-8 w-8 text-[#86bc40]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Create Livelihoods</h3>
              <p className="text-muted-foreground">
                Empowering waste collectors and creating sustainable employment opportunities.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <div className="h-16 w-16 rounded-full bg-[#099fda]/10 flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-[#099fda]" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Drive Innovation</h3>
              <p className="text-muted-foreground">
                Leveraging technology to optimize waste recovery and create transparent systems.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}