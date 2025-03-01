
import { useEffect, useRef, useState } from 'react';

// Observer for revealing elements on scroll
export const useIntersectionObserver = (options = {}) => {
  const [elements, setElements] = useState<Element[]>([]);
  const [entries, setEntries] = useState<IntersectionObserverEntry[]>([]);

  const observer = useRef<IntersectionObserver | null>(null);

  const defaultOptions = {
    threshold: 0.1,
    root: null,
    rootMargin: '0px',
    ...options,
  };

  useEffect(() => {
    if (typeof window.IntersectionObserver === 'undefined') {
      return;
    }
    
    observer.current = new IntersectionObserver((observedEntries) => {
      setEntries(observedEntries);
    }, defaultOptions);

    elements.forEach((element) => observer.current?.observe(element));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [elements, defaultOptions]);

  return {
    ref: (element: Element | null) => {
      if (element && !elements.includes(element)) {
        setElements((prevElements) => [...prevElements, element]);
      }
    },
    entries
  };
};

// Custom hook to track when an element is in view for animations
export const useAnimateOnScroll = (threshold = 0.1) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once the animation has played, we can unobserve the element
          if (elementRef.current) observer.unobserve(elementRef.current);
        }
      },
      { threshold }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold]);

  return { elementRef, isVisible };
};

// Hook to delay animation by a set amount of time
export const useAnimationDelay = (delay: number) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isReady;
};

// Class names that can be applied for staggered animations
export const getStaggeredClasses = (index: number, isVisible: boolean, baseClass: string = '') => {
  const visibilityClass = isVisible ? 'opacity-100' : 'opacity-0';
  const transitionDelay = `transition-all duration-700 delay-[${index * 100}ms]`;
  
  return `${baseClass} ${visibilityClass} ${transitionDelay}`;
};
