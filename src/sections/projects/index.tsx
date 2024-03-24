import { motion, useAnimate, useInView } from 'framer-motion';
import { mountAnim, rotateX } from '../../utils/anim';
import './style.css';
import React, { useRef } from 'react';

export interface ProjectProps {
  title: string;
  desc: string;
  img: string[];
  link: string;
}
export interface linkProps {
  data: ProjectProps;
  indx: number;
  isInView: boolean;
  //   animateIn: (data: any) => void;
  // outer: any;
  // inner: any;
}

const projects: ProjectProps[] = [
  {
    title: 'VCGamers',
    desc: 'NextJS - Typescript - Recoil -',
    img: ['vcgamers.webp'],
    link: 'https://vcgamers.com',
  },
  {
    title: 'MERN Ecommerce',
    desc: 'Mongodb - express - react - nodejs -',
    img: ['mini-ecommerce.webp'],
    link: 'https://github.com/priopambudi/mern-ecommerce',
  },
  {
    title: 'Bithour',
    desc: 'laravel - html - css -',
    img: ['bithour.webp'],
    link: 'https://bithourproduction.com/',
  },
  {
    title: 'Calculator',
    desc: 'html - css - javascript -',
    img: ['calculator.webp'],
    link: 'https://online-simple-calculator.netlify.app/',
  },
  // {
  //   title: 'Scissors',
  //   src: 'scissors.webp',
  //   bg: 'bg-scissors.webp',
  // },
  // {
  //   title: 'ToDo App',
  //   src: 'simplytodoapps.webp',
  //   bg: 'bg-todoapp.webp',
  // },
  // {
  //   title: 'Register Form',
  //   src: 'signup.webp',
  //   bg: 'bg-form.webp',
  // },
  // {
  //   title: 'Quiz',
  //   src: 'quizz.webp',
  //   bg: 'bg-quiz.webp',
  // },
];

const Projects = () => {
  const container = useRef(null);
  const isInView = useInView(container, { once: true, margin: '-70%' });

  return (
    <section className="projects-section" ref={container}>
      <h3 className="container mx-auto">Featured Works</h3>
      <div className="body-projects">
        {projects.map((el: ProjectProps, indx: number) => (
          <React.Fragment key={indx}>
            <Link data={el} indx={indx} isInView={isInView} />
          </React.Fragment>
        ))}
      </div>
      <div className="h-screen"> </div>
    </section>
  );
};

const Link = ({ data, indx, isInView }: linkProps) => {
  let outer = useRef(null);
  let inner = useRef(null);
  const [scope, animate] = useAnimate();

  const animateIn = async (e: any) => {
    const bounds = e.target.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    await animate(outer.current, { top: `${direction * 100}%` }, { duration: 0 });
    await animate(inner.current, { top: `${-1 * direction * 100}%` }, { duration: 0 });

    animate([outer.current, inner.current], { top: '0%' }, { duration: 0.3 });
  };
  const animateOut = (e: any) => {
    const bounds = e.target.getBoundingClientRect();
    const direction = e.clientY < bounds.top + bounds.height / 2 ? -1 : 1;

    animate(outer.current, { top: `${direction * 100}%` }, { duration: 0.3 });
    animate(inner.current, { top: `${-1 * direction * 100}%` }, { duration: 0.3 });
  };

  return (
    <motion.div
      variants={rotateX}
      initial={mountAnim.initial}
      animate={isInView ? mountAnim.animate : ''}
      custom={indx}
      className={`projects-item ${projects.length === indx + 1 ? 'last' : ''}`}
      onMouseEnter={(e) => animateIn(e)}
      onMouseLeave={(e) => animateOut(e)}
      ref={scope}
    >
      <a href={data?.link} target="_blank" onClick={(e) => animateOut(e)}>
        {data?.title}
      </a>
      <div ref={outer} className="slider-outer">
        <div ref={inner} className="slider-inner">
          {[...Array(2)].map((_, index: number) => (
            <Slider key={`${index}`} images={data?.img} description={data?.desc} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Slider = ({ img, description }: any) => {
  return (
    <div className="slider-description">
      {img && (
        <div className="img-wrap">
          <img src={`/images/${img[0]}`} alt="descroption" />
        </div>
      )}
      <p>{description ? description : ''}</p>
    </div>
  );
};

export default Projects;
