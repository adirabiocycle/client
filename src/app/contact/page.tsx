import ContactForm from '@/components/contact/ContactForm';
import ContactInfo from '@/components/contact/ContactInfo';
import MapLocation from '@/components/contact/MapLocation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import FAQSection from '@/components/contact/FAQSection';

export const metadata = {
  title: 'Contact Us | AdiRa BioCycle',
  description: 'Get in touch with AdiRa BioCycle for waste management solutions, partnerships, or inquiries about our services in Bihar.',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Contact Us</h1>
        <p className="text-lg md:text-xl text-muted-foreground">
          Have questions or want to collaborate? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ContactForm />
        <ContactInfo />
      </div>

      <MapLocation />

      <div className="mt-20">
        <Tabs defaultValue="faqs" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="faqs">Frequently Asked Questions</TabsTrigger>
            <TabsTrigger value="inquiries">Service Inquiries</TabsTrigger>
          </TabsList>
          <TabsContent value="faqs">
            <FAQSection />
          </TabsContent>
          <TabsContent value="inquiries">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Service Inquiries</h3>
              <p className="mb-4">
                If you&apos;re interested in our waste management services or would like to request a pickup, 
                please fill out the form below or contact us directly.
              </p>
              <ContactForm variant="compact" />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}