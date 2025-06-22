"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

function TeamMember({ name, role, bio, image, linkedin, twitter, email }: TeamMemberProps) {
  return (
    <div className="bg-background rounded-lg p-6 shadow-sm">
      <div className="relative h-64 w-full rounded-lg overflow-hidden mb-4">
        <Image 
          src={image} 
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          alt={name}
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-1">{name}</h3>
      <p className="text-muted-foreground mb-3">{role}</p>
      <p className="text-sm text-muted-foreground mb-4">{bio}</p>
      <div className="flex gap-2">
        {linkedin && (
          <Button size="icon" variant="ghost" asChild>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s LinkedIn`}>
              <Linkedin className="h-4 w-4" />
            </a>
          </Button>
        )}
        {twitter && (
          <Button size="icon" variant="ghost" asChild>
            <a href={twitter} target="_blank" rel="noopener noreferrer" aria-label={`${name}'s Twitter`}>
              <Twitter className="h-4 w-4" />
            </a>
          </Button>
        )}
        {email && (
          <Button size="icon" variant="ghost" asChild>
            <a href={`mailto:${email}`} aria-label={`Email ${name}`}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

export default function Team() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const teamMembers = [
    {
      name: "Arjun Singh",
      role: "Founder & CEO",
      bio: "With a background in environmental engineering and waste management, Arjun leads the vision and strategy for AdiRa BioCycle.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      linkedin: "#",
      twitter: "#",
      email: "arjun@adirabiocycle.com"
    },
    {
      name: "Priya Sharma",
      role: "Chief Operations Officer",
      bio: "Priya oversees the day-to-day operations, ensuring efficient waste collection, processing, and recycling systems.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      linkedin: "#",
      email: "priya@adirabiocycle.com"
    },
    {
      name: "Rajesh Kumar",
      role: "Technology Lead",
      bio: "Rajesh develops our tech solutions for waste traceability, analytics, and impact reporting systems.",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      linkedin: "#",
      twitter: "#"
    }
  ];
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="py-8"
    >
      <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
          >
            <TeamMember {...member} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}