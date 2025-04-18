
/**
 * Simple cursor effect for Technix-CRM
 */

export const initCursorEffect = () => {
  // Only initialize on devices with fine pointer (mouse)
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.getElementById('cursor-follower');
    
    if (!cursor) {
      console.error('Cursor follower element not found');
      return;
    }

    // Set simple cursor styles
    cursor.style.opacity = '1';
    cursor.style.backgroundColor = 'rgba(14, 165, 233, 0.3)';
    cursor.style.border = '2px solid rgba(14, 165, 233, 0.8)';
    
    // Initialize cursor position off-screen
    let cursorX = -100;
    let cursorY = -100;
    let targetX = -100;
    let targetY = -100;
    
    // Update cursor position smoothly
    const updateCursorPosition = () => {
      const easing = 0.2;
      cursorX += (targetX - cursorX) * easing;
      cursorY += (targetY - cursorY) * easing;
      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
      requestAnimationFrame(updateCursorPosition);
    };
    
    // Start animation loop
    updateCursorPosition();
    
    // Update target position on mouse move
    document.addEventListener('mousemove', (e) => {
      targetX = e.clientX - (cursor.offsetWidth / 2);
      targetY = e.clientY - (cursor.offsetHeight / 2);
    });
    
    // Basic hover effect for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, [role="button"]');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) scale(1.5)`;
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
