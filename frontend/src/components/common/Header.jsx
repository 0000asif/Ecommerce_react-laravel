import { HiMenu, HiX } from 'react-icons/hi';
import { MdOutlineShoppingBag } from 'react-icons/md';
import { CiUser } from 'react-icons/ci';
import { useState } from 'react';

const Header = () => {
  const navLinkClass =
    'font-semibold hover:text-soft_blue transition-all duration-300 ease-in-out';
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50">
      <div className="bg-black text-center p-2">
        <span className="text-white font-dm">Your Fashion Partner</span>
      </div>

      {/* <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <a href="/">
            <img src="/logo.png" alt="logo" />
          </a>
          <div className="">
            <ul className="flex space-x-4">
              <li className={navLinkClass}>
                <a href="/">Home</a>
              </li>
              <li className={navLinkClass}>
                <a href="/man">Man</a>
              </li>
              <li className={navLinkClass}>
                <a href="/woman">Women</a>
              </li>
              <li className={navLinkClass}>
                <a href="/kids">Kids</a>
              </li>
              <li className={navLinkClass}>
                <a href="#">
                  <CiUser />
                </a>
              </li>
              <li className={navLinkClass}>
                <a href="#">
                  <MdOutlineShoppingBag />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className=" bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="/">
            <img src="/logo.png" alt="logo" className="h-8" />
          </a>

          {/* Hamburger Icon (mobile) */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX size={24} /> : <HiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 items-center">
            <li className={navLinkClass}>
              <a href="/">Home</a>
            </li>
            <li className={navLinkClass}>
              <a href="/man">Man</a>
            </li>
            <li className={navLinkClass}>
              <a href="/woman">Women</a>
            </li>
            <li className={navLinkClass}>
              <a href="/kids">Kids</a>
            </li>
            <li className={navLinkClass}>
              <a href="#">
                <CiUser size={20} />
              </a>
            </li>
            <li className={navLinkClass}>
              <a href="#">
                <MdOutlineShoppingBag size={20} />
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white px-4 pb-4 shadow">
            <ul className="space-y-3">
              <li className={navLinkClass}>
                <a href="/">Home</a>
              </li>
              <li className={navLinkClass}>
                <a href="/man">Man</a>
              </li>
              <li className={navLinkClass}>
                <a href="/woman">Women</a>
              </li>
              <li className={navLinkClass}>
                <a href="/kids">Kids</a>
              </li>
              <li className={navLinkClass}>
                <a href="#">
                  <CiUser size={20} />
                </a>
              </li>
              <li className={navLinkClass}>
                <a href="#">
                  <MdOutlineShoppingBag size={20} />
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
