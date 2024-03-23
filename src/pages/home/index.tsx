import { useEffect, useState } from 'react';
import Header from '../../sections/header';

export interface Props {
  active: boolean;
  index: number;
}
export interface ProjectProps {
  title: string;
  src: string;
  bg: string;
  link: string;
}

const projects = [
  {
    title: 'VCGamers',
    src: 'vcgamers.webp',
    bg: 'bg-vcg.webp',
    link: 'https://vcgamers.com',
  },
  {
    title: 'MERN Ecommerce',
    src: 'mini-ecommerce.webp',
    bg: 'bg-miniecom.webp',
    link: 'https://github.com/priopambudi/mern-ecommerce',
  },
  {
    title: 'Bithour',
    src: 'bithour.webp',
    bg: 'bg-bithour.webp',
    link: 'https://bithourproduction.com/',
  },
  {
    title: 'Calculator',
    src: 'calculator.webp',
    bg: 'bg-calculator.webp',
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

const Home = () => {
  const [modal, setModal] = useState<Props>({ active: false, index: 0 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    // let el = document.querySelector('.test')!;
    // let second = document.querySelector('.second-cursor');
    // let moveX = gsap.quickTo(second, 'left', { duration: 0.5, ease: 'power3' });
    // let moveY = gsap.quickTo(second, 'top', { duration: 0.5, ease: 'power3' });
    // let mouseX: any;
    // let mouseY: any;
    // window.addEventListener('mousemove', (e) => {
    //   mouseX = e.clientX;
    //   mouseY = e.clientY;
    // const { clientX, clientY } = e;
    // console.log(clientX);
    // moveX(clientX);
    // moveY(clientY);
    // });
    // el.addEventListener('mousemove', () => {
    //   moveX(mouseX - 80 / 2);
    //   moveY(mouseY - 80 / 2);
    // });
  }, []);

  return (
    <>
      {/* <Modal modal={modal} projects={projects} /> */}
      {/* <div
        animate={{ scale: active ? 1 : 0 }}
        transition={{ ease: 'backInOut', duration: 0.2 }}
        className="second-cursor bg-cyan-500 rounded-full h-20 w-20 fixed -translate-x-1/2 -translate-y-1/2 size-0 z-50"
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      ></div> */}
      <div id="homePage">
        <Header />
        {/* <div className="flex min-h-max h-screen items-center justify-center">
          <div className="w-full flex flex-col items-center justify-center projects-wrap">
            {projects?.map((project: ProjectProps, indx: number) => {
              return (
                <Projects
                  key={indx}
                  index={indx}
                  title={project.title}
                  setModal={(data) => setModal({ active: data.active, index: data.index })}
                  url={project.link}
                />
              );
            })}
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Home;
