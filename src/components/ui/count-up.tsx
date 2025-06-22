"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CountUpProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export default function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
}: CountUpProps) {
  const [count, setCount] = useState(start);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const countRef = useRef({ start, end, duration, delay, decimals, timeoutId: null as NodeJS.Timeout | null });

  useEffect(() => {
    countRef.current = { ...countRef.current, start, end, duration, delay, decimals };
  }, [start, end, duration, delay, decimals]);

  useEffect(() => {
    if (!inView) return;

    const { start, end, duration, delay: startDelay } = countRef.current;
    
    // Clear any existing timeout
    if (countRef.current.timeoutId) {
      clearTimeout(countRef.current.timeoutId);
    }
    
    // Set delay before starting animation
    countRef.current.timeoutId = setTimeout(() => {
      const startTime = Date.now();

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min(1, (now - startTime) / (duration * 1000));
        
        const currentCount = start + (end - start) * progress;
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        } else {
          setCount(end);
        }
      };
      
      updateCount();
    }, startDelay * 1000);
    
    return () => {
      if (countRef.current.timeoutId) {
        clearTimeout(countRef.current.timeoutId);
      }
    };
  }, [inView]);

  const formattedCount = count.toFixed(decimals);
  
  return <span ref={ref}>{prefix}{formattedCount}{suffix}</span>;
}