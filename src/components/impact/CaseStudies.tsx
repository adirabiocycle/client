"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const caseStudies = [
    {
      id: "community",
      title: "Community Waste Management Program",
      location: "Patliputra Colony, Patna",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg",
      challenge: "High levels of plastic waste pollution in residential areas with limited waste collection infrastructure.",
      solution: "Implemented a decentralized waste collection system with community collection points and waste picker integration.",
      impact: "75% reduction in visible plastic waste, 25 waste collectors empowered, and improved community cleanliness."
    },
    {
      id: "business",
      title: "Corporate Waste Management Partnership",
      location: "Business District, Patna",
      image: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg",
      challenge: "Multiple businesses generating significant amounts of packaging waste with no proper recycling system.",
      solution: "Developed a tailored collection program for the business district with segregation training and regular pickups.",
      impact: "120 tonnes of waste diverted from landfills annually, with transparent impact reporting for ESG compliance."
    },
    {
      id: "school",
      title: "School Awareness and Collection Program",
      location: "Education Zone, Patna",
      image: "https://images.pexels.com/photos/8846988/pexels-photo-8846988.jpeg",
      challenge: "Limited awareness about waste management among students and improper disposal of waste in school premises.",
      solution: "Educational workshops, waste segregation system implementation, and student-led collection initiatives.",
      impact: "15 schools engaged, 2,000+ students educated, and 90% improvement in waste segregation at source."
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold mb-8 text-center">Case Studies</h2>
      
      <Tabs defaultValue="community" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="community">Community</TabsTrigger>
          <TabsTrigger value="business">Business</TabsTrigger>
          <TabsTrigger value="school">Education</TabsTrigger>
        </TabsList>
        
        {caseStudies.map((caseStudy) => (
          <TabsContent key={caseStudy.id} value={caseStudy.id}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background rounded-lg p-6 shadow-sm">
              <div className="relative h-64 md:h-full w-full rounded-lg overflow-hidden">
                <Image 
                  src={caseStudy.image} 
                  alt={caseStudy.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">{caseStudy.title}</h3>
                <p className="text-muted-foreground">{caseStudy.location}</p>
                
                <div>
                  <h4 className="font-medium mb-1">Challenge:</h4>
                  <p className="text-muted-foreground">{caseStudy.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Solution:</h4>
                  <p className="text-muted-foreground">{caseStudy.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-1">Impact:</h4>
                  <p className="text-muted-foreground">{caseStudy.impact}</p>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </motion.div>
  );
}