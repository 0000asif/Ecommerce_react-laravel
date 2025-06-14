import { CiDeliveryTruck, CiMoneyBill } from 'react-icons/ci';
import { MdPayment } from 'react-icons/md';
const Footer = () => {
  return (
    <footer className="bg-dark_blue pt-11">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pb-16 border-b border-slate-800">
          <div className="">
            <img src="/logo-white.png" alt="logo" className="" />
            <p className="text-white font-dm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold py-3">Categories</h2>
            <ul>
              <li className="py-1">
                <a href="/kids">Kids</a>
              </li>
              <li className="py-1">
                <a href="/mens">Mens</a>
              </li>
              <li className="py-1">
                <a href="/women">Woman</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold py-3">Quick Links</h2>
            <ul>
              <li className="py-1">
                <a href="/login">Login</a>
              </li>
              <li className="py-1">
                <a href="/register">Register</a>
              </li>
            </ul>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold py-3">Get in Touch</h2>
            <ul>
              <li className="py-1">
                <a href="tel:+8801758040074">+88 01758 040074</a>
              </li>
              <li className="py-1">
                <a href="mailto:asasif8899@gmail.com">asasif8899@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-12 border-b border-slate-800">
          <div className="text-white flex gap-3 items-center">
            <CiDeliveryTruck />
            <p className=" font-dm">Free Delivery</p>
          </div>

          <div className="text-white flex gap-3 items-center">
            <CiMoneyBill />
            <p className=" font-dm">Money Back Gurentee</p>
          </div>

          <div className="text-white flex gap-3 items-center">
            <MdPayment />
            <p className="font-dm">Secure Payment</p>
          </div>
        </div>
        <div className="grid text-white py-8 text-center">
          <p>
            &copy; {new Date().getFullYear()}{' '}
            <a
              href="www.facebook.com/mdasifraj.moyna"
              target="_blank"
              className="hover:text-blue duration-300"
            >
              Asif Hossain
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
