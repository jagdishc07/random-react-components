import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Section4() {
  let [count, setCount] = useState(0);

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex w-1/2 justify-center'>
        <div className='flex-col text-center'>
          {/* <p>Count: {count}</p> */}
          <div className='mt-4'>
            <input
              type='number'
              value={count}
              min={0}
              max={999}
              onChange={(e) => setCount(+e.target.value)}
              className='w-20 p-1  text-black'
            />
          </div>
        </div>
      </div>
      <div className='flex w-1/2 items-end justify-center'>
        <Counter value={count} />
      </div>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  let animatedValue = useSpring(value);

  useEffect(() => {
    animatedValue.set(value);
  }, [animatedValue, value]);
  return (
    <div className='flex h-6 ring-2 ring-red-500 overflow-hidden'>
      <div className='relative w-6'>
        {[...Array(10).keys()].map((i) => (
          <Number place={100} mv={animatedValue} key={i} number={i} />
        ))}
      </div>
      <div className='relative w-6'>
        {[...Array(10).keys()].map((i) => (
          <Number place={10} mv={animatedValue} key={i} number={i} />
        ))}
      </div>
      <div className='relative w-6'>
        {[...Array(10).keys()].map((i) => (
          <Number place={1} mv={animatedValue} key={i} number={i} />
        ))}
      </div>
    </div>
  );
}

function Number({ place, mv, number }: { place: number; mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let height = 24;
    let placeValue = (latest / place) % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 4) {
      memo -= 10 * height;
    }
    return memo;
  });
  return (
    <motion.span style={{ y }} className='absolute inset-0 flex justify-center'>
      {number}
    </motion.span>
  );
}
