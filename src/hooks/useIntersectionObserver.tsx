import { ReactNode, RefObject, useEffect, useRef, useState } from 'react';

const useIntersectionObserver = (
  margin: number
): [RefObject<HTMLDivElement>, boolean] => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: `${margin}px`,
      threshold: 0.5
    };

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return [ref, isVisible];
};

const IntersectionObserverWrapper = ({
  children,
  margin
}: {
  children: ReactNode;
  margin: number;
}) => {
  const [ref, isVisible] = useIntersectionObserver(margin);
  return <div ref={ref}>{isVisible && children}</div>;
};

export default IntersectionObserverWrapper;
