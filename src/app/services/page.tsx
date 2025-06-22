import ServiceCard from '@/components/services/ServiceCard';
import CollectionProcess from '@/components/services/CollectionProcess';
import SortingAndProcessing from '@/components/services/SortingAndProcessing';
import TechnologySolutions from '@/components/services/TechnologySolutions';
import CommunityEngagement from '@/components/services/CommunityEngagement';

export const metadata = {
  title: 'Our Services | AdiRa BioCycle',
  description: 'Discover our comprehensive waste management services including collection, segregation, recycling, and technology solutions for waste traceability.',
};

export default function ServicesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Our Services</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          AdiRa BioCycle offers comprehensive waste management solutions, from collection to recycling, 
          with a focus on creating sustainable impact across Bihar.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <ServiceCard 
          title="Collection & Aggregation"
          description="Partnership with local waste collectors and organizations to collect plastic and dry waste efficiently"
          icon="Recycle"
          accentColor="#f26226"
        />
        <ServiceCard 
          title="Sorting & Processing"
          description="Advanced segregation and processing of waste into valuable resource materials"
          icon="Workflow"
          accentColor="#86bc40"
        />
        <ServiceCard 
          title="Technology Integration"
          description="Digital solutions for waste traceability, monitoring, and impact measurement"
          icon="Laptop"
          accentColor="#099fda"
        />
        <ServiceCard 
          title="Community Engagement"
          description="Educational programs and awareness initiatives to promote waste reduction and proper disposal"
          icon="Users"
          accentColor="#f26226"
        />
      </div>

      <CollectionProcess />
      <SortingAndProcessing />
      <TechnologySolutions />
      <CommunityEngagement />
    </div>
  );
}