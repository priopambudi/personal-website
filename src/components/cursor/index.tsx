import { useEffect, useRef } from 'react';
import './cursor.css';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
};

export default function Cursor() {
  const outer = useRef(null);
  const inner = useRef(null);

  useEffect(() => {
    const cursorOuter = outer.current;
    const cursorInner = inner.current;
    const header = document.querySelector('.header');
    let moveX = gsap.quickTo(cursorOuter, 'left', { duration: 0.7, ease: 'power3' });
    let moveY = gsap.quickTo(cursorOuter, 'top', { duration: 0.7, ease: 'power3' });
    let innerX = gsap.quickTo(cursorInner, 'left', { duration: 0.5, ease: 'power3' });
    let innerY = gsap.quickTo(cursorInner, 'top', { duration: 0.5, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      moveX(clientX);
      moveY(clientY);
      innerX(clientX);
      innerY(clientY);
    });
    document.addEventListener('mouseenter', () => {
      gsap.to(cursorOuter, {
        duration: 0.7,
        opacity: 1,
      });
      gsap.to(cursorInner, {
        duration: 0.7,
        opacity: 1,
      });
    });
    document.addEventListener('mouseleave', () => {
      gsap.to(cursorOuter, {
        duration: 0.7,
        opacity: 0,
      });
      gsap.to(cursorInner, {
        duration: 0.7,
        opacity: 0,
      });
    });
    header?.addEventListener('mouseenter', () => {
      gsap.to(cursorOuter, {
        duration: 0.7,
        scale: 0,
      });
      gsap.to(cursorInner, {
        duration: 0.7,
        scale: 0,
      });
    });
    header?.addEventListener('mouseleave', () => {
      gsap.to(cursorOuter, {
        duration: 0.7,
        scale: 1,
      });
      gsap.to(cursorInner, {
        duration: 0.7,
        scale: 1,
      });
    });
  }, []);

  return (
    <div className="cursor-container">
      <div ref={outer} className="cursor-outer"></div>
      <div ref={inner} className="cursor-inner"></div>
    </div>
  );
}
