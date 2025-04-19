
import React, { useEffect, useState } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

const ProductTour = () => {
  const [tourComplete, setTourComplete] = useState(false);

  useEffect(() => {
    // Check if the user has already completed the tour
    const hasCompletedTour = localStorage.getItem('tourCompleted') === 'true';
    
    if (hasCompletedTour) {
      setTourComplete(true);
      return;
    }

    // Add specific styles to ensure cursor remains visible over tour elements
    const style = document.createElement('style');
    style.innerHTML = `
      .shepherd-element {
        z-index: 99999 !important;
        position: relative;
      }
      .shepherd-modal-overlay-container {
        z-index: 99998 !important;
      }
    `;
    document.head.appendChild(style);

    // Initialize the tour
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'shadow-lg rounded-lg bg-white dark:bg-gray-800 p-4',
        scrollTo: true,
        when: {
          cancel: () => {
            localStorage.setItem('tourCompleted', 'true');
            setTourComplete(true);
          },
          complete: () => {
            localStorage.setItem('tourCompleted', 'true');
            setTourComplete(true);
          }
        }
      },
      useModalOverlay: true
    });

    // Add steps to the tour
    tour.addSteps([
      {
        id: 'welcome',
        title: 'Welcome to Technix-CRM!',
        text: 'Let us guide you through our powerful platform. Press "Next" to continue or "Skip Tour" to exit.',
        attachTo: {
          element: '.hero-heading',
          on: 'bottom'
        },
        buttons: [
          {
            action: tour.cancel,
            classes: 'shepherd-button-secondary bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white',
            text: 'Skip Tour'
          },
          {
            action: tour.next,
            classes: 'shepherd-button-primary bg-brand-blue hover:bg-brand-blue-dark dark:bg-brand-blue-light text-white',
            text: 'Next'
          }
        ]
      },
      {
        id: 'cta-buttons',
        title: 'Get Started',
        text: 'Book a demo or start your free trial with just one click!',
        attachTo: {
          element: '.hero-buttons',
          on: 'bottom'
        },
        buttons: [
          {
            action: tour.back,
            classes: 'shepherd-button-secondary bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white',
            text: 'Back'
          },
          {
            action: tour.next,
            classes: 'shepherd-button-primary bg-brand-blue hover:bg-brand-blue-dark dark:bg-brand-blue-light text-white',
            text: 'Next'
          }
        ]
      },
      {
        id: 'features',
        title: 'Explore Features',
        text: 'Discover all the powerful features that Technix-CRM has to offer.',
        attachTo: {
          element: '#features',
          on: 'top'
        },
        buttons: [
          {
            action: tour.back,
            classes: 'shepherd-button-secondary bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white',
            text: 'Back'
          },
          {
            action: tour.next,
            classes: 'shepherd-button-primary bg-brand-blue hover:bg-brand-blue-dark dark:bg-brand-blue-light text-white',
            text: 'Next'
          }
        ]
      },
      {
        id: 'demo-form',
        title: 'Request a Demo',
        text: 'Fill out this form to get a personalized demo of Technix-CRM.',
        attachTo: {
          element: '#demo-form',
          on: 'top'
        },
        buttons: [
          {
            action: tour.back,
            classes: 'shepherd-button-secondary bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white',
            text: 'Back'
          },
          {
            action: tour.complete,
            classes: 'shepherd-button-primary bg-brand-blue hover:bg-brand-blue-dark dark:bg-brand-blue-light text-white',
            text: 'Finish Tour'
          }
        ]
      }
    ]);

    // Start the tour
    tour.start();

    return () => {
      tour.complete();
      document.head.removeChild(style);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ProductTour;
