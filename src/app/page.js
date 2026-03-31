'use client';

import dynamic from 'next/dynamic';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';


const Slider = dynamic(() => import('../../components/Slider'), {
  ssr: false,
});

export default function Page() {
  return (
    <>
    <Navbar/>
      <Slider />
      <Footer/>
    </>
  );
}