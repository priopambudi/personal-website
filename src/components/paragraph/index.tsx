import { useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: any;
  progress: any;
  range: any;
}

const Paragraph = (props: any) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.9', 'start 0.4'],
  });
  const words = props.children.split(' ');

  return (
    <h3 ref={container} className="paragraph p-0">
      {words.map((word: string, indx: number) => {
        const start = indx / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={indx} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h3>
  );
};

const Word = ({ children, progress, range }: Props) => {
  const amount = range[1] - range[0];
  const step = amount / children.length;
  return (
    <span className="word">
      {children.split('').map((char: string, indx: number) => {
        const start = range[0] + indx * step;
        const end = range[0] + (indx + 1) * step;
        return (
          <Char key={`c_${indx}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: Props) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span>
      <span className="shadow">{children}</span>
      <motion.span style={{ opacity: opacity }}>{children}</motion.span>
    </span>
  );
};

export default Paragraph;
