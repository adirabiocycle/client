import { Suspense } from 'react';
import Hero from '@/components/home/Hero';
import MissionSection from '@/components/home/MissionSection';
import ServicesSection from '@/components/home/ServicesSection';
import WasteRecycledMeter from '@/components/home/WasteRecycledMeter';
import ImpactSection from '@/components/home/ImpactSection';
import PartnerSection from '@/components/home/PartnerSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import LoadingSpinner from '@/components/ui/loading-spinner';

export default function Home() {
  return (
    <div className="relative">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <MissionSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <WasteRecycledMeter />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <ImpactSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <PartnerSection />
      </Suspense>
      
      <Suspense fallback={<LoadingSpinner />}>
        <CallToActionSection />
      </Suspense>
    </div>
  );
}