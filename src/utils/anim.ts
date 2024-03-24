export const rotateX = {
  initial: {
    rotateX: 90,
    opacity: 0,
  },
  enter: (i: number) => ({
    rotateX: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1], delay: 0.3 + i * 0.05 },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
  },
};

export const mountAnim = { initial: 'initial', animate: 'enter', exit: 'exit' };
