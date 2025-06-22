"use client";

import { useState } from 'react';
import { MapPin } from 'lucide-react';

export default function MapLocation() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-6">Our Location</h3>
      <div className="relative h-96 w-full rounded-lg overflow-hidden border border-border">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <div className="flex flex-col items-center text-muted-foreground">
              <MapPin className="h-10 w-10 mb-2" />
              <p>Map loading...</p>
            </div>
          </div>
        )}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115408.23982842936!2d85.0594580929577!3d25.608175570225563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937c52d4f05%3A0x831a0e05f607b270!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1713967323407!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          onLoad={() => setIsLoaded(true)}
          className={isLoaded ? "opacity-100" : "opacity-0"}
        ></iframe>
      </div>
    </div>
  );
}