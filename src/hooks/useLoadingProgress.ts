import { useState, useEffect } from "react";

export const useLoadingProgress = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      // Get total resources (scripts, images, stylesheets)
      const resources = performance.getEntriesByType("resource");
      const total = resources.length;
      const loaded = resources.filter(r => r.duration > 0).length;

      // Calculate progress percentage
      const percentage = Math.min(
        100,
        Math.round((loaded / Math.max(total, 1)) * 100)
      );
      setProgress(percentage);
    };

    // Create observer for resource loading
    const observer = new PerformanceObserver(list => {
      updateProgress();
    });

    // Start observing resource timing
    observer.observe({ entryTypes: ["resource"] });

    // Initial progress update
    updateProgress();

    // Ensure 100% after a maximum time
    const timeout = setTimeout(() => setProgress(100), 3000);

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return progress;
};
