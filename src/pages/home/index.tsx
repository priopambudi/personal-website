import { useEffect, useState } from 'react';
import Projects from '../../components/projects';
import './home.css';
import Modal from '../../components/modal';

export interface Props {
  active: boolean;
  index: number;
}
export interface ProjectProps {
  title: string;
  src: string;
  color: string;
}

const projects = [
  {
    title: 'C2 Montreal',
    src: 'c2montreal.png',
    color: '#000000',
  },
  {
    title: 'Office Studio',
    src: 'officestudio.png',
    color: '#8C8C8C',
  },
  {
    title: 'Locomotive',
    src: 'locomotive.png',
    color: '#EFE8D3',
  },
  {
    title: 'Silencio',
    src: 'silencio.png',
    color: '#706D63',
  },
];

const Home = () => {
  const [modal, setModal] = useState<Props>({ active: false, index: 0 });

  return (
    <div className="container mx-auto">
      <div className="flex h-screen items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {projects?.map((project: ProjectProps, indx: number) => {
            return (
              <Projects
                key={indx}
                index={indx}
                title={project.title}
                setModal={(data) =>
                  setModal({ active: data.active, index: data.index })
                }
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
