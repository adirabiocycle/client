"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Recycle, Users, Database, LineChart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceTabProps {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  features: string[];
  isActive: boolean;
  onClick: () => void;
  color: string;
}

function ServiceTab({  title, icon, isActive, onClick, color }: ServiceTabProps) {
  return (
    <div
      className={cn(
        "cursor-pointer p-4 border rounded-lg transition-all duration-300",
        isActive 
          ? `border-2 border-${color} shadow-md` 
          : "border-border hover:border-muted-foreground"
      )}
      onClick={onClick}
    >
      <div className="flex items-center gap-3">
        <div className={`h-10 w-10 rounded-full bg-${color}/10 flex items-center justify-center`}>
          {icon}
        </div>
        <h3 className={cn(
          "font-semibold text-lg",
          isActive ? `text-${color}` : "text-foreground"
        )}>
          {title}
        </h3>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("collection");
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const services = [
    {
      id: "collection",
      title: "Collection & Segregation",
      icon: <Recycle className="h-6 w-6 text-[#f26226]" />,
      description: "Our comprehensive waste collection network operates across urban areas of Patna, partnering with informal waste collectors and local organizations.",
      features: [
        "Door-to-door collection system",
        "Partnerships with informal waste pickers",
        "Bulk waste collection from businesses",
        "Specialized collection for different waste types"
      ],
      color: "[#f26226]"
    },
    {
      id: "community",
      title: "Community Engagement",
      icon: <Users className="h-6 w-6 text-[#86bc40]" />,
      description: "We conduct awareness programs and training sessions to educate communities about waste segregation and the importance of recycling.",
      features: [
        "Educational workshops in schools and colleges",
        "Community awareness campaigns",
        "Training for waste collectors",
        "Corporate sustainability programs"
      ],
      color: "[#86bc40]"
    },
    {
      id: "technology",
      title: "Technology Solutions",
      icon: <Database className="h-6 w-6 text-[#099fda]" />,
      description: "Our tech-enabled waste management system ensures traceability, accountability, and efficient operations throughout the waste value chain.",
      features: [
        "Digital waste tracking platform",
        "Mobile app for waste collectors",
        "Real-time monitoring dashboard",
        "Data analytics for optimization"
      ],
      color: "[#099fda]"
    },
    {
      id: "impact",
      title: "Impact Reporting",
      icon: <LineChart className="h-6 w-6 text-[#f26226]" />,
      description: "We provide detailed impact reports aligned with ESG and CSR frameworks to help our partners showcase their environmental contributions.",
      features: [
        "Customized impact dashboards",
        "ESG reporting compliance",
        "Carbon footprint calculations",
        "Sustainable Development Goals alignment"
      ],
      color: "[#f26226]"
    }
  ];
  
  const activeService = services.find(service => service.id === activeTab);
  
  return (
    <section ref={ref} className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            AdiRa BioCycle offers comprehensive waste management solutions from collection to recycling, 
            with a focus on creating sustainable impact.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="space-y-4">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <ServiceTab
                    {...service}
                    isActive={activeTab === service.id}
                    onClick={() => setActiveTab(service.id)}
                  />
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            className="md:col-span-2 bg-background rounded-lg p-6 shadow-sm"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            key={activeTab}
          >
            {activeService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`h-12 w-12 rounded-full bg-${activeService.color}/10 flex items-center justify-center`}>
                    {activeService.icon}
                  </div>
                  <h3 className={`text-2xl font-semibold text-${activeService.color}`}>
                    {activeService.title}
                  </h3>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  {activeService.description}
                </p>
                
                <div className="mb-8">
                  <h4 className="font-medium mb-3">Key Features:</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {activeService.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className={`h-2 w-2 rounded-full bg-${activeService.color}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button asChild>
                  <Link href={`/services#${activeService.id}`}>
                    Learn More
                  </Link>
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}