import ArrowRight from '@/assets/arrow-right.svg';
import startImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';

export const CallToAction = () => {
  return (
    <section className='bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip'>
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title mt-5">Sign up for free today</h2>
          <p className="section-description mt-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, consequatur! Iure, aut perspiciatis. Voluptatibus similique corrupti quia aut, adipisci aperiam.
          </p>
          <Image
            src={startImage}
            alt='Start Image'
            width={360}
            className='absolute -left-[350px] -top-[137px]'
          />
          <Image
            src={springImage}
            alt='Start Image'
            width={360}
            className='absolute -right-[331px] -top-[19px]'
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
