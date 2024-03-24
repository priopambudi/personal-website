import { useEffect, useRef } from 'react';
import './header.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import Navbar from '../nav';

const Header = () => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  useEffect(() => {
    handleScroll();
    requestAnimationFrame(animate);
  }, []);

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0;
    } else if (xPercent > 0) {
      xPercent = -100;
    }
    gsap.set(firstText.current, { xPercent: xPercent });
    gsap.set(secondText.current, { xPercent: xPercent });
    requestAnimationFrame(animate);
    xPercent += 0.04 * direction;
  };
  const handleScroll = () => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: '-400px',
    });
  };
  const getBlocks = () => {
    const blockSize = window.innerWidth * 0.05;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks).keys()].map((_, index) => {
      return (
        <div
          key={index}
          onMouseEnter={(e) => {
            colorize(e.target);
          }}
        ></div>
      );
    });
  };
  const colorize = (el: any) => {
    el.style.backgroundColor = '#072d44';
    setTimeout(() => {
      el.style.backgroundColor = 'transparent';
    }, 300);
  };

  return (
    <section className="header h-screen">
      <Navbar />
      <div className="grid-pixel">
        {window.innerWidth > 0 &&
          [...Array(20).keys()].map((_: any, indx: number) => {
            return (
              <div key={`b_${indx}`} className="column">
                {getBlocks()}
              </div>
            );
          })}
      </div>
      <div className="name-wrapper container mx-auto">
        <h1>RIO PAMBUDI</h1>
        <p className="slug">
          Write, <strong>Code</strong>, Live
        </p>
      </div>
      <div className="located-wrap w-full flex items-center justify-end mt-20">
        <div className="wrapper">
          <div className="img-wrap rounded-full">
            <img src="./images/globe.png" alt="globe" width={30} height={30} />
          </div>
          <p>
            located in <br /> <strong>INDONESIA</strong>
          </p>
        </div>
      </div>
      <div className="slider-container">
        <div ref={slider} className="slider">
          <p ref={firstText}>SOFTWARE ENGINEER - </p>
          <p ref={secondText}>SOFTWARE ENGINEER - </p>
        </div>
      </div>
    </section>
  );
};

export default Header;
