
/**
 * Simple cursor effect for Technix-CRM
 */

export const initCursorEffect = () => {
  // Only initialize on devices with fine pointer (mouse)
  if (window.matchMedia('(pointer: fine)').matches) {
    // Create cursor element if it doesn't exist
    let cursor = document.getElementById('cursor-follower');
    if (!cursor) {
      cursor = document.createElement('div');
      cursor.id = 'cursor-follower';
      document.body.appendChild(cursor);
    }
    
    // Set simple cursor styles with high z-index
    cursor.style.position = 'fixed';
    cursor.style.width = '20px';
    cursor.style.height = '20px';
    cursor.style.borderRadius = '50%';
    cursor.style.pointerEvents = 'none';
    cursor.style.zIndex = '999999'; // Ensure it's above other elements
    cursor.style.opacity = '1';
    cursor.style.backgroundColor = 'rgba(14, 165, 233, 0.3)';
    cursor.style.border = '2px solid rgba(14, 165, 233, 0.8)';
    
    // Initialize cursor position off-screen
    let cursorX = -100;
    let cursorY = -100;
    
    // Update cursor position directly (no smoothing for simplicity)
    const updateCursorPosition = (e) => {
      cursorX = e.clientX - (cursor.offsetWidth / 2);
      cursorY = e.clientY - (cursor.offsetHeight / 2);
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
    };
    
    // Update position on mouse move
    document.addEventListener('mousemove', updateCursorPosition);
    
    // Simple hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.3)`;
      });
      
      el.addEventListener('mouseleave', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1)`;
      });
    });
  }
};

// Initialize on document load
document.addEventListener('DOMContentLoaded', initCursorEffect);

export default initCursorEffect;
