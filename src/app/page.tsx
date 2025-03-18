import { IoMdSearch } from 'react-icons/io';
import { BiMessageAltDetail } from 'react-icons/bi';
import { RiMenuLine } from 'react-icons/ri';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center text-[#838285] min-h-screen">
      <header className="overlay justify-center bg-no-repeat bg-cover flex flex-col items-center bg-center w-full h-[600px] bg-[url('/images/background1.jpeg')]">
        <nav className=" text-[#838285] p-4 w-full">
          <div className="container w-full mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">GYMTEAM</h1>
            <ul
              className={`flex justify-between md:space-x-6 top-16 left-0 w-full md:w-auto p-4 md:p-0`}
            >
              <li>
                <a href="#" className="block py-2 md:py-0 hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0 hover:text-gray-300">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0 hover:text-gray-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="block py-2 md:py-0 hover:text-gray-300">
                  Contact
                </a>
              </li>
            </ul>
            <div className={`flex gap-4`}>
              <span>
                <IoMdSearch size={20} />
              </span>
              <span>
                <BiMessageAltDetail size={20} />
              </span>
              <span>
                <RiMenuLine size={20} />
              </span>
            </div>
          </div>
        </nav>
        <div className="flex h-full justify-center items-center">
          <div className="w-96 mx-auto text-center justify-center flex flex-col items-center">
            <h1 className="font-text mx-auto font-extrabold  text-white text-5xl">
              Work with professionals
            </h1>
            <p className="mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              enim in magna. Interdum et malesuada fames ac
            </p>
            <div className="flex items-center justify-center gap-6">
              <button className="bg-[#d9fa58] m-1 hover:bg-[#c5e643] text-sm font-bold text-black py-2 px-4 rounded-full">
                START NOW
              </button>
              <Link
                href="#"
                className="text-white hover:text-[#80817f] flex gap-2 justify-center items-center"
              >
                Learn More
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main className="flex justify-center items-center flex-col gap-5 w-full">
        <Image
          src="/images/divide.png"
          alt="divide"
          width="1200"
          height="20"
          style={{ width: '100%' }}
        ></Image>
        <div className="font-text font-extrabold text-4xl text-white">
          <h1>WHY CHOOSE US</h1>
        </div>
      </main>
    </div>
  );
}
