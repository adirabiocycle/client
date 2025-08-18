"use client";

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  accentColor: string;
}

export default function ServiceCard({ title, description, icon, accentColor }: ServiceCardProps) {
  const IconComponent = Icons[icon as keyof typeof Icons] as React.ComponentType<React.SVGProps<SVGSVGElement>>;
  
  return (
    <motion.div
      className="bg-background rounded-lg p-6 shadow-sm border border-border hover:border-primary transition-all duration-300 group"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-start gap-4">
        <div 
          className="p-3 rounded-full" 
          style={{ backgroundColor: `${accentColor}10` }}
        >
          <IconComponent 
            className="h-6 w-6" 
            style={{ color: accentColor }} 
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}