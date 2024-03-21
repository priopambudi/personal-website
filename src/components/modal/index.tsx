import { ProjectProps, Props } from '../../pages/home';
import './modal.css';

interface PropsData {
  modal: Props;
  projects: ProjectProps[];
}

const Modal = ({ modal, projects }: PropsData) => {
  const { index } = modal;

  return (
    <div className="modal-container">
      <div className="modal-slider" style={{ top: `${-100 * index}%` }}>
        {projects.map((project: ProjectProps, indx: number) => {
          const { src, color, title } = project;
          return (
            <div
              className="modal"
              style={{ backgroundColor: color }}
              key={`modal-${indx}`}
            >
              <img
                className="h-auto"
                src={`/images/${src}`}
                alt={`img-${title}`}
                width={300}
                height={0}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Modal;
