"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: "What types of waste does AdiRa BioCycle collect?",
      answer: "We primarily focus on plastic waste and other dry waste materials including paper, cardboard, metal, and glass. We do not currently handle wet waste, hazardous waste, or e-waste."
    },
    {
      question: "How can businesses partner with AdiRa BioCycle?",
      answer: "Businesses can partner with us for various services including regular waste collection, waste management consulting, CSR initiatives, and impact reporting. Please contact us through our business inquiry form for more details."
    },
    {
      question: "What areas do you currently operate in?",
      answer: "We are currently operating in Patna, Bihar, with plans to expand to other cities in Bihar in the near future. We're setting up our first Material Recovery Facility (MRF) in Patna as a pilot and proof of concept."
    },
    {
      question: "How does your waste tracking technology work?",
      answer: "Our waste tracking system uses a combination of mobile apps, QR codes, and a central database to monitor the waste journey from collection to processing. This provides transparency and accountability throughout the process."
    },
    {
      question: "Can individuals request waste collection services?",
      answer: "Yes, individuals can request waste collection services. We offer scheduled pickups as well as on-demand collection. Please contact us with your requirements and location details."
    },
    {
      question: "Do you provide environmental impact reports for corporate partners?",
      answer: "Yes, we provide detailed environmental impact reports for our corporate partners, which can be used for ESG reporting and CSR documentation. These reports include metrics like waste diverted from landfills, CO₂ emissions saved, and other relevant environmental indicators."
    }
  ];
  
  return (
    <div className="bg-muted p-6 rounded-lg">
      <h3 className="text-2xl font-semibold mb-6">Frequently Asked Questions</h3>
      
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}