import { Props } from '../../pages/home';
import './project.css';

interface PropsData {
  index: number;
  title: string;
  setModal: (data: Props) => void;
}

const Projects = ({ index, title, setModal }: PropsData) => {
  return (
    <div
      className="project"
      onMouseEnter={() => setModal({ active: true, index: index })}
      onMouseLeave={() => setModal({ active: false, index: index })}
    >
      <h3>{title}</h3>
      <p className="m-0">Frontend Developer</p>
    </div>
  );
};

export default Projects;
