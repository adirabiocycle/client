"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function PartnerSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const partners = [
    {
      name: "Bihar Urban Development Agency",
      logo: "https://images.pexels.com/photos/416405/pexels-photo-416405.jpeg",
      type: "Government",
      description: "Strategic partnership for urban waste management initiatives"
    },
    {
      name: "Patna Municipal Corporation",
      logo: "https://images.pexels.com/photos/327533/pexels-photo-327533.jpeg",
      type: "Government",
      description: "Collaboration for city-wide waste collection and processing"
    },
    {
      name: "EcoVentures Inc.",
      logo: "https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg",
      type: "Corporate",
      description: "Technology partner for waste tracking and analytics"
    },
    {
      name: "GreenTech Solutions",
      logo: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      type: "Corporate",
      description: "Recycling technology and infrastructure support"
    }
  ];
  
  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Partners</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We collaborate with government bodies, corporations, and organizations to create 
            a comprehensive waste management ecosystem in Bihar.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="bg-white dark:bg-black rounded-lg p-6 border border-border hover:border-primary transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-16 w-16 rounded-lg overflow-hidden">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{partner.name}</h3>
                  <p className="text-sm text-muted-foreground">{partner.type}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{partner.description}</p>
              <Button variant="ghost" className="group" asChild>
                <a href="#" className="flex items-center">
                  Learn more 
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <a href="/partners">
              View All Partners <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}