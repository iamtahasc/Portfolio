// ========= ANIMATION HELPERS =========
export const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.25, 0.8, 0.25, 1] }, // Custom cubic-bezier for smoother easing
  },
});

export const subtleFloat = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] }, // Custom cubic-bezier for smoother easing
  },
};

// Enhanced animation variants for smoother transitions
export const smoothSlideIn = (direction = 'right', delay = 0) => ({
  hidden: { 
    opacity: 0, 
    x: direction === 'right' ? 100 : direction === 'left' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { 
      duration: 0.8, 
      delay, 
      ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier for smoother easing
    },
  },
});

export const smoothScale = (delay = 0) => ({
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.7, 
      delay, 
      ease: [0.25, 0.8, 0.25, 1] // Custom cubic-bezier for smoother easing
    },
  },
});