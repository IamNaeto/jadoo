import Image from "next/image";
import Link from "next/link";
import { IoIosPlay } from "react-icons/io";

const Hero = () => {
    return ( 
        <main className="relative w-full flex flex-col md:flex-row items-center justify-between py-[80px] md:py-[100px] px-[5%] bg bg-right-top bg-no-repeat bg-contain">
            <section className="w-full md:w-[50%] flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
                <p className="text-[14px] text-green font-bold special-font" data-aos="fade-down">BEST DESTINATIONS AROUND THE WORLD</p>
                <h1 className="text-4xl md:text-5xl xl:text-6xl text-blue font-extrabold w-full lg:w-[80%] text-center md:text-left" data-aos="fade-down">Travel,  
                <span className="relative w-full px-1">
                    <span className="relative z-10 w-full">enjoy</span>
                    <Image src="/img/line-decore.png" width={100} height={100} alt="line-decore" className="absolute bottom-2 right-0 w-full" loading="eager" />
                    </span> 
                     and live a new and fulfill life</h1>
                <p className="text-[14px] text-litegrey font-bold w-full lg:w-[80%] xl:w-[65%] text-center md:text-left special-font" data-aos="fade-up">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the</p>

                <div className="flex items-center gap-4 special-font" data-aos="fade-up">
                <a href="#category" className="py-3 px-5 rounded-md bg-orange text-white text-[14px] font-bold flex items-center">Find Out More</a>
                <Link href="/" className="py-3 px-5 rounded-md text-litegrey text-[14px] font-bold flex items-center gap-2 hover:shadow-md hover:bg-hotpink transition delay-200" ><IoIosPlay className="text-2xl text-white p-[7px] rounded-full bg-green"/> Play Demo</Link>
                </div>
            </section>

            <section className="relative mt-5 md:mt-0">
                <Image src="/img/hero-image.png" width={500} height={500} alt="heroimg" className="dangling-picture" loading="eager" />
            </section>
        </main>
     );
}
 
export default Hero;