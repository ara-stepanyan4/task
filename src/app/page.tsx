import { IoMdSearch, IoMdTime } from 'react-icons/io';
import { BiMessageAltDetail } from 'react-icons/bi';
import { RiMenuLine } from 'react-icons/ri';
import Link from 'next/link';
import { MdArrowOutward } from 'react-icons/md';
import Image from 'next/image';
import Slider from '@/components/Slider';
import { FaPhone } from 'react-icons/fa';
import { TfiInstagram } from 'react-icons/tfi';
import { CiFacebook, CiLocationOn, CiYoutube } from 'react-icons/ci';

export default function Navbar() {
  return (
    <div className="flex flex-col items-center text-[#838285] min-h-screen max-w-full">
      <header className="overlay justify-center bg-no-repeat bg-cover flex flex-col items-center bg-center w-full h-[600px] bg-[url('/images/background1.jpeg')]">
        <nav className=" text-[#f2f2f2] p-4 w-full">
          <div className="container w-full mx-auto flex justify-around items-center">
            <h1 className="text-xl font-bold">GYMTEAM</h1>
            <ul
              className={`flex justify-between max-sm:hidden md:space-x-6 top-16 left-0 w-full md:w-auto p-4 md:p-0`}
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
            <h1 className="font-text font-extrabold  text-white text-6xl max-sm:text-xl">
              WORK WITH PROFESSIONALS
            </h1>
            <p className="mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in
              enim in magna.
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
        <div className="font-text w-[1200px] max-w-full flex flex-col gap-10 justify-center items-center font-extrabold text-white">
          <h1 className="text-4xl">WHY CHOOSE US</h1>
          <div className="flex flex-wrap">
            <Slider />
          </div>
          <h1 className="text-4xl">ABOUT OUR GYM</h1>
          <Image
            src="/images/gym.png"
            alt="gym"
            width="1100"
            height="600"
            className="rounded-lg max-w-full sm:w-[90%] max-sm:w-[80%] m-2"
            style={{ height: '400px' }}
          ></Image>
          <p className="text-gray-200 p-10 w-[90%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </main>
      <footer className="opacity-[0.7] bg-[#212121] h-60 flex max-sm:flex-col m-0 p-12 box-border w-[80%] rounded-xl">
        <div className="h-full flex flex-col sm:justify-between max-sm:justify-center max-sm:items-center">
          <h1 className="flex text-white text-xl gap-1 max-sm:text-lg">
            It’s Gym <span className="text-[#d9fa58]">Time</span>
          </h1>
          <div className="text-white flex gap-5 cursor-pointer justify-center items-center">
            <span>
              <TfiInstagram size={30} />
            </span>
            <span>
              <CiFacebook size={40} />
            </span>
            <span>
              <CiYoutube size={40} />
            </span>
          </div>
        </div>
        <div className="text-center text-white w-[70%] max-sm:w-full max-sm:text-xs flex flex-col gap-5">
          <h2>CONTACT US</h2>
          <p className="flex text-[#838285] cursor-pointer justify-center hover:underline">
            <span>
              <CiLocationOn />
            </span>
            8558 Green Rd., LA
          </p>
          <p className="flex justify-center cursor-pointer text-[#838285] hover:underline">
            <span>
              <FaPhone />
            </span>
            +1 (603) 555-0123
          </p>

          <p className="flex justify-center cursor-pointer text-[#838285] hover:underline">
            <span>
              <IoMdTime />
            </span>
            Mon-Sat: 9:00 AM – 23:00 PM
          </p>
        </div>
      </footer>
    </div>
  );
}
