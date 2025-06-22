"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Progress } from '@/components/ui/progress';
import CountUp from '@/components/ui/count-up';
import { Trash2, Users2, Building, Factory } from 'lucide-react';

interface StatCardProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
  delay?: number;
}

function StatCard({ icon, value, label, suffix = "", delay = 0 }: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-background rounded-lg p-6 shadow-sm flex flex-col items-center text-center"
    >
      <div className="mb-4">
        {icon}
      </div>
      <div className="text-3xl md:text-4xl font-bold mb-2">
        <CountUp end={value} duration={2} suffix={suffix} />
      </div>
      <p className="text-muted-foreground">{label}</p>
    </motion.div>
  );
}

export default function ImpactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Impact</h2>
          <p className="text-lg text-muted-foreground">
            We measure our success by the positive change we create for the environment, 
            communities, and the circular economy in Bihar.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <StatCard
            icon={<Trash2 size={36} className="text-[#f26226]" />}
            value={500}
            label="Tonnes of Waste Recovered"
            suffix="+"
            delay={0.1}
          />
          <StatCard
            icon={<Users2 size={36} className="text-[#86bc40]" />}
            value={100}
            label="Waste Collectors Empowered"
            suffix="+"
            delay={0.2}
          />
          <StatCard
            icon={<Building size={36} className="text-[#099fda]" />}
            value={20}
            label="Community Programs"
            suffix="+"
            delay={0.3}
          />
          <StatCard
            icon={<Factory size={36} className="text-[#f26226]" />}
            value={5}
            label="Recycling Partnerships"
            delay={0.4}
          />
        </div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <h3 className="text-xl font-semibold mb-6 text-center">Environmental Impact</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span>Plastic Pollution Reduction</span>
                  <span className="font-medium">75%</span>
                </div>
                <Progress value={75} className="h-2 bg-white [&>div]:bg-[#f26226]" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>CO₂ Emissions Saved</span>
                  <span className="font-medium">60%</span>
                </div>
                <Progress value={60} className="h-2 bg-white [&>div]:bg-[#86bc40]" />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <span>Water Bodies Protected</span>
                  <span className="font-medium">80%</span>
                </div>
                <Progress value={80} className="h-2 bg-white [&>div]:bg-[#099fda]" />
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-center"
          >
            <p className="text-muted-foreground mb-6">
              Our work directly contributes to multiple Sustainable Development Goals, 
              including SDG 11 (Sustainable Cities), SDG 12 (Responsible Consumption), 
              and SDG 13 (Climate Action).
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}