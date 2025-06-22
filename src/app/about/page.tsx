import Image from 'next/image';
import { Separator } from '@/components/ui/separator';
import CompanyStats from '@/components/about/CompanyStats';
import Team from '@/components/about/Team';
import Vision from '@/components/about/Vision';
import Journey from '@/components/about/Journey';

export const metadata = {
  title: 'About AdiRa BioCycle | Our Mission and Journey',
  description: 'Learn about AdiRa BioCycle, our mission to build an integrated waste recovery ecosystem in Bihar, and our journey towards a cleaner future.',
};

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Story</h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            AdiRa BioCycle is a Patna-based social enterprise committed to building an integrated 
            plastic and dry waste recovery ecosystem in Bihar.
          </p>
          <p className="text-base md:text-lg">
            Our mission is to reduce plastic pollution and promote circular economy principles 
            by recovering, sorting, processing, and recycling plastic and other dry waste materials 
            through a scalable, tech-enabled, and decentralized model.
          </p>
        </div>
        <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
          <Image 
            src="https://images.pexels.com/photos/802221/pexels-photo-802221.jpeg" 
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            alt="AdiRa BioCycle team working on waste management"
            className="object-cover"
          />
        </div>
      </div>

      <Separator className="my-12" />
      <CompanyStats />
      <Separator className="my-12" />
      <Vision />
      <Separator className="my-12" />
      <Journey />
      <Separator className="my-12" />
      <Team />
    </div>
  );
}