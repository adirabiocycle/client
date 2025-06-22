"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function CallToActionSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  return (
    <section ref={ref} className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Building a Circular Future</h2>
            <p className="text-lg text-gray-300">
              Whether you&apos;re a business looking for sustainable waste management solutions,
              a government body seeking partnerships, or an individual interested in our mission,
              we&apos;d love to connect with you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">For Businesses</h3>
              <p className="text-gray-300 mb-6">
                Partner with us for responsible waste management solutions that align with your 
                sustainability goals and ESG requirements.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#f26226]" />
                  <span>Bulk waste collection services</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#f26226]" />
                  <span>Custom recycling solutions</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#f26226]" />
                  <span>Impact reporting for ESG compliance</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-[#f26226] hover:bg-[#e15216]">
                <Link href="/contact?type=business">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-8"
            >
              <h3 className="text-xl font-semibold mb-4">For Government & NGOs</h3>
              <p className="text-gray-300 mb-6">
                Collaborate with us to implement sustainable waste management solutions at the 
                community and city level.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#86bc40]" />
                  <span>Public-private partnership models</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#86bc40]" />
                  <span>Community waste management programs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#86bc40]" />
                  <span>Technical expertise and consulting</span>
                </li>
              </ul>
              <Button asChild size="lg" className="w-full bg-[#86bc40] hover:bg-[#75a738]">
                <Link href="/contact?type=partner">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-gray-300 mb-6">
              Have questions? Reach out to us directly:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Phone className="mr-2 h-4 w-4" /> +91 xxx xxx xxxx
              </Button>
              <Button variant="outline" className="border-white/20 hover:bg-white/10">
                <Mail className="mr-2 h-4 w-4" /> info@adirabiocycle.com
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}