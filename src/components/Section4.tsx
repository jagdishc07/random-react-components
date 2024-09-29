import { motion, MotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

const fontSize = 30;
const padding = 15;
const height = fontSize + padding;


export default function Section4() {
  let [count, setCount] = useState(0);

  const increment = () => {
    if (count < 999) {
      setCount((prev) => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  }

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='flex w-1/3 justify-center gap-2'>
        <Button content={'+'} clickHandler={increment} />
        <input
          type='number'
          value={count}
          min={0}
          max={999}
          onChange={(e) => setCount(+e.target.value)}
          className='p-1 text-black rounded outline-none'
        />
        <Button content={'-'} clickHandler={decrement} />
      </div>
      <div className='flex w-1/3 items-end justify-center'>
        <Counter value={count} />
      </div>
    </div>
  );
}

function Counter({ value }: { value: number }) {
  return (
    <div
      style={{ fontSize }}
      className="flex space-x-3 overflow-hidden rounded bg-white px-2 leading-none text-gray-900"
    >
      <Digit place={100} value={value} />
      <Digit place={10} value={value} />
      <Digit place={1} value={value} />
    </div>
  );
}

function Digit({ place, value }: { place: number; value: number }) {
  let valueRoundedToPlace = Math.floor(value / place);
  let animatedValue = useSpring(valueRoundedToPlace);

  useEffect(() => {
    animatedValue.set(valueRoundedToPlace);
  }, [animatedValue, valueRoundedToPlace]);

  return (
    <div style={{ height }} className="relative w-[1ch] tabular-nums">
      {[...Array(10).keys()].map((i) => (
        <Number key={i} mv={animatedValue} number={i} />
      ))}
    </div>
  );
}

function Number({ mv, number }: { mv: MotionValue; number: number }) {
  let y = useTransform(mv, (latest) => {
    let placeValue = latest % 10;
    let offset = (10 + number - placeValue) % 10;

    let memo = offset * height;

    if (offset > 5) {
      memo -= 10 * height;
    }

    return memo;
  });

  return (
    <motion.span
      style={{ y }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {number}
    </motion.span>
  );
}

function Button({ content, clickHandler }: { content: string, clickHandler: () => void }) {
  return (
    <button onClick={clickHandler} className="bg-white w-8 h-8 rounded text-black">
      {content}
    </button>
  )
}
