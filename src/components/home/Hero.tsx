"use client";

import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
  
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };
  
  return (
    <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      {/* Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center text-white"
        style={{ opacity, scale, y }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            Building a <span className="text-[#86bc40]">Circular</span> Future
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200">
            AdiRa BioCycle is revolutionizing waste management through integrated 
            plastic and dry waste recovery solutions.
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button asChild size="lg" className="bg-[#f26226] hover:bg-[#e15216] text-white">
            <Link href="/services">
              Our Services
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/20">
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>
        </motion.div>
      </motion.div>
      
      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        onClick={scrollToNextSection}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ArrowDown className="h-8 w-8 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
}