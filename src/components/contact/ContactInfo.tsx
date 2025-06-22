import { Mail, Phone, MapPin, Clock, Briefcase } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
        <p className="text-muted-foreground mb-8">
          Have questions or want to learn more about our services? 
          Reach out to us using any of the contact methods below.
        </p>
      </div>
      
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <MapPin className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Location</h4>
            <p className="text-muted-foreground">Patna, Bihar, India</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Email</h4>
            <p className="text-muted-foreground">info@adirabiocycle.com</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Phone className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Phone</h4>
            <p className="text-muted-foreground">+91 xxx xxx xxxx</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Clock className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Working Hours</h4>
            <p className="text-muted-foreground">Monday to Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-muted-foreground">Saturday: 9:00 AM - 1:00 PM</p>
          </div>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-full bg-primary/10 text-primary">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-medium text-lg">Business Inquiries</h4>
            <p className="text-muted-foreground">partnerships@adirabiocycle.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}