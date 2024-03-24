import { useEffect, useRef } from 'react';
import { Props } from '../../pages/home';
import { ProjectProps } from '../../sections/projects';
import './modal.css';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';

interface PropsData {
  modal: Props;
  projects: ProjectProps[];
}

const scaleAnimation = {
  initial: { scale: 0, x: '-50%', y: '-50%' },
  enter: {
    scale: 1,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: '-50%',
    y: '-50%',
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
};

const Modal = ({ modal, projects }: PropsData) => {
  const { active, index } = modal;
  const container = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  useEffect(() => {
    const moveContainerX = gsap.quickTo(container.current, 'left', { duration: 0.8, ease: 'power3' });
    const moveContainerY = gsap.quickTo(container.current, 'top', { duration: 0.8, ease: 'power3' });
    const moveCursorX = gsap.quickTo(cursor.current, 'left', { duration: 0.5, ease: 'power3' });
    const moveCursorY = gsap.quickTo(cursor.current, 'top', { duration: 0.5, ease: 'power3' });
    const moveLabelX = gsap.quickTo(cursorLabel.current, 'left', { duration: 0.5, ease: 'power3' });
    const moveLabelY = gsap.quickTo(cursorLabel.current, 'top', { duration: 0.5, ease: 'power3' });

    window.addEventListener('mousemove', (e) => {
      const { clientX, clientY } = e;
      moveContainerX(clientX);
      moveContainerY(clientY);
      moveCursorX(clientX);
      moveCursorY(clientY);
      moveLabelX(clientX);
      moveLabelY(clientY);
    });
  }, []);

  return (
    <>
      <motion.div
        ref={container}
        className="modal-container"
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
      >
        <div className="modal-slider" style={{ top: `${-100 * index}%` }}>
          {projects.map((project: ProjectProps, indx: number) => {
            const { img, title } = project;
            return (
              <a
                href={`${project.link}`}
                className="modal"
                style={{ background: `url("./images/${img[0]}")`, backgroundSize: 'cover' }}
                key={`modal-${indx}`}
              >
                <img
                  className="h-auto"
                  src={`./images/${img[0]}`}
                  alt={`img-${title}`}
                  width={300}
                  height={0}
                  loading="lazy"
                />
              </a>
            );
          })}
        </div>
      </motion.div>
      <motion.div
        ref={cursor}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="cursor"
      ></motion.div>
      <motion.div
        ref={cursorLabel}
        variants={scaleAnimation}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        className="cursor-label bg-transparent"
      >
        View
      </motion.div>
    </>
  );
};

export default Modal;
