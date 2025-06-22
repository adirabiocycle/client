import { Separator } from '@/components/ui/separator';
import ImpactMetrics from '@/components/impact/ImpactMetrics';
import EnvironmentalBenefits from '@/components/impact/EnvironmentalBenefits';
import SocialBenefits from '@/components/impact/SocialBenefits';
import CaseStudies from '@/components/impact/CaseStudies';
import SDGAlignment from '@/components/impact/SDGAlignment';

export const metadata = {
  title: 'Our Impact | AdiRa BioCycle',
  description: 'Explore the environmental and social impact of AdiRa BioCycle through our waste recovery and recycling initiatives in Bihar.',
};

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Impact</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          At AdiRa BioCycle, we measure our success by the positive change we create for 
          the environment, communities, and the circular economy in Bihar.
        </p>
      </div>

      <ImpactMetrics />
      <Separator className="my-16" />
      <EnvironmentalBenefits />
      <Separator className="my-16" />
      <SocialBenefits />
      <Separator className="my-16" />
      <CaseStudies />
      <Separator className="my-16" />
      <SDGAlignment />
    </div>
  );
}