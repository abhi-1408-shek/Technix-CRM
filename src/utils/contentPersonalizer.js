
/**
 * Content Personalization Module
 * Personalizes content based on user type and time of day
 */

// Constants
const USER_TYPES = {
  ENTERPRISE: 'enterprise',
  SMB: 'smb'
};

const TIME_PERIODS = {
  MORNING: 'morning',
  AFTERNOON: 'afternoon',
  EVENING: 'evening'
};

// Get current time period (morning/afternoon/evening)
const getCurrentTimePeriod = () => {
  const currentHour = new Date().getHours();
  
  if (currentHour < 12) {
    return TIME_PERIODS.MORNING;
  } else if (currentHour < 17) {
    return TIME_PERIODS.AFTERNOON;
  } else {
    return TIME_PERIODS.EVENING;
  }
};

// Generate personalized greeting based on user type and time
const getPersonalizedGreeting = (userType) => {
  const timePeriod = getCurrentTimePeriod();
  
  if (!userType) {
    return "Welcome to Technix-CRM";
  }
  
  const titles = {
    [USER_TYPES.ENTERPRISE]: {
      [TIME_PERIODS.MORNING]: "Good Morning, Enterprise Leader",
      [TIME_PERIODS.AFTERNOON]: "Good Afternoon, Enterprise Leader",
      [TIME_PERIODS.EVENING]: "Good Evening, Enterprise Leader"
    },
    [USER_TYPES.SMB]: {
      [TIME_PERIODS.MORNING]: "Good Morning, SMB Innovator",
      [TIME_PERIODS.AFTERNOON]: "Good Afternoon, SMB Innovator",
      [TIME_PERIODS.EVENING]: "Good Evening, SMB Innovator"
    }
  };
  
  return titles[userType][timePeriod];
};

// Generate personalized demo CTA text
const getPersonalizedDemoText = (userType) => {
  if (!userType) {
    return "Ready to see Technix-CRM in action? Schedule your demo today!";
  }
  
  const demoTexts = {
    [USER_TYPES.ENTERPRISE]: "See how Technix-CRM scales for enterprise needs. Book your personalized demo.",
    [USER_TYPES.SMB]: "Discover how Technix-CRM helps small businesses grow. Request your tailored demo now."
  };
  
  return demoTexts[userType];
};

// Initialize personalization when the page loads
const initPersonalization = () => {
  const userType = localStorage.getItem('userType');
  const lastVisitTime = localStorage.getItem('lastVisitTime');
  
  // Update last visit time
  localStorage.setItem('lastVisitTime', new Date().toString());
  
  // Apply personalization to the page
  applyPersonalization(userType);
  
  return {
    userType,
    lastVisitTime
  };
};

// Apply personalization to specific page elements
const applyPersonalization = (userType) => {
  const heroTitle = document.querySelector('.hero-title');
  const demoPlaceholder = document.querySelector('.demo-placeholder');
  
  if (heroTitle) {
    heroTitle.textContent = getPersonalizedGreeting(userType);
  }
  
  if (demoPlaceholder) {
    demoPlaceholder.textContent = getPersonalizedDemoText(userType);
  }
};

// Set user type and update personalization
const setUserType = (type) => {
  if (type !== USER_TYPES.ENTERPRISE && type !== USER_TYPES.SMB) {
    console.error('Invalid user type. Use "enterprise" or "smb".');
    return;
  }
  
  localStorage.setItem('userType', type);
  applyPersonalization(type);
};

// Clear personalization data
const clearPersonalization = () => {
  localStorage.removeItem('userType');
  localStorage.removeItem('lastVisitTime');
  
  // Reset to default text
  applyPersonalization(null);
};

// Export the public API
export {
  initPersonalization,
  setUserType,
  clearPersonalization,
  USER_TYPES
};

// Auto-initialize when imported
document.addEventListener('DOMContentLoaded', initPersonalization);
