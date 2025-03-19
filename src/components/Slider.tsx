'use client';
import { useState } from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { SlEnergy } from 'react-icons/sl';

export default function ImageSlider(): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const divs = [
    {
      src: '/images/dumbbels.png',
    },
    {
      src: '/images/term.png',
    },
    {
      src: '/images/term.png',
    },
    {
      src: '/images/equip.png',
    },
    {
      src: '/images/term.png',
    },
    {
      src: '/images/equip.png',
    },
    {
      src: '/images/dumbbels.png',
    },
    {
      src: '/images/term.png',
    },
  ];
  const prevSlide = (): void => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== 0 ? prevIndex - 1 : prevIndex,
    );
  };

  const nextSlide = (): void => {
    console.log(currentIndex);
    setCurrentIndex((prevIndex) =>
      prevIndex < divs.length - 3 ? prevIndex + 1 : prevIndex,
    );
  };

  return (
    <div className="relative w-full mx-auto mt-4">
      <div className="relative flex gap-4 max-sm:flex-wrap justify-center mx-12">
        {divs.slice(currentIndex, currentIndex + 3).map((divel, idx) => (
          <div key={idx}>
            <div className="bg-[#212121] group hover:!text-black cursor-pointer hover:bg-[#d9fc57] rounded-lg p-6 h-[350px] flex flex-col justify-between">
              <div className="h-20">
                <Image src={divel.src} alt="gym" width={50} height={50}></Image>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-black text-white">
                  Muscles Building
                </h3>
                <p className="text-[#838285] group-hover:text-black text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Link
                href="#"
                className="text-white text-sm group-hover:text-black hover:text-[#80817f] flex justify-between"
              >
                <p className="flex gap-2 items-center">
                  Learn More <MdArrowOutward />
                </p>
                <SlEnergy
                  size={40}
                  className="text-[#d9fc57] group-hover:text-black"
                />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <button
        className="absolute left-0 top-1/2 rounded-xl text-white p-2 group"
        onClick={prevSlide}
      >
        <FaArrowCircleLeft
          className="group-hover:text-[#838285] text-white max-sm:hidden"
          size={30}
        />
      </button>
      <button
        className="right-0 top-1/2 rounded-xl absolute text-white p-2 group"
        onClick={nextSlide}
      >
        <FaArrowCircleRight
          className="group-hover:text-[#838285] text-white max-sm:hidden"
          size={30}
        />
      </button>
    </div>
  );
}
