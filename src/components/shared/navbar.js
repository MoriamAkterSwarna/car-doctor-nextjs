import Image from "next/image";

import logo from '@/assets/logo.svg'
import Link from "next/link";
const Navbar = () => {
  const navItems =(
    <>
    <li><Link href='/'>Home</Link></li>
      <li><Link href='/about'>About</Link></li>
      <li><Link href='/services'>Services</Link></li>
      <li><Link href='/blog'>Blog</Link></li>
      <li><Link href='/contact'>Blog</Link></li>
    </>
  )

  
  return (
    <>
      <div className="navbar bg-base-100 h-28">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
          {navItems}
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost normal-case text-xl">
          <Image src={logo} width={100} height={100} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {navItems}
        </ul>
      </div>
      <div className="navbar-end">
      <Link href='/login' className="btn btn-outline btn-error">Login</Link>

       
      </div>
    </div>
    </>
  );
};

export default Navbar;
