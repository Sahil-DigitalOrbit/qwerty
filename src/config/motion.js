export const transition = { type: "spring", duration: 0.8 };

export const fadeAnimation = (delay) => {
  return {
    initial: { opacity: 0 },
    whileInView: { opacity: 100 },
    transition: { duration: 0.5, delay },
  };
};

export const slideAnimation = (direction,rotate,scaleY,scaleX) => {
  return {
    initial: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      rotate,
      opacity: 0,
      scaleY,
      scaleX,
      transition: { duration: 0.3 },
    },
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0 },
    },
    exit: {
      x: direction === "left" ? -100 : direction === "right" ? 100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      transition: { transition: 0.3 },
    },
  };
};

export const menuAnimation = (direction) => {
  return {
    initial: { 
      x: direction === "left" ? -300 : direction === "right" ? 300 : 0, 
      y: direction === "up" ? -100 : direction === "down" ? 100 : 0,
      opacity: 0 
    },
    animate: { 
      x: 0, 
      y: 0,
      opacity: 1, 
      transition: { duration: 0.5 } },
    exit: { 
      x: direction === "left" ? -300 : direction === "right" ? 300 : 0,
      y: direction === "up" ? -200 : direction === "down" ? 200 : 0, 
      opacity: 0, 
      transition: { duration: 0.5 } },
  }
}
