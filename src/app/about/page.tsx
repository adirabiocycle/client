
"use client";
import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import CompanyStats from '@/components/about/CompanyStats';
import Vision from '@/components/about/Vision';
import Journey from '@/components/about/Journey';
import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';




export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      {/* Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">We Are AdiRa Biocycle Pvt. Ltd.</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            An innovative waste management initiative based in Bihar, committed to transforming India’s waste landscape. Our mission? To create a circular economy that brings together environmental recovery, equitable livelihoods, and grassroots innovation.
          </p>
          <p className="text-base md:text-lg">
            We believe in the power of dignity, data, and decentralization to build a cleaner, fairer future. And we’re starting right here, in Bihar.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Waste management in India"
            className="object-cover"
          />
        </div>
      </div>

      {/* About Us Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="Plastic recycling in India"
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg text-muted-foreground">
            AdiRa Biocycle Pvt. Ltd. is a Patna-based social enterprise focused on creating a sustainable and scalable waste management ecosystem in Bihar. The company specializes in the recovery, segregation, processing, and recycling of plastic and other dry waste materials.
          </p>
          <p className="text-base">
            By leveraging technology and a decentralized operational model, AdiRa Biocycle Pvt. Ltd. aims to reduce plastic pollution, support environmental sustainability, and promote circular economy principles. The enterprise partners with local communities, informal waste workers, and institutions to ensure efficient waste management while generating social and environmental impact.
          </p>
        </div>
      </div>

      <Separator className="my-12" />
      <CompanyStats />
      <Separator className="my-12" />
      <Vision />
      <Separator className="my-12" />
      <Journey />
      <Separator className="my-12" />

      {/* Team Section - Only Khusboo Singh */}
      <section className="py-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="group bg-background rounded-lg p-6 shadow-sm w-full max-w-sm flex flex-col items-center"
          >
            <div className="relative h-64 w-64 rounded-lg overflow-hidden mb-4">
              <Image
                src="/media/img/khushboo.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                alt="Khusboo Singh"
                  className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              {/* LinkedIn Icon overlay on hover */}
              <a
                href="https://www.linkedin.com/in/khushboo-singh-8377b4a0/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30"
                aria-label="Khusboo Singh LinkedIn"
              >
                <Linkedin className="h-10 w-10 text-white" />
              </a>
            </div>
            <h3 className="text-xl font-semibold mb-1">Khusboo Singh</h3>
            <p className="text-muted-foreground mb-3">Founder & CEO</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}