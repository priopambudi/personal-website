import { useEffect, useRef } from 'react';
import './cursor.css';
import { gsap } from 'gsap';

export default function Cursor() {
  // const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // const cursorOuter = outer.current;
    const cursorInner = inner.current;
    const header = document.querySelector('.header');
    const paragraph = document.querySelector('.paragraph');
    const navbar = document.querySelector('nav');
    const availableWork = document.querySelector('.available-work');
    // let moveX = gsap.quickTo(cursorOuter, 'left', { duration: 0.7, ease: 'power3' });
    // let moveY = gsap.quickTo(cursorOuter, 'top', { duration: 0.7, ease: 'power3' });
    let innerX = gsap.quickTo(cursorInner, 'left', { duration: 0.5, ease: 'power3' });
    let innerY = gsap.quickTo(cursorInner, 'top', { duration: 0.5, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      // moveX(clientX);
      // moveY(clientY);
      innerX(clientX);
      innerY(clientY);
    });
    document.addEventListener('mouseenter', () => showCursor());
    document.addEventListener('mouseleave', () => hideCursor());
    header?.addEventListener('mouseenter', () => hideCursor());
    header?.addEventListener('mouseleave', () => showCursor());
    paragraph?.addEventListener('mouseenter', () => {
      gsap.to(cursorInner, {
        duration: 0.7,
        scale: 0.3,
      });
    });
    paragraph?.addEventListener('mouseleave', () => {
      gsap.to(cursorInner, {
        duration: 0.7,
        scale: 1,
      });
    });
    navbar?.addEventListener('mouseenter', () => showCursor());
    navbar?.addEventListener('mouseleave', () => hideCursor());
    availableWork?.addEventListener('mouseenter', () => {
      gsap.to(cursorInner, {
        duration: 0.7,
        opacity: 0.2,
      });
    });
    availableWork?.addEventListener('mouseleave', () => {
      gsap.to(cursorInner, {
        duration: 0.7,
        opacity: 1,
      });
    });
    // paragraph?.addEventListener('mouseleave', () => {
    //   cursorOuter?.classList?.add('removing');
    //   setTimeout(() => {
    //     cursorOuter?.classList?.remove('removing');
    //   }, 1000);
    //   cursorOuter?.classList?.remove('in-paragraph');
    // });
  }, []);

  const showCursor = () => {
    // gsap.to(outer.current, {
    //   duration: 0.7,
    //   opacity: 1,
    //   scale: 1,
    // });
    gsap.to(inner.current, {
      duration: 0.7,
      opacity: 1,
      scale: 1,
    });
  };
  const hideCursor = () => {
    // gsap.to(outer.current, {
    //   duration: 0.7,
    //   opacity: 0,
    //   scale: 0,
    // });
    gsap.to(inner.current, {
      duration: 0.7,
      opacity: 0,
      scale: 0,
    });
  };

  return (
    <div className="cursor-container">
      {/* <div ref={outer} className="cursor-outer"></div> */}
      <div ref={inner} className="cursor-inner"></div>
    </div>
  );
}
