import { Variants, motion } from 'framer-motion';
import { useState } from 'react';

const gridContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const gridSquareVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1
    }
  }
};

const box3Variants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 1,
      ease: 'circIn'
    }
  }
};

const Section2 = (): JSX.Element => {
  const [showC, setShowC] = useState(false);

  return (
    <div className='w-full flex flex-col gap-10 p-5 md:px-10'>
      <motion.section
        variants={gridContainerVariants}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true }}
        className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 md:p-10 gap-5 md:gap-10'
      >
        {/* Box 1 */}
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        >
          <motion.div
            className='w-16 max-h-[25%] max-w-[25%] h-16 bg-copylight rounded-lg'
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          />
          <motion.div
            className='w-16 h-16 max-h-[25%] max-w-[25%]  bg-copylight rounded-full'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }}
          />
        </motion.div>

        {/* Box 2 */}
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center'
        >
          <motion.div
            className='w-1/3 h-1/3 shadow-md'
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 90, 90, 0],
              borderRadius: ['10%', '10%', '50%', '10%'],
              backgroundColor: ['#d9d9d9', '#8264b4', '#8264b4', '#d9d9d9']
            }}
            transition={{
              duration: 5,
              ease: 'easeInOut',
              repeat: Infinity,
              repeatDelay: 1
            }}
          />
        </motion.div>

        {/* Box 3 */}
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-1'
        >
          <motion.div
            transition={{
              staggerChildren: 0.25
            }}
            initial='initial'
            animate='animate'
            className='flex-center gap-1'
          >
            <motion.div variants={box3Variants} className='h-12 w-2 bg-copy' />
            <motion.div variants={box3Variants} className='h-12 w-2 bg-copy' />
            <motion.div variants={box3Variants} className='h-12 w-2 bg-copy' />
            <motion.div variants={box3Variants} className='h-12 w-2 bg-copy' />
            <motion.div variants={box3Variants} className='h-12 w-2 bg-copy' />
          </motion.div>
        </motion.div>

        {/* Box 4 */}
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        >
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
                    y: ['-250%', '15%', '-150%', '10%', '-135%', '5%', '-130%', '0%', '-50%', '0%'],
                    x: ['-100%', '-100%', '-150%', '-150%', '-100%', '-150%', '0'],
                    rotate: [45, 0, -90, -180, -90, 180, 280, 280, 360]
                  }}
                >
                  C
                </motion.span>
              )}
            </motion.span>
          </motion.button>
        </motion.div>
        {/* <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        ></motion.div> */}
      </motion.section>
    </div>
  );
};

export default Section2;
