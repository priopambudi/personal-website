import { useRef, useState } from 'react';
import Projects from '../../sections/projects';
import './home.css';
import Modal from '../../components/modal';

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
  const containerOuter = useRef(null);

  return (
    <div className="container mx-auto">
      <div ref={containerOuter} className="flex min-h-max h-screen items-center justify-center">
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
        <Modal modal={modal} projects={projects} />
      </div>
    </div>
  );
};

export default Home;
