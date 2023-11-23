import Link from "next/link";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

    return ( 
        <nav className="bg-hotpink py-4 px-[5%] w-full fixed flex items-center justify-between z-20">
            <Link href="/" className="w-[80px]">
                <Image src="/img/logo.png" width={80} height={80} alt="logo" className="w-full"/>
            </Link>

            <section className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-[68px] md:top-0 left-0 md:relative md:flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8 text-[16px] text-litedark font-bold bg-orange md:bg-transparent pl-[5%] md:pl-auto py-10 md:py-0 w-full md:w-auto`}>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
                    <a href="">Destinations</a>
                    <a href="">Hotels</a>
                    <a href="">Flights</a>
                    <a href="">Bookings</a>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between gap-4 lg:gap-8">
                    <a href="">Login</a>
                    <a href="" className="px-4 py-1 border border-litedark rounded-[4px]">Sign up</a>

                    <select name="" id="" className="bg-transparent border-none outline-none">
                        <option value="">EN</option>
                        <option value="">AR</option>
                        <option value="">SP</option>
                    </select>
                </div>
            </section>

            {isMenuOpen ? 
            <IoClose className="block md:hidden text-4xl text-orange font-bold" onClick={toggleMenu}/>
            :
            <IoMenu className="block md:hidden text-4xl text-orange font-bold" onClick={toggleMenu}/>
            }
        </nav>
     );
}
 
export default Header;