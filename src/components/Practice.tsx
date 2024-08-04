import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Practice() {
  let [count, setCount] = useState(0);
  return (
    <div className='h-screen bg-gray-700 flex items-center'>
      <div className='w-1/2 flex justify-center'>
        <div className='flex-col text-center'>
          <h1 className=''>Count: {count}</h1>
          <input
            type='number'
            value={count}
            min={0}
            onChange={(e) => setCount(+e.target.value)}
            className='w-20 p-1 text-black'
          />
        </div>
      </div>
      <div className='w-1/2 flex flex-center'>
        <Counter value={count} />
      </div>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  let animatedValue = useSpring(value);

  useEffect(() => {
    animatedValue.set(value);
  }, [value]);
  return (
    <div className='h-6 w-6 ring-2 ring-red-500 relative'>
      {[...Array(10).keys()].map((i) => (
        <Number key={i} number={i} mv={animatedValue} />
      ))}
    </div>
  );
}

function Number({ number, mv }: { number: number; mv: MotionValue }) {
  let y = useTransform(mv, (latest) => {
    let height = 24;
    let offset = number - latest;
    return height * offset;
  });
  return (
    <motion.span style={{ y }} className='flex justify-center absolute inset-0'>
      {number}
    </motion.span>
  );
}
