'use client';

import dynamic from 'next/dynamic';


const Slider = dynamic(() => import('../../components/Slider'), {
  ssr: false,
});

export default function Page() {
  return (
    <>
      <Slider />
      
    </>
  );
}