import Cursor from '../../components/cursor';
import Description from '../../sections/description';
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

// const projects = [
//   {
//     title: 'VCGamers',
//     src: 'vcgamers.webp',
//     bg: 'bg-vcg.webp',
//     link: 'https://vcgamers.com',
//   },
//   {
//     title: 'MERN Ecommerce',
//     src: 'mini-ecommerce.webp',
//     bg: 'bg-miniecom.webp',
//     link: 'https://github.com/priopambudi/mern-ecommerce',
//   },
//   {
//     title: 'Bithour',
//     src: 'bithour.webp',
//     bg: 'bg-bithour.webp',
//     link: 'https://bithourproduction.com/',
//   },
//   {
//     title: 'Calculator',
//     src: 'calculator.webp',
//     bg: 'bg-calculator.webp',
//     link: 'https://online-simple-calculator.netlify.app/',
//   },
//   // {
//   //   title: 'Scissors',
//   //   src: 'scissors.webp',
//   //   bg: 'bg-scissors.webp',
//   // },
//   // {
//   //   title: 'ToDo App',
//   //   src: 'simplytodoapps.webp',
//   //   bg: 'bg-todoapp.webp',
//   // },
//   // {
//   //   title: 'Register Form',
//   //   src: 'signup.webp',
//   //   bg: 'bg-form.webp',
//   // },
//   // {
//   //   title: 'Quiz',
//   //   src: 'quizz.webp',
//   //   bg: 'bg-quiz.webp',
//   // },
// ];

const Home = () => {
  return (
    <>
      {/* <Modal modal={modal} projects={projects} /> */}
      <Cursor />
      <div id="homePage">
        <Header />
        <Description />
      </div>
    </>
  );
};

export default Home;
