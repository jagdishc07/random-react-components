import { Variants, motion, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

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
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
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
  const container = useRef<HTMLDivElement>(null);
  const isInView = useInView(container, { margin: '0px 0px -500px 0px' });

  useEffect(() => {
    console.log('Element is in view: ', isInView);
  }, [isInView]);

  return (
    <div className=' w-full flex flex-col gap-10 p-5 md:p-10'>
      {/* <IntersectionObserverWrapper margin={-250}> */}
      <motion.section
        ref={container}
        variants={gridContainerVariants}
        initial='hidden'
        whileInView='show'
        // viewport={{ once: true }}
        className='grid grid-cols-2 md:grid-cols-3 p-2 md:p-10 gap-5 md:gap-10'
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
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
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
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        ></motion.div>
        <motion.div
          variants={gridSquareVariants}
          className='bg-foreground aspect-square rounded-lg flex-center gap-5 md:gap-10'
        ></motion.div>
      </motion.section>
      {/* </IntersectionObserverWrapper> */}
    </div>
  );
};

export default Section2;
