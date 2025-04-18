
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { View, Box } from 'lucide-react'; // Replace Cube with Box
import { motion } from 'framer-motion';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any;
    }
  }
}

const WebARDemo = () => {
  const modelViewerRef = useRef(null);

  useEffect(() => {
    // Dynamically import the model-viewer Web Component
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <motion.div
      className="w-full my-16 px-4 sm:px-6 mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand-blue to-brand-orange"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Experience Our CRM in Augmented Reality
          </motion.h2>
          <motion.p 
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            Visualize how Technix-CRM will look on your desk. Place our virtual dashboard in your workspace using AR technology.
          </motion.p>
        </div>
        
        <motion.div
          className="relative bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/40 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
          
          <model-viewer
            ref={modelViewerRef}
            src="/assets/dashboard.glb"
            ios-src="/assets/dashboard.usdz"
            alt="Technix-CRM Dashboard 3D Model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            auto-rotate
            shadow-intensity="1"
            environment-image="neutral"
            exposure="1"
            poster="/assets/dashboard-poster.webp"
            loading="eager"
            style={{ width: '100%', height: '400px' }}
          >
            <div className="absolute bottom-5 right-5 flex space-x-2">
              <Button 
                slot="ar-button"
                className="bg-brand-blue hover:bg-brand-blue-dark text-white flex items-center space-x-2"
              >
                <View className="mr-1" />
                View in AR
              </Button>
            </div>
            
            {/* Fallback for browsers that don't support model-viewer */}
            <div slot="poster" className="flex items-center justify-center h-full w-full bg-gray-100 dark:bg-gray-800">
              <div className="text-center">
                <Box className="h-12 w-12 mx-auto text-brand-blue dark:text-brand-blue-light mb-3" />
                <p className="text-gray-700 dark:text-gray-300">Loading 3D Model...</p>
              </div>
            </div>
          </model-viewer>
        </motion.div>
        
        <motion.div 
          className="text-center mt-6 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p>AR mode works best on supported mobile devices. On desktop, interact with the 3D model by clicking and dragging.</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WebARDemo;
