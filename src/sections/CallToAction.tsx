"use client";

import ArrowRight from '@/assets/arrow-right.svg';
import startImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export const CallToAction = () => {

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150])


  return (
    <section ref={sectionRef}  className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, consequatur! Iure, aut perspiciatis. Voluptatibus similique corrupti quia aut, adipisci aperiam.
          </p>
          <motion.img
            src={startImage.src}
            alt='Start Image'
            width={360}
            className='absolute -left-[350px] -top-[137px]'
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={springImage.src}
            alt='Start Image'
            width={360}
            className='absolute -right-[331px] -top-[19px]'
            style={{
              translateY: translateY,
            }}
          />
          <div className="flex gap-2 justify-center mt-10">
            <button className="btn btn-primary">Get for free</button>
            <button className="btn btn-transparent">
              <span>Learn more</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
