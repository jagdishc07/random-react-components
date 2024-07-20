import { motion } from 'framer-motion';
import { useState } from 'react';

const Section1 = (): JSX.Element => {
  const [showC, setShowC] = useState(false);
  return (
    <div className='h-screen w-screen flex-center'>
      <motion.button
        className=' w-40 h-10 rounded-lg bg-darklight text-copy text-lg font-bold'
        transition={{
          bounceDamping: 10,
          bounceStiffness: 600,
          ease: 'circInOut'
        }}
        whileTap={{ scale: 1 }}
        whileHover={{ scale: 1.1, backgroundColor: '#8264b4', color: '#fff' }}
        onClick={() => setShowC(true)}
      >
        <motion.span className='relative ml-1'>
          lick me!
          {showC && (
            <motion.span
              className='absolute left-[-18.5%]'
              transition={{
                y: {
                  duration: 3,
                  ease: 'easeInOut',
                  bounceDamping: 10,
                  bounceStiffness: 600
                },
                x: {
                  duration: 4,
                  ease: 'easeIn',
                  bounceDamping: 10,
                  bounceStiffness: 600
                },
                rotate: {
                  duration: 4.2,
                  ease: 'easeInOut'
                }
              }}
              animate={{
                y: [
                  '-250%',
                  '15%',
                  '-150%',
                  '10%',
                  '-135%',
                  '5%',
                  '-130%',
                  '0%',
                  '-50%',
                  '0%'
                ],
                x: ['-100%', '-100%', '-150%', '-150%', '-100%', '-150%', '0'],
                rotate: [45, 0, -90, -180, -90, 180, 280, 280, 360]
              }}
            >
              C
            </motion.span>
          )}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default Section1;
